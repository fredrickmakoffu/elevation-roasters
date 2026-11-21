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
