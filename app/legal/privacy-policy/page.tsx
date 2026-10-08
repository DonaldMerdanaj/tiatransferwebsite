import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Privacy Information | TiaTransfer",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://tiatransfer.com/legal/privacy-policy" },
};
export default function Page() {
  return (
    <>
      <SiteHeader />
      <Breadcrumbs
        items={[
          { name: "Information", href: "/legal" },
          { name: "Privacy Information", href: "/legal/privacy-policy" },
        ]}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="content-width legal-page"
      >
        <h1>Privacy Information</h1>
        <section>
          <h2>Booking information</h2>
          <p>
            The booking form is provided by app.tiranaairportshuttle.com.
            Details you enter into that form are handled by the booking service.
            Review the privacy information presented by that provider before
            submitting personal details.
          </p>
        </section>
        <section>
          <h2>This website</h2>
          <p>
            The public pages do not provide a customer account or an admin
            dashboard. The booking form is embedded from a separate service;
            that service may use its own cookies and storage.
          </p>
        </section>
        <section>
          <h2>Optional analytics</h2>
          <p>
            When website analytics are enabled, we ask for your choice before
            loading Google Analytics. Declining keeps optional analytics
            disabled. Your preference is stored in your browser. Analytics
            measure visits and interest in booking; clicking a booking button is
            not treated as a completed reservation.
          </p>
        </section>
        <section>
          <h2>Privacy requests</h2>
          <p>
            For questions about information submitted with a reservation, use
            the booking provider’s contact details in your confirmation. For
            website questions, use our contact page.
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
