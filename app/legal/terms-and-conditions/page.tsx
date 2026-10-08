import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions | TiaTransfer",
  robots: { index: false, follow: true }, // legal pages: rarely worth indexing
  alternates: { canonical: "https://tiatransfer.com/legal/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Legal", href: "/legal" }, { name: "Terms & Conditions", href: "/legal/terms-and-conditions" }]} />
      <main className="mx-auto max-w-[760px] px-5 py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold">Terms & Conditions</h1>
        {/* TODO: insert your actual terms */}
        <p className="mt-6 text-sm leading-7 text-[#647386]">Add your terms and conditions content here.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
