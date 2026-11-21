import { CheckCircle2 } from 'lucide-react'

const perks = [
  'Flexible pause or cancel anytime',
  'Complimentary cold-chain delivery',
  'Secret quarterly 50g cupping lot',
]

const rows = [
  { label: 'Roast Frequency', value: 'Every 14 Days', accent: false },
  {
    label: 'Exclusive Samples',
    value: 'Quarterly 50g Micro-Lots',
    accent: true,
  },
  {
    label: 'Dial-In Recipe Sheet',
    value: 'Tailored by Grinder Model',
    accent: false,
  },
  {
    label: 'Shipping',
    value: 'Free Cold-Chain Included',
    accent: 'emerald',
  },
] as const

export function SommelierAllocation() {
  return (
    <section
      className="w-full px-4 py-16 md:px-margin-desktop lg:py-24"
      id="sommelier-allocation"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-primary p-8 text-on-primary sm:p-14">
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary-fixed uppercase">
              The Allocation Vault
            </div>
            <h2 className="font-display text-3xl leading-tight font-normal tracking-tight sm:text-5xl">
              Guaranteed Allocation. Roasted Weekly.
            </h2>
            <p className="max-w-xl text-base leading-relaxed font-light text-primary-fixed/80 sm:text-lg">
              Our top micro-lot harvests yield fewer than 30 bags each. The
              Sommelier Allocation guarantees priority access to 2 fresh-roast
              bags fortnightly, dispatched within 24 hours of roasting.
            </p>
            <div className="flex flex-wrap gap-5 pt-3">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-2 text-sm text-secondary-fixed"
                >
                  <CheckCircle2 className="size-4" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button
                className="rounded-xl bg-white px-8 py-4 text-xs font-semibold tracking-widest text-primary uppercase shadow-md transition-all hover:bg-secondary-fixed"
                type="button"
              >
                Join the Sommelier Allocation
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-outline-variant/30 bg-surface p-7 text-primary shadow-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-5">
                <div>
                  <span className="mb-0.5 block text-xs font-semibold tracking-wider text-secondary uppercase">
                    Sommelier Reserve
                  </span>
                  <h3 className="font-display text-2xl font-bold">
                    Curated Fortnight Duo
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold text-primary">
                    $48
                  </span>
                  <span className="mt-0.5 block text-[10px] tracking-wide text-on-surface-variant uppercase">
                    / 2 Bags Fortnight
                  </span>
                </div>
              </div>
              <div className="space-y-3 py-5 text-xs">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-outline-variant/15 py-1.5 last:border-0"
                  >
                    <span className="text-on-surface-variant">{row.label}</span>
                    <span
                      className={`font-semibold ${
                        row.accent === true
                          ? 'text-secondary'
                          : row.accent === 'emerald'
                            ? 'text-emerald-800'
                            : 'text-primary'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-3.5 text-center">
                <p className="text-xs font-medium text-on-surface-variant">
                  Full refractometer analysis &amp; water recipe card in each
                  delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
