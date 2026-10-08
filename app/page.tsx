import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingWidget } from "@/components/BookingWidget";
import { routes } from "@/lib/data/routes";
import { fleet } from "@/lib/data/fleet";
import { faq } from "@/lib/data/faq";
import { drivers } from "@/lib/data/drivers";
import { posts } from "@/lib/data/blog";

// Redesigned following Welcome Pickups' homepage UX/UI patterns:
// photo-first hero, trust strip right under the fold, a "meet your driver"
// section for the personal-touch differentiator, reassurance copy next to
// the booking action, and guides surfaced on the homepage itself.
// Booking engine is UNCHANGED — same TAS iframe widget, same site_key.

export const metadata: Metadata = {
  title: "Tirana Airport Transfer | Fixed Prices, Meet & Greet | TiaTransfer",
  description:
    "Private airport transfers from Tirana Airport (TIA) to anywhere in Albania. Fixed price from €25, flight tracking, meet & greet, 60 min free waiting.",
  alternates: { canonical: "https://tiatransfer.com/" },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "TiaTransfer",
    areaServed: routes.map((r) => r.city),
    offers: routes.map((r) => ({
      "@type": "Offer",
      name: `Tirana Airport to ${r.city}`,
      priceCurrency: "EUR",
      price: r.priceFromEUR,
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <main>
        {/* Photo-first hero, booking widget as a floating card — Welcome Pickups pattern */}
        <section className="transfer-hero relative overflow-hidden bg-[#132235]">
          <img
            src="/images/tia-hero.jpg"
            alt="Arriving in Tirana"
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,30,48,.94)_0%,rgba(9,30,48,.65)_45%,rgba(9,30,48,.05)_100%)]" />
          <div className="relative mx-auto grid max-w-[1244px] gap-12 px-5 pb-16 pt-20 lg:min-h-[760px] lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-[72px]">
            <div className="text-white lg:pb-10">
              <p className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffffff]">
                <span className="h-px w-6 bg-[#ffffff]" />
                Your calm after landing
              </p>
              <h1 className="max-w-[620px] text-5xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-[62px]">
                Arrive in Albania.
                <br />
                <span className="text-[#ef1d25]">Feel looked after.</span>
              </h1>
              <p className="mt-7 max-w-[470px] text-base leading-7 text-white/75">
                A private airport transfer from Tirana Airport to wherever your trip begins. One clear price, a local driver, and no guesswork at arrivals.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/80">
                <span className="flex items-center gap-2"><span className="text-[#ef1d25]">✓</span> Fixed price from €25</span>
                <span className="flex items-center gap-2"><span className="text-[#ef1d25]">✓</span> Pay your driver</span>
                <span className="flex items-center gap-2"><span className="text-[#ef1d25]">✓</span> Free cancellation</span>
              </div>
            </div>

            <div
              id="quote"
              className="booking-shell overflow-hidden rounded-[10px] border border-white/70 bg-white shadow-[0_30px_80px_rgba(0,0,0,.35)]"
            >
              <div className="flex items-center justify-between border-b border-[#e6eaf0] px-5 py-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Your transfer</p>
                  <p className="mt-1 text-lg font-semibold text-[#132235]">Book your airport shuttle</p>
                </div>
                <span className="rounded-full bg-[#f9e6e7] px-2.5 py-1 text-[10px] font-bold text-[#b9141b]">Available 24/7</span>
              </div>
              <BookingWidget />
              {/* Reassurance copy right at the point of booking — the single highest-leverage
                  fix from Welcome Pickups' own conversion case study: users dropped off at
                  checkout for lack of reassurance, not lack of information. */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#eee] px-5 py-4 text-xs text-[#647386]">
                <span>✓ Free cancellation up to 24h before</span>
                <span>✓ No card charge until confirmed</span>
                <span>✓ Driver's name & number by SMS before you land</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip — keep these claims concrete and easy to scan. */}
        <section className="border-b border-[#e6eaf0] bg-[#f7f9fa] px-5 py-6 lg:px-8">
          <div className="mx-auto flex max-w-[1244px] flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-[#526174]">
            <span className="font-semibold">Fixed prices from €25</span>
            <span className="font-semibold">60 minutes free waiting</span>
            <span className="font-semibold">Flight tracking included</span>
            <span className="font-semibold">Available 24/7</span>
          </div>
        </section>

        {/* Why */}
        <section className="mx-auto max-w-[1244px] px-5 py-[55px] lg:px-8 lg:py-[72px]">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ef1d25]">
                <span className="h-px w-6 bg-[#ef1d25]" />
                Why it feels different
              </p>
              <h2 className="max-w-[430px] text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-[38px]">
                The first hour of your trip should feel easy.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[10px] bg-[#e6eaf0] sm:grid-cols-2">
              {[
                { title: "We watch your flight", text: "If your plane is late, your driver knows. No frantic messages from the runway." },
                { title: "A real welcome", text: "Meet & greet at arrivals, with your name and 60 minutes of free waiting." },
                { title: "One honest price", text: "All-inclusive from €25. No surge, airport fee, or luggage surprise." },
                { title: "Travel lightly", text: "Free cancellation and child seats available whenever your plans change." },
              ].map((item) => (
                <div key={item.title} className="bg-white p-7">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#647386]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet your driver — Welcome Pickups' warmth/personal-touch differentiator */}
        <section className="bg-[#132235] px-5 py-[55px] text-white lg:px-8 lg:py-[72px]">
          <div className="mx-auto max-w-[1244px]">
            <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffffff]">
              <span className="h-px w-6 bg-[#ffffff]" />
              The people behind the wheel
            </p>
            <h2 className="max-w-[520px] text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-[38px]">
              Meet a few of the drivers waiting for you.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {drivers.map((driver) => (
                <div key={driver.name} className="rounded-[10px] bg-white/[.06] p-6">
                  <div className="grid h-40 w-full place-items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,75,82,.8),rgba(32,30,32,.95)_70%)]">
                    <span className="text-6xl font-extrabold tracking-[-.08em] text-white/90" aria-hidden="true">
                      {driver.name.slice(0, 1)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{driver.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{driver.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/50">
                    <span>{driver.car}</span>
                    <span>{driver.languages}</span>
                  </div>
                </div>
              ))}
              <div className="flex flex-col justify-center rounded-[10px] border border-dashed border-white/25 p-6 text-sm text-white/60">
                Every driver is personally vetted: identity &amp; vehicle check, safety training, then ready for the road.
              </div>
            </div>
          </div>
        </section>

        {/* Routes preview */}
        <section className="bg-[#f5f7f9] px-5 py-[55px] lg:px-8 lg:py-[72px]">
          <div className="mx-auto max-w-[1244px]">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ef1d25]">
                  <span className="h-px w-6 bg-[#ef1d25]" />
                  Simple routes, clear prices
                </p>
                <h2 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">From TIA to your Albania.</h2>
              </div>
              <a href="/routes" className="text-sm font-bold text-[#ef1d25] hover:underline">
                See all routes →
              </a>
            </div>
            <div className="mt-10 overflow-hidden rounded-[10px] border border-[#e6eaf0] bg-white">
              {routes.map((route, i) => (
                <a
                  key={route.slug}
                  href={`/routes/${route.slug}`}
                  className="grid items-center gap-3 border-b border-[#e6eaf0] px-5 py-5 last:border-0 hover:bg-[#f7f9fa] sm:grid-cols-[1.4fr_1fr_1fr_1fr] sm:px-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f9e1e2] text-xs font-bold text-[#c5161d]">
                      0{i + 1}
                    </span>
                    <span className="font-semibold">{route.city}</span>
                  </div>
                  <span className="text-sm text-[#647386]">{route.distanceKm} km</span>
                  <span className="text-sm text-[#647386]">{route.durationLabel}</span>
                  <span className="text-sm font-semibold text-[#ef1d25]">from €{route.priceFromEUR}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet preview */}
        <section className="mx-auto max-w-[1244px] px-5 py-[55px] lg:px-8 lg:py-[72px]">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ef1d25]">
                <span className="h-px w-6 bg-[#ef1d25]" />
                Choose your ride
              </p>
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-[38px]">
                Space for the trip you're actually taking.
              </h2>
              <a href="/fleet" className="mt-5 inline-block text-sm font-bold text-[#ef1d25] hover:underline">
                See the full fleet →
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {fleet.map((car) => (
                <a key={car.slug} href="/fleet" className="overflow-hidden rounded-[10px] bg-[#f5f7f9]">
                  <div className="h-44 overflow-hidden">
                    <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="mt-1 text-xs text-[#647386]">{car.note}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Guides teaser — surfaced on the homepage itself, matching how prominently
            Welcome Pickups features its city guide links right on the homepage rather
            than tucking them into the footer only. */}
        <section className="mx-auto max-w-[1244px] px-5 py-[55px] lg:px-8 lg:py-[72px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ef1d25]">
                <span className="h-px w-6 bg-[#ef1d25]" />
                Before you land
              </p>
              <h2 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">Travel guides</h2>
            </div>
            <a href="/blog" className="text-sm font-bold text-[#ef1d25] hover:underline">
              All guides →
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="rounded-[10px] border border-[#e6eaf0] p-5 hover:border-[#ef1d25]">
                <h3 className="font-semibold leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#647386]">{post.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ preview */}
        <section className="mx-auto max-w-[1000px] px-5 py-[55px] lg:py-[72px]">
          <div className="text-center">
            <p className="mb-4 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ef1d25]">
              <span className="h-px w-6 bg-[#ef1d25]" />
              Good to know
            </p>
            <h2 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">Questions, answered plainly.</h2>
          </div>
          <div className="mx-auto mt-10 max-w-[700px] divide-y divide-[#e6eaf0] border-y border-[#e6eaf0]">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#132235]">
                  <span>{item.question}</span>
                </summary>
                <p className="max-w-[590px] pt-3 text-sm leading-6 text-[#647386]">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm">
            <a href="/faq" className="font-bold text-[#ef1d25] hover:underline">See all questions →</a>
          </p>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-[1244px] overflow-hidden rounded-[10px] bg-[#ef1d25] px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
            <h2 className="max-w-[560px] text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-[38px]">
              Your holiday starts when you see your name at arrivals.
            </h2>
            <a
              href="#quote"
              className="mt-8 flex w-fit shrink-0 items-center gap-3 rounded-[8px] bg-[#132235] px-6 py-4 text-sm font-bold text-white transition hover:bg-black lg:mt-0"
            >
              Plan your transfer →
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </div>
  );
}
