import { useRef, useLayoutEffect, useState } from 'react';

const LINE_HEIGHT = 28;
const MIN_VISIBLE_LINES = 25;

function countTextLines(textarea: HTMLTextAreaElement): number {
  if (!textarea.value.trim()) return 0;

  const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
  const paddingTop = parseFloat(getComputedStyle(textarea).paddingTop);
  const paddingBottom = parseFloat(getComputedStyle(textarea).paddingBottom);
  const contentHeight = textarea.scrollHeight - paddingTop - paddingBottom;

  return Math.max(1, Math.round(contentHeight / lineHeight));
}

interface FolhaPautadaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minLines?: number;
  maxLines?: number;
}

function FolhaPautada({
  value,
  onChange,
  placeholder = 'Digite seu texto aqui...',
  minLines,
  maxLines,
}: FolhaPautadaProps) {
  const [lineCount, setLineCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const visibleLines = Math.max(MIN_VISIBLE_LINES, lineCount || MIN_VISIBLE_LINES);
  const showGuidance = minLines !== undefined && maxLines !== undefined;

  useLayoutEffect(() => {
    if (textareaRef.current) {
      setLineCount(countTextLines(textareaRef.current));
    }
  }, [value]);

  const lineCountLabel = lineCount === 1 ? '1 linha' : `${lineCount} linhas`;
  const lineCountColor =
    lineCount === 0
      ? '#64748b'
      : showGuidance && minLines !== undefined && lineCount < minLines
        ? '#d97706'
        : showGuidance && maxLines !== undefined && lineCount > maxLines
          ? '#dc2626'
          : showGuidance
            ? '#059669'
            : '#64748b';

  return (
    <>
      <div
        className={`mb-2 flex items-center gap-4 ${showGuidance ? 'justify-between' : 'justify-end'}`}
      >
        {showGuidance && (
          <p
            style={{
              fontFamily: 'Ubuntu, sans-serif',
              fontSize: '14px',
              color: '#64748b',
            }}
          >
            Escreva entre {minLines} e {maxLines} linhas.
          </p>
        )}
        <p
          aria-live="polite"
          style={{
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: lineCountColor,
          }}
        >
          {lineCount === 0 ? 'Nenhuma linha escrita' : lineCountLabel}
        </p>
      </div>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-6 bg-white">
        <div className="flex">
          <div
            className="shrink-0 border-r border-gray-300 bg-slate-50 select-none"
            aria-hidden="true"
            style={{ width: '40px' }}
          >
            {Array.from({ length: visibleLines }, (_, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-slate-400"
                style={{
                  height: `${LINE_HEIGHT}px`,
                  fontFamily: 'Ubuntu, sans-serif',
                  fontSize: '11px',
                  lineHeight: `${LINE_HEIGHT}px`,
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={visibleLines}
            className="w-full flex-1 border-0 focus:outline-none focus:ring-0 resize-none text-black overflow-hidden"
            style={{
              fontFamily: 'Ubuntu, sans-serif',
              fontSize: '14px',
              lineHeight: `${LINE_HEIGHT}px`,
              padding: '0 16px',
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent ${LINE_HEIGHT - 1}px,
                #d1d5db ${LINE_HEIGHT - 1}px,
                #d1d5db ${LINE_HEIGHT}px
              )`,
              backgroundAttachment: 'local',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default FolhaPautada;
