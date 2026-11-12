# PortLine Premium Logistics — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Setup

```
npm install
npm run dev
```

Open http://localhost:3000

## Build

```
npm run build
npm run start
```

## Structure

- `app/` — routes (home, about, services, services/[slug], track, contact, quote)
- `components/layout` — Navbar, Footer
- `components/home` — homepage sections
- `components/tracking` — shipment tracking form + timeline (mock data)
- `components/forms` — Quote and Contact forms (client-side validation; wire up an API route or endpoint of your choice to actually send them)
- `components/ui` — Button, Input, Select, Textarea, Container, SectionHeading
- `lib/data` — services list, nav items (single source of truth — edit here to change content)
- `lib/types.ts` — shared types

## Notes for the client handoff

- No stock photography is included. Hero, About, and Global Operations sections are built with custom SVG route/terminal graphics so the site never ships with fake or generic AI-looking photos. Swap in real corporate photography at the marked `{/* PHOTO SLOT */}` comments in `Hero.tsx`, `AboutSection` in `about/page.tsx`, and `GlobalOperations.tsx`.
- Quote and Contact forms are fully validated on the client but do not send anywhere yet — connect `handleSubmit` in each to a route handler, email service, or CRM.
- Tracking uses mock shipment data in `TrackingForm.tsx` for the demo. Replace with a real tracking API/database lookup.
- Colors, spacing and type scale are defined as CSS variables in `app/globals.css` — change the palette in one place.
