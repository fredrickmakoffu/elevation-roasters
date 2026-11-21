import { Leaf, Package, Sprout } from 'lucide-react'
import { manifesto } from '../data'

const icons = {
  terrain: Sprout,
  air: Leaf,
  science: Package,
}

export function Manifesto() {
  return (
    <section
      className="w-full bg-surface-container-low px-4 py-16 md:px-margin-desktop"
      id="manifesto"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            How we work
          </p>
          <h2 className="font-display text-3xl font-normal text-primary sm:text-4xl">
            Grow. Process. Pack.
          </h2>
          <p className="mt-3 text-sm text-on-surface-variant">
            The whole chain stays on the farm in Limuru.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {manifesto.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8"
              >
                <div>
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-low text-primary">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display mb-2 text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
                <div className="mt-6 border-t border-outline-variant/20 pt-4 text-xs font-medium text-secondary">
                  {item.footer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
