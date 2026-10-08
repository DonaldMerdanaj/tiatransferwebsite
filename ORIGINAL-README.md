# TiaTransfer — modern Next.js pages (App Router)

Drop the `app/`, `components/`, and `lib/` folders into your existing
Next.js project (they use the `@/` alias — confirm it's set in `tsconfig.json`
under `compilerOptions.paths`).

## Modern homepage update

This bundle keeps the existing routes, data files, SEO structure, and booking
engine while refreshing the customer-facing experience:

- Sticky responsive header with a mobile navigation menu and persistent quote CTA
- More direct hero message: “Arrive in Albania. Feel looked after.”
- Two-column desktop hero that keeps the booking form beside, rather than over,
  the headline
- Live booking widget moved into a dedicated client component with iframe-resizer
  support
- Concrete reassurance strip using real service promises instead of unconnected
  review placeholders
- Open Graph, Twitter card, and page-level metadata for sharing and search
- Included image assets under `public/images/` so the referenced homepage visuals
  are available immediately

## Homepage redesign — what changed and why

Rebuilt following Welcome Pickups' homepage UX (researched from their live
site and a published UX case study), while keeping the **exact same TAS
booking engine** — same iframe, same `site_key`, nothing about the booking
mechanism changed.

1. **Photo-first hero.** Full-bleed image behind the headline instead of a
   plain background, booking widget as a floating card over it — Welcome
   Pickups' and most premium competitors' pattern. Uses the `tia-hero.jpg`
   already in your mockup assets.
2. **Reassurance copy directly under the booking widget.** This is the one
   change backed by real data: Welcome Pickups' own case study found their
   payment step was losing people not for lack of information but for lack
   of reassurance — adding "charged X days before" / cancellation terms at
   that exact point measurably improved conversion. Added three reassurance
   lines right under the iframe.
3. **Trust strip under the fold** — concrete service promises replace the old
   unconnected review placeholders, so the section is safe to ship now.
4. **"Meet your driver" section** (`lib/data/drivers.ts`) — the single
   biggest differentiator in Welcome Pickups' positioning: named drivers,
   languages, and a line of personality. The refreshed bundle uses branded
   initials until real driver portraits are available, so it never ships
   broken or misleading sample photos.
5. **Guides surfaced on the homepage**, not just linked from the footer —
   Welcome Pickups puts dozens of city-guide links directly on their
   homepage; you don't have the volume for that yet, but 3 featured cards
   pointing at `/blog` starts the same pattern.

## What's here

- **Homepage** (`app/page.tsx`) — the redesigned transfer landing page,
  booking widget included, unchanged engine
- **`components/BookingWidget.tsx`** — client-side iframe-resizer integration
  for the live airport booking form
- **`/routes` + `/routes/[slug]`** — one template generates a page per
  destination. Add entries to `lib/data/routes.ts` to grow from 5 routes to
  your full 14.
- **`/fleet`**, **`/faq`**, **`/about`**, **`/contact`**
- **`/blog` + `/blog/[slug]`** — 3 sample guides in `lib/data/blog.ts`
- **`/legal/*`** — terms, privacy, cancellation (placeholder copy, `TODO`)
- **`app/sitemap.ts`** and **`app/robots.ts`** — generated from the data
  files, no manual updates needed as you add routes or posts
- **`components/Breadcrumbs.tsx`** — visible trail + matching
  `BreadcrumbList` JSON-LD

## Before this goes live

1. Swap `tia-hero.jpg`, fleet images, and logo for your real assets.
2. Replace the branded driver initials with real portraits when available.
3. Wire real Tailwind + the DM Sans font into `app/layout.tsx`.
4. Fill in the `TODO`s: legal copy, About story, Contact address.
5. Extend `lib/data/routes.ts` to all 14 destinations.
6. Swap sample blog posts for real ones from your content pipeline.

## Why this structure

Matches the IA doc from earlier in this chat: homepage *is* the
airport-transfer landing page (no `/airport-transfer/` prefix), routes and
blog posts are data-driven so growing to 14 destinations or 50 guides never
means touching page code — just adding rows to `lib/data/`.
