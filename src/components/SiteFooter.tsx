export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low py-12">
      <div className="mx-auto mb-8 grid max-w-[1440px] grid-cols-1 gap-8 px-6 md:grid-cols-4 md:px-margin-desktop">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-primary">
              Elevation
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-secondary uppercase">
              Oslo 59.91°N
            </span>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-on-surface-variant">
            Highland altitude terroir, single-pass Nordic air-roasting, and
            transparent extraction science.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
            Current Micro-Lots
          </h4>
          <ul className="space-y-1.5 text-xs text-on-surface-variant">
            <li>
              <a className="hover:text-primary" href="#harvest-showcase">
                Chelbesa G1 Washed
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#harvest-showcase">
                Diego Bermudez Y-05
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#harvest-showcase">
                Nyeri Hill Peaberry
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
            The Roastery
          </h4>
          <ul className="space-y-1.5 text-xs text-on-surface-variant">
            <li>
              <a className="hover:text-primary" href="#dial-in-lab">
                Extraction Calibrations
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#sommelier-allocation">
                Sommelier Vault
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#manifesto">
                Roasting Philosophy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">
            Dispatch Transparency
          </h4>
          <div className="space-y-1 text-xs text-on-surface-variant">
            <p>Roasts: Tuesdays &amp; Fridays</p>
            <p>Cold-Chain Nitrogen Hermetic Seal</p>
            <p className="font-semibold text-secondary">
              100% Direct Farmgate Traceability
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between border-t border-outline-variant/30 px-6 pt-6 text-xs text-on-surface-variant sm:flex-row md:px-margin-desktop">
        <p>
          © {new Date().getFullYear()} Elevation Roasters AS · Oslo, Norway. All
          rights reserved.
        </p>
        <div className="mt-2 flex items-center gap-4 sm:mt-0">
          <span>Altitude Coffee Laboratory</span>
        </div>
      </div>
    </footer>
  )
}
