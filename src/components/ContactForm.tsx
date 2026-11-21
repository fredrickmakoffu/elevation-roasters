import { motion } from 'motion/react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { fadeUp, VIEWPORT } from '../lib/motion'

/**
 * Fill these after you create the Google Form (see README / chat notes).
 * formAction: https://docs.google.com/forms/d/e/FORM_ID/formResponse
 * entry IDs: from the form’s “Get pre-filled link” or page source (entry.XXXXXXXX)
 */
const GOOGLE_FORM = {
  formAction: '',
  entries: {
    name: '',
    phone: '',
    message: '',
  },
} as const

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !phone || !message) return

    const wired =
      GOOGLE_FORM.formAction &&
      GOOGLE_FORM.entries.name &&
      GOOGLE_FORM.entries.phone &&
      GOOGLE_FORM.entries.message

    if (!wired) {
      // Local success until Google Form IDs are provided
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    const body = new FormData()
    body.append(GOOGLE_FORM.entries.name, name)
    body.append(GOOGLE_FORM.entries.phone, phone)
    body.append(GOOGLE_FORM.entries.message, message)

    try {
      await fetch(GOOGLE_FORM.formAction, {
        method: 'POST',
        mode: 'no-cors',
        body,
      })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className="w-full border-t border-outline-variant/30 bg-surface px-4 py-16 md:px-margin-desktop lg:py-20"
      id="contact"
    >
      <motion.div
        className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:gap-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-5">
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            Contact
          </p>
          <h2 className="font-display text-3xl font-normal tracking-tight text-primary sm:text-4xl">
            Reach Abisaki
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Questions about coffee, farm visits, or company plans? Send a note
            — we read every message.
          </p>
          <p className="mt-6 text-sm text-on-surface-variant">
            Prefer chat?{' '}
            <a
              className="font-semibold text-secondary hover:text-primary"
              href="mailto:info@abisakisfarm.com"
            >
              info@abisakisfarm.com
            </a>
          </p>
        </div>

        <div className="lg:col-span-7">
          {status === 'sent' ? (
            <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-low p-8">
              <p className="font-display text-2xl text-primary">Message sent.</p>
              <p className="mt-2 text-sm text-on-surface-variant">
                Thanks — we will get back to you soon.
              </p>
              <button
                type="button"
                className="mt-6 text-xs font-semibold tracking-wider text-secondary uppercase hover:text-primary"
                onClick={() => setStatus('idle')}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              className="space-y-5 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 sm:p-8"
              onSubmit={onSubmit}
            >
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold tracking-wider text-on-surface-variant uppercase"
                  htmlFor="contact-name"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold tracking-wider text-on-surface-variant uppercase"
                  htmlFor="contact-phone"
                >
                  Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  className="w-full rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary"
                  placeholder="+254 7XX XXX XXX"
                  type="tel"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold tracking-wider text-on-surface-variant uppercase"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary"
                  placeholder="How can we help?"
                />
              </div>
              {status === 'error' && (
                <p className="text-sm text-error">
                  Something went wrong. Try again or email us.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-lg bg-primary px-8 py-3.5 text-xs font-semibold tracking-widest text-on-primary uppercase transition-colors hover:bg-[#2b211e] disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}
