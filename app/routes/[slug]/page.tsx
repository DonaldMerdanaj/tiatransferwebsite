import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routes, getRouteBySlug } from "@/lib/data/routes";
import { fleet } from "@/lib/data/fleet";
import { posts } from "@/lib/data/blog";

// This one file generates every route page (5 today, 14 once you add more
// entries to lib/data/routes.ts — no other changes needed).

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  return {
    title: `Tirana Airport to ${route.city} Transfer | Fixed Price from €${route.priceFromEUR} | TiaTransfer`,
    description: `Private transfer from Tirana Airport to ${route.city}. ${route.distanceKm} km, ${route.durationLabel}, fixed price from €${route.priceFromEUR}. Meet & greet and flight tracking included.`,
    alternates: { canonical: `https://tiatransfer.com/routes/${route.slug}` },
  };
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  const relatedPost = posts.find((p) => p.relatedRouteSlug === route.slug);

  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Tirana Airport to ${route.city} Transfer`,
    description: route.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: route.priceFromEUR,
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does a transfer from Tirana Airport to ${route.city} cost?`,
        acceptedAnswer: { "@type": "Answer", text: `Fixed price from €${route.priceFromEUR}, all-inclusive — no surge pricing or hidden fees.` },
      },
      {
        "@type": "Question",
        name: `How long is the drive from Tirana Airport to ${route.city}?`,
        acceptedAnswer: { "@type": "Answer", text: `About ${route.durationLabel} covering ${route.distanceKm} km, depending on traffic.` },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Routes", href: "/routes" }, { name: `Tirana Airport to ${route.city}`, href: `/routes/${route.slug}` }]} />
      <main className="mx-auto max-w-[1244px] px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-[38px]">
              Private transfer from Tirana Airport to {route.city}
            </h1>
            <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#647386]">{route.description}</p>

            <div className="mt-8 grid max-w-[420px] grid-cols-3 gap-3 rounded-[10px] border border-[#e6eaf0] p-5 text-center">
              <div>
                <p className="text-xl font-extrabold">{route.distanceKm} km</p>
                <p className="text-xs text-[#647386]">Distance</p>
              </div>
              <div>
                <p className="text-xl font-extrabold">{route.durationLabel}</p>
                <p className="text-xs text-[#647386]">Duration</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#ef1d25]">€{route.priceFromEUR}</p>
                <p className="text-xs text-[#647386]">From</p>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-bold">What's included</h2>
            <ul className="mt-4 grid gap-2 text-sm text-[#647386]">
              <li>Meet & greet at Tirana Airport arrivals</li>
              <li>Real-time flight tracking — no charge for delays</li>
              <li>Up to 60 minutes of free waiting time</li>
              <li>Tolls included, no hidden fees</li>
              <li>Free cancellation up to 24 hours before pickup</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Choose your vehicle</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {fleet.map((car) => (
                <a key={car.slug} href="/fleet" className="rounded-xl border border-[#e6eaf0] p-3 text-center hover:border-[#ef1d25]">
                  <p className="text-sm font-semibold">{car.name}</p>
                  <p className="mt-1 text-[11px] text-[#647386]">{car.note}</p>
                </a>
              ))}
            </div>

            {relatedPost && (
              <a
                href={`/blog/${relatedPost.slug}`}
                className="mt-12 flex items-center justify-between rounded-[10px] bg-[#f5f7f9] p-5 hover:bg-[#e1e0df]"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Guide</p>
                  <p className="mt-1 font-semibold">{relatedPost.title}</p>
                </div>
                <span>→</span>
              </a>
            )}
          </div>

          <div id="quote" className="h-fit rounded-[10px] border border-[#e6eaf0] bg-white p-1 shadow-[0_20px_60px_rgba(32,30,32,.08)]">
            <div className="px-5 pt-4">
              <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Book this route</p>
              <p className="mt-1 text-lg font-semibold">Tirana Airport → {route.city}</p>
            </div>
            <iframe
              title={`Book Tirana Airport to ${route.city}`}
              src={`https://app.tiranaairportshuttle.com/booking/widget?site_key=7e3f3d3085b900d598bc40543d611575&destination=${route.city}`}
              allow="geolocation"
              loading="lazy"
              className="mt-4 block min-h-[680px] w-full border-0"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
