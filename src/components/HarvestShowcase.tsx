import { ArrowRight } from 'lucide-react'
import { coffeeLots } from '../data'

export function HarvestShowcase() {
  return (
    <section
      className="w-full px-4 py-16 md:px-margin-desktop lg:py-24"
      id="harvest-showcase"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between border-b border-outline-variant/30 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase">
                The Reserve Release
              </span>
              <span className="h-1 w-1 rounded-full bg-secondary" />
              <span className="text-xs font-medium tracking-widest text-on-surface-variant uppercase">
                Lot No. 42
              </span>
            </div>
            <h2 className="font-display text-3xl font-normal tracking-tight text-primary sm:text-5xl">
              Current Micro-Lot Harvests
            </h2>
          </div>
          <p className="mt-3 max-w-md font-normal text-on-surface-variant md:mt-0">
            Three rare single-producer harvests roasted for supreme clarity,
            distinct regional terroir, and natural sweetness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {coffeeLots.map((lot) => (
            <article
              key={lot.id}
              className="relative flex flex-col justify-between rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm transition-all duration-300 hover:border-primary"
            >
              <div>
                <div className="relative mb-5 h-80 w-full overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low">
                  <img
                    alt={lot.alt}
                    className="h-full w-full object-cover"
                    src={lot.image}
                  />
                  <div className="absolute top-3 left-3 rounded bg-surface-container-lowest/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-primary uppercase backdrop-blur-md">
                    {lot.elevation}
                  </div>
                  <div className="font-display absolute right-3 bottom-3 rounded bg-primary px-2.5 py-1 text-xs font-bold text-white">
                    {lot.score}
                  </div>
                </div>
                <div className="mb-2 flex items-center gap-2 text-xs">
                  <span className="font-medium text-on-surface-variant">
                    {lot.origin}
                  </span>
                  <span className="text-outline-variant">/</span>
                  <span className="font-bold tracking-wider text-secondary uppercase">
                    {lot.process}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-2xl font-normal text-primary">
                  {lot.name}
                </h3>
                <p className="mb-5 text-sm leading-relaxed font-light text-on-surface-variant">
                  {lot.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {lot.notes.map((note) => (
                    <span
                      key={note}
                      className="rounded border border-outline-variant/30 bg-surface-container-low px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
                <div>
                  <span className="block text-xs tracking-wider text-on-surface-variant uppercase">
                    250g Whole Bean
                  </span>
                  <span className="font-display text-2xl font-bold text-primary">
                    {lot.price}
                  </span>
                </div>
                <button
                  className="flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase shadow-sm transition-all hover:bg-secondary"
                  type="button"
                >
                  <span>Reserve Lot</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
