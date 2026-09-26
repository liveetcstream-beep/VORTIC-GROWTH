import { Metadata } from "next";
import ArundelClient from "./ArundelClient";

export const metadata: Metadata = {
  title: "Local SEO Arundel & Parkwood (4214) | Vortic Growth",
  description: "Dominate Google Maps 3-Pack and Gemini AI Overviews in Arundel Industrial Park and Parkwood (Postcode 4214).",
  alternates: { canonical: "https://www.vorticgrowth.com/local-seo-arundel" },
};

export default function Page() { return <ArundelClient />; }
