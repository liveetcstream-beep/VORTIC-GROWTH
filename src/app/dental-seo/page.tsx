import { Metadata } from "next";
import DentalSeoClient from "./DentalSeoClient";

export const metadata: Metadata = {
  title: "Dental SEO Gold Coast | Google Maps for Dentists",
  description:
    "Attract 25+ high-value dental implant & cosmetic patients monthly. AHPRA-compliant local SEO for Australian clinics.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/dental-seo",
  },
  openGraph: {
    title: "Dental SEO Gold Coast | Google Maps for Dentists",
    description:
      "Attract 25+ high-value dental implant & cosmetic patients monthly. AHPRA-compliant local SEO for Australian clinics.",
    url: "https://www.vorticgrowth.com/dental-seo",
    siteName: "Vortic Growth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dental SEO Gold Coast - Vortic Growth",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental SEO Gold Coast | Google Maps for Dentists",
    description:
      "Attract 25+ high-value dental implant & cosmetic patients monthly. AHPRA-compliant local SEO for Australian clinics.",
    images: ["/og-image.jpg"],
  },
};

export default function DentalSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dental SEO & Patient Acquisition Engine",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "url": "https://www.vorticgrowth.com",
              "telephone": "+61401164987"
            },
            "serviceType": "Healthcare SEO & Patient Lead Generation",
            "description": "AHPRA-compliant Local SEO, Google Maps 3-Pack optimization, and high-value treatment acquisition (All-on-4, Implants, Invisalign) for Australian dental practices."
          }),
        }}
      />
      <DentalSeoClient />
    </>
  );
}
