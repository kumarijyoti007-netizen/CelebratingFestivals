import type { LocalizedText, ReadingLanguageMode } from '../types/festival';

interface BilingualBlockProps {
  text: LocalizedText;
  mode: ReadingLanguageMode;
  motherTongueLabel: string;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
  inline?: boolean;
}

export function BilingualBlock({
  text,
  mode,
  motherTongueLabel,
  className = '',
  primaryClassName = '',
  secondaryClassName = 'text-[#57534E]',
  inline = false,
}: BilingualBlockProps) {
  const localValue = text.native && text.native.trim() ? text.native : text.hi;
  const hasDistinctNative = Boolean(text.native && text.native.trim() && text.native !== text.hi);

  if (mode === 'en') {
    return <span className={`${primaryClassName} ${className}`}>{text.en}</span>;
  }

  if (mode === 'hi') {
    return <span className={`${primaryClassName} ${className}`}>{text.hi}</span>;
  }

  if (mode === 'native') {
    return <span className={`${primaryClassName} ${className}`}>{localValue}</span>;
  }

  // Bilingual mode: English alongside Hindi or selected Mother Tongue
  if (inline) {
    return (
      <span className={className}>
        <span className={primaryClassName}>{text.en}</span>
        <span aria-hidden="true" className="mx-2 text-[#A8A29E]">
          ·
        </span>
        <span className={secondaryClassName}>{localValue}</span>
      </span>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <p className={primaryClassName}>{text.en}</p>
      <p className={secondaryClassName}>
        {hasDistinctNative ? (
          <>
            <span className="text-[11px] uppercase tracking-wider text-[#78716C] mr-2 font-sans">
              {motherTongueLabel}
            </span>
            {text.native}
          </>
        ) : (
          text.hi
        )}
      </p>
    </div>
  );
}
