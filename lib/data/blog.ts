export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  relatedRouteSlug?: string;
  image?: string;
  body: string[];
};
export const posts: BlogPost[] = [
  {
    slug: "tirana-airport-to-ksamil-guide",
    title: "How to Get from Tirana Airport to Ksamil",
    description:
      "Plan your arrival, compare transport options and prepare for a transfer to the southern coast.",
    publishedAt: "2026-10-08",
    relatedRouteSlug: "tirana-airport-to-ksamil",
    body: [
      "Ksamil is on Albania’s southern coast, near Sarandë and Butrint National Park. Travellers arriving at Tirana Airport should plan a substantial onward road journey rather than a short airport taxi ride.",
      "A pre-booked private transfer takes you directly to your accommodation. Enter the full address, passenger count and luggage requirements so you can choose an appropriate vehicle and review the actual fare before confirming.",
      "Travelling by public transport usually involves reaching an intercity departure point, continuing towards Sarandë and arranging the final connection to Ksamil. Check current timetables for your arrival day and leave time between connections.",
      "Road travel times vary with traffic, stops and seasonal conditions. Allow additional time for a return transfer to the airport and agree the pickup time with the operator.",
    ],
  },
  {
    slug: "how-much-does-a-tirana-airport-taxi-cost",
    title: "Tirana Airport Taxi Prices and Transportation Guide",
    description:
      "Understand how airport transfer quotes work and choose transport that fits your journey.",
    publishedAt: "2026-10-08",
    relatedRouteSlug: "tirana-airport-to-tirana",
    body: [
      "The cost of transport from Tirana Airport depends on your destination, vehicle size and any extras. This guide does not publish unverified fares; use the booking form to obtain a current quote for your journey.",
      "Before accepting a taxi or confirming a private transfer, check the total price, payment method, pickup arrangements and whether your luggage and requested child seats are included.",
      "A pre-booked transfer lets you arrange your destination and vehicle before arrival. If you choose public transport, check the current route, timetable and luggage arrangements with the operator.",
      "For groups, compare the total journey cost rather than only a per-person headline price. Confirm your flight details and accommodation address before booking.",
    ],
  },
  {
    slug: "tirana-airport-to-sarande-guide",
    title: "How to Get from Tirana Airport to Sarandë",
    description:
      "Prepare for a comfortable journey from the airport to the Albanian Riviera.",
    publishedAt: "2026-10-08",
    relatedRouteSlug: "tirana-airport-to-sarande",
    body: [
      "Sarandë is a coastal city in southern Albania. A transfer from Tirana Airport is a longer intercity journey, so it helps to decide on transport before you land.",
      "For a direct journey, book a private transfer to the full address of your hotel or apartment. Include your flight number and choose a vehicle with enough room for everyone and their luggage.",
      "Public transport can require a connection from the airport to an intercity departure point. Confirm the current service schedule and whether it works with your arrival time before relying on this option.",
      "Allow flexibility for traffic and rest stops, particularly during the summer. For your return journey, agree an airport departure time that leaves enough room for check-in and security.",
    ],
  },
];
export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
