// One row per destination = one page at /routes/[slug].
// Add the remaining destinations here to grow from 5 to your full 14 —
// the page template needs no changes when you do.

export type TransferRoute = {
  slug: string;
  city: string;
  distanceKm: number;
  durationLabel: string; // e.g. "25–35 min"
  priceFromEUR: number;
  description: string;
};

export const routes: TransferRoute[] = [
  {
    slug: "tirana-airport-to-tirana",
    city: "Tirana",
    distanceKm: 28,
    durationLabel: "25–35 min",
    priceFromEUR: 25,
    description:
      "The short hop into the capital — hotels, Blloku, and the city center, with your driver tracking your flight and waiting at arrivals.",
  },
  {
    slug: "tirana-airport-to-durres",
    city: "Durres",
    distanceKm: 35,
    durationLabel: "35–45 min",
    priceFromEUR: 30,
    description:
      "Straight to Albania's main beach city and port town, ideal for a quick coastal start to your trip.",
  },
  {
    slug: "tirana-airport-to-shkoder",
    city: "Shkoder",
    distanceKm: 100,
    durationLabel: "1h 25 min",
    priceFromEUR: 65,
    description:
      "North to the lake city and gateway to the Albanian Alps — comfortable, direct, no transfers.",
  },
  {
    slug: "tirana-airport-to-vlore",
    city: "Vlore",
    distanceKm: 150,
    durationLabel: "2h 15 min",
    priceFromEUR: 85,
    description:
      "Down the coast to Vlore, with a fixed price agreed before you land — no surge pricing on arrival.",
  },
  {
    slug: "tirana-airport-to-sarande",
    city: "Sarande",
    distanceKm: 275,
    durationLabel: "3h 45 min",
    priceFromEUR: 145,
    description:
      "The full run to the Albanian Riviera. Rest stops on request, and your driver knows the road well.",
  },
];

export function getRouteBySlug(slug: string) {
  return routes.find((r) => r.slug === slug);
}
