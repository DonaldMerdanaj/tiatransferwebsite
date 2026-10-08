import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Terms and Conditions | TiaTransfer",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://tiatransfer.com/legal/terms-and-conditions",
  },
};
export default function Page() {
  return (
    <>
      <SiteHeader />
      <Breadcrumbs
        items={[
          { name: "Information", href: "/legal" },
          { name: "Terms and Conditions", href: "/legal/terms-and-conditions" },
        ]}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="content-width legal-page"
      >
        <h1>Terms and Conditions</h1>
        <section>
          <h2>Your booking agreement</h2>
          <p>
            Review the price, route, vehicle, passenger and luggage allowances,
            payment method and applicable terms in the booking service before
            confirming. The conditions shown at checkout and in your
            confirmation apply to your reservation.
          </p>
        </section>
        <section>
          <h2>Accurate journey details</h2>
          <p>
            Check your flight number, arrival date, pickup time, destination
            address and contact details. Tell the booking team about any changes
            before travel.
          </p>
        </section>
        <section>
          <h2>Special requests</h2>
          <p>
            Child seats, accessibility needs, additional stops and unusual
            luggage must be requested and confirmed before your journey.
          </p>
        </section>
        <section>
          <h2>Questions about your reservation</h2>
          <p>
            Use the contact details in your booking confirmation for changes,
            cancellations or assistance. Keep your reservation reference
            available.
          </p>
        </section>
        <p>
          <a className="text-link" href="/contact">
            Contact the team →
          </a>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
