import { useState } from 'react'
import type { FormEvent } from 'react'

export function DispatchSignup() {
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section className="w-full bg-primary px-4 py-16 text-center text-white md:px-margin-desktop">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <span className="mb-3 text-xs font-semibold tracking-widest text-primary-fixed uppercase">
          Oslo Dispatch Ledger
        </span>
        <h2 className="font-display mb-3 text-3xl font-normal tracking-tight sm:text-4xl">
          Receive Micro-Lot Release Notices
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed font-light text-white/80">
          Weekly roast schedules, green coffee arrivals, and notifications when
          fresh 30-bag single-producer allocations become available.
        </p>
        {done ? (
          <p className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm text-primary-fixed">
            You are registered on the Oslo dispatch list.
          </p>
        ) : (
          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={onSubmit}
          >
            <input
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40 focus:outline-none"
              placeholder="email@domain.com"
              required
              type="email"
            />
            <button
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-xs font-semibold tracking-wider text-primary uppercase transition-all hover:bg-secondary-fixed"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-primary-fixed/70">
          Zero automated promotion. Strictly release notifications and harvest
          logs.
        </p>
      </div>
    </section>
  )
}
