import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routes } from "@/lib/data/routes";

export const metadata: Metadata = {
  title: "Tirana Airport Transfer Routes & Prices | TiaTransfer",
  description:
    "All fixed-price transfer routes from Tirana Airport (TIA) — distance, duration, and price for every destination.",
  alternates: { canonical: "https://tiatransfer.com/routes" },
};

export default function RoutesIndexPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Routes", href: "/routes" }]} />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1244px] px-5 py-16 lg:px-8"
      >
        <h1 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">
          Tirana Airport transfer routes & prices
        </h1>
        <p className="mt-4 max-w-[520px] text-sm leading-7 text-[#647386]">
          Explore private transfers across Albania, with flight tracking and
          airport meet-and-greet. Prices are confirmed in the booking form.
        </p>
        <div className="mt-10 overflow-hidden rounded-[10px] border border-[#e6eaf0] bg-white">
          {routes.map((route, i) => (
            <a
              key={route.slug}
              href={`/routes/${route.slug}`}
              className="grid items-center gap-3 border-b border-[#e6eaf0] px-5 py-5 last:border-0 hover:bg-[#f7f9fa] sm:grid-cols-[1.4fr_1fr_1fr_1fr]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f9e1e2] text-xs font-bold text-[#c5161d]">
                  0{i + 1}
                </span>
                <span className="font-semibold">
                  Tirana Airport → {route.city}
                </span>
              </div>
              <span className="text-sm text-[#647386]">Private transfer</span>
              <span className="text-sm text-[#647386]">
                {route.durationLabel}
              </span>
              <span className="text-sm font-semibold text-[#ef1d25]">
                Get a quote →
              </span>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
