import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadgesBar from "@/components/TrustBadgesBar";
import ProofTicker from "@/components/ProofTicker";
import HowItWorksSection from "@/components/HowItWorksSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudySection from "@/components/CaseStudySection";
import AboutFounderSection from "@/components/AboutFounderSection";
import SuburbDominationEngine from "@/components/SuburbDominationEngine";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <TrustBadgesBar />
      <ProofTicker />
      <HowItWorksSection />
      <IndustriesSection />
      <CaseStudySection />
      <AboutFounderSection />
      <SuburbDominationEngine />
      <TestimonialsSection />
      <RoiCalculator />
      <ComparisonMatrix />
      <PricingPackages />
      <FreeAuditSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
