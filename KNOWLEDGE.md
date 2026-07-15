# Rifgroup N.V. — Business Knowledge Base

Central reference for this project. Read this instead of re-reading the whole codebase or the raw research notes.

## Company

- **Name:** Rifgroup N.V. (Facebook: "Rifgroup nv", handle: Rifspraypaint)
- **Location:** Paramaribo, Suriname — service area: "Paramaribo en omliggende gebieden, projecten daarbuiten in overleg"
- **Phone / WhatsApp (confirmed public):** +597 863-0295 → `https://wa.me/5978630295`
- **Category:** Painting, flooring and finishing contractor (NOT full general construction — no electrical/plumbing/structural claims)
- **Positioning:** evolved from spray-painting (roofs/walls) → general finishing contractor → current specialty: **epoxy floors (flakes, marble, solid), plus painting, roof coating, ceiling and drywall finishing**
- **Tagline used historically:** "Coloring your imagination"
- **No confirmed:** email, office address, opening hours, registration number, Instagram/TikTok/YouTube ownership

## Services (the 6 website categories)

1. **Epoxyvloeren** — flakes, marmer, effen, custom designs; homes, businesses, garages, shops, showrooms
2. **Binnen- en buitenschilderwerk** — living rooms, bedrooms, offices, walls, ceilings, facades; airless spray for big surfaces
3. **Dakspuiten / dakschilderen** — discolored/rusted roofs; customer sends photo + dimensions via WhatsApp for remote estimate
4. **Plafondafwerking** — mudding, machine sanding, leveling, primer, paint
5. **Drywall en wandafwerking** — finishing, joints, mudding, sanding, painting (installation NOT confirmed — only finishing)
6. **Project- en aannemingswerk** — complete finishing projects, renovations, subcontracting for contractors/developers

## Selling rule: outcome over service

We sell the **result**, not the labor. Copy pattern: service name + what life looks like after.
- Epoxy → "een vloer die makkelijk schoonmaakt en jaren mooi blijft"
- Schilderwerk → "uw huis ziet er weer nieuw uit"
- Dak → "een roestig dak dat weer nieuw oogt en beschermd is"

## Pricing

- **Never publish fixed prices.** Standard line: "Prijs op aanvraag, afhankelijk van oppervlakte, ondergrond, ontwerp en voorbereiding."
- Historical (do NOT present as current): roof painting US$3.75/m² (Aug 2022), 10% living/bedroom painting discount (holiday promo)

## Website rules (from the owner brief)

- **One-pager MVP** — ice-breaker for a potential client, not a big site
- **Keep the layout, images and fonts** of the provided design (dark hero, Space Grotesk + Inter, green accent) — don't redesign
- Copy must be **simple enough for a 5–10 year old**, in Dutch, but use keywords: epoxy, epoxyvloer, Paramaribo, Suriname, schilderwerk, dakspuiten
- **Conversion setup:** lead form (name, phone, location, service, size, timing) → opens WhatsApp; data only with an explicit **consent checkbox**
- Testimonials section required — current quotes are **placeholders**, swap for real ones from the owner
- Accessible: nav bar, breadcrumbs, labels, keyboard-friendly FAQ
- Not crowded, digestible

## Tech

- Plain static site, no build step: `index.html` is self-contained (Tailwind CDN + inline JS). Deployed by Netlify from repo root (`netlify.toml`).
- Logo: `assets/rif-logo.jpg`

## To confirm with the owner before "final" launch

Email, address, opening hours, districts served, whether drywall *installation* is offered, current price ranges, warranty terms, deposit/payment policy, free quotations?, materials/brands, permission to use Facebook photos, **real customer testimonials**, logo/brand colors, company registration. Also confirm the WhatsApp number — an earlier draft of this site used +597 851-5500, but public research only confirms +597 863-0295.
