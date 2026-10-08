// Sample posts — replace with your AI content pipeline output
// (same pattern as travelinalbania.org). Keep the shape; swap the content.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  relatedRouteSlug?: string; // links a guide to its matching /routes/[slug]
  body: string[]; // paragraphs
};

export const posts: BlogPost[] = [
  {
    slug: "tirana-airport-arrivals-guide",
    title: "Tirana Airport Arrivals: What to Expect (2026 Guide)",
    description:
      "Customs, SIM cards, currency exchange, and where to find your driver — everything for the first 30 minutes after landing at TIA.",
    publishedAt: "2026-01-15",
    body: [
      "Tirana International Airport (TIA) is small enough that arrivals rarely take long, but a few things catch first-time visitors off guard.",
      "After you clear passport control and collect your bags, arrivals is a single hall — your driver will be waiting there with a sign showing your name.",
      "If you need cash, ATMs are available past customs; card payment is widely accepted in Tirana itself but less so outside the capital.",
    ],
  },
  {
    slug: "things-to-do-in-sarande",
    title: "Things to Do in Sarande: A First-Timer's List",
    description:
      "The Albanian Riviera's main hub — beaches, boat trips to Ksamil, and the short ferry to Corfu.",
    publishedAt: "2026-02-03",
    relatedRouteSlug: "tirana-airport-to-sarande",
    body: [
      "Sarande sits at the southern end of the Albanian Riviera, and most visitors use it as a base for the beaches around Ksamil, a short drive south.",
      "The town itself has a long seafront promenade, and boats to Corfu, Greece run daily in season if you want a day trip across the strait.",
      "If you're arriving straight from Tirana Airport, it's a 3h 45min drive — worth booking a fixed-price transfer rather than negotiating on arrival.",
    ],
  },
  {
    slug: "how-much-does-a-tirana-airport-taxi-cost",
    title: "How Much Does a Tirana Airport Taxi Cost?",
    description:
      "What official airport taxis charge vs. a pre-booked fixed-price transfer, and why the difference matters after a long flight.",
    publishedAt: "2026-02-20",
    relatedRouteSlug: "tirana-airport-to-tirana",
    body: [
      "Taxis at TIA operate on a fixed-fare board into central Tirana, but prices can vary by time of day and whether a taxi is officially licensed.",
      "A pre-booked transfer removes the guesswork: the price is agreed before you land, your driver tracks your flight, and there's no negotiation at the curb.",
      "For short hops into Tirana it's a marginal difference — for longer routes down the coast, a fixed price is worth booking ahead.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
