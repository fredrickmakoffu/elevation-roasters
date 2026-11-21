export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrBWqF9bQXahxeLA7LRmCoJPs3Y1ZS0W7kgsLCoTyomqIHXAswkrP_LOBbTtzkIYxFwrkyMyCVVwv8eToyMoRNohPChrv5ua5rqDDZ1dyuau_qfq15vlUYQu052lCDJ5nKtNlYmSpPLJfzbht7Aq5FN9lpyTv2qXspf31h8U1YGeop1yCS3vr2U_OVH9HjhWrScScC9b6jtwgR1YSl8ck6Cw_fBv6hyrtwIySzjpdmbU'

export type CarouselSlide = {
  image: string
  alt: string
  badge: string
  eyebrow: string
  title: string
  body: string
  counterTitle: string
}

export const carouselSlides: CarouselSlide[] = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjB1V-O9zvA7l-n8oPWp1afnSc_1qqXmCkmtv94Bk-Lna7FMi4Nk7L4ioCKIj1PEOWBsoS60AoKa7cn0IGb4fbcFotIj-WoHOGL2no_zzxxbKDFfNRWy9vl08yjb9C_5PEwHxLO-XP-IpW3Surmj4m7rJeMn1kEmot0n3QQc4CxjWHJLa2Z_Tw-zdS_upQ6OTQSjq4ddX4Y3oCu6kOKpNeway5KC9KcoBc3RYA3a8',
    alt: 'Oslo tasting room',
    badge: '01 / The Oslo Cupping Chamber · 59.91°N',
    eyebrow: 'Nordic Convection Profile',
    title: 'Zero Scorched Drum Contact',
    body: 'Fluidized hot air gently floats the green coffee beans, unlocking delicate floral terpenes and malic acidity without roasty astringency.',
    counterTitle: 'The Oslo Cupping Chamber',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtswJGpn7McS5Hm24Vd9nQmT60jIgLOXrSLQguU-eCdQ6-4hj_NMbvwnbqJYDpGA_1j56ATRhJFeFy_6UVNLA-zkALrfh3LBOD-bsaOA5JczWGHLE6bSSmZWKFIEXLJ3WZYr7_L-_W8Z1hteY8fTrajzTO6z_VgPKiZBT8GEdzknLWvndAOrGUHdLDsIkOrx7llQI0EZLxHh_rnB6HdhVeSxZjddISPo5PkwJYZJ8',
    alt: 'Gedeb Highlands harvest',
    badge: '02 / Gedeb High-Altitude Canopy · 2,200 MASL',
    eyebrow: 'Terroir & Genetics',
    title: 'Dense High-Altitude Heirloom',
    body: 'Freezing alpine night temperatures slow fruit maturation to over 8 months, packing cherries with complex sucrose chains.',
    counterTitle: 'Dense High-Altitude Cherries',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZi_pZ1bHpQwSADzjUgYok-7W4wehIp_w7ZmbiTGxSKIoyCwSnfIy5_pgr_nhBdRQZans03adQZrZC_fu5mnqF7ub574HztSYAmFyS9lfXfe6Yw4bhi1vElPLgi3wSDruJrMKf_gWUVLXxQsD7Lm3qfq7gXQUNb1ccyq5MjhZte3qwMPlpvcWBhCZ-46Z5GKpejpSKKTFHiS8iRe2LpK4xun_qmYgQKY7O4_4xe-0',
    alt: 'Thermal shock processing',
    badge: '03 / Thermal Shock Fermentation Lab · Cauca',
    eyebrow: 'Precision Biotechnology',
    title: 'Controlled Thermal Shock Washing',
    body: "Hot-and-cold water flushes trap volatile passionfruit and lychee esters inside the bean's cellular walls.",
    counterTitle: 'Hot & Cold Thermal Shocks',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2F-xejLrTMEBrAhRe5kmsFZZ8fE1u6uaAY50iTsRBU6jfY151wHIIgHjH8S73V6UCnGe11Bi3Kh3PECuMEUZcXLPOYvFeFZaFTcke7IPEdIdwDKoWfZVpR46SkrK7n6tU_5VLPI2ppaFM2z6vSSqT3bC1JeaC5r6fXxVx8S0ss_MZaWtrk4-mIHZNhv7IiTxvKNmYP8hfEHA3CYgNp1wPOeUBPNjm3IuyzOw1p9Y',
    alt: 'Kenya harvest sensory',
    badge: '04 / Cold-Chain Hermetic Dispatch',
    eyebrow: 'Sensory Preservation',
    title: 'Hermetic Nitrogen Resting',
    body: 'Displaced oxygen allows beans to complete post-roast degassing safely in flight, arriving calibrated for extraction on Day 12.',
    counterTitle: 'The 10-Day Peak Sensory Window',
  },
]

export type CoffeeLot = {
  id: string
  name: string
  origin: string
  process: string
  elevation: string
  score: string
  description: string
  notes: string[]
  price: string
  image: string
  alt: string
}

export const coffeeLots: CoffeeLot[] = [
  {
    id: 'chelbesa',
    name: 'Chelbesa Lot 14',
    origin: 'Ethiopia',
    process: 'Washed Heirloom',
    elevation: '2,100 MASL · GEDEB',
    score: '92.25 SCA',
    description:
      'Wild shaded canopy garden harvest. Opens with delicate bergamot, steeped jasmine tea, and crisp stone fruit.',
    notes: ['Wild Bergamot', 'White Peach', 'Steeped Jasmine'],
    price: '$28.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtswJGpn7McS5Hm24Vd9nQmT60jIgLOXrSLQguU-eCdQ6-4hj_NMbvwnbqJYDpGA_1j56ATRhJFeFy_6UVNLA-zkALrfh3LBOD-bsaOA5JczWGHLE6bSSmZWKFIEXLJ3WZYr7_L-_W8Z1hteY8fTrajzTO6z_VgPKiZBT8GEdzknLWvndAOrGUHdLDsIkOrx7llQI0EZLxHh_rnB6HdhVeSxZjddISPo5PkwJYZJ8',
    alt: 'Chelbesa coffee harvest',
  },
  {
    id: 'bermudez',
    name: 'Diego Bermudez Y-05',
    origin: 'Colombia',
    process: 'Thermal Shock Y-05',
    elevation: '1,930 MASL · CAUCA',
    score: '93.50 SCA',
    description:
      'Controlled bioreactor anaerobic fermentation with hot-and-cold flash washes. Intense lychee, bright passionfruit, and candied citrus.',
    notes: ['Lychee Gelee', 'Electric Peach', 'Mandarin Peel'],
    price: '$34.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZi_pZ1bHpQwSADzjUgYok-7W4wehIp_w7ZmbiTGxSKIoyCwSnfIy5_pgr_nhBdRQZans03adQZrZC_fu5mnqF7ub574HztSYAmFyS9lfXfe6Yw4bhi1vElPLgi3wSDruJrMKf_gWUVLXxQsD7Lm3qfq7gXQUNb1ccyq5MjhZte3qwMPlpvcWBhCZ-46Z5GKpejpSKKTFHiS8iRe2LpK4xun_qmYgQKY7O4_4xe-0',
    alt: 'Diego Bermudez coffee',
  },
  {
    id: 'nyeri',
    name: 'Nyeri Hill PB',
    origin: 'Kenya',
    process: 'Peaberry Washed',
    elevation: '1,850 MASL · NYERI',
    score: '91.75 SCA',
    description:
      'Dense round peaberry harvest roasted with laser uniformity. Crisp phosphoric acidity, blackcurrant, and sparkling rhubarb.',
    notes: ['Blackcurrant', 'Sparkling Rhubarb', 'Ruby Grapefruit'],
    price: '$26.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2F-xejLrTMEBrAhRe5kmsFZZ8fE1u6uaAY50iTsRBU6jfY151wHIIgHjH8S73V6UCnGe11Bi3Kh3PECuMEUZcXLPOYvFeFZaFTcke7IPEdIdwDKoWfZVpR46SkrK7n6tU_5VLPI2ppaFM2z6vSSqT3bC1JeaC5r6fXxVx8S0ss_MZaWtrk4-mIHZNhv7IiTxvKNmYP8hfEHA3CYgNp1wPOeUBPNjm3IuyzOw1p9Y',
    alt: 'Nyeri Hill Peaberry coffee',
  },
]

export const stats = [
  { label: 'Quality Benchmark', value: '91.5+', detail: 'Mean Cupping Score' },
  { label: 'Highland Terroir', value: '2,150m', detail: 'Peak Altitude Harvest' },
  { label: 'Ethical Sourcing', value: '+35%', detail: 'Direct Farmgate Premium' },
  { label: 'Degassing Cycle', value: 'Day 12', detail: 'Peak Flavor Window' },
]

export const manifesto = [
  {
    icon: 'terrain' as const,
    title: 'Extreme Elevation',
    body: 'Grown exclusively above 1,800–2,200 meters. Sharp diurnal temperature drops force coffee trees to concentrate complex sugars, yielding exceptional density and pure floral aromatics.',
    footer: '2,000+ MASL Certified Lots',
  },
  {
    icon: 'air' as const,
    title: 'Single-Pass Convection',
    body: 'Beans float inside continuous laminar hot air streams without contacting conductive cast-iron drums. Zero face burning, zero char, and ultra-high Agtron solubility.',
    footer: 'Agtron 96/108 Ultra-Light',
  },
  {
    icon: 'science' as const,
    title: 'Nitrogen Resting',
    body: 'Hermetically sealed with inert food-grade nitrogen immediately post-cooling. CO2 dissipates under controlled positive pressure so lots land at peak flavor on Day 12.',
    footer: 'Zero Oxidation in Transit',
  },
]
