import { ReactNode, useEffect, useId, useRef, useState } from 'react';

export interface TermoGlossarioProps {
  /** Palavra ou trecho clicável */
  termo: string;
  /** Texto do significado exibido no popover (string ou ReactNode) */
  significado: ReactNode;
  /** Cor do termo (default: #8c2f88) */
  color?: string;
  /** Se true, envolve o termo em <strong> */
  strong?: boolean;
}

function highlightTermoInText(text: string, termo: string, color: string): ReactNode {
  const escaped = termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  if (parts.length === 1) return text;

  return parts.map((part, index) =>
    part.toLowerCase() === termo.toLowerCase() ? (
      <strong key={index} style={{ color }}>
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

/**
 * Termo clicável com popover de definição (glossário inline).
 * Reutilizável: passe `termo` + `significado` por props.
 */
function TermoGlossario({
  termo,
  significado,
  color = '#8c2f88',
  strong = true,
}: TermoGlossarioProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const label = strong ? <strong>{termo}</strong> : termo;
  const significadoContent =
    typeof significado === 'string'
      ? highlightTermoInText(significado, termo, color)
      : significado;

  return (
    <span
      ref={rootRef}
      className="relative"
      style={{ display: 'inline', whiteSpace: 'normal' }}
    >
      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2"
        style={{
          color,
          font: 'inherit',
          display: 'inline',
          margin: 0,
          verticalAlign: 'baseline',
        }}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
      </button>

      {open ? (
        <span
          id={panelId}
          role="dialog"
          aria-label={`Significado de ${termo}`}
          className="absolute left-1/2 top-full z-30 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-left text-[13px] font-normal not-italic leading-snug text-neutral-800 shadow-md"
          style={{ display: 'block' }}
        >
          <button
            type="button"
            className="absolute right-1.5 top-1 border-0 bg-transparent p-0 text-sm leading-none text-neutral-500 hover:text-neutral-800"
            aria-label="Fechar significado"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <span className="block pr-4">{significadoContent}</span>
        </span>
      ) : null}
    </span>
  );
}

export default TermoGlossario;
