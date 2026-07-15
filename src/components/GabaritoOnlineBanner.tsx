import { publicUrl } from '../lib/publicUrl';

export interface GabaritoOnlineItem {
  /** Prefixo exibido (ex.: "4." ou "1.") — livre, para casos como 4. depois 2. no material */
  prefix?: string;
  text: string;
}

export interface GabaritoOnlineBannerProps {
  title?: string;
  items: GabaritoOnlineItem[];
  /** Caminho relativo em public/ (default: images/qrCode.png) */
  qrSrc?: string;
  /** Link ao clicar no QR */
  href?: string;
  backgroundColor?: string;
  qrBorderColor?: string;
}

const DEFAULT_BG = '#8a317e';
const DEFAULT_QR_BORDER = '#4fbce9';

/**
 * Faixa “Gabarito online” com QR + textos configuráveis (reutilizável entre materiais).
 */
function GabaritoOnlineBanner({
  title = 'GABARITO ONLINE',
  items,
  qrSrc = 'images/qrCode.png',
  href,
  backgroundColor = DEFAULT_BG,
  qrBorderColor = DEFAULT_QR_BORDER,
}: GabaritoOnlineBannerProps) {
  const qrImage = (
    <div
      className="shrink-0 rounded-md bg-white p-2"
      style={{ border: `2px solid ${qrBorderColor}` }}
    >
      <img
        src={publicUrl(qrSrc)}
        alt={href ? `QR Code — ${title}` : `QR Code ${title}`}
        className="h-[100px] w-[100px] object-contain sm:h-[112px] sm:w-[112px]"
      />
    </div>
  );

  return (
    <aside
      className="my-6 flex w-full flex-col items-center gap-4 px-4 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
      style={{
        backgroundColor,
        fontFamily: 'Ubuntu, sans-serif',
      }}
      aria-label={title}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir gabarito online"
          className="block"
        >
          {qrImage}
        </a>
      ) : (
        qrImage
      )}

      <div className="min-w-0 flex-1 text-white">
        <p className="m-0 mb-2 text-base font-bold uppercase tracking-wide sm:text-lg" style={{ color: '#ffffff', fontWeight: '700' }}>
          {title}
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm leading-snug sm:text-[13px]" >
          {items.map((item, index) => (
            <li key={`${item.prefix ?? index}-${item.text.slice(0, 24)}`} style={{ color: '#ffffff' }}>
              {item.prefix ? (
                <span className="font-semibold">{item.prefix} </span>
              ) : null}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default GabaritoOnlineBanner;
