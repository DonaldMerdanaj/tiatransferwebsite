export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Where will my driver meet me at TIA?",
    answer:
      "Your driver waits in the arrivals hall holding a sign with your name, right after you clear customs. You'll get their name and phone number by SMS before you land.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We track your flight automatically, so a delay doesn't cost you anything — your driver adjusts their arrival to match yours, no extra fee and no need to message us.",
  },
  {
    question: "Can I request a child seat?",
    answer:
      "Yes. Add it when you book, or message us at least a few hours ahead of pickup, and it'll be fitted and ready in the car.",
  },
  {
    question: "Can I cancel or change my transfer?",
    answer:
      "Free cancellation up to 24 hours before pickup, and changes to your pickup time or flight number any time before that — just reply to your confirmation email or WhatsApp us.",
  },
];
