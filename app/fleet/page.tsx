import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { fleet } from "@/lib/data/fleet";

export const metadata: Metadata = {
  title: "Our Fleet | Sedan, Business, Van & Minibus | TiaTransfer",
  description:
    "Clean, comfortable vehicles for every group size — sedan, business, van, and minibus transfers from Tirana Airport.",
  alternates: { canonical: "https://tiatransfer.com/fleet" },
};

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Fleet", href: "/fleet" }]} />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1244px] px-5 py-16 lg:px-8"
      >
        <h1 className="text-4xl font-extrabold leading-tight tracking-[-.03em] sm:text-[38px]">
          Space for the trip you're actually taking.
        </h1>
        <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#647386]">
          Explore vehicle categories for your journey. Actual vehicle, passenger
          capacity, luggage allowance and requested extras are confirmed in the
          booking form.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {fleet.map((car) => (
            <div
              key={car.slug}
              className="overflow-hidden rounded-[10px] bg-[#f5f7f9]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.name} category illustration`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold">{car.name}</h2>
                <p className="mt-1 text-sm text-[#647386]">{car.note}</p>
                <a
                  href="/booking"
                  className="mt-4 inline-block text-sm font-bold text-[#ef1d25] hover:underline"
                >
                  Book this vehicle →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
