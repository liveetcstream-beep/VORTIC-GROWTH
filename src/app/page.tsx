import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofTicker from "@/components/ProofTicker";
import CaseStudySection from "@/components/CaseStudySection";
import SuburbDominationEngine from "@/components/SuburbDominationEngine";
import RoiCalculator from "@/components/RoiCalculator";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import PricingPackages from "@/components/PricingPackages";
import FreeAuditSection from "@/components/FreeAuditSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <ProofTicker />
      <CaseStudySection />
      <SuburbDominationEngine />
      <RoiCalculator />
      <ComparisonMatrix />
      <PricingPackages />
      <FreeAuditSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
