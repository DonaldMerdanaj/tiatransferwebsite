import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";
import { routes } from "@/lib/data/routes";
import { faq } from "@/lib/data/faq";
import { fleet } from "@/lib/data/fleet";
import airport from "@/public/images/tia-airport.webp";
const title = "Tirana Airport Transfers | Private Taxi & Shuttle | TiaTransfer";
const description =
  "Book private Tirana Airport transfers with TiaTransfer. Enjoy fixed prices, professional drivers, flight tracking, and reliable door-to-door transportation across Albania.";
const homepageRoutes = routes.slice(0, 6);
const homepageFaq = faq.slice(0, 4);
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

const assurances = [
  { icon: "shield", title: "One fixed price", text: "Review your fare before you confirm." },
  { icon: "plane", title: "Flight tracking", text: "Pickup adjusted to your arrival." },
  { icon: "welcome", title: "A personal welcome", text: "Meet your driver with your name sign." },
  { icon: "clock", title: "Day or night", text: "Private airport transfers, 24/7." },
];
const services = [
  { number: "01", title: "Airport transfers", text: "From Tirana Airport straight to your hotel, home or next stop. A private ride, planned around your arrival.", label: "Door to door", href: "/booking" },
  { number: "02", title: "Across Albania", text: "From the capital to the coast, historic cities and the mountains. Find the route that starts your trip.", label: "Explore destinations", href: "/routes" },
  { number: "03", title: "Families & groups", text: "Find a vehicle for your people and luggage. Share your requirements with us before you travel.", label: "Plan together", href: "/contact" },
];
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": "https://tiatransfer.com/#website", name: "TiaTransfer", url: "https://tiatransfer.com/" },
      { "@type": "TaxiService", "@id": "https://tiatransfer.com/#service", name: "TiaTransfer", url: "https://tiatransfer.com/", description, areaServed: routes.map((r) => ({ "@type": "Place", name: r.city })) },
      { "@type": "FAQPage", mainEntity: homepageFaq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ],
  };
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="transfer-home" tabIndex={-1}>
        <section className="th-hero" aria-labelledby="hero-title">
          <div className="th-container th-hero-grid">
            <div className="th-hero-copy">
              <p className="th-eyebrow"><span className="th-dot" /> TIRANA AIRPORT · PRIVATE TRANSFERS</p>
              <h1 id="hero-title">You land.<br />We take it <span>from here.</span></h1>
              <p className="th-hero-description">Your own driver. One fixed price. A comfortable ride from Tirana Airport to wherever Albania takes you.</p>
              <a className="th-text-link" href="#plan-transfer">Find your transfer <Icon name="arrow" /></a>
              <div className="th-hero-bottom"><Icon name="plane" /><span>Flight delayed?<br /><strong>We follow your arrival.</strong></span></div>
            </div>
            <div className="th-hero-visual">
              <picture>
                <img
                  src="/images/tia-airport-828.webp"
                  srcSet="/images/tia-airport-480.webp 480w, /images/tia-airport-640.webp 640w, /images/tia-airport-828.webp 828w, /images/tia-airport-1440.webp 1440w"
                  sizes="(max-width: 760px) calc(100vw - 40px), 50vw"
                  alt="Travellers arriving outside Tirana International Airport"
                  width={1440} height={1800} fetchPriority="high" decoding="async"
                />
              </picture>
              <div className="th-photo-tag"><Icon name="pin" /><span>Tirana International Airport<strong>Your journey starts here.</strong></span><span className="th-airport-code">TIA</span></div>
            </div>
          </div>
          <div className="th-container">
            <section id="plan-transfer" className="th-planner" aria-labelledby="planner-title">
              <div className="th-planner-heading"><h2 id="planner-title">Where are you heading?</h2><span><Icon name="check" /> Private, door-to-door transfers</span></div>
              <form action="/booking" method="get" className="th-route-form">
                <div className="th-origin"><Icon name="plane" /><div><span>FROM</span><strong>Tirana Airport <span className="th-code">TIA</span></strong></div></div>
                <label className="th-destination"><Icon name="pin" /><span><span className="th-field-label">TO</span><select name="destination" required defaultValue=""><option value="" disabled>Choose your destination</option>{routes.map((r) => <option key={r.slug} value={r.city}>{r.city}</option>)}</select></span></label>
                <button className="th-button" type="submit">Continue to booking <Icon name="arrow" /></button>
              </form>
              <div className="th-planner-foot"><p>Add your date, passengers and vehicle in the next step.</p><a href="/booking">Different pickup or return journey? <span aria-hidden="true">↗</span></a></div>
            </section>
            <div className="th-quick-routes"><span>POPULAR ROUTES</span>{homepageRoutes.slice(0, 4).map((r) => <a key={r.slug} href={`/booking?destination=${encodeURIComponent(r.city)}`}>TIA <span aria-hidden="true">→</span> {r.city}</a>)}</div>
          </div>
        </section>

        <section className="th-assurances" aria-label="Your transfer, taken care of"><div className="th-container th-assurance-grid">{assurances.map((item) => <div key={item.title}><Icon name={item.icon} /><div><h2>{item.title}</h2><p>{item.text}</p></div></div>)}</div></section>

        <section className="th-section th-services" aria-labelledby="services-title"><div className="th-container">
          <div className="th-section-head"><div><p className="th-eyebrow">THE WAY YOU TRAVEL</p><h2 id="services-title">One arrival.<br />So many possibilities.</h2></div><p>Solo trip, family holiday or a journey together. Start with a transfer that fits your plans.</p></div>
          <div className="th-service-list">{services.map((service) => <a key={service.number} href={service.href} className="th-service-row"><span className="th-service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="th-service-label">{service.label}<Icon name="arrow" /></span></a>)}</div>
        </div></section>

        <section id="destinations" className="th-section th-destinations" aria-labelledby="destinations-title"><div className="th-container">
          <div className="th-section-head"><div><p className="th-eyebrow">FROM ARRIVALS TO ANYWHERE</p><h2 id="destinations-title">Where will Albania take you?</h2></div><a className="th-text-link" href="/routes">All destinations <Icon name="arrow" /></a></div>
          <div className="th-destination-grid">{homepageRoutes.map((r) => <article className="th-destination-card" key={r.slug}>
            <a href={`/routes/${r.slug}`} className="th-destination-photo">{r.image && <Image src={r.image.src} alt={r.image.alt} fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) 45vw, 380px" style={{ objectPosition: r.image.position }} />}<span>TIA <span aria-hidden="true">↗</span> {r.city}</span></a>
            <div className="th-destination-body"><div><h3><a href={`/routes/${r.slug}`}>{r.city}</a></h3><p><Icon name="clock" />{r.durationLabel}</p></div><a className="th-circle-link" href={`/booking?destination=${encodeURIComponent(r.city)}`} aria-label={`Book a transfer to ${r.city}`}><Icon name="arrow" /></a></div>
          </article>)}</div>
          <p className="th-small-note">Travel times are estimates. Your final fare is confirmed during booking.</p>
        </div></section>

        <section className="th-section th-journey" aria-labelledby="journey-title"><div className="th-container th-journey-grid">
          <div><p className="th-eyebrow">LESS PLANNING. MORE TRAVELLING.</p><h2 id="journey-title">From booking<br />to a warm welcome.</h2><a className="th-button" href="/booking">Book your transfer <Icon name="arrow" /></a></div>
          <ol className="th-steps"><li><span>01</span><div><h3>Tell us your plans</h3><p>Choose your pickup, destination, travel date and passenger details.</p></div></li><li><span>02</span><div><h3>Make it your ride</h3><p>Select your vehicle and review the final fare and booking conditions.</p></div></li><li><span>03</span><div><h3>Meet your driver</h3><p>Follow your confirmation instructions and look for your name sign at arrivals.</p></div></li></ol>
        </div></section>

        <section className="th-section" aria-labelledby="fleet-title"><div className="th-container">
          <div className="th-section-head"><div><p className="th-eyebrow">SPACE FOR YOUR JOURNEY</p><h2 id="fleet-title">Your people. Your ride.</h2></div><a className="th-text-link" href="/fleet">Explore our fleet <Icon name="arrow" /></a></div>
          <div className="th-fleet-grid">{fleet.map((vehicle, index) => <article className="th-fleet-card" key={vehicle.slug}><div className="th-fleet-top"><span>0{index + 1}</span><Icon name="car" /></div><div className="th-fleet-photo"><Image src={vehicle.image} alt={`Illustrative ${vehicle.name.toLowerCase()} transfer vehicle`} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 280px" /></div><h3>{vehicle.name}</h3><p>{vehicle.note}</p><a className="th-text-link" href="/booking">Choose your transfer <Icon name="arrow" /></a></article>)}</div>
          <p className="th-small-note">Vehicle images illustrate the categories. Your vehicle and capacity are confirmed during booking.</p>
        </div></section>

        <section id="airport-pickup" className="th-section th-pickup" aria-labelledby="pickup-title"><div className="th-container th-pickup-grid">
          <div className="th-pickup-photo"><Image src={airport} alt="Arrivals area outside Tirana International Airport" fill sizes="(max-width: 760px) 90vw, 45vw" /></div>
          <div className="th-pickup-copy"><p className="th-eyebrow">A FAMILIAR FACE AT ARRIVALS</p><h2 id="pickup-title">New country.<br />Easy first steps.</h2><p>Collect your luggage and exit the terminal. The meet-and-greet area is outside on the right, behind the plexiglass barrier.</p><div className="th-pickup-note"><Icon name="welcome" /><div><h3>Look for your name sign</h3><p>Your booking confirmation includes your pickup instructions. Keep it handy when you arrive.</p></div></div><a className="th-text-link" href="/contact">Need a hand? Contact us <Icon name="arrow" /></a></div>
        </div></section>

        <section className="th-section" aria-labelledby="faq-title"><div className="th-container th-faq-grid">
          <div><p className="th-eyebrow">BEFORE YOU TAKE OFF</p><h2 id="faq-title">A few things<br />you might ask.</h2><a className="th-text-link" href="/faq">All your questions <Icon name="arrow" /></a></div>
          <div className="th-faq-list">{homepageFaq.map((f) => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div>
        </div></section>

        <section className="th-outro"><div className="th-container"><p className="th-eyebrow">FROM TIRANA AIRPORT. ACROSS ALBANIA.</p><h2>The flight is booked.<br /><span>Let’s take care of the rest.</span></h2><a href="/booking" className="th-button">Find your transfer <Icon name="arrow" /></a><a className="th-outro-contact" href="/contact">Talk to our team <Icon name="arrow" /></a></div></section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
