import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../config'
import { LOGO_URL } from '../data'

const nav = [
  { href: '#harvest-showcase', label: 'Our Coffee', active: true },
  { href: '#manifesto', label: 'The Farm' },
  { href: '#company-plans', label: 'For Companies' },
  { href: '#story', label: 'Our Story' },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-margin-desktop">
        <div className="flex items-center gap-8 lg:gap-12">
          <a className="flex items-center gap-3" href="#">
            <img
              alt="Abisaki Farms"
              className="h-9 w-auto object-contain"
              src={LOGO_URL}
            />
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none font-bold tracking-tight text-primary">
                Abisaki
              </span>
              <span className="mt-0.5 text-[10px] font-semibold tracking-widest text-secondary uppercase">
                Farms · Limuru
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-medium tracking-wider uppercase xl:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                className={`py-1 transition-colors ${
                  item.active
                    ? 'text-primary hover:text-secondary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2.5 text-xs font-semibold tracking-wide text-on-primary transition-colors hover:bg-[#2b211e]"
          href={WHATSAPP_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon className="size-4" />
          <span className="hidden sm:inline">{WHATSAPP_DISPLAY}</span>
          <span className="sm:hidden">Order</span>
        </a>
      </div>
    </header>
  )
}
