import { CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { whatsappOrderUrl } from '../config'
import { fadeUp, VIEWPORT } from '../lib/motion'

const perks = [
  'Scheduled deliveries for offices and teams',
  'Pause, skip, or adjust volume anytime',
  'Same farm lot every cycle — no mystery blend',
]

const rows = [
  { label: 'Best for', value: 'Offices & companies' },
  { label: 'Delivery', value: 'Weekly or fortnightly' },
  { label: 'Volume', value: 'From 5kg per drop' },
  { label: 'Setup', value: 'WhatsApp — same day' },
]

export function CompanyPlans() {
  return (
    <section
      className="w-full px-4 py-16 md:px-margin-desktop lg:py-24"
      id="company-plans"
    >
      <motion.div
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-primary p-8 text-on-primary sm:p-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary-fixed uppercase">
              For companies
            </div>
            <h2 className="font-display text-3xl leading-tight font-normal tracking-tight sm:text-5xl">
              Coffee subscription for your office.
            </h2>
            <p className="max-w-xl text-base leading-relaxed font-light text-primary-fixed/80 sm:text-lg">
              We deliver Abisaki coffee on a fixed schedule to companies and
              teams. Tell us how much you drink — we handle the rest from the
              farm.
            </p>
            <div className="flex flex-wrap gap-5 pt-3">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-2 text-sm text-secondary-fixed"
                >
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <motion.a
                className="inline-block rounded-lg bg-secondary px-8 py-4 text-xs font-semibold tracking-widest text-on-secondary uppercase shadow-md transition-colors hover:bg-[#b5553a]"
                href={whatsappOrderUrl('a company coffee subscription')}
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ask about company plans
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-outline-variant/30 bg-surface p-7 text-primary shadow-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-5">
                <div>
                  <span className="mb-0.5 block text-xs font-semibold tracking-wider text-secondary uppercase">
                    Office plan
                  </span>
                  <h3 className="font-display text-2xl font-bold">
                    Team subscription
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold text-primary">
                    Custom
                  </span>
                  <span className="mt-0.5 block text-[10px] tracking-wide text-on-surface-variant uppercase">
                    Priced by volume
                  </span>
                </div>
              </div>
              <div className="space-y-3 py-5 text-xs">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-outline-variant/15 py-1.5 last:border-0"
                  >
                    <span className="text-on-surface-variant">{row.label}</span>
                    <span className="font-semibold text-primary">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-3.5 text-center">
                <p className="text-xs font-medium text-on-surface-variant">
                  Message us on WhatsApp with your headcount and we will quote a
                  plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
