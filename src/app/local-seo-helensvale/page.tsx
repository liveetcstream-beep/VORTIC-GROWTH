import { Metadata } from "next";
import HelensvaleClient from "./HelensvaleClient";

export const metadata: Metadata = {
  title: "Local SEO Helensvale (4212) | #1 Google Maps & AI Search Agency",
  description:
    "Dominate Google Maps 3-Pack and Gemini AI Overviews in Helensvale (Postcode 4212). Exclusive local search architecture for Northern Gold Coast businesses.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/local-seo-helensvale",
  },
  openGraph: {
    title: "Local SEO Helensvale (4212) | Vortic Growth Search Architecture",
    description:
      "Exclusive #1 Google Maps 3-Pack rankings and Google AI citations for businesses in Helensvale, Monterey Keys, and Oyster Cove.",
    url: "https://www.vorticgrowth.com/local-seo-helensvale",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Local SEO Helensvale 4212" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function HelensvalePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Vortic Growth Search Architecture - Helensvale Branch",
        "url": "https://www.vorticgrowth.com/local-seo-helensvale",
        "telephone": "+61401164987",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Westfield Helensvale Precinct",
          "addressLocality": "Helensvale",
          "addressRegion": "QLD",
          "postalCode": "4212",
          "addressCountry": "AU"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HelensvaleClient />
    </>
  );
}
