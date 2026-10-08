import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact TiaTransfer | Tirana Airport Transfers",
  description: "Get in touch with TiaTransfer — email, phone, and WhatsApp for booking questions and changes.",
  alternates: { canonical: "https://tiatransfer.com/contact" },
};

export default function ContactPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TiaTransfer",
    email: "hello@tiatransfer.com",
    telephone: "+355694025025",
    // TODO: add address matching your Google Business Profile exactly
  };

  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <main className="mx-auto max-w-[760px] px-5 py-16 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">Get in touch</h1>
        <div className="mt-8 grid gap-4 text-sm">
          <a href="mailto:hello@tiatransfer.com" className="font-semibold text-[#ef1d25] hover:underline">
            hello@tiatransfer.com
          </a>
          <a href="tel:+355694025025" className="font-semibold text-[#ef1d25] hover:underline">
            +355 69 40 25 025
          </a>
          <p className="text-[#647386]">Available 24/7 for booking questions and changes.</p>
        </div>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </div>
  );
}
