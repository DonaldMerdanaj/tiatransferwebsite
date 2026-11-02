# TiaTransfer — premium airport transfer website

Next.js App Router and TypeScript website with the supplied TIA TRANSFER logo, airport photograph, responsive red/navy/white design and the existing secure booking service.

## Run

Node.js 20.9 or newer:

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run typecheck
npm run start
```

The homepage includes a Luna-inspired booking-first layout, a destination selector and fleet category cards. Twelve destinations, ten FAQs and three travel guides are included. Fares are confirmed by the booking provider; no sample prices or fake testimonials are published.

All twelve user-supplied destination photographs appear on the destination listing and matching transfer pages. The homepage previews six destination cards and four FAQs, with Show more links to the complete Destinations and FAQ pages. Optimized local WebP assets include descriptive alt text and destination-specific social previews.

The booking engine is embedded only on `/booking`. The homepage destination selector and destination booking buttons lead there, carrying the destination through the URL. Dates, passengers, vehicles and final fares are collected by the existing provider. The shared header is scroll-aware: it hides after downward movement beyond the top of the page and reappears on upward movement with a compact logo and navigation. At the top, the full header and support bar return. A 12px movement threshold prevents jitter. Open mobile navigation and keyboard focus keep the header visible, and reduced-motion preferences disable its transitions.

The redesign uses existing TiaTransfer photography, fleet illustrations and service information. It adapts the booking-first hierarchy, numbered service rows, destination cards and fleet presentation from the Luna reference, without copying its public-bus timetable or fare claims. Homepage styles live in `app/transfer-home.css`; they are scoped to avoid changing destination and legal page layouts.

See [IMPLEMENTATION-NOTES.md](IMPLEMENTATION-NOTES.md) for booking resizing, optional analytics, checks, and the remaining approved assets and tracking configuration needed before launch. Completed-booking tracking is not active without the provider's supported completion contract.

Destination pages include individual booking guidance and complete per-page SEO metadata. See [SEO-RESEARCH-STATUS.md](SEO-RESEARCH-STATUS.md) for the pending source research and saved environment network changes needed to finish it.
