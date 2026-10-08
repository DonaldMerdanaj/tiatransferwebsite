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

The homepage fleet section is omitted. Twelve destinations, ten FAQs and three travel guides are included. Fares are confirmed by the booking provider; no sample prices or fake testimonials are published.

All twelve user-supplied destination photographs appear on the homepage cards, destination listing and matching transfer pages. Optimized local WebP assets include descriptive alt text and destination-specific social previews.

The booking engine is embedded only on `/booking`. Homepage and destination booking buttons lead there; destination selections are carried through the URL. The homepage header shows only the floating Book Now button after scrolling past 120px and restores full navigation at the top.

See [IMPLEMENTATION-NOTES.md](IMPLEMENTATION-NOTES.md) for booking resizing, optional analytics, checks, and the remaining approved assets and tracking configuration needed before launch. Completed-booking tracking is not active without the provider's supported completion contract.

Destination pages include individual booking guidance and complete per-page SEO metadata. See [SEO-RESEARCH-STATUS.md](SEO-RESEARCH-STATUS.md) for the pending source research and saved environment network changes needed to finish it.
