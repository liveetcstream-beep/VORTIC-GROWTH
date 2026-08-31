import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Vortic Growth | Gold Coast Local SEO Agency",
  description:
    "Speak directly with a Gold Coast search architect. Book your free 15-minute Google Maps and suburb ranking audit today.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/contact",
  },
  openGraph: {
    title: "Contact Vortic Growth | Gold Coast Local SEO Agency",
    description:
      "Speak directly with a Gold Coast search architect. Book your free 15-minute Google Maps and suburb ranking audit today.",
    url: "https://www.vorticgrowth.com/contact",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Vortic Growth" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vortic Growth | Gold Coast Local SEO Agency",
    description:
      "Speak directly with a Gold Coast search architect. Book your free Google Maps audit.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Vortic Growth",
            "url": "https://www.vorticgrowth.com/contact",
            "mainEntity": {
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "telephone": "+61401164987",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gold Coast",
                "addressRegion": "QLD",
                "postalCode": "4217",
                "addressCountry": "AU"
              }
            }
          }),
        }}
      />
      <ContactClient />
    </>
  );
}
