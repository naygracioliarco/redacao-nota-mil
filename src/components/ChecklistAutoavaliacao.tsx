import { UserAnswers } from '../types/questions';

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface ChecklistAutoavaliacaoProps {
  /** Título da faixa (ex.: "Checklist de autoavaliação") */
  title?: string;
  /** Subtítulo opcional (ex.: "(Baseado na C1 e C4)") */
  subtitle?: string;
  /** Itens do checklist — variam por projeto */
  items: ChecklistItem[];
  /** Prefixo das chaves no armazenamento (ex.: checklist_cronica) */
  instanceId: string;
  userAnswers?: UserAnswers;
  onAnswerChange?: (questionId: string, answer: boolean) => void;
  /** Cor da faixa do título */
  bannerColor?: string;
  /** Cor do ícone / borda do lápis */
  iconColor?: string;
}

const DEFAULT_BANNER = '#6B2D7B';
const DEFAULT_ICON = '#2A9B8F';

function PencilIcon({ color }: { color: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.06 4.1 19.9 9.94l-11.4 11.4H2.66v-5.84L14.06 4.1Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m12.8 5.36 5.84 5.84"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3.2 21.2h6.2"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Checklist de autoavaliação reutilizável.
 * Textos vêm via props; estado persiste em `book_answers` com chave `${instanceId}_${item.id}`.
 */
function ChecklistAutoavaliacao({
  title = 'Checklist de autoavaliação',
  subtitle,
  items,
  instanceId,
  userAnswers = {},
  onAnswerChange,
  bannerColor = DEFAULT_BANNER,
  iconColor = DEFAULT_ICON,
}: ChecklistAutoavaliacaoProps) {
  const storageKey = (itemId: string) => `${instanceId}_${itemId}`;

  const isChecked = (itemId: string) => Boolean(userAnswers[storageKey(itemId)]);

  const toggle = (itemId: string) => {
    onAnswerChange?.(storageKey(itemId), !isChecked(itemId));
  };

  return (
    <section
      className="my-8 w-full"
      aria-label={title}
      style={{ fontFamily: 'Ubuntu, sans-serif' }}
    >
      <div className="mb-5 flex flex-wrap items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-[3px]"
          style={{ borderColor: iconColor }}
        >
          <PencilIcon color={iconColor} />
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div
            className="inline-block max-w-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-white sm:text-base"
            style={{
              backgroundColor: bannerColor,
              clipPath:
                'polygon(0 0, calc(100% - 14px) 0, 100% 18%, calc(100% - 10px) 36%, 100% 54%, calc(100% - 12px) 72%, 100% 100%, 0 100%)',
              paddingRight: '1.75rem',
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <p className="mt-1.5 text-sm font-bold text-black sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <ul className="m-0 list-none space-y-3.5 p-0">
        {items.map((item) => {
          const checked = isChecked(item.id);
          const inputId = storageKey(item.id);

          return (
            <li key={item.id}>
              <label
                htmlFor={inputId}
                className="flex cursor-pointer items-start gap-3 text-[15px] leading-snug text-neutral-900"
              >
                <input
                  id={inputId}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(item.id)}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[2px] border-2 border-neutral-800 bg-white checked:border-neutral-800 checked:bg-white"
                  style={{
                    backgroundImage: checked
                      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%231a1a1a' stroke-width='2.2' d='M3 8.5 6.5 12 13 4'/%3E%3C/svg%3E")`
                      : undefined,
                    backgroundSize: '14px 14px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    accentColor: bannerColor,
                  }}
                />
                <span>{item.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ChecklistAutoavaliacao;
