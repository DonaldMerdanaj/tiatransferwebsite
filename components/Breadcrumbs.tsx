type Crumb = { name: string; href: string };

// Renders the visible trail AND the matching BreadcrumbList JSON-LD.
// Usage: <Breadcrumbs items={[{ name: "Routes", href: "/routes" }, { name: "Tirana Airport to Sarande", href: "/routes/tirana-airport-to-sarande" }]} />
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const SITE_URL = "https://tiatransfer.com";
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1244px] px-5 pt-6 text-xs text-[#647386] lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1">
          {trail.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1">
              {i > 0 && <span className="text-[#c8c5c5]">/</span>}
              {i === trail.length - 1 ? (
                <span className="font-medium text-[#132235]">{crumb.name}</span>
              ) : (
                <a href={crumb.href} className="hover:text-[#ef1d25]">
                  {crumb.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
