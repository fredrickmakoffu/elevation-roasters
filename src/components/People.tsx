import peopleData from '../data/people.json'

export function People() {
  const { eyebrow, title, intro, people } = peopleData

  return (
    <section className="w-full px-4 py-16 md:px-margin-desktop lg:py-24" id="people">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-primary p-8 text-on-primary sm:p-14">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <article
              key={person.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <img
                alt={person.name}
                className="mb-4 aspect-square w-full rounded-xl object-cover"
                src={person.image}
              />
              <h3 className="font-display text-xl font-normal">{person.name}</h3>
              <p className="mt-0.5 text-xs font-semibold tracking-wider text-secondary-fixed uppercase">
                {person.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-fixed/75">
                {person.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
