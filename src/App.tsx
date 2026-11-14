import { useState, useRef } from 'react';
import { Search, Loader2, AlertCircle, BookMarked } from 'lucide-react';
import type { FestivalMonograph, ReadingLanguageMode } from './types/festival';
import { CURATED_FESTIVALS } from './data/curatedFestivals';
import { FESTIVAL_PLATES } from './data/festivalImages';
import { MOTHER_TONGUE_OPTIONS, SUGGESTED_FESTIVALS } from './data/languages';
import { FestivalMonographView } from './components/FestivalMonographView';

const FEATURED_GALLERY = [
  {
    key: 'diwali',
    title: 'Diwali · दीपावली',
    subtitle: 'Varanasi, Bengal, Tamil Nadu & Western India',
    plate: FESTIVAL_PLATES.lights,
  },
  {
    key: 'chhath puja',
    title: 'Chhath Puja · छठ पूजा',
    subtitle: 'Magadh, Mithila & Purvanchal Riverfronts',
    plate: FESTIVAL_PLATES.customs,
  },
  {
    key: 'pongal',
    title: 'Pongal & Sankranti · पोंगल',
    subtitle: 'Tamil Courtyards, Gujarat Rooftops & Punjab',
    plate: FESTIVAL_PLATES.harvest,
  },
];

export default function App() {
  const [festivalInput, setFestivalInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [customLanguage, setCustomLanguage] = useState('');
  const [isCustomLanguageMode, setIsCustomLanguageMode] = useState(false);

  const [activeMonograph, setActiveMonograph] = useState<FestivalMonograph>(
    CURATED_FESTIVALS.diwali
  );
  const [readingMode, setReadingMode] = useState<ReadingLanguageMode>('bilingual');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [heroImageError, setHeroImageError] = useState(false);
  const [galleryErrors, setGalleryErrors] = useState<Record<string, boolean>>({});

  const searchInputRef = useRef<HTMLInputElement>(null);
  const monographSectionRef = useRef<HTMLDivElement>(null);
  const clientCacheRef = useRef<Map<string, FestivalMonograph>>(new Map());

  const resolvedMotherTongue = isCustomLanguageMode
    ? customLanguage.trim() || 'Hindi'
    : selectedLanguage;

  const focusSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 250);
  };

  const loadFestival = async (
    festivalQuery: string,
    motherTongue: string,
    scrollToResult = true
  ) => {
    const trimmedFestival = festivalQuery.trim();
    if (!trimmedFestival) {
      setErrorMessage('Please enter the name of your favourite festival.');
      searchInputRef.current?.focus();
      return;
    }

    const cleanLang = motherTongue.trim() || 'Hindi';
    const normalizedFestivalKey = trimmedFestival.toLowerCase();
    const isHindi = cleanLang.toLowerCase() === 'hindi' || cleanLang === 'हिन्दी';

    // Check instant curated data if Hindi/English is selected
    if (isHindi && CURATED_FESTIVALS[normalizedFestivalKey]) {
      setErrorMessage(null);
      setActiveMonograph(CURATED_FESTIVALS[normalizedFestivalKey]);
      if (readingMode === 'native') {
        setReadingMode('bilingual');
      }
      if (scrollToResult) {
        monographSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Check client session cache
    const cacheKey = `${normalizedFestivalKey}::${cleanLang.toLowerCase()}`;
    const cached = clientCacheRef.current.get(cacheKey);
    if (cached) {
      setErrorMessage(null);
      setActiveMonograph(cached);
      if (scrollToResult) {
        monographSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/festival', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          festivalName: trimmedFestival,
          motherTongue: cleanLang,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Could not load festival details.');
      }

      clientCacheRef.current.set(cacheKey, data as FestivalMonograph);
      setActiveMonograph(data as FestivalMonograph);
      setReadingMode('bilingual');

      if (scrollToResult) {
        setTimeout(() => {
          monographSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to retrieve festival details. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadFestival(festivalInput, resolvedMotherTongue, true);
  };

  const handleQuickFestivalSelect = (name: string) => {
    setFestivalInput(name);
    loadFestival(name, resolvedMotherTongue, true);
  };

  const handleLanguageDropdownChange = (value: string) => {
    if (value === '__custom__') {
      setIsCustomLanguageMode(true);
    } else {
      setIsCustomLanguageMode(false);
      setSelectedLanguage(value);
    }
  };

  const handleTranslateCurrentMonograph = (newLanguage: string) => {
    const matchedPreset = MOTHER_TONGUE_OPTIONS.find(
      (opt) => opt.name.toLowerCase() === newLanguage.toLowerCase()
    );
    if (matchedPreset) {
      setIsCustomLanguageMode(false);
      setSelectedLanguage(matchedPreset.name);
    } else {
      setIsCustomLanguageMode(true);
      setCustomLanguage(newLanguage);
    }
    loadFestival(activeMonograph.canonicalName.en, newLanguage, false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="border-b border-[#DED7C8] bg-[#FBF9F5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a
            href="#explore"
            className="text-2xl font-serif font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0"
          >
            Utsav Archive
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
            <a
              href="#explore"
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Explore
            </a>
            <a
              href="#history"
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              History
            </a>
            <a
              href="#regions"
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Regions & Customs
            </a>
            <a
              href="#cuisine"
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Festive Cuisine
            </a>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={focusSearch}
              className="px-4 py-2.5 text-xs font-medium bg-[#1C1917] text-[#FBF9F5] rounded-lg hover:bg-[#9A3412] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Search Festival
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero & Search Atelier */}
        <section id="explore" className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Search Atelier */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <p className="text-xs tracking-wide text-[#9A3412] font-medium">
                  Cultural Monographs · English, हिन्दी & Mother Tongues
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-semibold leading-[1.08] tracking-tight text-[#1C1917]">
                  Every festival, told in your own tongue
                </h1>
                <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
                  Enter your favourite festival to explore its historical significance,
                  region-by-region local customs, and celebratory food recommendations in
                  English, Hindi, or your native language.
                </p>
              </div>

              {/* Search & Mother Tongue Form */}
              <form
                onSubmit={handleFormSubmit}
                className="p-6 bg-[#F3EFE6] border border-[#DED7C8] rounded-xl space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-7 space-y-1.5">
                    <label
                      htmlFor="festival-search-input"
                      className="block text-xs font-medium text-[#44403C]"
                    >
                      Favourite Festival
                    </label>
                    <div className="relative">
                      <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        ref={searchInputRef}
                        id="festival-search-input"
                        type="text"
                        value={festivalInput}
                        onChange={(e) => setFestivalInput(e.target.value)}
                        placeholder="e.g. Chhath Puja, Onam, Durga Puja, Holi, Eid..."
                        className="w-full h-11 pl-10 pr-4 text-sm bg-[#FBF9F5] text-[#1C1917] placeholder:text-[#A8A29E] border border-[#D6CEBE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A3412]/30 focus:border-[#9A3412]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-5 space-y-1.5">
                    <label
                      htmlFor="mother-tongue-select"
                      className="block text-xs font-medium text-[#44403C]"
                    >
                      Mother Tongue (with EN + HI)
                    </label>
                    <select
                      id="mother-tongue-select"
                      value={isCustomLanguageMode ? '__custom__' : selectedLanguage}
                      onChange={(e) => handleLanguageDropdownChange(e.target.value)}
                      className="w-full h-11 px-3 text-sm bg-[#FBF9F5] text-[#1C1917] border border-[#D6CEBE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A3412]/30 focus:border-[#9A3412] cursor-pointer"
                    >
                      {MOTHER_TONGUE_OPTIONS.map((lang) => (
                        <option key={lang.id} value={lang.name}>
                          {lang.name} ({lang.nativeName})
                        </option>
                      ))}
                      <option value="__custom__">Other Mother Tongue…</option>
                    </select>
                  </div>
                </div>

                {isCustomLanguageMode && (
                  <div className="space-y-1.5">
                    <label
                      htmlFor="custom-language-input"
                      className="block text-xs font-medium text-[#44403C]"
                    >
                      Enter Your Mother Tongue
                    </label>
                    <input
                      id="custom-language-input"
                      type="text"
                      value={customLanguage}
                      onChange={(e) => setCustomLanguage(e.target.value)}
                      placeholder="e.g. Konkani, Tulu, Rajasthani, Santali, Korean, German"
                      className="w-full h-11 px-3.5 text-sm bg-[#FBF9F5] text-[#1C1917] placeholder:text-[#A8A29E] border border-[#D6CEBE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A3412]/30 focus:border-[#9A3412]"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-[#57534E]">
                    Includes historical roots, regional customs, and traditional food per region.
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="h-11 px-6 text-sm font-medium bg-[#9A3412] text-white rounded-lg hover:bg-[#7C2D12] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Generating Guide…</span>
                      </>
                    ) : (
                      <span>Explore Festival</span>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3.5 bg-[#FEF2F2] border border-[#FECACA] rounded-lg flex items-start gap-2.5 text-xs text-[#991B1B]"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">{errorMessage}</p>
                      <button
                        type="button"
                        onClick={() => loadFestival(festivalInput, resolvedMotherTongue, true)}
                        className="underline font-medium hover:text-[#7F1D1D] cursor-pointer"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                )}
              </form>

              {/* Quick Suggested Festivals */}
              <div className="space-y-2.5">
                <span className="text-xs text-[#78716C] block">
                  Popular festivals to open immediately:
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {SUGGESTED_FESTIVALS.map((name) => (
                    <button
                      key={name}
                      type="button"
                      disabled={isLoading}
                      onClick={() => handleQuickFestivalSelect(name)}
                      className="text-sm font-medium text-[#44403C] hover:text-[#9A3412] underline decoration-[#D6CEBE] underline-offset-4 hover:decoration-[#9A3412] transition-colors py-1 whitespace-nowrap shrink-0 disabled:opacity-50 cursor-pointer"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Stretched Editorial Plate */}
            <div className="lg:col-span-5 flex flex-col">
              <figure className="flex-1 flex flex-col bg-[#F3EFE6] p-3 border border-[#DED7C8] rounded-xl">
                {!heroImageError ? (
                  <img
                    src={FESTIVAL_PLATES.colors.src}
                    alt={FESTIVAL_PLATES.colors.alt}
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImageError(true)}
                    className="w-full h-72 lg:h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-72 lg:h-full rounded-lg bg-gradient-to-br from-[#EBE6DF] to-[#D6CEBE] flex flex-col items-center justify-center p-8 text-center">
                    <BookMarked className="w-8 h-8 text-[#9A3412] mb-3" />
                    <span className="font-serif text-2xl text-[#1C1917]">
                      Utsav Archive
                    </span>
                  </div>
                )}
                <figcaption className="text-xs font-serif italic text-[#57534E] pt-3 px-1">
                  {FESTIVAL_PLATES.colors.caption}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Curated 3-Card Archive Strip */}
          <div className="mt-12 pt-10 border-t border-[#DED7C8]">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-2xl font-serif font-semibold text-[#1C1917]">
                Featured Bilingual Monographs
              </h2>
              <span className="text-xs text-[#78716C]">
                Instant access · English & हिन्दी
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURED_GALLERY.map((item) => {
                const isSelected =
                  activeMonograph.id === CURATED_FESTIVALS[item.key]?.id;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleQuickFestivalSelect(item.key)}
                    className={`group text-left bg-[#F3EFE6]/70 border rounded-xl p-3 transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#9A3412] bg-[#F3EFE6]'
                        : 'border-[#DED7C8] hover:border-[#9A3412]/70'
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg mb-3 bg-[#EBE6DF]">
                      {!galleryErrors[item.key] ? (
                        <img
                          src={item.plate.src}
                          alt={item.plate.alt}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setGalleryErrors((prev) => ({ ...prev, [item.key]: true }))
                          }
                          className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] flex items-center justify-center text-sm font-serif text-[#57534E]">
                          {item.title}
                        </div>
                      )}
                    </div>
                    <div className="px-1 pb-1">
                      <p className="text-lg font-serif font-semibold text-[#1C1917] group-hover:text-[#9A3412] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#57534E] mt-0.5">{item.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active Monograph Section */}
        <div ref={monographSectionRef}>
          {isLoading ? (
            <section className="border-t border-[#DED7C8] bg-[#F3EFE6]/50">
              <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-4">
                <Loader2 className="w-7 h-7 animate-spin text-[#9A3412] mx-auto" />
                <h2 className="text-3xl font-serif font-semibold text-[#1C1917]">
                  Compiling cultural dossier for “{festivalInput || activeMonograph.canonicalName.en}”
                </h2>
                <p className="text-sm text-[#57534E] max-w-lg mx-auto">
                  Preparing historical origins, regional customs, and celebratory food
                  recommendations in English, हिन्दी, and {resolvedMotherTongue}…
                </p>
              </div>
            </section>
          ) : (
            <FestivalMonographView
              monograph={activeMonograph}
              readingMode={readingMode}
              onReadingModeChange={setReadingMode}
              onTranslateToLanguage={handleTranslateCurrentMonograph}
              isTranslating={isLoading}
            />
          )}
        </div>
      </main>

      <footer className="border-t border-[#DED7C8] bg-[#F3EFE6]/60">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
          <p className="font-serif text-base text-[#1C1917]">Utsav Archive</p>
          <p>
            Cultural monographs celebrating regional traditions, shared histories, and heirloom
            festive kitchens across languages.
          </p>
        </div>
      </footer>
    </div>
  );
}
