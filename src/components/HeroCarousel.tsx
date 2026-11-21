import { ArrowDown, ArrowLeft, ArrowRight, FlaskConical } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { carouselSlides, stats } from '../data'

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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-high px-3 py-1 text-[11px] tracking-wider text-on-surface-variant uppercase">
            <span>OSLO HARVEST DISPATCH</span>
            <span className="h-1 w-1 rounded-full bg-secondary" />
            <span>RELEASE NO. 42</span>
          </div>
          <h1 className="font-display mb-6 text-4xl leading-[1.08] font-normal tracking-tight text-primary sm:text-5xl lg:text-7xl">
            Coffee Articulated by <br className="hidden sm:inline" />
            <span className="text-secondary italic">Altitude</span>, Climate &amp;
            Chemistry.
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed font-normal text-on-surface-variant sm:text-lg">
            Ultra-light Nordic convection roasts from micro-climates above 2,000
            meters. Clean stone fruit, delicate florals, and natural sucrose.
            Dispatched fresh from Oslo in 48h.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-semibold tracking-widest text-on-primary uppercase shadow transition-all hover:bg-secondary"
              href="#harvest-showcase"
            >
              <span>Explore Current Harvest</span>
              <ArrowDown className="size-3.5" />
            </a>
            <a
              className="flex items-center gap-2 rounded-xl border border-outline-variant/60 bg-surface-container-lowest px-7 py-3.5 text-xs font-semibold tracking-widest text-primary uppercase transition-all hover:border-primary hover:bg-surface-container-low"
              href="#manifesto"
            >
              <FlaskConical className="size-3.5" />
              <span>How We Roast</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="relative rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-2 shadow-sm sm:p-3">
            <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-container-high sm:aspect-[16/9]">
              {carouselSlides.map((s, i) => (
                <div
                  key={s.badge}
                  className={`absolute inset-0 flex items-end transition-opacity duration-700 ${
                    i === index
                      ? 'z-20 opacity-100'
                      : 'z-10 opacity-0 pointer-events-none'
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
              <button
                className="flex items-center gap-1.5 rounded bg-surface-container-low px-2.5 py-1 text-[11px] font-semibold text-on-surface-variant hover:bg-surface-container"
                type="button"
                onClick={() => setPlaying((p) => !p)}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${playing ? 'bg-emerald-500' : 'bg-outline'}`}
                />
                <span>{playing ? 'Auto-Tour ON' : 'Auto-Tour PAUSED'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
