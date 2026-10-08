# Premium homepage implementation

The homepage uses the supplied airport photograph (optimized WebP), the TIA TRANSFER logo, server-rendered metadata and structured data. It includes 12 destination pages, service benefits, three booking steps, an airport pickup guide, ten FAQs, three informational guides and a final booking CTA. The homepage fleet section was omitted at the user's request. Existing `/fleet` remains accessible from navigation.

The primary red remains #ef1d25 for visual accents. Dark red #d9161d is used for small red text and white-text buttons to meet contrast requirements.

## Booking

The original booking service URL and site key are retained. Every booking iframe now uses the supplied /booking endpoint and eto-iframe-booking ID, starts at 250px, and uses the provider's supplied resizer settings (log:false, targetOrigin:"*", checkOrigin:false), with no fixed minimum height. The homepage booking card is on the airport hero beside the headline on desktop, and below the headline within the cover on mobile. A dedicated /booking page uses the same header, footer and engine. The provider controls whether the fields inside its cross-origin frame are horizontal or vertical; parent CSS cannot alter its layout. If the provider script fails or does not initialize within 15 seconds, a compact direct-booking link replaces the frame. No completed transaction was performed.

## Facts and assets still requiring owner input

- No approved destination or scenic photographs were supplied. Destination cards currently use clean typographic headers without pretending airport images are destination photographs. The actual uploaded airport photograph is used for the hero, pickup guide, guide previews and final CTA. Destination data supports an optional local `image` for later approved photography.
- No genuine customer reviews or verified review profile were supplied, so a reviews section is omitted.
- No fares are advertised. The former sample prices and unverified waiting/cancellation promises were removed from destination data and templates. Journey times are explicitly estimates.
- Contact page email/phone are retained from the supplied project, not independently verified. Footer directs visitors to that page. No social profiles or company registration details were invented.
- General booking/privacy/cancellation information replaces the old placeholder legal text and points customers to the actual checkout conditions. This is not a substitute for the business's approved full legal policies.

## Analytics and conversions

Set NEXT_PUBLIC_GA4_MEASUREMENT_ID to a real G-... ID and rebuild to enable optional GA4. Analytics loads only after a visitor accepts. Visitors can reopen analytics preferences. A booking button click records `booking_interest`, not a completed reservation.

Completed-booking conversion tracking is deliberately not enabled without a documented provider completion signal. The booking provider must supply a supported thank-you redirect, authenticated webhook, or origin-validated postMessage contract with a confirmed booking reference. Once that contract is supplied, add deduplicated completed-booking events and test successful/cancelled/repeated callbacks. Never infer a conversion from opening the iframe, a click or a resize event.

## Development

Node.js 20.9+: `npm ci`, `npm run dev`. Production: `npm run build`, `npm run typecheck`, `npm run start`.

## Measurement limitations

Lighthouse reports are local mobile laboratory checks with the booking provider blocked by this environment. They do not establish production Core Web Vitals, field INP, live booking performance or full WCAG 2.2 AA conformance. Real-provider resizing and completed transactions need a live-site check. Search Console verification requires the owner's property access; sitemap and canonical metadata are included.

## Verified local results

- Production build and TypeScript passed.
- Mobile Lighthouse: Performance 96, Accessibility 100, SEO 100, Best Practices 96. LCP 2.43 seconds, CLS 0, Total Blocking Time 121 ms. TBT is not field INP. Best Practices is affected by the blocked external booking requests.
- Automated axe WCAG-tagged checks found no violations on the homepage at 375, 768 and 1440px. This is not a full manual conformance assessment.
- Twelve destination cards, 25 linked local pages, keyboard FAQ activation, mobile menu/Escape and absence of an admin route were checked.
- A mocked provider script verified that the booking iframe can shrink to 244px with computed min-height 0 and resizing with the supplied vendor settings. This tests our integration, not the live provider or a completed booking.
- The external booking provider and remote photography sources are blocked by this environment's egress policy. Booking and image delivery must also be checked on the deployed domain.

The hero uses pre-generated 480, 640, 828 and 1440px WebP sources to avoid runtime image transformation and to preserve reliable loading at every tested width. No broken images or horizontal page overflow remained at 375, 768 and 1440px.

## Booking form update

The supplied `/booking?site_key=...` embed is now used on the homepage, destination pages and new `/booking` page. It starts at 250px with `scrolling="no"` and the provider's exact iframe ID, then resizes without a minimum-height constraint. Initialization supports modern and legacy resizer callbacks, and an unloaded script can retry after remount. Header Book Now buttons and a footer booking link open `/booking`.

The production build passed. Homepage and `/booking` layouts passed at 375, 768 and 1440px with no horizontal overflow; the new booking page's automated accessibility check found no violations. Mocked provider integration checks verified URL, iframe attributes, resizer settings, height adjustment, and that an initialized form survives the timeout. The live booking provider remains blocked by the environment proxy, so a real booking was not submitted. Earlier Lighthouse measurements above describe the previous homepage layout, not a new measurement of this update.
