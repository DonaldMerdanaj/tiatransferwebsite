import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { faq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ | TiaTransfer Tirana Airport Transfers",
  description:
    "Answers to common questions about booking, meeting your driver, flight delays, cancellations, and child seats.",
  alternates: { canonical: "https://tiatransfer.com/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[800px] px-5 py-16 lg:px-8"
      >
        <h1 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">
          Questions, answered plainly.
        </h1>
        <div className="mt-10 divide-y divide-[#e6eaf0] border-y border-[#e6eaf0]">
          {faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#132235]">
                <span>{item.question}</span>
              </summary>
              <p className="max-w-[600px] pt-3 text-sm leading-6 text-[#647386]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
