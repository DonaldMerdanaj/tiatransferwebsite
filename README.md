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

See [IMPLEMENTATION-NOTES.md](IMPLEMENTATION-NOTES.md) for booking resizing, optional analytics, checks, and the remaining approved assets and tracking configuration needed before launch. Completed-booking tracking is not active without the provider's supported completion contract.
