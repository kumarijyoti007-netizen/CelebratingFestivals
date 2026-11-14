export interface LocalizedText {
  en: string;
  hi: string;
  native?: string;
}

export type VisualCategory = 'lights' | 'harvest' | 'customs' | 'colors';

export type ReadingLanguageMode = 'bilingual' | 'en' | 'hi' | 'native';

export interface HistoricalMilestone {
  era: LocalizedText;
  detail: LocalizedText;
}

export interface RegionalRitual {
  title: LocalizedText;
  description: LocalizedText;
}

export interface CelebratoryFood {
  name: LocalizedText;
  course: string;
  significance: LocalizedText;
  keyIngredients: LocalizedText;
}

export interface RegionalVariation {
  regionName: LocalizedText;
  localFestivalTitle: LocalizedText;
  customsSummary: LocalizedText;
  rituals: RegionalRitual[];
  celebratoryFoods: CelebratoryFood[];
}

export interface FestivalGlossaryItem {
  term: string;
  nativeScript: string;
  meaning: LocalizedText;
}

export interface FestivalGreeting {
  en: string;
  hi: string;
  native?: string;
  transliteration: string;
  meaningEn: string;
  meaningHi: string;
  meaningNative?: string;
}

export interface FestivalMonograph {
  id: string;
  motherTongue: string;
  motherTongueNativeName: string;
  canonicalName: LocalizedText;
  tagline: LocalizedText;
  timingAndCalendar: LocalizedText;
  duration: LocalizedText;
  primaryRegionsSummary: LocalizedText;
  essence: LocalizedText;
  visualCategory: VisualCategory;
  overview: LocalizedText;
  historicalSignificance: {
    narrative: LocalizedText;
    pullQuote: LocalizedText;
    milestones: HistoricalMilestone[];
  };
  regionalVariations: RegionalVariation[];
  greetingsAndTerms: {
    traditionalGreeting: FestivalGreeting;
    glossary: FestivalGlossaryItem[];
  };
}
