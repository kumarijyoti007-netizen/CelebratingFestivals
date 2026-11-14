import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';
import type { FestivalMonograph } from '../src/types/festival.ts';

const festivalCache = new Map<string, FestivalMonograph>();

function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function createLocalizedTextSchema(includeNative: boolean) {
  const properties: Record<string, { type: Type; description: string }> = {
    en: {
      type: Type.STRING,
      description: 'Text written in clear, refined editorial English.',
    },
    hi: {
      type: Type.STRING,
      description: 'Text written in natural, culturally accurate Hindi (Devanagari script).',
    },
  };
  const required = ['en', 'hi'];

  if (includeNative) {
    properties.native = {
      type: Type.STRING,
      description:
        'Text written in the requested mother tongue using its authentic native script.',
    };
    required.push('native');
  }

  return {
    type: Type.OBJECT,
    properties,
    required,
  };
}

function buildFestivalSchema(includeNative: boolean) {
  const localized = createLocalizedTextSchema(includeNative);

  return {
    type: Type.OBJECT,
    properties: {
      motherTongueNativeName: {
        type: Type.STRING,
        description:
          'The native script name of the requested mother tongue (e.g. हिन्दी, বাংলা, தமிழ், తెలుగు, Español).',
      },
      canonicalName: localized,
      tagline: localized,
      timingAndCalendar: localized,
      duration: localized,
      primaryRegionsSummary: localized,
      essence: localized,
      visualCategory: {
        type: Type.STRING,
        description:
          'Must be strictly one of: "lights", "harvest", "customs", "colors". Pick the visual mood that best matches the festival.',
      },
      overview: localized,
      historicalSignificance: {
        type: Type.OBJECT,
        properties: {
          narrative: localized,
          pullQuote: localized,
          milestones: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                era: localized,
                detail: localized,
              },
              required: ['era', 'detail'],
            },
          },
        },
        required: ['narrative', 'pullQuote', 'milestones'],
      },
      regionalVariations: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            regionName: localized,
            localFestivalTitle: localized,
            customsSummary: localized,
            rituals: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: localized,
                  description: localized,
                },
                required: ['title', 'description'],
              },
            },
            celebratoryFoods: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: localized,
                  course: {
                    type: Type.STRING,
                    description:
                      'Short course label such as Sweet, Savory Feast, Sacred Offering, or Festive Beverage.',
                  },
                  significance: localized,
                  keyIngredients: localized,
                },
                required: ['name', 'course', 'significance', 'keyIngredients'],
              },
            },
          },
          required: [
            'regionName',
            'localFestivalTitle',
            'customsSummary',
            'rituals',
            'celebratoryFoods',
          ],
        },
      },
      greetingsAndTerms: {
        type: Type.OBJECT,
        properties: {
          traditionalGreeting: {
            type: Type.OBJECT,
            properties: {
              en: { type: Type.STRING },
              hi: { type: Type.STRING },
              ...(includeNative ? { native: { type: Type.STRING } } : {}),
              transliteration: { type: Type.STRING },
              meaningEn: { type: Type.STRING },
              meaningHi: { type: Type.STRING },
              ...(includeNative ? { meaningNative: { type: Type.STRING } } : {}),
            },
            required: includeNative
              ? [
                  'en',
                  'hi',
                  'native',
                  'transliteration',
                  'meaningEn',
                  'meaningHi',
                  'meaningNative',
                ]
              : ['en', 'hi', 'transliteration', 'meaningEn', 'meaningHi'],
          },
          glossary: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                term: { type: Type.STRING },
                nativeScript: { type: Type.STRING },
                meaning: localized,
              },
              required: ['term', 'nativeScript', 'meaning'],
            },
          },
        },
        required: ['traditionalGreeting', 'glossary'],
      },
    },
    required: [
      'motherTongueNativeName',
      'canonicalName',
      'tagline',
      'timingAndCalendar',
      'duration',
      'primaryRegionsSummary',
      'essence',
      'visualCategory',
      'overview',
      'historicalSignificance',
      'regionalVariations',
      'greetingsAndTerms',
    ],
  };
}

export interface FestivalServiceResult {
  status: number;
  body: FestivalMonograph | { error: string };
}

export async function generateFestivalMonograph(
  rawFestivalInput: unknown,
  rawMotherTongueInput: unknown
): Promise<FestivalServiceResult> {
  try {
    const rawFestival = typeof rawFestivalInput === 'string' ? rawFestivalInput.trim() : '';
    const rawMotherTongue =
      typeof rawMotherTongueInput === 'string' && rawMotherTongueInput.trim()
        ? rawMotherTongueInput.trim()
        : 'Hindi';

    if (!rawFestival) {
      return {
        status: 400,
        body: { error: 'Please enter a festival name to explore.' },
      };
    }

    if (rawFestival.length > 120) {
      return {
        status: 400,
        body: { error: 'Festival name is too long. Please keep it concise.' },
      };
    }

    const normalizedLanguage = rawMotherTongue.slice(0, 60);
    const isHindiOrEnglish =
      normalizedLanguage.toLowerCase() === 'hindi' ||
      normalizedLanguage.toLowerCase() === 'english' ||
      normalizedLanguage === 'हिन्दी';
    const includeNative = !isHindiOrEnglish;

    const cacheKey = `${rawFestival.toLowerCase()}::${normalizedLanguage.toLowerCase()}`;
    const cached = festivalCache.get(cacheKey);
    if (cached) {
      return { status: 200, body: cached };
    }

    const ai = getAiClient();
    if (!ai) {
      return {
        status: 500,
        body: {
          error:
            'GEMINI_API_KEY is not configured on the server. Add it to your environment variables.',
        },
      };
    }

    const languageInstruction = includeNative
      ? `Provide every field in THREE languages simultaneously:
1. "en": Natural, evocative editorial English.
2. "hi": Natural, literary and accessible Hindi in Devanagari script (हिन्दी).
3. "native": Natural, authentic ${normalizedLanguage} written in its native script.`
      : `Provide every field in BOTH languages simultaneously:
1. "en": Natural, evocative editorial English.
2. "hi": Natural, literary and accessible Hindi in Devanagari script (हिन्दी).`;

    const prompt = `Create a deeply researched, culturally authentic editorial monograph for the festival: "${rawFestival}".

${languageInstruction}

Requirements for content depth and accuracy:
- Historical Significance: Write a rich 2-paragraph narrative explaining mythological, astronomical, agricultural, or historical roots and how it evolved over centuries. Include 1 traditional proverb or poetic pull quote, and 3 chronological milestones.
- Regional Variations (provide 3 to 4 genuinely distinct regions/states/communities where this festival is observed differently):
  - For EACH region, specify its local festival name, a detailed customs summary, 3 concrete local rituals (covering morning-to-evening traditions, attire, or folk art), AND 3 authentic celebratory food recommendations specific to that region.
  - For each celebratory food, include its dish name, course ("Sweet", "Savory Feast", "Sacred Offering", or "Festive Beverage"), cultural significance on this festival day, and key ingredients.
- Greetings & Lexicon: Include the authentic traditional festive greeting with phonetic transliteration and 3 important cultural terms associated with the festival.
- Set visualCategory to strictly one of "lights", "harvest", "customs", or "colors" based on what best represents this festival.`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        systemInstruction:
          'You are a distinguished cultural anthropologist, culinary historian, and multilingual museum curator. Ensure all regional customs, historical facts, and traditional dishes are accurate, respectful, and written gracefully in every requested script.',
        responseMimeType: 'application/json',
        responseSchema: buildFestivalSchema(includeNative),
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW,
        },
      },
    });

    const jsonText = (response.text ?? '').trim();
    if (!jsonText) {
      return {
        status: 502,
        body: {
          error: 'No cultural monograph was returned for this query. Please try again.',
        },
      };
    }

    const parsed = JSON.parse(jsonText);

    const validCategories = ['lights', 'harvest', 'customs', 'colors'] as const;
    const visualCategory = validCategories.includes(parsed.visualCategory)
      ? parsed.visualCategory
      : 'customs';

    const monograph: FestivalMonograph = {
      id: `${rawFestival.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
      motherTongue: includeNative ? normalizedLanguage : 'Hindi',
      motherTongueNativeName: includeNative
        ? parsed.motherTongueNativeName || normalizedLanguage
        : 'हिन्दी',
      canonicalName: parsed.canonicalName,
      tagline: parsed.tagline,
      timingAndCalendar: parsed.timingAndCalendar,
      duration: parsed.duration,
      primaryRegionsSummary: parsed.primaryRegionsSummary,
      essence: parsed.essence,
      visualCategory,
      overview: parsed.overview,
      historicalSignificance: parsed.historicalSignificance,
      regionalVariations: parsed.regionalVariations ?? [],
      greetingsAndTerms: parsed.greetingsAndTerms,
    };

    festivalCache.set(cacheKey, monograph);
    return { status: 200, body: monograph };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unexpected server error';
    console.error('Festival generation error:', message);

    if (message.includes('PERMISSION_DENIED') || message.includes('API_KEY_INVALID')) {
      return {
        status: 403,
        body: {
          error: 'Gemini API key appears invalid or missing. Please verify GEMINI_API_KEY.',
        },
      };
    }
    if (message.includes('RESOURCE_EXHAUSTED') || message.includes('429')) {
      return {
        status: 429,
        body: {
          error: 'Rate limit reached while generating the festival guide. Please wait a moment and try again.',
        },
      };
    }

    return {
      status: 500,
      body: {
        error:
          'Unable to compile this festival monograph right now. Please try another query or retry shortly.',
      },
    };
  }
}
