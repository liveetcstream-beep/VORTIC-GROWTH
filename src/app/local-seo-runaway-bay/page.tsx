import { Metadata } from "next";
import RunawayBayClient from "./RunawayBayClient";

export const metadata: Metadata = {
  title: "Local SEO Runaway Bay & Biggera Waters (4216) | Vortic Growth",
  description: "Dominate Google Maps 3-Pack and Gemini AI Overviews in Runaway Bay, Biggera Waters, and Labrador (Postcode 4216).",
  alternates: { canonical: "https://www.vorticgrowth.com/local-seo-runaway-bay" },
};

export default function Page() { return <RunawayBayClient />; }
