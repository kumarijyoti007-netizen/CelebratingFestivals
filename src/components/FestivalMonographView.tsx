import { useState, useEffect } from 'react';
import { Globe, Utensils, BookOpen, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import type { FestivalMonograph, ReadingLanguageMode } from '../types/festival';
import { FESTIVAL_PLATES } from '../data/festivalImages';
import { MOTHER_TONGUE_OPTIONS } from '../data/languages';
import { BilingualBlock } from './BilingualBlock';

interface FestivalMonographViewProps {
  monograph: FestivalMonograph;
  readingMode: ReadingLanguageMode;
  onReadingModeChange: (mode: ReadingLanguageMode) => void;
  onTranslateToLanguage: (language: string) => void;
  isTranslating: boolean;
}

export function FestivalMonographView({
  monograph,
  readingMode,
  onReadingModeChange,
  onTranslateToLanguage,
  isTranslating,
}: FestivalMonographViewProps) {
  const [selectedRegionIdx, setSelectedRegionIdx] = useState<number | 'all'>(0);
  const [customTranslateLang, setCustomTranslateLang] = useState('');
  const [showCustomTranslate, setShowCustomTranslate] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setSelectedRegionIdx(0);
    setImageError(false);
  }, [monograph.id]);

  const hasSeparateNative = Boolean(
    monograph.canonicalName.native &&
      monograph.motherTongue.toLowerCase() !== 'hindi' &&
      monograph.motherTongueNativeName !== 'हिन्दी'
  );

  const plate = FESTIVAL_PLATES[monograph.visualCategory] ?? FESTIVAL_PLATES.customs;

  const displayedRegions =
    selectedRegionIdx === 'all'
      ? monograph.regionalVariations
      : monograph.regionalVariations[selectedRegionIdx]
        ? [monograph.regionalVariations[selectedRegionIdx]]
        : monograph.regionalVariations;

  const activeLanguageLabel = hasSeparateNative
    ? monograph.motherTongueNativeName
    : 'हिन्दी';

  const handleQuickTranslateChange = (value: string) => {
    if (value === '__custom__') {
      setShowCustomTranslate(true);
      return;
    }
    setShowCustomTranslate(false);
    if (value) {
      onTranslateToLanguage(value);
    }
  };

  const handleCustomTranslateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = customTranslateLang.trim();
    if (cleaned) {
      onTranslateToLanguage(cleaned);
    }
  };

  const narrativeParagraphsEn = monograph.historicalSignificance.narrative.en
    .split('\n')
    .filter((p) => p.trim().length > 0);
  const narrativeParagraphsHi = monograph.historicalSignificance.narrative.hi
    .split('\n')
    .filter((p) => p.trim().length > 0);
  const narrativeParagraphsNative = monograph.historicalSignificance.narrative.native
    ? monograph.historicalSignificance.narrative.native
        .split('\n')
        .filter((p) => p.trim().length > 0)
    : [];

  return (
    <article className="border-t border-[#DED7C8]">
      {/* Reading Controls & Language Toolbar (in workspace, below hero) */}
      <div className="bg-[#F3EFE6]/80 border-b border-[#DED7C8]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#78716C] mr-2">
              Reading Language
            </span>
            <div className="inline-flex items-center p-1 bg-[#EBE6DF] rounded-lg border border-[#DED7C8]">
              <button
                type="button"
                onClick={() => onReadingModeChange('bilingual')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  readingMode === 'bilingual'
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Bilingual (EN + {activeLanguageLabel})
              </button>
              <button
                type="button"
                onClick={() => onReadingModeChange('en')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  readingMode === 'en'
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onReadingModeChange('hi')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  readingMode === 'hi'
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                हिन्दी
              </button>
              {hasSeparateNative && (
                <button
                  type="button"
                  onClick={() => onReadingModeChange('native')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    readingMode === 'native'
                      ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {monograph.motherTongueNativeName}
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label
              htmlFor="monograph-mother-tongue"
              className="text-xs text-[#57534E] flex items-center gap-1.5 whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-[#9A3412]" />
              <span>Switch Mother Tongue:</span>
            </label>
            <select
              id="monograph-mother-tongue"
              value={showCustomTranslate ? '__custom__' : monograph.motherTongue}
              onChange={(e) => handleQuickTranslateChange(e.target.value)}
              disabled={isTranslating}
              className="h-10 px-3 text-xs font-medium bg-[#FBF9F5] text-[#1C1917] border border-[#D6CEBE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A3412]/30 disabled:opacity-60 cursor-pointer"
            >
              {MOTHER_TONGUE_OPTIONS.map((lang) => (
                <option key={lang.id} value={lang.name}>
                  {lang.name} ({lang.nativeName})
                </option>
              ))}
              {!MOTHER_TONGUE_OPTIONS.some(
                (l) => l.name.toLowerCase() === monograph.motherTongue.toLowerCase()
              ) && (
                <option value={monograph.motherTongue}>
                  {monograph.motherTongue} ({monograph.motherTongueNativeName})
                </option>
              )}
              <option value="__custom__">Other mother tongue…</option>
            </select>

            {showCustomTranslate && (
              <form onSubmit={handleCustomTranslateSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={customTranslateLang}
                  onChange={(e) => setCustomTranslateLang(e.target.value)}
                  placeholder="e.g. Konkani, Tulu, Santali"
                  className="h-10 px-3 text-xs bg-[#FBF9F5] text-[#1C1917] border border-[#D6CEBE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A3412]/30 w-44"
                />
                <button
                  type="submit"
                  disabled={isTranslating || !customTranslateLang.trim()}
                  className="h-10 px-3.5 text-xs font-medium bg-[#9A3412] text-white rounded-lg hover:bg-[#7C2D12] transition-colors disabled:opacity-50 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Apply
                </button>
              </form>
            )}

            {isTranslating && (
              <span className="text-xs text-[#9A3412] font-medium">
                Translating monograph…
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Monograph Title & Accession Metadata Grid */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-10 border-b border-[#DED7C8]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-4">
          <span>Archival Dossier</span>
          <span aria-hidden="true">·</span>
          <span>
            English / हिन्दी
            {hasSeparateNative ? ` / ${monograph.motherTongueNativeName}` : ''}
          </span>
        </div>

        {readingMode === 'bilingual' ? (
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-[#1C1917]">
              {monograph.canonicalName.en}
            </h2>
            <p className="text-2xl sm:text-3xl font-serif text-[#9A3412]">
              {hasSeparateNative
                ? `${monograph.canonicalName.native} · ${monograph.canonicalName.hi}`
                : monograph.canonicalName.hi}
            </p>
          </div>
        ) : (
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-[#1C1917]">
            <BilingualBlock
              text={monograph.canonicalName}
              mode={readingMode}
              motherTongueLabel={monograph.motherTongueNativeName}
            />
          </h2>
        )}

        <div className="mt-5 max-w-3xl text-lg leading-relaxed text-[#44403C]">
          <BilingualBlock
            text={monograph.tagline}
            mode={readingMode}
            motherTongueLabel={monograph.motherTongueNativeName}
            secondaryClassName="text-base text-[#57534E]"
          />
        </div>

        {/* 4-Column Accession Metadata Strip */}
        <dl className="mt-10 pt-6 border-t border-[#DED7C8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <dt className="text-xs uppercase tracking-widest text-[#78716C] mb-1.5">
              Calendar & Season
            </dt>
            <dd className="text-sm font-medium text-[#1C1917]">
              <BilingualBlock
                text={monograph.timingAndCalendar}
                mode={readingMode}
                motherTongueLabel={monograph.motherTongueNativeName}
                secondaryClassName="text-xs text-[#57534E] font-normal"
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-[#78716C] mb-1.5">
              Duration
            </dt>
            <dd className="text-sm font-medium text-[#1C1917] tabular-nums">
              <BilingualBlock
                text={monograph.duration}
                mode={readingMode}
                motherTongueLabel={monograph.motherTongueNativeName}
                secondaryClassName="text-xs text-[#57534E] font-normal"
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-[#78716C] mb-1.5">
              Primary Regions
            </dt>
            <dd className="text-sm font-medium text-[#1C1917]">
              <BilingualBlock
                text={monograph.primaryRegionsSummary}
                mode={readingMode}
                motherTongueLabel={monograph.motherTongueNativeName}
                secondaryClassName="text-xs text-[#57534E] font-normal"
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-[#78716C] mb-1.5">
              Cultural Essence
            </dt>
            <dd className="text-sm font-medium text-[#1C1917]">
              <BilingualBlock
                text={monograph.essence}
                mode={readingMode}
                motherTongueLabel={monograph.motherTongueNativeName}
                secondaryClassName="text-xs text-[#57534E] font-normal"
              />
            </dd>
          </div>
        </dl>
      </header>

      {/* Section 01: Historical Significance & Origins */}
      <section
        id="history"
        className="max-w-6xl mx-auto px-6 py-14 border-b border-[#DED7C8]"
      >
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9A3412] font-medium mb-1">
              01. Historical Significance & Origins
            </p>
            <h3 className="text-3xl font-serif font-semibold text-[#1C1917]">
              {readingMode === 'hi'
                ? 'ऐतिहासिक महत्व एवं उद्गम'
                : readingMode === 'bilingual'
                  ? 'Origins, Memory & Cultural Evolution · ऐतिहासिक महत्व'
                  : 'Origins, Memory & Cultural Evolution'}
            </h3>
          </div>
          <BookOpen className="w-5 h-5 text-[#78716C] hidden sm:block" />
        </div>

        {/* Asymmetric 70% / 30% Reading Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 max-w-prose">
            {/* Overview Lead */}
            <div className="text-[17px] leading-relaxed text-[#292524] pb-6 border-b border-[#DED7C8]">
              <BilingualBlock
                text={monograph.overview}
                mode={readingMode}
                motherTongueLabel={monograph.motherTongueNativeName}
                primaryClassName="drop-cap"
                secondaryClassName="text-[15px] leading-relaxed text-[#57534E] pt-2"
              />
            </div>

            {/* Deep Narrative Paragraphs */}
            {readingMode === 'bilingual' ? (
              <div className="space-y-6">
                {narrativeParagraphsEn.map((paraEn, index) => {
                  const companionPara = hasSeparateNative
                    ? narrativeParagraphsNative[index] ?? narrativeParagraphsHi[index]
                    : narrativeParagraphsHi[index];
                  return (
                    <div key={index} className="space-y-2.5">
                      <p className="text-[16px] leading-[1.78] text-[#292524]">{paraEn}</p>
                      {companionPara && (
                        <p className="text-[15px] leading-[1.78] text-[#57534E]">
                          {companionPara}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-5">
                {(readingMode === 'en'
                  ? narrativeParagraphsEn
                  : readingMode === 'hi'
                    ? narrativeParagraphsHi
                    : narrativeParagraphsNative.length > 0
                      ? narrativeParagraphsNative
                      : narrativeParagraphsHi
                ).map((para, index) => (
                  <p key={index} className="text-[16px] leading-[1.8] text-[#292524]">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Historical Milestones Timeline */}
            <div className="pt-6 border-t border-[#DED7C8]">
              <h4 className="text-xs uppercase tracking-widest text-[#78716C] mb-5">
                Historical Milestones
              </h4>
              <div className="space-y-5">
                {monograph.historicalSignificance.milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 pb-5 border-b border-[#EBE6DF] last:border-b-0 last:pb-0"
                  >
                    <div className="sm:col-span-4 text-xs font-medium text-[#9A3412] tabular-nums">
                      <BilingualBlock
                        text={item.era}
                        mode={readingMode}
                        motherTongueLabel={monograph.motherTongueNativeName}
                        secondaryClassName="text-xs text-[#78716C] font-normal mt-0.5"
                      />
                    </div>
                    <div className="sm:col-span-8 text-sm leading-relaxed text-[#44403C]">
                      <BilingualBlock
                        text={item.detail}
                        mode={readingMode}
                        motherTongueLabel={monograph.motherTongueNativeName}
                        secondaryClassName="text-xs leading-relaxed text-[#57534E]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Margin Sidebar: Archival Plate & Editorial Pull Quote */}
          <aside className="lg:col-span-5 space-y-8">
            <figure className="bg-[#F3EFE6] p-3 border border-[#DED7C8] rounded-xl">
              {!imageError ? (
                <img
                  src={plate.src}
                  alt={plate.alt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-[#EBE6DF] to-[#D6CEBE] flex flex-col items-center justify-center p-6 text-center">
                  <Sparkles className="w-6 h-6 text-[#9A3412] mb-2" />
                  <span className="font-serif text-lg text-[#1C1917]">
                    {monograph.canonicalName.en}
                  </span>
                </div>
              )}
              <figcaption className="text-xs font-serif italic text-[#57534E] mt-3 px-1">
                {plate.caption}
              </figcaption>
            </figure>

            {/* Editorial Pull Quote (top & bottom hairline dividers, no left accent border) */}
            <blockquote className="py-7 border-t border-b border-[#D6CEBE]">
              <div className="font-serif italic text-xl lg:text-2xl leading-snug text-[#1C1917]">
                <BilingualBlock
                  text={monograph.historicalSignificance.pullQuote}
                  mode={readingMode}
                  motherTongueLabel={monograph.motherTongueNativeName}
                  secondaryClassName="text-base not-italic font-sans text-[#57534E] mt-3"
                />
              </div>
            </blockquote>
          </aside>
        </div>
      </section>

      {/* Section 02: Regional Variations, Local Customs & Celebratory Cuisine */}
      <section
        id="regions"
        className="max-w-6xl mx-auto px-6 py-14 border-b border-[#DED7C8]"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9A3412] font-medium mb-1">
              02. Regional Variations, Local Customs & Cuisine
            </p>
            <h3 className="text-3xl font-serif font-semibold text-[#1C1917]">
              {readingMode === 'hi'
                ? 'क्षेत्रीय रीति-रिवाज एवं पारंपरिक पकवान'
                : readingMode === 'bilingual'
                  ? 'Local Customs & Celebratory Foods by Region · क्षेत्रीय परंपराएँ एवं भोजन'
                  : 'Local Customs & Celebratory Foods by Region'}
            </h3>
          </div>
          <p className="text-xs text-[#57534E] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#9A3412]" />
            <span>Select a region below to explore local rituals and food pairings</span>
          </p>
        </div>

        {/* Interactive Region Selector Tabs */}
        <div
          role="tablist"
          aria-label="Festival Regions"
          className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#DED7C8]"
        >
          {monograph.regionalVariations.map((region, idx) => {
            const active = selectedRegionIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedRegionIdx(idx)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#1C1917] text-[#FBF9F5] border-[#1C1917]'
                    : 'bg-[#F3EFE6] text-[#44403C] border-[#DED7C8] hover:border-[#9A3412] hover:text-[#1C1917]'
                }`}
              >
                {readingMode === 'hi'
                  ? region.regionName.hi
                  : readingMode === 'native' && region.regionName.native
                    ? region.regionName.native
                    : region.regionName.en}
              </button>
            );
          })}
          <button
            type="button"
            role="tab"
            aria-selected={selectedRegionIdx === 'all'}
            onClick={() => setSelectedRegionIdx('all')}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedRegionIdx === 'all'
                ? 'bg-[#9A3412] text-white border-[#9A3412]'
                : 'bg-transparent text-[#57534E] border-[#DED7C8] hover:border-[#9A3412] hover:text-[#1C1917]'
            }`}
          >
            Compare All Regions ({monograph.regionalVariations.length})
          </button>
        </div>

        {/* Displayed Region(s) */}
        <div className="divide-y divide-[#DED7C8]">
          {displayedRegions.map((region, rIdx) => (
            <div key={rIdx} className="py-10 first:pt-8 last:pb-2 space-y-10">
              {/* Region Header & Customs Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#78716C]">
                    Region {selectedRegionIdx === 'all' ? `0${rIdx + 1}` : `0${Number(selectedRegionIdx) + 1}`} ·{' '}
                    {region.localFestivalTitle.en}
                  </div>
                  <h4 className="text-3xl font-serif font-semibold text-[#1C1917]">
                    <BilingualBlock
                      text={region.regionName}
                      mode={readingMode}
                      motherTongueLabel={monograph.motherTongueNativeName}
                      secondaryClassName="text-xl font-serif text-[#9A3412] mt-1"
                    />
                  </h4>
                  <div className="text-sm text-[#57534E] pt-1">
                    <BilingualBlock
                      text={region.localFestivalTitle}
                      mode={readingMode}
                      motherTongueLabel={monograph.motherTongueNativeName}
                      inline
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 text-[15px] leading-relaxed text-[#292524]">
                  <BilingualBlock
                    text={region.customsSummary}
                    mode={readingMode}
                    motherTongueLabel={monograph.motherTongueNativeName}
                    secondaryClassName="text-[14px] leading-relaxed text-[#57534E] mt-2"
                  />
                </div>
              </div>

              {/* Local Customs & Rituals List */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#78716C] mb-5">
                  Local Customs & Ritual Sequence
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {region.rituals.map((ritual, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#F3EFE6]/70 border border-[#DED7C8] rounded-xl space-y-2.5"
                    >
                      <div className="text-xs font-medium text-[#9A3412] tabular-nums">
                        Custom 0{idx + 1}
                      </div>
                      <h6 className="text-lg font-serif font-semibold text-[#1C1917]">
                        <BilingualBlock
                          text={ritual.title}
                          mode={readingMode}
                          motherTongueLabel={monograph.motherTongueNativeName}
                          secondaryClassName="text-sm font-sans font-normal text-[#57534E] mt-1"
                        />
                      </h6>
                      <div className="text-sm leading-relaxed text-[#44403C]">
                        <BilingualBlock
                          text={ritual.description}
                          mode={readingMode}
                          motherTongueLabel={monograph.motherTongueNativeName}
                          secondaryClassName="text-xs leading-relaxed text-[#57534E]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Celebratory Food Recommendations for this Region */}
              <div id="cuisine">
                <div className="flex items-center gap-2 mb-5">
                  <Utensils className="w-4 h-4 text-[#9A3412]" />
                  <h5 className="text-xs uppercase tracking-widest text-[#78716C]">
                    Celebratory Food Recommendations · {region.regionName.en}
                  </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {region.celebratoryFoods.map((dish, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-6 bg-[#FBF9F5] border border-[#DED7C8] rounded-xl flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2.5">
                        <div className="text-xs text-[#78716C]">
                          <span>{dish.course}</span>
                          <span aria-hidden="true" className="mx-1.5">
                            ·
                          </span>
                          <span>Regional Dish 0{dIdx + 1}</span>
                        </div>

                        <h6 className="text-xl font-serif font-semibold text-[#1C1917]">
                          <BilingualBlock
                            text={dish.name}
                            mode={readingMode}
                            motherTongueLabel={monograph.motherTongueNativeName}
                            secondaryClassName="text-base font-serif text-[#9A3412] mt-0.5"
                          />
                        </h6>

                        <div className="text-sm leading-relaxed text-[#44403C]">
                          <BilingualBlock
                            text={dish.significance}
                            mode={readingMode}
                            motherTongueLabel={monograph.motherTongueNativeName}
                            secondaryClassName="text-xs leading-relaxed text-[#57534E]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#EBE6DF]">
                        <p className="text-[11px] uppercase tracking-widest text-[#78716C] mb-1">
                          Key Ingredients
                        </p>
                        <div className="text-xs leading-relaxed text-[#44403C]">
                          <BilingualBlock
                            text={dish.keyIngredients}
                            mode={readingMode}
                            motherTongueLabel={monograph.motherTongueNativeName}
                            secondaryClassName="text-xs text-[#78716C]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Traditional Greetings & Cultural Lexicon */}
      <section id="languages" className="max-w-6xl mx-auto px-6 py-14">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[#9A3412] font-medium mb-1">
            03. Living Language & Lexicon
          </p>
          <h3 className="text-3xl font-serif font-semibold text-[#1C1917]">
            {readingMode === 'hi'
              ? 'पारंपरिक शुभकामनाएँ एवं सांस्कृतिक शब्दावली'
              : readingMode === 'bilingual'
                ? 'Traditional Greetings & Key Terms · शुभकामनाएँ एवं शब्दावली'
                : 'Traditional Greetings & Key Terms'}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Greeting Card */}
          <div className="lg:col-span-5 p-7 bg-[#F3EFE6] border border-[#DED7C8] rounded-xl space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#78716C]">
              Festive Greeting
            </p>
            <p className="text-2xl font-serif font-semibold text-[#9A3412]">
              “{monograph.greetingsAndTerms.traditionalGreeting.transliteration}”
            </p>

            <div className="space-y-3 pt-2 border-t border-[#DED7C8]">
              {(readingMode === 'bilingual' || readingMode === 'en') && (
                <div>
                  <p className="text-sm font-medium text-[#1C1917]">
                    {monograph.greetingsAndTerms.traditionalGreeting.en}
                  </p>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    {monograph.greetingsAndTerms.traditionalGreeting.meaningEn}
                  </p>
                </div>
              )}

              {(readingMode === 'bilingual' || readingMode === 'hi') && (
                <div>
                  <p className="text-sm font-medium text-[#1C1917]">
                    {monograph.greetingsAndTerms.traditionalGreeting.hi}
                  </p>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    {monograph.greetingsAndTerms.traditionalGreeting.meaningHi}
                  </p>
                </div>
              )}

              {(readingMode === 'bilingual' || readingMode === 'native') &&
                hasSeparateNative &&
                monograph.greetingsAndTerms.traditionalGreeting.native && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#78716C] mb-0.5">
                      {monograph.motherTongueNativeName}
                    </p>
                    <p className="text-sm font-medium text-[#1C1917]">
                      {monograph.greetingsAndTerms.traditionalGreeting.native}
                    </p>
                    {monograph.greetingsAndTerms.traditionalGreeting.meaningNative && (
                      <p className="text-xs text-[#57534E] mt-0.5">
                        {monograph.greetingsAndTerms.traditionalGreeting.meaningNative}
                      </p>
                    )}
                  </div>
                )}
            </div>
          </div>

          {/* Cultural Glossary */}
          <div className="lg:col-span-7 divide-y divide-[#DED7C8] border-t border-b border-[#DED7C8]">
            {monograph.greetingsAndTerms.glossary.map((entry, idx) => (
              <div key={idx} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-4">
                  <p className="font-serif text-lg font-semibold text-[#1C1917]">
                    {entry.term}
                  </p>
                  <p className="text-sm text-[#9A3412] flex items-center gap-1.5 mt-0.5">
                    <ArrowRight className="w-3 h-3" />
                    <span>{entry.nativeScript}</span>
                  </p>
                </div>
                <div className="sm:col-span-8 text-sm leading-relaxed text-[#44403C]">
                  <BilingualBlock
                    text={entry.meaning}
                    mode={readingMode}
                    motherTongueLabel={monograph.motherTongueNativeName}
                    secondaryClassName="text-xs leading-relaxed text-[#57534E]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
