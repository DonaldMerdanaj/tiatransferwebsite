import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingWidget } from "@/components/BookingWidget";
import { Icon } from "@/components/Icon";
import { routes, getRouteBySlug } from "@/lib/data/routes";
import { getRouteGuide } from "@/lib/data/route-guides";
import { posts } from "@/lib/data/blog";

const site = "https://tiatransfer.com";
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();
  const guide = getRouteGuide(slug);
  const title = `Tirana Airport to ${route.city} Transfer | TiaTransfer`;
  const description = guide.metaDescription;
  const url = `${site}/routes/${route.slug}`;
  const images = [
    {
      url: "/images/tia-airport.webp",
      width: 1440,
      height: 1800,
      alt: "Travellers outside Tirana International Airport",
    },
  ];
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "TiaTransfer",
      locale: "en_GB",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();
  const guide = getRouteGuide(slug);
  const url = `${site}/routes/${slug}`;
  const related = guide.relatedSlugs
    .map(getRouteBySlug)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const post = posts.find((item) => item.relatedRouteSlug === slug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site}/#organization`,
        name: "TiaTransfer",
        url: site,
        logo: `${site}/images/tia-transfer-logo.webp`,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `Tirana Airport to ${route.city} Transfer | TiaTransfer`,
        description: guide.metaDescription,
        inLanguage: "en",
        dateModified: guide.updatedAt,
        mainEntity: { "@id": `${url}#service` },
        about: { "@type": "Place", name: route.city },
        ...(guide.sources.length
          ? { citation: guide.sources.map((source) => source.url) }
          : {}),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        url,
        name: `Private Tirana Airport to ${route.city} transfer`,
        serviceType: "Private airport transfer",
        description: guide.metaDescription,
        provider: { "@id": `${site}/#organization` },
        areaServed: { "@type": "Place", name: route.city },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
  return (
    <>
      <SiteHeader />
      <Breadcrumbs
        items={[
          { name: "Destinations", href: "/routes" },
          { name: `Tirana Airport to ${route.city}`, href: `/routes/${slug}` },
        ]}
      />
      <main
        id="main-content"
        className="content-width route-detail destination-detail"
        tabIndex={-1}
      >
        <header className="destination-intro">
          <p className="eyebrow-premium">Private airport transfer</p>
          <h1>Tirana Airport to {route.city} Transfer</h1>
          {guide.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="button button-red" href="#quote">
            Book your transfer to {route.city} <Icon name="arrow" />
          </a>
        </header>
        <div className="route-facts" aria-label="Journey planning details">
          <p>
            <strong>{route.durationLabel}</strong>
            <br />
            Estimated travel time
          </p>
          <p>
            <strong>Private &amp; direct</strong>
            <br />
            Provide your destination address
          </p>
          <p>
            <strong>Fare confirmed at booking</strong>
            <br />
            Review your route and vehicle
          </p>
        </div>
        <p className="section-note">
          Travel times are planning estimates, not guaranteed arrival times.
          Traffic, weather, stops and your final address can affect the journey.
        </p>
        <nav className="destination-jump-links" aria-label="On this page">
          <a href="#journey">Plan your journey</a>
          <a href="#arrival">Arrival advice</a>
          <a href="#airport-pickup">Airport pickup</a>
          <a href="#quote">Book a transfer</a>
          <a href="#faq">Questions</a>
        </nav>
        <div className="destination-content-grid">
          <div>
            <section
              id="journey"
              className="destination-prose"
              aria-label={`Planning your ${route.city} transfer`}
            >
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </section>
            <section id="arrival" className="arrival-advice">
              <h2>Arriving at your destination in {route.city}</h2>
              <ul>
                {guide.arrivalTips.map((tip) => (
                  <li key={tip}>
                    <Icon name="check" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section id="airport-pickup" className="destination-prose">
              <h2>Where to meet your driver at Tirana Airport</h2>
              <p>
                After passport control and baggage collection, exit the terminal
                and head right to the meet-and-greet area behind the plexiglass
                barrier. Look for your passenger name sign and follow any
                specific instructions in your booking confirmation.
              </p>
              <p>
                Add your flight number when booking, and contact the team if
                your flight number, travel date or arrival airport changes.
              </p>
              <a className="text-link" href="/#airport-pickup">
                Read the airport pickup guide →
              </a>
            </section>
            <section id="faq" className="destination-faq">
              <h2>Questions about your {route.city} transfer</h2>
              <div className="faq-premium">
                {guide.faqs.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            {post && (
              <aside className="destination-guide-link">
                <p className="eyebrow-premium">Plan more of your trip</p>
                <a href={`/blog/${post.slug}`}>{post.title} →</a>
              </aside>
            )}
            {guide.sources.length > 0 && (
              <section className="destination-sources">
                <h2>Destination information sources</h2>
                <ul>
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {source.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <aside className="destination-help">
            <h2>A clear plan before you travel</h2>
            <p>
              Have your flight details, full destination address and passenger
              count ready. Check luggage allowances and any requested extras
              before confirming.
            </p>
            <a className="button button-navy" href="#quote">
              Check your transfer
            </a>
            <a className="text-link" href="/contact">
              Need help? Contact the team →
            </a>
          </aside>
        </div>
        <section
          id="quote"
          className="booking-card route-booking"
          aria-labelledby="destination-booking-title"
        >
          <div className="booking-heading">
            <h2 id="destination-booking-title">
              Book your transfer to {route.city}
            </h2>
          </div>
          <BookingWidget destination={route.city} />
        </section>
        <nav className="related-destinations" aria-label="Related destinations">
          <h2>Other destinations to consider</h2>
          {related.map((other) => (
            <a key={other.slug} href={`/routes/${other.slug}`}>
              Tirana Airport to {other.city}
            </a>
          ))}
          <a href="/routes">View all destinations →</a>
        </nav>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
