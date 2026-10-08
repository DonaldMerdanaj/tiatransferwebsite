import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingWidget } from "@/components/BookingWidget";
import { Icon } from "@/components/Icon";
import { routes } from "@/lib/data/routes";
import { faq } from "@/lib/data/faq";
import { posts } from "@/lib/data/blog";
import airport from "@/public/images/tia-airport.webp";
const title = "Tirana Airport Transfers | Private Taxi & Shuttle | TiaTransfer";
const description =
  "Book private Tirana Airport transfers with TiaTransfer. Enjoy fixed prices, professional drivers, flight tracking, and reliable door-to-door transportation across Albania.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://tiatransfer.com/" },
  openGraph: {
    title,
    description,
    url: "https://tiatransfer.com/",
    images: [
      {
        url: "/images/tia-airport.webp",
        width: 1440,
        height: 1800,
        alt: "Travellers outside Tirana International Airport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/tia-airport.webp"],
  },
};
const trust = [
  {
    icon: "shield",
    title: "Fixed prices",
    text: "Transparent pricing without hidden charges.",
  },
  {
    icon: "plane",
    title: "Flight tracking",
    text: "We monitor your flight for delays.",
  },
  {
    icon: "welcome",
    title: "Meet & greet",
    text: "Your driver welcomes you at the airport.",
  },
  {
    icon: "clock",
    title: "24/7 transfers",
    text: "Airport transportation available day and night.",
  },
];
const benefits = [
  {
    icon: "driver",
    title: "Professional drivers",
    text: "Experienced drivers providing reliable transportation.",
  },
  {
    icon: "car",
    title: "Comfortable vehicles",
    text: "Clean, modern vehicles suitable for individuals, families and groups.",
  },
  {
    icon: "shield",
    title: "Fixed transfer prices",
    text: "Transparent prices confirmed before your journey.",
  },
  {
    icon: "plane",
    title: "Flight monitoring",
    text: "We track flight arrival times and adjust airport pickups accordingly.",
  },
  {
    icon: "pin",
    title: "Door-to-door service",
    text: "Convenient transfers directly to your destination.",
  },
];
const steps = [
  {
    icon: "route",
    title: "Choose your route",
    text: "Enter your pickup location, destination, date and time.",
  },
  {
    icon: "car",
    title: "Select your vehicle",
    text: "Choose a suitable vehicle and confirm your booking.",
  },
  {
    icon: "welcome",
    title: "Meet your driver",
    text: "Your driver will meet you at the agreed pickup location.",
  },
];
function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading-premium">
      <p className="eyebrow-premium">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://tiatransfer.com/#website",
        name: "TiaTransfer",
        url: "https://tiatransfer.com/",
      },
      {
        "@type": "TaxiService",
        "@id": "https://tiatransfer.com/#service",
        name: "TiaTransfer",
        url: "https://tiatransfer.com/",
        description,
        areaServed: routes.map((r) => ({ "@type": "City", name: r.city })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="premium-home" tabIndex={-1}>
        <section className="premium-hero" aria-labelledby="hero-title">
          <picture className="premium-hero-picture">
          <img src="/images/tia-airport-1440.webp" srcSet="/images/tia-airport-480.webp 480w, /images/tia-airport-640.webp 640w, /images/tia-airport-828.webp 828w, /images/tia-airport-1440.webp 1440w" sizes="100vw" alt="Travellers arriving outside Tirana International Airport" width={1440} height={1800} fetchPriority="high" decoding="async" className="premium-hero-photo" />
        </picture>
        <div className="premium-hero-overlay" />
          <div className="content-width hero-copy-premium">
            <p className="eyebrow-premium">Premium airport transfer service</p>
            <h1 id="hero-title">
              Tirana Airport Transfers <span>– Private &amp; Reliable</span>
            </h1>
            <p className="hero-fixed">
              Your journey. Your driver. One fixed price.
            </p>
            <p className="hero-description">
              Book your private transfer from Tirana International Airport to
              destinations across Albania. Enjoy professional drivers, flight
              tracking, meet-and-greet service, and comfortable door-to-door
              transportation.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#quote">
                Book your transfer <Icon name="arrow" />
              </a>
              <a className="button button-outline-light" href="#destinations">
                Explore destinations
              </a>
            </div>
            <div className="hero-reassurance">
              <span>
                <Icon name="check" />
                Private, door-to-door service
              </span>
              <span>
                <Icon name="check" />
                Price confirmed before travel
              </span>
            </div>
          </div>
        </section>
        <section
          id="quote"
          className="booking-section content-width"
          aria-labelledby="booking-title"
        >
          <div className="booking-card">
            <div className="booking-heading">
              <div>
                <p className="eyebrow-premium">A smooth start to your trip</p>
                <h2 id="booking-title">Book your airport transfer</h2>
              </div>
              <span>
                <Icon name="shield" />
                Secure booking
              </span>
            </div>
            <BookingWidget />
          </div>
        </section>
        <section className="trust-premium" aria-label="Transfer benefits">
          <div className="content-width trust-grid-premium">
            {trust.map((t) => (
              <div key={t.title} className="trust-item-premium">
                <Icon name={t.icon} />
                <div>
                  <h2>{t.title}</h2>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="destinations" className="premium-section light-section">
          <div className="content-width">
            <SectionHeading
              eyebrow="From arrivals to anywhere"
              title="Popular Airport Transfer Destinations"
              text="Discover reliable private transfers from Tirana International Airport to Albania’s most popular destinations."
            />
            <div className="destination-grid">
              {routes.map((r, i) => (
                <article className="destination-card" key={r.slug}>
                  {r.image ? (
                    <div className="destination-photo">
                      <Image
                        src={r.image}
                        alt={`View of ${r.city}, Albania`}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="destination-label">
                      <Icon name="pin" />
                      <span>Albania / {String(i + 1).padStart(2, "0")}</span>
                    </div>
                  )}
                  <div className="destination-body">
                    <h3>
                      <a href={`/routes/${r.slug}`}>{r.city}</a>
                    </h3>
                    <p>{r.description}</p>
                    <p className="journey-time">
                      <Icon name="clock" />
                      {r.durationLabel}
                    </p>
                    <a
                      className="button button-outline"
                      href={`/routes/${r.slug}#quote`}
                    >
                      Book Transfer <Icon name="arrow" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="section-note">
              Travel times are approximate and depend on traffic, weather and
              your final address. Your price is confirmed in the booking form.
            </p>
          </div>
        </section>
        <section className="premium-section">
          <div className="content-width">
            <SectionHeading
              eyebrow="Travel with peace of mind"
              title="Why Choose TiaTransfer?"
            />
            <div className="benefit-grid-premium">
              {benefits.map((b) => (
                <article key={b.title}>
                  <div className="icon-tile">
                    <Icon name={b.icon} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="premium-section light-section">
          <div className="content-width">
            <SectionHeading
              eyebrow="Simple from the start"
              title="Book Your Airport Transfer in 3 Easy Steps"
            />
            <div className="steps-grid">
              {steps.map((s, i) => (
                <article key={s.title} className="step-card">
                  <div className="step-top">
                    <span className="step-number">0{i + 1}</span>
                    <Icon name={s.icon} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="airport-pickup" className="premium-section">
          <div className="content-width pickup-grid">
            <div className="pickup-photo">
              <Image
                src={airport}
                alt="Exterior arrivals area at Tirana International Airport"
                fill
                sizes="(max-width:780px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="A warm welcome at arrivals"
                title="Meeting Your Driver at Tirana Airport"
              />
              <p className="pickup-description">
                After passing passport control and collecting your luggage,
                proceed through the arrivals area and exit the terminal. The
                designated meet-and-greet area is outside on the right-hand
                side, behind the plexiglass barrier, where drivers wait with
                passenger name signs.
              </p>
              <div className="pickup-detail">
                <Icon name="welcome" />
                <div>
                  <h3>Look for your name sign</h3>
                  <p>
                    Follow the pickup instructions in your confirmation and keep
                    your booking details handy.
                  </p>
                </div>
              </div>
              <div className="pickup-detail">
                <Icon name="plane" />
                <div>
                  <h3>We follow your flight</h3>
                  <p>
                    Add your flight number when booking so your pickup can be
                    adjusted to your arrival.
                  </p>
                </div>
              </div>
              <a href="/contact" className="button button-navy">
                Contact assistance <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
        <section className="premium-section light-section">
          <div className="content-width faq-layout">
            <SectionHeading
              eyebrow="Before you travel"
              title="Frequently Asked Questions"
              text="Clear answers to help you plan your airport pickup."
            />
            <div className="faq-premium">
              {faq.map((f) => (
                <details key={f.question}>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="premium-section">
          <div className="content-width">
            <SectionHeading
              eyebrow="Make the most of your journey"
              title="Explore Albania With Our Travel Guides"
            />
            <div className="guide-grid">
              {posts.map((p) => (
                <article key={p.slug} className="guide-card">
                  <div className="guide-photo">
                    <Image
                      src={airport}
                      alt="Tirana International Airport, the starting point for your journey"
                      fill
                      sizes="(max-width:780px) 100vw, 33vw"
                    />
                  </div>
                  <div className="guide-body">
                    <time dateTime={p.publishedAt}>
                      {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </time>
                    <h3>
                      <a href={`/blog/${p.slug}`}>{p.title}</a>
                    </h3>
                    <p>{p.description}</p>
                    <a href={`/blog/${p.slug}`} className="text-link">
                      Read More <span className="sr-only">about {p.title}</span>{" "}
                      →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <Image
            src={airport}
            alt=""
            fill
            sizes="100vw"
            className="final-cta-photo"
          />
          <div className="final-cta-overlay" />
          <div className="content-width final-cta-content">
            <p className="eyebrow-premium">Your arrival, taken care of</p>
            <h2>Your Journey Starts With TiaTransfer</h2>
            <p>
              Book your private airport transfer today and enjoy comfortable,
              reliable transportation throughout Albania.
            </p>
            <a className="button button-red" href="#quote">
              Book your transfer <Icon name="arrow" />
            </a>
          </div>
        </section>
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
