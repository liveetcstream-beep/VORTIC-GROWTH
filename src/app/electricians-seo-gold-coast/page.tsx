import { Metadata } from "next";
import ElectriciansClient from "./ElectriciansClient";

export const metadata: Metadata = {
  title: "Electricians SEO Gold Coast | #1 Google Maps for Sparkies",
  description:
    "Dominate Google Maps 3-Pack across Pimpama, Coomera, Helensvale, and Gold Coast. Guaranteed exclusive local search framework for electrical contractors.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/electricians-seo-gold-coast",
  },
  openGraph: {
    title: "Electricians SEO Gold Coast | Vortic Growth",
    description:
      "Exclusive #1 Google Maps rankings for Gold Coast sparkies and solar battery installers.",
    url: "https://www.vorticgrowth.com/electricians-seo-gold-coast",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Electricians SEO Gold Coast" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function ElectriciansPage() {
  return <ElectriciansClient />;
}
