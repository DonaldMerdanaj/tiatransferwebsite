// "Meet your driver" is the single biggest differentiator in Welcome Pickups'
// UX case study — it's what makes a pre-booked transfer feel personal instead
// of transactional. Replace the sample profiles with your real team before launch.

export type Driver = {
  name: string;
  bio: string;
  car: string;
  languages: string;
};

export const drivers: Driver[] = [
  {
    name: "Arben",
    bio: "Tirana-born, knows every shortcut around the Blloku traffic. Happy to point you to the best byrek spot on the way in.",
    car: "Mercedes E-Class",
    languages: "Albanian, English, Italian",
  },
  {
    name: "Elton",
    bio: "Runs the coastal routes to Vlore and Sarande most weeks — ask him about the best stop for a coffee break.",
    car: "Mercedes V-Class",
    languages: "Albanian, English, German",
  },
];
