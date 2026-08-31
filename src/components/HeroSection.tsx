"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  ArrowRight,
  Star,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Search,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Zap,
  Stethoscope,
  Hammer,
  Scale,
} from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"dental" | "trade" | "legal">("dental");

  const simulations = {
    dental: {
      query: "cosmetic dentist & dental implants gold coast",
      businessName: "Elite Dental & Implant Clinic",
      niche: "Dental Clinic • Cosmetic & Orthodontics",
      rating: "5.0",
      reviews: "86 verified patient reviews",
      leadStat: "38+ High-Value Bookings / Mo",
      avgValue: "$4,500 – $22,000+ per Patient",
      growthStat: "+410%",
      growthLabel: "Implant Patient Growth",
    },
    trade: {
      query: "concreters pimpama gold coast",
      businessName: "Gold Coast Concreters QLD",
      niche: "Concrete Contractor • Residential & Commercial",
      rating: "5.0",
      reviews: "48 verified reviews",
      leadStat: "45+ Inbound Quote Calls / Mo",
      avgValue: "$40K+ Commercial Slabs",
      growthStat: "+340%",
      growthLabel: "Inbound Phone Call Growth",
    },
    legal: {
      query: "commercial & personal injury lawyers near me",
      businessName: "Pacific Coast Legal Partners",
      niche: "Law Firm • Commercial & Injury Law",
      rating: "4.9",
      reviews: "64 client testimonials",
      leadStat: "22+ Retainer Inquiries / Mo",
      avgValue: "$15,000+ Average Retainer",
      growthStat: "+280%",
      growthLabel: "Case Intake Acceleration",
    },
  };

  const sim = simulations[activeTab];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-100/50 via-blue-100/40 to-transparent blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Pitch & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/70 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <span className="text-base">🇦🇺</span>
              <span>Gold Coast & Global Search Domination</span>
              <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full text-xs font-extrabold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                Multi-Industry Lead Engine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Dominate Google Maps & Claim The{" "}
              <span className="gradient-text">#1 Suburb Ranking</span> in Your City.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              We engineer hyper-local organic search engines and Google Maps 3-Pack supremacy for <strong>Dentists, Medical Clinics, High-Value Tradies, Builders, and Professional Firms</strong>. Stop leaking lucrative clients to competitors and turn your search presence into an automated inbound booking machine.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/61411914157?text=Hi%20Bilal,%20I'm%20a%20business%20owner.%20I'd%20like%20to%20claim%20my%20Free%20Local%20SEO%20Audit%20and%20ranking%20roadmap."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all hover:translate-y-[-2px]"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <div className="text-left leading-tight">
                  <div className="font-extrabold">Instant WhatsApp Strategy Call</div>
                  <div className="text-xs text-emerald-100 font-normal">Direct with Lead Architect • 0 Sales Pressure</div>
                </div>
              </a>

              <a
                href="#audit-form"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border border-slate-300 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </a>
            </div>

            {/* Social Proof Line */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80 w-full">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-sm">
                  🦷
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-sm">
                  🏗️
                </div>
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-sm">
                  ⚖️
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-slate-800 ml-1">5.0 Star Verified Track Record</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Trusted across <strong className="text-slate-800 font-semibold">Dental, Healthcare, Builders, Tradies & Commercial Enterprises</strong>.
                </p>
              </div>
            </div>

            {/* Guarantee Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 w-full text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Zero Lock-in Contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Google Maps 3-Pack Focus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Google AI Overview Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Suburb Micro-Silos</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Simulated Google Maps 3-Pack Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow Behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-70"></div>

              {/* Main Simulated Card */}
              <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 space-y-4">
                
                {/* Industry Switcher Tabs */}
                <div className="flex items-center justify-between gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setActiveTab("dental")}
                    className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === "dental"
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Dentists</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("trade")}
                    className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === "trade"
                        ? "bg-white text-indigo-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Hammer className="w-3.5 h-3.5" />
                    <span>Tradies</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("legal")}
                    className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === "legal"
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>Law Firms</span>
                  </button>
                </div>

                {/* Simulated Search Bar */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 shadow-inner">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-semibold text-slate-900 truncate">{sim.query}</span>
                  <span className="ml-auto text-[10px] uppercase font-bold text-slate-400 tracking-wider shrink-0">AU</span>
                </div>

                {/* Simulated Map Pack Items */}
                <div className="space-y-3 pt-1">
                  
                  {/* #1 Winner Item */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-blue-50/50 to-white border-2 border-indigo-500 shadow-md relative overflow-hidden">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                          1
                        </span>
                        <div>
                          <h2 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                            {sim.businessName}
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
                          </h2>
                          <div className="flex items-center gap-1 text-xs text-amber-500 pt-0.5">
                            <span className="font-bold text-slate-800">{sim.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-slate-500 font-medium text-[11px]">({sim.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shadow-sm">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </span>
                        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs shadow-sm">
                          <MapPin className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] pt-2 border-t border-indigo-100/80">
                      <span className="text-slate-600 font-medium truncate pr-2">{sim.niche}</span>
                      <span className="inline-flex items-center gap-1 text-indigo-700 font-bold bg-indigo-100/70 px-2 py-0.5 rounded shrink-0">
                        <Zap className="w-3 h-3 text-indigo-600" /> {sim.leadStat}
                      </span>
                    </div>
                  </div>

                  {/* #2 Dimmed Competitor */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 opacity-60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded bg-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <div className="font-semibold text-slate-800">Competitor Practice A</div>
                        <div className="text-[11px] text-slate-500">4.2 Stars • Standard Listing</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">Page 1 Contender</span>
                  </div>

                </div>

                {/* Bottom Impact Metric */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-center">
                    <div className="text-xl font-extrabold text-indigo-900 flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      {sim.growthStat}
                    </div>
                    <div className="text-[11px] font-semibold text-indigo-700">{sim.growthLabel}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-center">
                    <div className="text-sm font-extrabold text-emerald-900 truncate">
                      {sim.avgValue}
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-700">Average Case Revenue</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
