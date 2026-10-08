# Destination content and SEO status

## Implemented independently of external research

All 12 existing destination URLs use server-rendered content, unique titles and descriptions, explicit per-page Open Graph/Twitter metadata, canonical URLs, heading hierarchy, visible breadcrumbs with matching BreadcrumbList, route Service/WebPage schema, visible FAQ content with matching FAQPage schema, contextual internal links, and the existing booking engine. The sitemap uses a stable content update date.

The new written material is practical transfer-planning guidance based on the supplied destinations, previous project descriptions, and information customers need to provide when booking. It is not represented as independently researched tourism content. Existing journey durations remain clearly identified as planning estimates. No new prices, distances, schedules, landmarks, reviews, credentials or source citations were invented.

## External research blocker

No dedicated web-search tool is callable in this session. Following the environment restart on 8 October 2026, ordinary Bing HTML/RSS search requests succeed. Direct Albania tourism, Tirana Airport, UNESCO and selected publisher pages still return HTTP/proxy 403 responses. Search excerpts support limited general Tirana facts, but full source pages and detailed route information remain unread. Attempted destinations are not citations.

A network configuration draft was saved with these additional hostnames:

- www.bing.com
- www.google.com
- www.tirana-airport.com
- tirana-airport.com
- albania.al
- www.albania.al
- whc.unesco.org
- www.visittirana.com
- visittirana.com

Existing package-manager presets are preserved. Saving the draft does not apply runtime access or publish an environment. Review and save these changes in environment settings, then publish the environment as requested by the configuration tool.

## Research still required

After access is enabled, search authoritative destination/airport/tourism sources for all 12 routes, retrieve and read the selected sources, and enrich each page with verified geography, useful highlights and destination-specific context. Record actual source URLs in each guide's `sources` field only after reviewing them. Keep hotel-access, road-condition and journey-time uncertainty explicit. Retain checkout-confirmed fares rather than inventing prices.

Do not treat the current practical guidance as completion of the user's requested web research.

## Validation completed

The production build passed. Browser checks covered all 12 route pages: unique search/social titles and descriptions, correct canonical/OG URLs, one H1, three FAQs matching FAQPage JSON-LD, matching breadcrumb schema, Service/WebPage entities, and no mobile page overflow. All 26 internal linked pages returned 200; an unknown destination returned 404. The representative destination passed tablet/desktop layout checks and an automated WCAG-tagged accessibility scan. After the booking consolidation, all 12 destination pages return 200 with booking links and no embedded form; the engine is rendered only on `/booking`. These checks validate implementation, not unperformed source research or search rankings.
