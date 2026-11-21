import { motion } from 'motion/react'
import peopleData from '../data/people.json'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

export function People() {
  const { eyebrow, title, intro, people } = peopleData

  return (
    <section className="w-full px-4 py-16 md:px-margin-desktop lg:py-24" id="people">
      <motion.div
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-primary p-8 text-on-primary sm:p-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold tracking-widest text-primary-fixed uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-base font-light text-primary-fixed/80 sm:text-lg">
            {intro}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {people.map((person) => (
            <motion.article
              key={person.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  alt={person.name}
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={person.image}
                />
              </div>
              <h3 className="font-display text-xl font-normal">{person.name}</h3>
              <p className="mt-0.5 text-xs font-semibold tracking-wider text-secondary-fixed uppercase">
                {person.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-fixed/75">
                {person.bio}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
