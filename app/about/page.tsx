import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About TiaTransfer | Private Tirana Airport Transfers",
  description: "Who we are and why TiaTransfer runs fixed-price, meet-and-greet transfers from Tirana Airport.",
  alternates: { canonical: "https://tiatransfer.com/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <main className="mx-auto max-w-[760px] px-5 py-16 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">About TiaTransfer</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-[#647386]">
          <p>
            TiaTransfer runs private, fixed-price transfers from Tirana Airport to destinations across Albania —
            built around the idea that the first hour of a trip should feel easy, not uncertain.
          </p>
          <p>
            {/* TODO: replace with your real company story, founding details, and licensing info */}
            Add your company background, licensing, and team details here.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
