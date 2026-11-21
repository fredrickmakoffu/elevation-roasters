export function DialInLab() {
  return (
    <section
      className="w-full px-4 py-16 md:px-margin-desktop lg:py-24"
      id="dial-in-lab"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-2 block text-xs font-bold tracking-widest text-secondary uppercase">
            Laboratory Precision
          </span>
          <h2 className="font-display text-3xl font-normal text-primary sm:text-5xl">
            Water Chemistry &amp; Dial Geometry
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-on-surface-variant">
            Every micro-lot release comes calibrated with refractometer TDS
            readings and precise burr setting benchmarks.
          </p>
        </div>

        <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-low p-6 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-5">
              <span className="rounded-md bg-surface-container-highest px-3 py-1 text-xs font-semibold text-primary uppercase">
                Refractometer Calibrated
              </span>
              <h3 className="font-display text-2xl leading-snug font-normal text-primary sm:text-3xl">
                Empirical data for uncompromising home extraction.
              </h3>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-5">
                  <span className="block text-[10px] font-semibold text-on-surface-variant uppercase">
                    Target TDS
                  </span>
                  <span className="font-display mt-0.5 block text-2xl font-bold text-primary">
                    1.38%
                  </span>
                  <span className="mt-1 block text-xs font-medium text-secondary">
                    20.4% Yield Target
                  </span>
                </div>
                <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-5">
                  <span className="block text-[10px] font-semibold text-on-surface-variant uppercase">
                    Water Mineral Spec
                  </span>
                  <span className="font-display mt-0.5 block text-2xl font-bold text-primary">
                    65 ppm
                  </span>
                  <span className="mt-1 block text-xs font-medium text-secondary">
                    2:1 Mg/Ca Buffer
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5">
                <p className="mb-3 text-xs font-semibold text-primary uppercase">
                  Calibrated Burr Alignments:
                </p>
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                  {[
                    { name: 'Mahlkönig EK43', value: '8.2' },
                    { name: 'Fellow Ode Gen 2', value: '4.1' },
                    { name: 'Comandante C40', value: '24 Clicks' },
                  ].map((g) => (
                    <div
                      key={g.name}
                      className="rounded-lg bg-surface-container-low p-3"
                    >
                      <span className="block text-[10px] text-on-surface-variant uppercase">
                        {g.name}
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-primary">
                        {g.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-xs sm:p-8 lg:col-span-7">
              <div className="mb-4 flex w-full items-center justify-between">
                <span className="text-xs font-semibold text-primary uppercase">
                  Sensory Geometry · Chelbesa G1
                </span>
                <span className="rounded bg-surface-container-high px-2.5 py-1 text-xs font-semibold text-secondary">
                  Floral Benchmark
                </span>
              </div>
              <div className="relative flex aspect-square w-full max-w-sm items-center justify-center">
                <svg
                  className="h-full w-full text-outline-variant"
                  viewBox="0 0 300 300"
                >
                  <polygon
                    fill="none"
                    points="150,30 264,96 264,228 150,294 36,228 36,96"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                  <polygon
                    fill="none"
                    points="150,60 238,111 238,213 150,264 62,213 62,111"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                  <polygon
                    fill="none"
                    points="150,90 212,126 212,198 150,234 88,198 88,126"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                  <line
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    x1="150"
                    x2="150"
                    y1="162"
                    y2="30"
                  />
                  <line
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    x1="150"
                    x2="264"
                    y1="162"
                    y2="96"
                  />
                  <line
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    x1="150"
                    x2="264"
                    y1="162"
                    y2="228"
                  />
                  <line
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    x1="150"
                    x2="150"
                    y1="162"
                    y2="294"
                  />
                  <line
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    x1="150"
                    x2="36"
                    y1="162"
                    y2="228"
                  />
                  <line
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                    x1="150"
                    x2="36"
                    y1="162"
                    y2="96"
                  />
                  <polygon
                    className="fill-primary-fixed/60 stroke-secondary"
                    points="150,42 250,105 240,218 150,245 55,200 50,102"
                    strokeWidth="2.5"
                  />
                  {[
                    [150, 42],
                    [250, 105],
                    [240, 218],
                    [150, 245],
                    [55, 200],
                    [50, 102],
                  ].map(([cx, cy]) => (
                    <circle
                      key={`${cx}-${cy}`}
                      className="fill-primary"
                      cx={cx}
                      cy={cy}
                      r="4"
                    />
                  ))}
                </svg>
                <span className="absolute top-1 bg-surface-container-lowest px-1 text-[11px] font-semibold text-primary uppercase">
                  Florals (9.5)
                </span>
                <span className="absolute top-1/4 right-0 bg-surface-container-lowest px-1 text-[11px] font-semibold text-primary uppercase">
                  Malic Acidity (9.2)
                </span>
                <span className="absolute right-0 bottom-1/4 bg-surface-container-lowest px-1 text-[11px] font-semibold text-primary uppercase">
                  Sweetness (9.0)
                </span>
                <span className="absolute bottom-1 bg-surface-container-lowest px-1 text-[11px] font-semibold text-primary uppercase">
                  Body (7.8)
                </span>
                <span className="absolute bottom-1/4 left-0 bg-surface-container-lowest px-1 text-[11px] font-semibold text-primary uppercase">
                  Clarity (9.6)
                </span>
                <span className="absolute top-1/4 left-0 bg-surface-container-lowest px-1 text-[11px] font-semibold text-primary uppercase">
                  Aftertaste (9.2)
                </span>
              </div>
              <div className="mt-4 flex items-center gap-6 text-xs text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-secondary" />
                  Chelbesa Actual Cupping
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-outline-variant" />
                  Commercial Benchmark
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
