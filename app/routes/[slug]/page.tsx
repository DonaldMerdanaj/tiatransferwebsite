import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingWidget } from "@/components/BookingWidget";
import { routes, getRouteBySlug } from "@/lib/data/routes";
import { posts } from "@/lib/data/blog";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = getRouteBySlug(slug);
  return r
    ? {
        title: `Tirana Airport to ${r.city} Transfer | TiaTransfer`,
        description: `Book a private transfer from Tirana Airport to ${r.city}, with flight tracking and door-to-door service. Confirm your vehicle and price before travel.`,
        alternates: { canonical: `https://tiatransfer.com/routes/${r.slug}` },
      }
    : {};
}
export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const r = getRouteBySlug(slug);
  if (!r) notFound();
  const post = posts.find((p) => p.relatedRouteSlug === slug);
  return (
    <>
      <SiteHeader />
      <Breadcrumbs
        items={[
          { name: "Destinations", href: "/routes" },
          { name: `Tirana Airport to ${r.city}`, href: `/routes/${slug}` },
        ]}
      />
      <main
        id="main-content"
        className="content-width route-detail"
        tabIndex={-1}
      >
        <p className="eyebrow-premium">Your private airport transfer</p>
        <h1>Tirana Airport to {r.city}</h1>
        <p>{r.description}</p>
        <div className="route-facts">
          <p>
            <strong>{r.durationLabel}</strong>
            <br />
            Approximate travel time
          </p>
          <p>
            <strong>Private &amp; direct</strong>
            <br />
            To your destination address
          </p>
          <p>
            <strong>Price confirmed at booking</strong>
            <br />
            Choose your journey below
          </p>
        </div>
        <p className="section-note">
          Actual journey times depend on traffic, weather, stops and your final
          address.
        </p>
        <h2>Plan your transfer to {r.city}</h2>
        <p>
          Enter your arrival date, flight number, accommodation address and
          passenger count. Review the vehicle, luggage allowance, final price
          and booking conditions before confirming.
        </p>
        <h2>Meeting your driver</h2>
        <p>
          After collecting your luggage, exit the terminal and head right to the
          meet-and-greet area behind the plexiglass barrier. Look for your
          passenger name sign and follow the instructions in your booking
          confirmation.
        </p>
        <a className="text-link" href="/#airport-pickup">
          Read our airport transfer guide →
        </a>
        {post && (
          <p>
            <a className="text-link" href={`/blog/${post.slug}`}>
              {post.title} →
            </a>
          </p>
        )}
        <section id="quote" className="booking-card route-booking">
          <div className="booking-heading">
            <h2>Book your transfer to {r.city}</h2>
          </div>
          <BookingWidget destination={r.city} />
        </section>
        <nav
          className="related-destinations"
          aria-label="Other transfer destinations"
        >
          <h2>Explore more destinations</h2>
          {routes
            .filter((other) => other.slug !== slug)
            .map((other) => (
              <a key={other.slug} href={`/routes/${other.slug}`}>
                {other.city}
              </a>
            ))}
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
