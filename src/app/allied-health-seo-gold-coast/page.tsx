import { Metadata } from "next";
import AlliedHealthClient from "./AlliedHealthClient";

export const metadata: Metadata = {
  title: "Allied Health SEO Gold Coast | #1 Local SEO for Medical Clinics",
  description:
    "Dominate Google Maps 3-Pack across Gold Coast postcodes. AHPRA-compliant local search engine architecture for Allied Health practices.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/allied-health-seo-gold-coast",
  },
  openGraph: {
    title: "Allied Health SEO Gold Coast | Vortic Growth",
    description:
      "AHPRA-compliant local search engine architecture for Gold Coast Allied Health clinics and physios.",
    url: "https://www.vorticgrowth.com/allied-health-seo-gold-coast",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Allied Health SEO Gold Coast" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function AlliedHealthPage() {
  return <AlliedHealthClient />;
}
