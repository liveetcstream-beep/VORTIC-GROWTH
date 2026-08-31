import { Metadata } from "next";
import LocalSeoGoldCoastClient from "./LocalSeoGoldCoastClient";

export const metadata: Metadata = {
  title: "Local SEO Gold Coast | Google Maps 3-Pack Agency",
  description:
    "Dominate Gold Coast Google Maps 3-Pack across Surfers Paradise, Southport & 15+ suburbs. Exclusive local SEO ranking.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/local-seo-gold-coast",
  },
  openGraph: {
    title: "Local SEO Gold Coast | Google Maps 3-Pack Agency",
    description:
      "Dominate Gold Coast Google Maps 3-Pack across Surfers Paradise, Southport & 15+ suburbs. Exclusive local SEO ranking.",
    url: "https://www.vorticgrowth.com/local-seo-gold-coast",
    siteName: "Vortic Growth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Local SEO Gold Coast - Vortic Growth",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Gold Coast | Google Maps 3-Pack Agency",
    description:
      "Dominate Gold Coast Google Maps 3-Pack across Surfers Paradise, Southport & 15+ suburbs.",
    images: ["/og-image.jpg"],
  },
};

export default function LocalSeoGoldCoastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Local SEO Gold Coast & Google Maps Optimization",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "url": "https://www.vorticgrowth.com",
              "telephone": "+61401164987",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gold Coast",
                "addressRegion": "QLD",
                "postalCode": "4217",
                "addressCountry": "AU"
              }
            },
            "areaServed": [
              "Surfers Paradise QLD 4217",
              "Southport QLD 4215",
              "Robina QLD 4226",
              "Broadbeach QLD 4218",
              "Burleigh Heads QLD 4220",
              "Coomera QLD 4209",
              "Pimpama QLD 4209",
              "Helensvale QLD 4212"
            ],
            "description": "Hyper-local search engine optimization and Google Maps 3-Pack ranking for businesses across Gold Coast suburbs."
          }),
        }}
      />
      <LocalSeoGoldCoastClient />
    </>
  );
}
