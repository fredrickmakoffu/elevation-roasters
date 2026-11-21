import { Lock, ShoppingBag } from 'lucide-react'
import { LOGO_URL } from '../data'

const nav = [
  { href: '#harvest-showcase', label: 'The Micro-Lots', active: true },
  { href: '#manifesto', label: 'Roasting Craft' },
  { href: '#sommelier-allocation', label: 'Rare Subscriptions' },
  { href: '#dial-in-lab', label: 'Extraction Lab' },
]

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-between border-b border-white/10 bg-primary px-4 py-2 text-xs tracking-wider text-on-primary md:px-margin-desktop">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold tracking-widest text-primary-fixed uppercase">
            Dispatch Ledger
          </span>
          <span className="text-xs text-primary-fixed/90">
            Cold-chain dispatch direct from Oslo to your door — Roasted every
            Tuesday & Friday
          </span>
        </div>
        <div className="ml-4 hidden shrink-0 items-center gap-4 text-[11px] font-medium text-primary-fixed/80 md:flex">
          <span>59.91°N · OSLO LAB</span>
          <span className="opacity-30">/</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Roastery Online
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-margin-desktop">
        <div className="flex items-center gap-8 lg:gap-12">
          <a className="flex items-center gap-3" href="#">
            <img
              alt="Elevation Roasters Logo"
              className="h-9 w-auto object-contain"
              src={LOGO_URL}
            />
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none font-bold tracking-tight text-primary">
                Elevation
              </span>
              <span className="mt-0.5 text-[10px] font-semibold tracking-widest text-secondary uppercase">
                Nordic Terroir Lab
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

        <div className="flex items-center gap-3">
          <a
            className="hidden items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-surface-container-low md:inline-flex"
            href="#sommelier-allocation"
          >
            <Lock className="size-3.5" strokeWidth={2} />
            <span>Reserve Portal</span>
          </a>
          <button
            aria-label="Cart"
            className="relative flex items-center gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-2.5 text-primary transition-colors hover:bg-surface-container"
            type="button"
          >
            <ShoppingBag className="size-4.5" strokeWidth={1.75} />
            <span className="hidden text-xs font-semibold tracking-wider sm:inline">
              CART
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
