import { Metadata } from "next";
import RoofingClient from "./RoofingClient";

export const metadata: Metadata = {
  title: "Roofing SEO Gold Coast | #1 Local SEO for Roof Restoration & Metal Roofers",
  description:
    "Dominate Google Maps 3-Pack across Gold Coast suburbs. Exclusive local search framework for roofing contractors and restorations.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/roofing-seo-gold-coast",
  },
  openGraph: {
    title: "Roofing SEO Gold Coast | Vortic Growth",
    description:
      "Exclusive #1 Google Maps rankings for Gold Coast roofing contractors and metal roof restoration specialists.",
    url: "https://www.vorticgrowth.com/roofing-seo-gold-coast",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Roofing SEO Gold Coast" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function RoofingPage() {
  return <RoofingClient />;
}
