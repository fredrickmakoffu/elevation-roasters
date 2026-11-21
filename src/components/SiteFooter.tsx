import { Link } from 'react-router-dom'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../config'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low py-12">
      <div className="mx-auto mb-8 grid max-w-[1440px] grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-margin-desktop">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-primary">
              Abisaki Farms
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-secondary uppercase">
              Limuru
            </span>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-on-surface-variant">
            Coffee grown, harvested, processed, and packed on our farm in
            Limuru, Kenya.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
            Coffee
          </h4>
          <ul className="space-y-1.5 text-xs text-on-surface-variant">
            <li>
              <Link className="hover:text-primary" to="/shop">
                Shop all
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/#harvest-showcase">
                Featured lots
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/#company-plans">
                Company plans
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
            Order
          </h4>
          <div className="space-y-1 text-xs text-on-surface-variant">
            <p>
              <a
                className="font-semibold text-secondary hover:text-primary"
                href={WHATSAPP_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </p>
            <p>
              <a className="hover:text-primary" href="#company-plans">
                Company subscriptions
              </a>
            </p>
            <p>Limuru, Kiambu · Kenya</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between border-t border-outline-variant/30 px-6 pt-6 text-xs text-on-surface-variant sm:flex-row md:px-margin-desktop">
        <p>
          © {new Date().getFullYear()} Abisaki Farms · Limuru, Kenya.
        </p>
        <span className="mt-2 sm:mt-0">Farm to bag</span>
      </div>
    </footer>
  )
}
