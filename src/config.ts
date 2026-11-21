import type { CartLine, CoffeeLot } from './types/coffee'

/** Abisaki Farms WhatsApp shop — update this number when confirmed. */
export const WHATSAPP_PHONE = '254700000000'

export const WHATSAPP_DISPLAY = '+254 700 000 000'

export function whatsappOrderUrl(product?: string) {
  const text = product
    ? `Hello Abisaki Farms — I would like to order ${product}.`
    : 'Hello Abisaki Farms — I would like to order coffee.'
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}

export const WHATSAPP_URL = whatsappOrderUrl()

export function whatsappCartUrl(
  lines: CartLine[],
  catalog: CoffeeLot[],
): string {
  const items = lines
    .map((line) => {
      const coffee = catalog.find((c) => c.id === line.id)
      if (!coffee || line.quantity < 1) return null
      return `• ${coffee.name} (${coffee.unit}) × ${line.quantity} — ${coffee.price}`
    })
    .filter(Boolean)

  const totalBags = lines.reduce((sum, l) => sum + l.quantity, 0)
  const totalKes = lines.reduce((sum, line) => {
    const coffee = catalog.find((c) => c.id === line.id)
    return sum + (coffee ? coffee.priceValue * line.quantity : 0)
  }, 0)

  const text = [
    'Hello Abisaki Farms — I would like to place an order:',
    '',
    ...items,
    '',
    `Items: ${totalBags}`,
    `Estimated total: KES ${totalKes.toLocaleString('en-KE')}`,
    '',
    'Please confirm availability and delivery.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
