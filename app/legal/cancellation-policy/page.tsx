import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Cancellation Policy | TiaTransfer",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://tiatransfer.com/legal/cancellation-policy",
  },
};
export default function Page() {
  return (
    <>
      <SiteHeader />
      <Breadcrumbs
        items={[
          { name: "Information", href: "/legal" },
          { name: "Cancellation Policy", href: "/legal/cancellation-policy" },
        ]}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="content-width legal-page"
      >
        <h1>Cancellation Policy</h1>
        <section>
          <h2>Check your reservation conditions</h2>
          <p>
            Cancellation deadlines, charges and refund eligibility depend on the
            conditions presented before you confirm your booking. Check those
            conditions and keep your confirmation for reference.
          </p>
        </section>
        <section>
          <h2>Changing or cancelling your journey</h2>
          <p>
            Contact the booking team using the details in your confirmation.
            Include your reservation reference and the change you need. A
            cancellation or change is complete when the booking team confirms
            it.
          </p>
        </section>
        <section>
          <h2>Flight changes</h2>
          <p>
            Flight monitoring does not replace notifying the team when your
            flight number, travel date or destination changes. Contact the team
            as soon as your itinerary changes.
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
