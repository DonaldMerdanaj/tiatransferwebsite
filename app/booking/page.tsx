import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingWidget } from "@/components/BookingWidget";
import { routes } from "@/lib/data/routes";

const title = "Book Your Tirana Airport Transfer | TiaTransfer";
const description =
  "Book your private Tirana Airport transfer with TiaTransfer. Choose your route and travel dates, then review your vehicle, price and booking details.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://tiatransfer.com/booking" },
  openGraph: {
    type: "website",
    url: "https://tiatransfer.com/booking",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BookingPage({ searchParams }: Props) {
  const requestedDestination = (await searchParams).destination;
  const destination =
    typeof requestedDestination === "string"
      ? routes.find(
          (route) =>
            route.city.toLocaleLowerCase("en") ===
            requestedDestination.trim().normalize("NFC").toLocaleLowerCase("en"),
        )?.city
      : undefined;

  return (
    <>
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Booking", href: "/booking" }]} />
      <main
        id="main-content"
        tabIndex={-1}
        className="content-width route-detail max-w-5xl"
      >
        <p className="eyebrow-premium">Plan your journey</p>
        <h1>Book your airport transfer</h1>
        <p>
          Enter your pickup location, destination and travel dates below. Review
          your vehicle, final price and booking details before confirming.
        </p>
        <section
          id="quote"
          className="booking-card mt-8 scroll-mt-24"
          aria-labelledby="booking-heading"
        >
          <div className="booking-heading">
            <h2 id="booking-heading">
              {destination
                ? `Choose your transfer to ${destination}`
                : "Choose your transfer"}
            </h2>
          </div>
          <BookingWidget destination={destination} />
        </section>
        <p>
          Need help planning your journey?{" "}
          <a className="text-link" href="/contact">
            Contact TiaTransfer
          </a>{" "}
          or browse our{" "}
          <a className="text-link" href="/routes">
            airport transfer destinations
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
