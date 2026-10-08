# Transfer website with TAS car rental styling

This is a complete runnable Next.js project, restyled from the supplied transfer archive using the visual language of the supplied car rental archive.

## Run

Use Node.js 20.9 or newer:

```sh
npm ci
npm run dev
```

Production validation and startup:

```sh
npm run build
npm run typecheck
npm run start
```

## Changes

- TAS red (#ef1d25), navy (#101a26), ink (#132235), muted blue-gray and pale section backgrounds.
- Arial/Helvetica typography, compact headings, subtle borders and 10px card corners.
- Rental-style header, branded wordmark, navy desktop quote button and responsive mobile menu.
- Navy airport hero with italic red headline accent; original transfer imagery retained.
- Consistent fleet cards, route tables, FAQ cards, buttons and dark footer across every page.
- Tailwind/PostCSS configuration, package manifest, lockfile and TypeScript alias configuration included.
- Dynamic route and blog params adapted to Next.js 15.

The transfer content, routes, guides, metadata, structured data and booking widget URL/site key are retained. Styling inside the third-party cross-origin booking iframe is controlled by the booking provider; this project's CSS styles its surrounding card only.

Original sample content and legal placeholders still require business review before launch. This update does not deploy the site or configure the booking provider.
