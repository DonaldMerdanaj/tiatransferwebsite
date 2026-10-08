export type TransferRoute = {
  slug: string;
  city: string;
  durationLabel: string;
  description: string;
  image?: string;
};
// Travel times are planning estimates; the booking provider confirms each fare.
export const routes: TransferRoute[] = [
  {
    slug: "tirana-airport-to-tirana",
    city: "Tirana",
    durationLabel: "About 30–45 min",
    description:
      "Explore the capital’s cafés, museums and lively city neighbourhoods.",
  },
  {
    slug: "tirana-airport-to-durres",
    city: "Durrës",
    durationLabel: "About 40–60 min",
    description:
      "Head to the Adriatic coast, seaside hotels and historic harbour city.",
  },
  {
    slug: "tirana-airport-to-golem",
    city: "Golem",
    durationLabel: "About 50–75 min",
    description: "A direct arrival at the beach resorts south of Durrës.",
  },
  {
    slug: "tirana-airport-to-vlore",
    city: "Vlorë",
    durationLabel: "About 2–3 hours",
    description:
      "Start your coastal journey where the Adriatic meets the Ionian Sea.",
  },
  {
    slug: "tirana-airport-to-berat",
    city: "Berat",
    durationLabel: "About 2–3 hours",
    description:
      "Travel to the riverside city known for its hillside Ottoman architecture.",
  },
  {
    slug: "tirana-airport-to-shkoder",
    city: "Shkodër",
    durationLabel: "About 1.5–2 hours",
    description:
      "Discover the northern lake city and gateway to the Albanian Alps.",
  },
  {
    slug: "tirana-airport-to-theth",
    city: "Theth",
    durationLabel: "About 3.5–5 hours",
    description:
      "Continue into the mountains to the village at the heart of the Albanian Alps.",
  },
  {
    slug: "tirana-airport-to-dhermi",
    city: "Dhërmi",
    durationLabel: "About 3–4 hours",
    description: "Reach the beaches and villages of the Albanian Riviera.",
  },
  {
    slug: "tirana-airport-to-himare",
    city: "Himarë",
    durationLabel: "About 3.5–4.5 hours",
    description:
      "Arrive at a relaxed coastal base for exploring the southern Riviera.",
  },
  {
    slug: "tirana-airport-to-sarande",
    city: "Sarandë",
    durationLabel: "About 4–5 hours",
    description:
      "Enjoy a direct transfer to the southern coast and seafront promenade.",
  },
  {
    slug: "tirana-airport-to-ksamil",
    city: "Ksamil",
    durationLabel: "About 4.5–5.5 hours",
    description:
      "Travel directly to the seaside village near Butrint National Park.",
  },
  {
    slug: "tirana-airport-to-kruje",
    city: "Krujë",
    durationLabel: "About 40–60 min",
    description:
      "Visit the historic castle town and traditional bazaar in the hills.",
  },
];
export function getRouteBySlug(slug: string) {
  return routes.find((route) => route.slug === slug);
}
