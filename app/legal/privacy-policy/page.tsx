import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | TiaTransfer",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://tiatransfer.com/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Legal", href: "/legal" }, { name: "Privacy Policy", href: "/legal/privacy-policy" }]} />
      <main className="mx-auto max-w-[760px] px-5 py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        {/* TODO: insert your actual privacy policy */}
        <p className="mt-6 text-sm leading-7 text-[#647386]">Add your privacy policy content here.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
