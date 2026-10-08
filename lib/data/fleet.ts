export type FleetVehicle = {
  slug: string;
  name: string;
  note: string;
  image: string;
};

export const fleet: FleetVehicle[] = [
  { slug: "sedan", name: "Sedan", note: "1–3 passengers · 2 bags", image: "/images/fleet-sedan.jpg" },
  { slug: "business", name: "Business", note: "1–3 passengers · executive comfort", image: "/images/fleet-business.jpg" },
  { slug: "van", name: "Van", note: "4–8 passengers · room for everyone", image: "/images/fleet-van.jpg" },
  { slug: "minibus", name: "Minibus", note: "9–16 passengers · groups made easy", image: "/images/fleet-minibus.jpg" },
];
