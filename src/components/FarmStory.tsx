import { motion } from 'motion/react'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

const paragraphs = [
  'Abisaki Farms sits in Limuru, in the cool highlands of Kiambu. The air is thin. The mornings are cold. Coffee grows slowly here — and that is the point.',
  'We grow the trees. We pick the cherries when they are ripe. We pulp, wash, and dry the beans on the same land. Then we roast and pack. Nothing is sent out for someone else to finish.',
  'From seedling to sealed bag, the coffee stays at Abisaki. That is how we keep taste honest, trail short, and quality in our hands.',
]

export function FarmStory() {
  return (
    <section
      className="w-full px-4 py-16 md:px-margin-desktop lg:py-24"
      id="story"
    >
      <motion.div
        className="mx-auto max-w-3xl"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.p
          className="mb-3 text-xs font-bold tracking-widest text-secondary uppercase"
          variants={fadeUp}
        >
          Abisaki Farms
        </motion.p>
        <motion.h2
          className="font-display mb-8 text-3xl font-normal tracking-tight text-primary sm:text-5xl"
          variants={fadeUp}
        >
          One farm. Every step.
        </motion.h2>
        <div className="space-y-6 text-base leading-relaxed text-on-surface-variant sm:text-lg">
          {paragraphs.map((text) => (
            <motion.p key={text.slice(0, 24)} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
