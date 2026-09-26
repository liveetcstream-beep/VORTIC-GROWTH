import { Metadata } from "next";
import HopeIslandClient from "./HopeIslandClient";

export const metadata: Metadata = {
  title: "Local SEO Hope Island & Sanctuary Cove (4212) | Vortic Growth",
  description:
    "Dominate Google Maps 3-Pack and Gemini AI Overviews in Hope Island Resort and Sanctuary Cove (Postcode 4212). Capture high-net-worth local clients.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/local-seo-hope-island",
  },
  openGraph: {
    title: "Local SEO Hope Island & Sanctuary Cove (4212) | Vortic Growth",
    description:
      "Exclusive #1 Google Maps rankings for Hope Island Resort, Sanctuary Cove, and Santa Barbara waterfront businesses.",
    url: "https://www.vorticgrowth.com/local-seo-hope-island",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Local SEO Hope Island 4212" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function HopeIslandPage() {
  return <HopeIslandClient />;
}
