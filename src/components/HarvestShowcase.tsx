import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { whatsappOrderUrl } from '../config'
import { featuredCoffees } from '../data'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function HarvestShowcase() {
  return (
    <section
      className="w-full px-4 py-16 md:px-margin-desktop lg:py-24"
      id="harvest-showcase"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          className="mb-12 flex flex-col justify-between gap-4 border-b border-outline-variant/30 pb-6 md:flex-row md:items-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <div>
            <p className="mb-1.5 text-xs font-bold tracking-widest text-secondary uppercase">
              From the farm
            </p>
            <h2 className="font-display text-3xl font-normal tracking-tight text-primary sm:text-5xl">
              Coffee you can order today
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="max-w-md text-on-surface-variant md:text-right">
              Featured lots from Abisaki. Grown, processed, and packed in Limuru.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-secondary uppercase transition-colors hover:text-primary"
            >
              View all
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featuredCoffees.map((lot) => (
            <motion.article
              key={lot.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm transition-colors duration-300 hover:border-primary"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div>
                <div className="relative mb-5 h-80 w-full overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low">
                  <img
                    alt={lot.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
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
                <a
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold tracking-wider text-on-primary uppercase transition-colors hover:bg-[#2b211e]"
                  href={whatsappOrderUrl(lot.name)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="size-3.5" />
                  <span>Order</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
