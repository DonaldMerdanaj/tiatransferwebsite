import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "About TiaTransfer | Private Airport Transfers",
  description:
    "Learn about private airport transfers from Tirana International Airport to destinations across Albania.",
  alternates: { canonical: "https://tiatransfer.com/about" },
};
export default function About() {
  return (
    <>
      <SiteHeader />
      <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />
      <main
        id="main-content"
        tabIndex={-1}
        className="content-width route-detail"
      >
        <p className="eyebrow-premium">Your journey, made simpler</p>
        <h1>Private airport transfers across Albania</h1>
        <p>
          TiaTransfer helps travellers arrange private transport from Tirana
          International Airport to their destination. Choose your route, review
          your vehicle and confirm your price before travelling.
        </p>
        <h2>A clear plan for your arrival</h2>
        <p>
          Provide your flight details when booking, follow the meeting
          instructions in your confirmation and travel directly to your
          accommodation. Our airport pickup guide explains where to meet your
          driver.
        </p>
        <p>
          <a className="text-link" href="/routes">
            Explore destinations →
          </a>
        </p>
        <a className="button button-red" href="/booking">
          Book your transfer →
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
