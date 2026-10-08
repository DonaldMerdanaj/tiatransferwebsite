export type FleetVehicle = {
  slug: string;
  name: string;
  note: string;
  image: string;
};
// Supplied category artwork is illustrative; actual vehicle and capacity are confirmed at booking.
export const fleet: FleetVehicle[] = [
  {
    slug: "economy",
    name: "Economy",
    note: "Affordable private transfers for individual travellers and small groups.",
    image: "/images/fleet-sedan.jpg",
  },
  {
    slug: "comfort",
    name: "Comfort",
    note: "Comfortable vehicles for a relaxing journey.",
    image: "/images/fleet-business.jpg",
  },
  {
    slug: "minivan",
    name: "Minivan",
    note: "Spacious transportation for families and groups.",
    image: "/images/fleet-van.jpg",
  },
  {
    slug: "minibus",
    name: "Minibus",
    note: "Convenient transportation for larger groups.",
    image: "/images/fleet-minibus.jpg",
  },
];
