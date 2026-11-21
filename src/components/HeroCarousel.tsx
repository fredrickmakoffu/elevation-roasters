import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../config'
import { carouselSlides, stats } from '../data'
import { fadeUp, fadeUpDelayed, stagger, VIEWPORT } from '../lib/motion'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)

  const show = useCallback((next: number) => {
    const len = carouselSlides.length
    if (next < 0) setIndex(len - 1)
    else if (next >= len) setIndex(0)
    else setIndex(next)
  }, [])

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % carouselSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [playing])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setPlaying(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') show(index - 1)
      if (e.key === 'ArrowRight') show(index + 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, show])

  const slide = carouselSlides[index]

  return (
    <section className="relative w-full overflow-hidden px-4 pt-8 pb-16 md:px-margin-desktop lg:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-auto mb-12 flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            className="font-display mb-6 text-4xl leading-[1.08] font-normal tracking-tight text-primary sm:text-5xl lg:text-7xl"
            custom={0.05}
            variants={fadeUpDelayed}
            initial="hidden"
            animate="show"
          >
            Fresh coffee from our farm
            <br className="hidden sm:inline" /> in{' '}
            <span className="text-secondary italic">Limuru</span>.
          </motion.h1>
          <motion.p
            className="mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg"
            custom={0.18}
            variants={fadeUpDelayed}
            initial="hidden"
            animate="show"
          >
            We grow, harvest, process, and pack every bag on the farm. Order
            straight from us on WhatsApp.
          </motion.p>
          <motion.a
            className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-8 py-3.5 text-xs font-semibold tracking-widest text-on-primary uppercase shadow transition-colors hover:bg-[#2b211e]"
            custom={0.3}
            variants={fadeUpDelayed}
            initial="hidden"
            animate="show"
            href={WHATSAPP_URL}
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon className="size-4" />
            <span>Order on WhatsApp</span>
          </motion.a>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-5xl"
          custom={0.42}
          variants={fadeUpDelayed}
          initial="hidden"
          animate="show"
        >
          <div className="relative rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-2 shadow-sm sm:p-3">
            <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-container-high sm:aspect-[16/9]">
              {carouselSlides.map((s, i) => (
                <div
                  key={s.badge}
                  className={`absolute inset-0 flex items-end transition-opacity duration-700 ${
                    i === index
                      ? 'z-20 opacity-100'
                      : 'pointer-events-none z-10 opacity-0'
                  }`}
                >
                  <img
                    alt={s.alt}
                    className="absolute inset-0 h-full w-full object-cover select-none"
                    src={s.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="rounded-lg border border-white/20 bg-primary/85 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                      {s.badge}
                    </span>
                  </div>
                  <div className="relative z-10 max-w-xl p-5 text-white sm:p-8">
                    <span className="mb-1 block text-xs tracking-wider text-primary-fixed uppercase">
                      {s.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl leading-snug font-normal sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/80 sm:text-sm">{s.body}</p>
                  </div>
                </div>
              ))}

              <div className="pointer-events-none absolute inset-y-0 right-3 left-3 z-30 flex items-center justify-between">
                <button
                  aria-label="Previous Slide"
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface/90 text-primary shadow transition-all active:scale-95 hover:bg-white"
                  type="button"
                  onClick={() => show(index - 1)}
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  aria-label="Next Slide"
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface/90 text-primary shadow transition-all active:scale-95 hover:bg-white"
                  type="button"
                  onClick={() => show(index + 1)}
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center justify-between gap-3 px-2 text-xs text-on-surface-variant sm:flex-row">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold tracking-tight text-primary">
                  [ {String(index + 1).padStart(2, '0')} / 04 ]
                </span>
                <span className="text-outline-variant">·</span>
                <span className="font-medium text-primary">{slide.counterTitle}</span>
              </div>
              <div className="flex items-center gap-2">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === index
                        ? 'h-1.5 w-6 bg-primary'
                        : 'h-1.5 w-1.5 bg-surface-container-highest hover:bg-secondary'
                    }`}
                    type="button"
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5"
              variants={fadeUp}
            >
              <div>
                <span className="mb-1 block text-[10px] font-semibold tracking-wider text-on-surface-variant uppercase">
                  {stat.label}
                </span>
                <p className="font-display text-3xl leading-none font-bold text-primary">
                  {stat.value}
                </p>
              </div>
              <p className="mt-3 text-xs font-medium text-secondary">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
