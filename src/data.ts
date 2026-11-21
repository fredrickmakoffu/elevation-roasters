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
    id: 'washed-aa',
    name: 'Abisaki Washed AA',
    origin: 'Limuru, Kenya',
    process: 'Fully Washed',
    elevation: '2,100 MASL · LIMURU',
    score: 'AA',
    description:
      'Clean blackcurrant, bright citrus, and a long finish. Our flagship washed lot.',
    notes: ['Blackcurrant', 'Citrus', 'Brown Sugar'],
    price: 'KES 1,200',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtswJGpn7McS5Hm24Vd9nQmT60jIgLOXrSLQguU-eCdQ6-4hj_NMbvwnbqJYDpGA_1j56ATRhJFeFy_6UVNLA-zkALrfh3LBOD-bsaOA5JczWGHLE6bSSmZWKFIEXLJ3WZYr7_L-_W8Z1hteY8fTrajzTO6z_VgPKiZBT8GEdzknLWvndAOrGUHdLDsIkOrx7llQI0EZLxHh_rnB6HdhVeSxZjddISPo5PkwJYZJ8',
    alt: 'Abisaki Washed AA coffee',
  },
  {
    id: 'honey',
    name: 'Abisaki Honey',
    origin: 'Limuru, Kenya',
    process: 'Honey Process',
    elevation: '2,080 MASL · LIMURU',
    score: 'AB',
    description:
      'Softer body, ripe stone fruit, and caramel sweetness. Dried with mucilage on.',
    notes: ['Peach', 'Caramel', 'Honey'],
    price: 'KES 1,350',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZi_pZ1bHpQwSADzjUgYok-7W4wehIp_w7ZmbiTGxSKIoyCwSnfIy5_pgr_nhBdRQZans03adQZrZC_fu5mnqF7ub574HztSYAmFyS9lfXfe6Yw4bhi1vElPLgi3wSDruJrMKf_gWUVLXxQsD7Lm3qfq7gXQUNb1ccyq5MjhZte3qwMPlpvcWBhCZ-46Z5GKpejpSKKTFHiS8iRe2LpK4xun_qmYgQKY7O4_4xe-0',
    alt: 'Abisaki Honey process coffee',
  },
  {
    id: 'peaberry',
    name: 'Abisaki Peaberry',
    origin: 'Limuru, Kenya',
    process: 'Washed Peaberry',
    elevation: '2,120 MASL · LIMURU',
    score: 'PB',
    description:
      'Dense single-seed beans. Sharp acidity, red fruit, and a crisp finish.',
    notes: ['Red Berry', 'Floral', 'Cocoa'],
    price: 'KES 1,450',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2F-xejLrTMEBrAhRe5kmsFZZ8fE1u6uaAY50iTsRBU6jfY151wHIIgHjH8S73V6UCnGe11Bi3Kh3PECuMEUZcXLPOYvFeFZaFTcke7IPEdIdwDKoWfZVpR46SkrK7n6tU_5VLPI2ppaFM2z6vSSqT3bC1JeaC5r6fXxVx8S0ss_MZaWtrk4-mIHZNhv7IiTxvKNmYP8hfEHA3CYgNp1wPOeUBPNjm3IuyzOw1p9Y',
    alt: 'Abisaki Peaberry coffee',
  },
]

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
    body: 'Coffee trees on our Limuru land. We tend them from seedling to harvest.',
    footer: 'SL28 · Ruiru 11',
  },
  {
    icon: 'air' as const,
    title: 'Harvest & Process',
    body: 'Hand-picked ripe cherries. Pulped, washed, and dried on the same farm.',
    footer: 'Nothing leaves early',
  },
  {
    icon: 'science' as const,
    title: 'Package',
    body: 'Roasted and bagged at Abisaki. Fresh coffee, short path to your cup.',
    footer: 'Farm to bag',
  },
]
