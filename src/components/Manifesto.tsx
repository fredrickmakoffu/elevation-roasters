import { Leaf, Package, Sprout } from 'lucide-react'
import { motion } from 'motion/react'
import { manifesto } from '../data'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

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
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            How we work
          </p>
          <h2 className="font-display text-3xl font-normal text-primary sm:text-4xl">
            Grow. Process. Pack.
          </h2>
          <p className="mt-3 text-sm text-on-surface-variant">
            From seedling to sealed bag, the work stays on our land in Limuru —
            so you always know where the coffee came from.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {manifesto.map((item) => {
            const Icon = icons[item.icon]
            return (
              <motion.div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8"
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
