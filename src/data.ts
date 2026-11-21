import coffeesJson from './data/coffees.json'
import type { CoffeeLot } from './types/coffee'

export type { CoffeeLot }

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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtswJGpn7McS5Hm24Vd9nQmT60jIgLOXrSLQguU-eCdQ6-4hj_NMbvwnbqJYDpGA_1j56ATRhJFeFy_6UVNLA-zkALrfh3LBOD-bsaOA5JczWGHLE6bSSmZWKFIEXLJ3WZYr7_L-_W8Z1hteY8fTrajzTO6z_VgPKiZBT8GEdzknLWvndAOrGUHdLDsIkOrx7llQI0EZLxHh_rnB6HdhVeSxZjddISPo5PkwJYZJ8',
    alt: 'Coffee trees at Abisaki Farms in Limuru',
    badge: '01 / The Farm · Limuru',
    eyebrow: 'Grown Here',
    title: 'Highland trees, cool mornings',
    body: 'Our SL28 and Ruiru 11 trees grow on the Limuru slopes. Cool nights. Slow ripening. Dense cherries.',
    counterTitle: 'The Farm',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjB1V-O9zvA7l-n8oPWp1afnSc_1qqXmCkmtv94Bk-Lna7FMi4Nk7L4ioCKIj1PEOWBsoS60AoKa7cn0IGb4fbcFotIj-WoHOGL2no_zzxxbKDFfNRWy9vl08yjb9C_5PEwHxLO-XP-IpW3Surmj4m7rJeMn1kEmot0n3QQc4CxjWHJLa2Z_Tw-zdS_upQ6OTQSjq4ddX4Y3oCu6kOKpNeway5KC9KcoBc3RYA3a8',
    alt: 'Harvesting coffee cherries at Abisaki',
    badge: '02 / Harvest',
    eyebrow: 'Picked by Hand',
    title: 'Only ripe red cherries',
    body: 'We pick selectively. One pass at a time. Unripe fruit stays on the tree.',
    counterTitle: 'Harvest',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZi_pZ1bHpQwSADzjUgYok-7W4wehIp_w7ZmbiTGxSKIoyCwSnfIy5_pgr_nhBdRQZans03adQZrZC_fu5mnqF7ub574HztSYAmFyS9lfXfe6Yw4bhi1vElPLgi3wSDruJrMKf_gWUVLXxQsD7Lm3qfq7gXQUNb1ccyq5MjhZte3qwMPlpvcWBhCZ-46Z5GKpejpSKKTFHiS8iRe2LpK4xun_qmYgQKY7O4_4xe-0',
    alt: 'Processing coffee on the farm',
    badge: '03 / Process',
    eyebrow: 'Washed on Site',
    title: 'Pulped, washed, dried here',
    body: 'Mill, wash, and dry — all on the farm. No middle step. No lost trail.',
    counterTitle: 'Process',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2F-xejLrTMEBrAhRe5kmsFZZ8fE1u6uaAY50iTsRBU6jfY151wHIIgHjH8S73V6UCnGe11Bi3Kh3PECuMEUZcXLPOYvFeFZaFTcke7IPEdIdwDKoWfZVpR46SkrK7n6tU_5VLPI2ppaFM2z6vSSqT3bC1JeaC5r6fXxVx8S0ss_MZaWtrk4-mIHZNhv7IiTxvKNmYP8hfEHA3CYgNp1wPOeUBPNjm3IuyzOw1p9Y',
    alt: 'Packaged Abisaki coffee ready for customers',
    badge: '04 / Package',
    eyebrow: 'Farm Fresh',
    title: 'Bagged at Abisaki',
    body: 'We roast and pack on the farm. You get coffee that never left Limuru until it reached you.',
    counterTitle: 'Package',
  },
]

export const coffeeLots: CoffeeLot[] = coffeesJson

export const featuredCoffees = coffeeLots.filter((c) => c.featured)

export const stats = [
  { label: 'Home', value: 'Limuru', detail: 'Kiambu, Kenya' },
  { label: 'Altitude', value: '2,100m', detail: 'Highland slopes' },
  { label: 'Process', value: 'On Farm', detail: 'Grow to bag' },
  { label: 'Order', value: 'WhatsApp', detail: 'Direct from us' },
]

export const manifesto = [
  {
    icon: 'terrain' as const,
    title: 'Grow',
    body: 'Our trees sit on the cool Limuru slopes. We raise them from seedling, prune through the seasons, and wait for full ripe cherries before anyone picks.',
    footer: 'SL28 · Ruiru 11',
  },
  {
    icon: 'air' as const,
    title: 'Harvest & Process',
    body: 'Cherries are hand-picked when red. Then we pulp, wash, and dry on the same farm — so the lot never leaves our care halfway through.',
    footer: 'All done on site',
  },
  {
    icon: 'science' as const,
    title: 'Package',
    body: 'We roast and bag at Abisaki. Short path from mill to sealed bag means fresher coffee when it reaches your office or home.',
    footer: 'Farm to bag',
  },
]
