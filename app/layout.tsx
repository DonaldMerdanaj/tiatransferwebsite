import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiatransfer.com"),
  title: {
    default: "TiaTransfer | Tirana Airport Transfers",
    template: "%s",
  },
  description:
    "Private airport transfers from Tirana Airport with fixed prices, flight tracking, meet & greet, and a local driver waiting at arrivals.",
  openGraph: {
    type: "website",
    url: "https://tiatransfer.com",
    siteName: "TiaTransfer",
    title: "TiaTransfer | Tirana Airport Transfers",
    description:
      "A calm, fixed-price airport transfer from Tirana Airport to wherever your Albania trip begins.",
    images: [
      {
        url: "/images/tia-airport.webp",
        width: 1440,
        height: 1800,
        alt: "TiaTransfer airport transfer in Albania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TiaTransfer | Tirana Airport Transfers",
    description:
      "Fixed-price private transfers from Tirana Airport with a local driver waiting at arrivals.",
    images: ["/images/tia-airport.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analyticsId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  return (
    <html lang="en">
      <body className="bg-white text-[#132235] antialiased">
        {children}
        {analyticsId && /^G-[A-Z0-9]+$/.test(analyticsId) && (
          <Analytics measurementId={analyticsId} />
        )}
      </body>
    </html>
  );
}
