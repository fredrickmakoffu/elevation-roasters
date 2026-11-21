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
  priceValue: number
  unit: string
  image: string
  alt: string
  featured: boolean
}

export type CartLine = {
  id: string
  quantity: number
}
