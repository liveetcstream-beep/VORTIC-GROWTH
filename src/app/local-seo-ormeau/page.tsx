import { Metadata } from "next";
import OrmeauClient from "./OrmeauClient";

export const metadata: Metadata = {
  title: "Local SEO Ormeau (4208) | #1 Google Maps & AI Agency",
  description:
    "Dominate Google Maps 3-Pack and Gemini AI Overviews in Ormeau, Ormeau Hills, and Kingsholme (Postcode 4208). Exclusive local search framework for contractors.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/local-seo-ormeau",
  },
  openGraph: {
    title: "Local SEO Ormeau (4208) | Vortic Growth Search Architecture",
    description:
      "Exclusive #1 Google Maps rankings for Ormeau Industrial Park, Ormeau Hills, and M1 trade corridor businesses.",
    url: "https://www.vorticgrowth.com/local-seo-ormeau",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Local SEO Ormeau 4208" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function OrmeauPage() {
  return <OrmeauClient />;
}
