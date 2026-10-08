import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cancellation Policy | TiaTransfer",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://tiatransfer.com/legal/cancellation-policy" },
};

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Legal", href: "/legal" }, { name: "Cancellation Policy", href: "/legal/cancellation-policy" }]} />
      <main className="mx-auto max-w-[760px] px-5 py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold">Cancellation Policy</h1>
        <p className="mt-6 text-sm leading-7 text-[#647386]">
          Free cancellation up to 24 hours before pickup. {/* TODO: expand with your full policy */}
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
