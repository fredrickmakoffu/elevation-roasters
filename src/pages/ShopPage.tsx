import { Minus, Plus } from 'lucide-react'
import { motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { whatsappCartUrl } from '../config'
import { coffeeLots } from '../data'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'
import type { CartLine } from '../types/coffee'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ShopPage() {
  const [cart, setCart] = useState<Record<string, number>>({})

  const lines: CartLine[] = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, quantity]) => ({ id, quantity })),
    [cart],
  )

  const totalItems = lines.reduce((sum, l) => sum + l.quantity, 0)
  const totalKes = lines.reduce((sum, line) => {
    const coffee = coffeeLots.find((c) => c.id === line.id)
    return sum + (coffee ? coffee.priceValue * line.quantity : 0)
  }, 0)

  function setQty(id: string, next: number) {
    setCart((prev) => {
      const qty = Math.max(0, next)
      if (qty === 0) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: qty }
    })
  }

  function addOne(id: string) {
    setQty(id, (cart[id] ?? 0) + 1)
  }

  return (
    <div className={totalItems > 0 ? 'pb-28' : undefined}>
      <section className="w-full px-4 pt-10 pb-8 md:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-10 max-w-2xl"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
              Shop
            </p>
            <h1 className="font-display text-4xl font-normal tracking-tight text-primary sm:text-5xl">
              All Abisaki coffee
            </h1>
            <p className="mt-3 text-base text-on-surface-variant">
              Add one or more bags, set quantities, then buy on WhatsApp.
            </p>
            <Link
              to="/"
              className="mt-4 inline-block text-xs font-semibold tracking-wider text-secondary uppercase hover:text-primary"
            >
              ← Back home
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {coffeeLots.map((lot) => {
              const qty = cart[lot.id] ?? 0
              const selected = qty > 0

              return (
                <motion.article
                  key={lot.id}
                  variants={fadeUp}
                  className={`flex flex-col rounded-2xl border bg-surface-container-lowest p-5 shadow-sm transition-colors ${
                    selected
                      ? 'border-primary'
                      : 'border-outline-variant/40 hover:border-primary/50'
                  }`}
                >
                  <div className="relative mb-4 h-56 overflow-hidden rounded-xl bg-surface-container-low">
                    <img
                      alt={lot.alt}
                      className="h-full w-full object-cover"
                      src={lot.image}
                    />
                    <div className="absolute top-3 left-3 rounded bg-surface-container-lowest/90 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-primary uppercase backdrop-blur-md">
                      {lot.unit}
                    </div>
                    <div className="font-display absolute right-3 bottom-3 rounded bg-primary px-2 py-1 text-xs font-bold text-white">
                      {lot.score}
                    </div>
                  </div>

                  <div className="mb-1 flex items-center gap-2 text-xs">
                    <span className="text-on-surface-variant">{lot.origin}</span>
                    <span className="text-outline-variant">/</span>
                    <span className="font-bold tracking-wider text-secondary uppercase">
                      {lot.process}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-normal text-primary">
                    {lot.name}
                  </h2>
                  <p className="mt-1 mb-3 flex-1 text-sm text-on-surface-variant">
                    {lot.description}
                  </p>
                  <p className="font-display mb-4 text-2xl font-bold text-primary">
                    {lot.price}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-outline-variant/30 pt-4">
                    {selected ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Decrease ${lot.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/50 text-primary transition-colors hover:bg-surface-container-low"
                          onClick={() => setQty(lot.id, qty - 1)}
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-primary">
                          {qty}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${lot.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/50 text-primary transition-colors hover:bg-surface-container-low"
                          onClick={() => setQty(lot.id, qty + 1)}
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="rounded-lg border border-outline-variant/50 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase transition-colors hover:border-primary hover:bg-surface-container-low"
                        onClick={() => addOne(lot.id)}
                      >
                        Add +1
                      </button>
                    )}
                    {selected && (
                      <button
                        type="button"
                        className="text-xs font-medium text-on-surface-variant underline-offset-2 hover:text-primary hover:underline"
                        onClick={() => setQty(lot.id, 0)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {totalItems > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-margin-desktop">
            <div>
              <p className="text-sm font-semibold text-primary">
                {totalItems} item{totalItems === 1 ? '' : 's'} selected
              </p>
              <p className="text-xs text-on-surface-variant">
                Est. total KES {totalKes.toLocaleString('en-KE')}
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-xs font-semibold tracking-widest text-on-primary uppercase transition-colors hover:bg-[#2b211e]"
              href={whatsappCartUrl(lines, coffeeLots)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-4" />
              Buy on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
