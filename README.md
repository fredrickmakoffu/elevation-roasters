# Abisaki Farms

Coffee site for **Abisaki Farms** in Limuru, Kenya — grow, harvest, process, and pack on the farm. Orders go through WhatsApp.

Set the shop number in `src/config.ts` (`WHATSAPP_PHONE`).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Fly.io (static via `gostatic`)

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
flyctl deploy --remote-only
```

- Repo: https://github.com/fredrickmakoffu/elevation-roasters
- Live: https://elevation-roasters.fly.dev
