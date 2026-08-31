import { Metadata } from "next";
import ConcretersSeoClient from "./ConcretersSeoClient";

export const metadata: Metadata = {
  title: "Concreters SEO Gold Coast | Google Maps for Tradies",
  description:
    "Dominate 57 Gold Coast suburbs on Google Maps. QBCC-compliant tradie SEO generating 40+ exclusive monthly quote calls.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/concreters-seo",
  },
  openGraph: {
    title: "Concreters SEO Gold Coast | Google Maps for Tradies",
    description:
      "Dominate 57 Gold Coast suburbs on Google Maps. QBCC-compliant tradie SEO generating 40+ exclusive monthly quote calls.",
    url: "https://www.vorticgrowth.com/concreters-seo",
    siteName: "Vortic Growth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Concreters SEO Gold Coast - Vortic Growth",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concreters SEO Gold Coast | Google Maps for Tradies",
    description:
      "Dominate 57 Gold Coast suburbs on Google Maps. QBCC-compliant tradie SEO generating 40+ exclusive monthly quote calls.",
    images: ["/og-image.jpg"],
  },
};

export default function ConcretersSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Concreters & Tradies Local SEO Engine",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "url": "https://www.vorticgrowth.com",
              "telephone": "+61401164987"
            },
            "serviceType": "Trade Contractor Local SEO & Lead Generation",
            "description": "Google Maps 3-Pack supremacy, QBCC trade license integration, and multi-suburb micro-silo architecture for Australian concreters and contractors."
          }),
        }}
      />
      <ConcretersSeoClient />
    </>
  );
}
