export type TransferRoute = {
  slug: string;
  city: string;
  durationLabel: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position?: string;
  };
};
// Travel times are planning estimates; the booking provider confirms each fare.
export const routes: TransferRoute[] = [
  {
    slug: "tirana-airport-to-tirana",
    city: "Tirana",
    image: {
      src: "/images/destinations/tirana.webp",
      alt: "Museum façade and open square in central Tirana",
      width: 1600,
      height: 1073,
      position: "50% 65%",
    },
    durationLabel: "About 30–45 min",
    description:
      "Explore the capital’s cafés, museums and lively city neighbourhoods.",
  },
  {
    slug: "tirana-airport-to-durres",
    city: "Durrës",
    image: {
      src: "/images/destinations/durres.webp",
      alt: "Palm-lined square and buildings in Durrës",
      width: 1200,
      height: 1600,
      position: "50% 62%",
    },
    durationLabel: "About 40–60 min",
    description:
      "Head to the Adriatic coast, seaside hotels and historic harbour city.",
  },
  {
    slug: "tirana-airport-to-golem",
    city: "Golem",
    image: {
      src: "/images/destinations/golem.webp",
      alt: "Sunset over the waterfront in Golem",
      width: 1600,
      height: 1067,
    },
    durationLabel: "About 50–75 min",
    description: "A direct arrival at the beach resorts south of Durrës.",
  },
  {
    slug: "tirana-airport-to-vlore",
    city: "Vlorë",
    image: {
      src: "/images/destinations/vlore.webp",
      alt: "Vlorë coastline and city beside the bay",
      width: 1600,
      height: 1200,
    },
    durationLabel: "About 2–3 hours",
    description:
      "Start your coastal journey where the Adriatic meets the Ionian Sea.",
  },
  {
    slug: "tirana-airport-to-berat",
    city: "Berat",
    image: {
      src: "/images/destinations/berat.webp",
      alt: "Traditional hillside houses above the river in Berat",
      width: 1600,
      height: 1067,
    },
    durationLabel: "About 2–3 hours",
    description:
      "Travel to the riverside city known for its hillside Ottoman architecture.",
  },
  {
    slug: "tirana-airport-to-shkoder",
    city: "Shkodër",
    image: {
      src: "/images/destinations/shkoder.webp",
      alt: "Rivers and surrounding countryside near Shkodër",
      width: 1600,
      height: 1200,
    },
    durationLabel: "About 1.5–2 hours",
    description:
      "Discover the northern lake city and gateway to the Albanian Alps.",
  },
  {
    slug: "tirana-airport-to-theth",
    city: "Theth",
    image: {
      src: "/images/destinations/theth.webp",
      alt: "Stone church surrounded by mountains in Theth",
      width: 1600,
      height: 1200,
      position: "50% 25%",
    },
    durationLabel: "About 3.5–5 hours",
    description:
      "Continue into the mountains to the village at the heart of the Albanian Alps.",
  },
  {
    slug: "tirana-airport-to-dhermi",
    city: "Dhërmi",
    image: {
      src: "/images/destinations/dhermi.webp",
      alt: "Stone buildings and hillside village in Dhërmi",
      width: 1600,
      height: 1200,
    },
    durationLabel: "About 3–4 hours",
    description: "Reach the beaches and villages of the Albanian Riviera.",
  },
  {
    slug: "tirana-airport-to-himare",
    city: "Himarë",
    image: {
      src: "/images/destinations/himare.webp",
      alt: "Beach umbrellas and clear sea below coastal cliffs in Himarë",
      width: 1067,
      height: 1600,
      position: "50% 80%",
    },
    durationLabel: "About 3.5–4.5 hours",
    description:
      "Arrive at a relaxed coastal base for exploring the southern Riviera.",
  },
  {
    slug: "tirana-airport-to-sarande",
    city: "Sarandë",
    image: {
      src: "/images/destinations/sarande.webp",
      alt: "Sarandë waterfront and harbour overlooking the bay",
      width: 1600,
      height: 1200,
    },
    durationLabel: "About 4–5 hours",
    description:
      "Enjoy a direct transfer to the southern coast and seafront promenade.",
  },
  {
    slug: "tirana-airport-to-ksamil",
    city: "Ksamil",
    image: {
      src: "/images/destinations/ksamil.webp",
      alt: "Aerial view of Ksamil beach umbrellas and turquoise water",
      width: 1600,
      height: 900,
    },
    durationLabel: "About 4.5–5.5 hours",
    description:
      "Travel directly to the seaside village near Butrint National Park.",
  },
  {
    slug: "tirana-airport-to-kruje",
    city: "Krujë",
    image: {
      src: "/images/destinations/kruje.webp",
      alt: "Krujë castle buildings above the old town",
      width: 1600,
      height: 1067,
    },
    durationLabel: "About 40–60 min",
    description:
      "Visit the historic castle town and traditional bazaar in the hills.",
  },
];
export function getRouteBySlug(slug: string) {
  return routes.find((route) => route.slug === slug);
}
