import { Metadata } from "next";
import CoomeraClient from "./CoomeraClient";

export const metadata: Metadata = {
  title: "Local SEO Coomera (4209) | #1 Google Maps & AI Search Agency",
  description:
    "Dominate Google Maps 3-Pack and Gemini AI search results in Coomera, Upper Coomera, and Coomera Waters (Postcode 4209). Specialized local search architecture for Gold Coast businesses.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/local-seo-coomera",
  },
  openGraph: {
    title: "Local SEO Coomera (4209) | Vortic Growth Search Architecture",
    description:
      "Exclusive #1 Google Maps rankings and Google AI Overviews citations for Coomera Town Centre, Upper Coomera, and Marine Precinct businesses.",
    url: "https://www.vorticgrowth.com/local-seo-coomera",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Local SEO Coomera 4209" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Coomera (4209) | Vortic Growth",
    description:
      "Exclusive Google Maps & AI search dominance for Coomera trade contractors and local practices.",
    images: ["/vortic_seo_showcase_1788191983849.jpg"],
  },
};

export default function CoomeraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.vorticgrowth.com/#organization",
        "name": "Vortic Growth Search Architecture - Coomera Branch",
        "url": "https://www.vorticgrowth.com/local-seo-coomera",
        "logo": "https://www.vorticgrowth.com/vorticgrowth-logo.png",
        "image": "https://www.vorticgrowth.com/vortic_seo_showcase_1788191983849.jpg",
        "telephone": "+61401164987",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Coomera Town Centre Precinct",
          "addressLocality": "Coomera",
          "addressRegion": "QLD",
          "postalCode": "4209",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -27.8542,
          "longitude": 153.3276
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Coomera 4209" },
          { "@type": "AdministrativeArea", "name": "Upper Coomera" },
          { "@type": "AdministrativeArea", "name": "Coomera Waters" },
          { "@type": "AdministrativeArea", "name": "Coomera Marine Precinct" }
        ],
        "description": "Specialized Local SEO, Google Maps 3-Pack, and Generative AI Search (GEO) optimization for Coomera businesses."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.vorticgrowth.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Local SEO Gold Coast",
            "item": "https://www.vorticgrowth.com/local-seo-gold-coast"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Local SEO Coomera",
            "item": "https://www.vorticgrowth.com/local-seo-coomera"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoomeraClient />
    </>
  );
}
