# Premium homepage implementation

The homepage uses the supplied airport photograph (optimized WebP), the TIA TRANSFER logo, server-rendered metadata and structured data. It previews six destination cards and four FAQs, with Show more links to all 12 destinations and all ten FAQs on their respective pages. Homepage FAQPage structured data matches the four displayed questions. Service benefits, three booking steps, an airport pickup guide, three informational guides and a final booking CTA remain. The homepage fleet section was omitted at the user's request. Existing `/fleet` remains accessible from navigation.

The primary red remains #ef1d25 for visual accents. Dark red #d9161d is used for small red text and white-text buttons to meet contrast requirements.

## Booking

The original booking service URL and site key are retained. The booking engine is embedded only on `/booking`, with the shared header and footer. It uses the supplied /booking provider endpoint and eto-iframe-booking ID, starts at 250px, and uses the provider's supplied resizer settings (log:false, targetOrigin:"*", checkOrigin:false), with no fixed minimum height. Homepage and destination buttons open the booking page; valid destination selections are passed to the engine. The provider controls whether the fields inside its cross-origin frame are horizontal or vertical; parent CSS cannot alter its layout. If the provider script fails or does not initialize within 15 seconds, a compact direct-booking link replaces the frame. No completed transaction was performed.

The homepage keeps its airport cover and other content sections. After 120px of scroll, its sticky header becomes transparent and hides the logo, navigation and menu button, leaving a floating Book Now link. Full navigation returns near the top. Other pages keep the standard header. The header retains its layout height to avoid shifting page content; the compact header passes pointer events through except on its booking and focused skip links. An open mobile menu closes on collapse, and focus transfers to the booking link if a focused header control is hidden.

## Facts and assets still requiring owner input

- All 12 destination photographs supplied through GitHub are used on the destination listing and individual transfer pages; six appear on the homepage preview cards. Their optimized WebP copies are in `public/images/destinations`, with verified intrinsic dimensions and scene-specific alt text in route data. Original uploaded files are retained. Copies preserve the original image composition; responsive card/page frames use focal positioning for Tirana, Durrës, Himarë and Theth. Transfer-page social previews and ImageObject structured data reference the matching destination photo. The 40.49 MB source set becomes 3.95 MB of optimized copies before responsive Next.js delivery. The supplied airport photograph remains on the homepage cover, pickup guide, guide previews and final CTA.
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

The supplied `/booking?site_key=...` embed is now used only on `/booking`. It starts at 250px with `scrolling="no"` and the provider's exact iframe ID, then resizes without a minimum-height constraint. Initialization supports modern and legacy resizer callbacks, and an unloaded script can retry after remount. Header Book Now buttons and a footer booking link open `/booking`.

The production build passed. Homepage and `/booking` layouts passed at 375, 768 and 1440px with no horizontal overflow; the new booking page's automated accessibility check found no violations. Mocked provider integration checks verified URL, iframe attributes, resizer settings, height adjustment, and that an initialized form survives the timeout. The live booking provider remains blocked by the environment proxy, so a real booking was not submitted. Earlier Lighthouse measurements above describe the previous homepage layout, not a new measurement of this update.

## Booking consolidation checks

Homepage checks at 320, 375, 768 and 1440px confirmed no booking iframe or provider requests, preserved destination/FAQ/guide counts, no horizontal overflow, and the Book Now-only header while scrolling. Header height stays unchanged during normal collapse and full navigation returns at the top. Closing an open mobile menu by scrolling preserves keyboard focus on Book Now. All 12 destination pages return 200 with booking CTAs and no iframe. The booking page accepts known destination queries, ignores unknown or repeated values, and keeps its standard header. A mocked provider verified the existing iframe URL/site key and resizing; no real transaction was submitted. Browser checks reported no application errors.

## Destination photography checks

The production build passed. All 12 transfer-page photos loaded at 375 and 1440px with matching social metadata and ImageObject dimensions, no horizontal overflow, and no application errors. Homepage photos loaded at 375, 768 and 1440px; the destination listing passed at 375 and 768px. The last desktop listing check remained incomplete after the Krujë image stalled in the browser; direct image requests returned 200. The user requested pushing the current changes without finishing that check.
