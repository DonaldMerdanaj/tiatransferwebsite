import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { routes } from "@/lib/data/routes";

export const metadata: Metadata = {
  title: "Tirana Airport Transfer Destinations | TiaTransfer",
  description:
    "Explore private Tirana Airport transfers to 12 destinations across Albania. Find practical arrival guidance and confirm your fare in the booking form.",
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
          Tirana Airport transfer destinations
        </h1>
        <p className="mt-4 max-w-[520px] text-sm leading-7 text-[#647386]">
          Explore private transfers across Albania, with flight tracking and
          airport meet-and-greet. Prices are confirmed in the booking form.
        </p>
        <div className="destination-grid mt-10">
          {routes.map((route, i) => (
            <article className="destination-card" key={route.slug}>
              {route.image ? (
                <div className="destination-photo">
                  <Image
                    src={route.image.src}
                    alt={route.image.alt}
                    fill
                    sizes="(max-width:520px) calc(100vw - 40px), (max-width:900px) calc(50vw - 31px), 400px"
                    style={{ objectPosition: route.image.position }}
                  />
                </div>
              ) : (
                <div className="destination-label">
                  <Icon name="pin" />
                  <span>Albania / {String(i + 1).padStart(2, "0")}</span>
                </div>
              )}
              <div className="destination-body">
                <h2 className="text-[23px] font-bold">
                  <a
                    href={`/routes/${route.slug}`}
                    className="hover:text-[#d9161d]"
                  >
                    {route.city}
                  </a>
                </h2>
                <p>{route.description}</p>
                <p className="journey-time">
                  <Icon name="clock" />
                  {route.durationLabel}
                </p>
                <a
                  className="button button-outline"
                  href={`/booking?destination=${encodeURIComponent(route.city)}`}
                  aria-label={`Book Transfer to ${route.city}`}
                >
                  Book Transfer <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="section-note">
          Travel times are approximate and depend on traffic, weather and your
          final address. Review your confirmed fare in the booking form.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
