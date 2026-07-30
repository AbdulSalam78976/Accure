# accure

Marketing site for **accure** — a systems-integration company serving digital government, energy, water, and environmental sectors. Built with Next.js App Router, React, and Tailwind CSS.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll-linked and hover animations
- [Vanta.js](https://www.vantajs.com/) (`vanta.net`, on `three@0.134.0`) for the animated network background

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # ESLint
```

## Project structure

- `app/` — routes: home (`/`), `/about`, `/capabilities`, `/sectors`
- `components/` — page sections (Navbar, HeroSection, About, DomainTabs, ServicesSection, WhyAccureSection, NewsSection, ContactUs, Footer) and the shared `VantaBackground` / `HorizontalScrollPin` utilities
- `components/ui/` — smaller reusable primitives (e.g. `TimelineContent`, `VerticalCutReveal`)

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to the connected branch triggers a new deployment automatically; see [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other targets.
