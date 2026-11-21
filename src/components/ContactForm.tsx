import { motion } from 'motion/react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { fadeUp, VIEWPORT } from '../lib/motion'

/** Abisaki contact Google Form */
const GOOGLE_FORM = {
  formAction:
    'https://docs.google.com/forms/d/e/1FAIpQLSe428ZsApJ4pPEoF7aISUf9eH6mpcs8nthCLaVE1s2Ktrs1aw/formResponse',
  entries: {
    firstName: 'entry.1682129986',
    lastName: 'entry.750259389',
    email: 'entry.551135454',
    phone: 'entry.4528205',
    country: 'entry.2123923083',
    topic: 'entry.246628006',
    message: 'entry.1179178576',
  },
} as const

const TOPICS = [
  'Coffee order',
  'Company subscription',
  'Farm visit',
  'General question',
  'Other',
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = String(data.get('firstName') ?? '').trim()
    const lastName = String(data.get('lastName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const country = String(data.get('country') ?? '').trim()
    const topic = String(data.get('topic') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!firstName || !phone || !message) return

    setStatus('sending')
    const body = new FormData()
    body.append(GOOGLE_FORM.entries.firstName, firstName)
    body.append(GOOGLE_FORM.entries.lastName, lastName)
    body.append(GOOGLE_FORM.entries.email, email)
    body.append(GOOGLE_FORM.entries.phone, phone)
    body.append(GOOGLE_FORM.entries.country, country)
    body.append(GOOGLE_FORM.entries.topic, topic)
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

  const fieldClass =
    'w-full rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary'

  const labelClass =
    'mb-1.5 block text-xs font-semibold tracking-wider text-on-surface-variant uppercase'

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
            Prefer email?{' '}
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
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-first-name">
                    First name
                  </label>
                  <input
                    id="contact-first-name"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    className={fieldClass}
                    placeholder="First name"
                    type="text"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-last-name">
                    Last name
                  </label>
                  <input
                    id="contact-last-name"
                    name="lastName"
                    autoComplete="family-name"
                    className={fieldClass}
                    placeholder="Last name"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="you@email.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-phone">
                    WhatsApp number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    className={fieldClass}
                    placeholder="+254 7XX XXX XXX"
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-country">
                    Country
                  </label>
                  <input
                    id="contact-country"
                    name="country"
                    autoComplete="country-name"
                    className={fieldClass}
                    placeholder="Kenya"
                    type="text"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-topic">
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClass} resize-y`}
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
