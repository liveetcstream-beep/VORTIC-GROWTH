"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Star,
  Search,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Zap,
  PhoneCall,
  Calculator,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Send,
  Award,
} from "lucide-react";

export default function DentalSeoPage() {
  // Calculator State
  const [treatmentType, setTreatmentType] = useState<"implants" | "invisalign" | "veneers" | "mixed">("implants");
  const [patientInquiries, setPatientInquiries] = useState(35);
  const [avgTreatmentValue, setAvgTreatmentValue] = useState(8500);
  const [caseAcceptanceRate, setCaseAcceptanceRate] = useState(35); // 35% acceptance rate

  const treatmentPresets = {
    implants: { name: "Dental Implants & Restorations", avg: 5500, defaultLeads: 20 },
    invisalign: { name: "Invisalign & Clear Aligners", avg: 4500, defaultLeads: 25 },
    veneers: { name: "Porcelain Veneers & Cosmetics", avg: 6000, defaultLeads: 15 },
    mixed: { name: "Comprehensive Practice Mix", avg: 2500, defaultLeads: 35 },
  };

  const handleTreatmentChange = (key: "implants" | "invisalign" | "veneers" | "mixed") => {
    setTreatmentType(key);
    setAvgTreatmentValue(treatmentPresets[key].avg);
    setPatientInquiries(treatmentPresets[key].defaultLeads);
  };

  const acceptedPatients = Math.round((patientInquiries * (caseAcceptanceRate / 100)) * 10) / 10;
  const monthlyPipeline = Math.round(acceptedPatients * avgTreatmentValue);
  const annualPipeline = monthlyPipeline * 12;
  const roiMultiplier = Math.round((monthlyPipeline / 990) * 10) / 10;

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    practiceName: "",
    dentistName: "",
    suburb: "",
    website: "",
    priorityTreatment: "Dental Implants & Restorations",
    phone: "",
    email: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const dentalFaqs = [
    {
      q: "Are your Dental SEO and content strategies 100% AHPRA compliant?",
      a: "Yes, absolutely. We strictly adhere to the Dental Board of Australia and AHPRA advertising guidelines. We never use banned superlative terms ('best dentist', 'guaranteed pain-free') or misleading testimonials. Instead, we engineer authoritative clinical EEAT signals, localized suburb relevance, and verified Google Maps proximity signals that comply fully with Australian medical advertising laws.",
    },
    {
      q: "How fast will our dental practice see new patient bookings?",
      a: "Emergency dentistry and localized Google Maps 3-Pack ranking improvements typically initiate within 30 to 45 days. Procedure pipelines like Dental Implants and Invisalign suburb micro-silos achieve maximum booking velocity within 60 to 90 days as Google AI and local topical authority mature.",
    },
    {
      q: "Do you offer geographic exclusivity to one dental clinic per suburb?",
      a: "Yes. We maintain strict territory exclusivity. We will only partner with ONE dental practice in your designated suburb territory (e.g. Robina, Southport, Coomera, Hope Island). We never work with your direct neighborhood competitors while managing your growth.",
    },
    {
      q: "Why should we choose SEO over Google Ads (PPC) for dental treatments?",
      a: "Dental Google Ads in Australia are among the most expensive in the world—often costing $80 to $180+ per single click for keywords like 'dental implants gold coast'. When you stop paying ads, traffic drops to zero immediately. Our Suburb Domination Engine builds permanent digital equity and organic Google Maps dominance where every patient lead costs zero in advertising fees.",
    },
    {
      q: "Can this integrate with our online booking software (Cliniko, Dental4Windows, Exact)?",
      a: "Yes! We optimize your patient journey so organic searchers can seamlessly click to call, message direct on WhatsApp, or book their initial consultation directly into your existing patient management software.",
    },
  ];

  const procedures = [
    {
      title: "Dental Implants & Restorations",
      value: "$3,500 – $7,500",
      desc: "Capture patients actively seeking single tooth replacements, implant crowns, and restorative care in your surrounding suburbs.",
      badge: "High Margin",
    },
    {
      title: "Invisalign & Clear Aligners",
      value: "$4,500 – $7,500",
      desc: "Outrank corporate dental chains for orthodontic searches among young professionals and adults in surrounding suburbs.",
      badge: "High Recurring Demand",
    },
    {
      title: "Porcelain Veneers & Smile Makeovers",
      value: "$4,000 – $9,500",
      desc: "Dominate aesthetic dentistry searches with high-converting procedure pages and Google AI Overview citations.",
      badge: "Cosmetic Excellence",
    },
    {
      title: "Emergency & Same-Day Dentistry",
      value: "$400 – $1,200",
      desc: "Lock in the #1 Google Maps spot for urgent toothaches, broken teeth, and immediate patient relief when speed is critical.",
      badge: "Instant Patient Capture",
    },
    {
      title: "Wisdom Teeth & Sedation",
      value: "$1,500 – $3,500",
      desc: "Target anxious patients searching for gentle extractions and sleep dentistry options nearby.",
      badge: "Surgical Inquiries",
    },
    {
      title: "General & Family Preventative Care",
      value: "$1,200+ Annual LTV",
      desc: "Build a solid foundation of long-term family check-ups, cleans, and pediatric dental patient pipelines.",
      badge: "Lifetime Patient Value",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-100/50 via-indigo-100/40 to-transparent blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-bold text-blue-900 shadow-sm">
                <span className="text-base">🦷</span>
                <span>Specialized Dental & Medical SEO Engine</span>
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-extrabold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                  AHPRA Compliant
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Fill Your Dental Chairs With{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  High-Margin Implant & Cosmetic Patients
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                We engineer Google Maps 3-Pack supremacy and Google AI Overview citations for Australian dental practices. Stop burning $120+ per click on Google Ads and capture <strong>35+ high-value treatment inquiries every month</strong> with zero ongoing ad spend.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20Dental%20Practice%20Owner.%20I'd%20like%20to%20claim%20our%20Free%20Dental%20SEO%20&%20Patient%20Audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:translate-y-[-2px] transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <div className="text-left leading-tight">
                    <div className="font-extrabold">Instant WhatsApp Practice Consultation</div>
                    <div className="text-xs text-emerald-100 font-normal">Direct with Lead Dental SEO Architect</div>
                  </div>
                </a>

                <a
                  href="#dental-audit"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border border-slate-300 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]"
                >
                  <span>Request Free Dental Audit</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </a>
              </div>

              {/* Social Proof Line */}
              <div className="pt-4 flex items-center gap-4 border-t border-slate-200 w-full">
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-slate-800 ml-1.5 text-sm">5.0 Star Dental Growth Engine</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-slate-600">
                  Targeting Gold Coast, Brisbane, Sydney & Melbourne Postcodes
                </span>
              </div>

            </div>

            {/* Right Column: Live Simulated Dental 3-Pack */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-70"></div>

                <div className="relative rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        G
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                          Google Maps Dental Simulation
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <div className="text-[11px] text-slate-500">Live High-LTV Patient Capture</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      Position #1
                    </span>
                  </div>

                  {/* Search query */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-semibold text-slate-900">dental implants gold coast</span>
                    <span className="ml-auto text-[10px] uppercase font-bold text-slate-400">QLD</span>
                  </div>

                  {/* Winner Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-white border-2 border-blue-500 shadow-md space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                          1
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                            Elite Dental & Implant Clinic
                            <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100" />
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-amber-500 pt-0.5">
                            <span className="font-bold text-slate-800">5.0</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-slate-500 font-medium text-[11px]">(94 patient reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shadow-sm">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </span>
                        <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs shadow-sm">
                          <MapPin className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-blue-100">
                      <span className="text-slate-600 font-medium">Dental Clinic • Robina & Southport</span>
                      <span className="text-blue-700 font-bold bg-blue-100 px-2 py-0.5 rounded">
                        <Zap className="w-3 h-3 inline mr-0.5" /> 38+ Bookings / Mo
                      </span>
                    </div>
                  </div>

                  {/* Competitor Dimmed */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 opacity-60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center">2</span>
                      <div>
                        <div className="font-semibold text-slate-800">Generic Family Dentist</div>
                        <div className="text-[11px] text-slate-500">4.1 Stars • General Practice</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400">Page 1 Contender</span>
                  </div>

                  {/* Stat Strip */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-center">
                      <div className="text-lg font-black text-blue-900">+410%</div>
                      <div className="text-[11px] font-semibold text-blue-700">Implant Inquiries</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                      <div className="text-lg font-black text-emerald-900">$18,000+</div>
                      <div className="text-[11px] font-semibold text-emerald-700">Avg Case Value</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-bold text-blue-900 shadow-sm">
              <Stethoscope className="w-4 h-4 text-blue-600" />
              <span>High-LTV Treatment Focus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Key Treatments We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Rank and Fill</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We focus on high-margin cosmetic and surgical dental procedures where acquiring just 2 to 3 new patients every month covers your entire organic marketing investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((proc, idx) => (
              <div
                key={idx}
                className="card-clean rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 group hover:border-blue-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {proc.badge}
                    </span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {proc.value}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight pt-1">
                    {proc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Suburb Silo & 3-Pack Capture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Dental ROI Calculator */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 via-blue-50/20 to-white border-b border-slate-200/80" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-bold text-blue-900 shadow-sm">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Interactive Patient Pipeline Estimator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Calculate Your Practice&apos;s <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">New Patient Revenue</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Estimate the monthly and annual revenue impact of dominating Google Maps and Google AI Overviews for your priority dental treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Input Controls */}
            <div className="lg:col-span-7 card-clean p-7 sm:p-9 rounded-3xl space-y-8 flex flex-col justify-between">
              
              <div className="space-y-3">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                  <span>1. Select Primary Treatment Focus:</span>
                  <span className="text-xs text-blue-600 font-bold">{treatmentPresets[treatmentType].name}</span>
                </label>

                <div className="grid grid-cols-2 gap-2.5">
                  {(["implants", "invisalign", "veneers", "mixed"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleTreatmentChange(key)}
                      className={`px-3.5 py-3 rounded-xl text-xs font-bold transition-all text-left border ${
                        treatmentType === key
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {treatmentPresets[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Patient Inquiries */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">
                    2. Targeted Monthly Patient Inquiries:
                  </label>
                  <span className="text-lg font-black text-blue-600 bg-blue-50 px-3 py-0.5 rounded-lg border border-blue-100">
                    {patientInquiries} Inquiries / Mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="5"
                  value={patientInquiries}
                  onChange={(e) => setPatientInquiries(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>10 Inquiries (Single Suburb)</span>
                  <span>35 Inquiries (Average Practice)</span>
                  <span>70 Inquiries (Multi-Suburb Hub)</span>
                </div>
              </div>

              {/* Slider 2: Avg Treatment Value */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">
                    3. Average Treatment / Case Value ($AUD):
                  </label>
                  <span className="text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-lg border border-emerald-100">
                    ${avgTreatmentValue.toLocaleString()} AUD
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="30000"
                  step="500"
                  value={avgTreatmentValue}
                  onChange={(e) => setAvgTreatmentValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>$3,000 (General/Preventative)</span>
                  <span>$15,000 (Implants/Veneers)</span>
                  <span>$30,000+ (All-on-4 Full Arch)</span>
                </div>
              </div>

              {/* Slider 3: Case Acceptance */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">
                    4. Typical Practice Case Acceptance Rate (%):
                  </label>
                  <span className="text-base font-black text-slate-800 bg-slate-100 px-3 py-0.5 rounded-lg border border-slate-200">
                    {caseAcceptanceRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={caseAcceptanceRate}
                  onChange={(e) => setCaseAcceptanceRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>20% (Conservative)</span>
                  <span>35% (Standard Practice)</span>
                  <span>60% (High-Converting Clinic)</span>
                </div>
              </div>

            </div>

            {/* Right: Output Card */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-9 text-white shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    Projected Patient Revenue
                  </span>
                  <span className="text-[11px] font-bold bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800">
                    High-Intent Organic
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Projected Monthly Treatment Revenue:
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-1 text-emerald-400">
                    ${monthlyPipeline.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400 tracking-normal">AUD/mo</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    Based on ~<strong className="text-white font-bold">{acceptedPatients} booked treatment cases</strong> every month.
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Annual Practice Pipeline:
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ${annualPipeline.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400 tracking-normal">AUD/yr</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-950/70 border border-blue-800/70 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-blue-300">Estimated Return on Retainer:</div>
                    <div className="text-2xl font-black text-white tracking-tight">
                      {roiMultiplier}x ROI
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-slate-400 font-medium">Payoff Benchmark:</div>
                    <div className="text-xs font-bold text-emerald-400">Just 1 Implant Pays for 8+ Mos</div>
                  </div>
                </div>

              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <a
                  href="#dental-audit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold text-center block shadow-lg shadow-blue-600/30 hover:translate-y-[-2px] transition-all text-sm"
                >
                  Lock Down This Patient Pipeline for Your Suburb →
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Suburb Exclusivity Guarantee for Dentists</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Pricing for Dental Practices */}
      <section className="py-20 bg-white border-b border-slate-200/80" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-bold text-blue-900 shadow-sm">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Transparent Dental Retainers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Predictable Pricing. <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Massive Patient Growth.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              No locked-in contracts. 100% territory exclusivity per postal code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Plan 1: Single Suburb */}
            <div className="card-clean rounded-3xl p-8 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Single Location Practice
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Dental Foundation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Perfect for local general practices looking to secure top 3 Google Maps rankings in their core suburb.
                </p>

                <div className="pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-slate-950">$590</span>
                    <span className="text-xs font-semibold text-slate-500">AUD / month</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Google Business Profile (GBP) 3-Pack Optimization</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Top 5 High-Intent Core Keyword Targeting (Emergency, Check-up)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>AHPRA Compliant Medical & Dental Technical Schema</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Month-to-Month (No Lock-in Contracts)</span>
                  </li>
                </ul>
              </div>

              <a
                href="#dental-audit"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm text-center block transition-all"
              >
                Start Dental Foundation
              </a>
            </div>

            {/* Plan 2: Multi-Suburb Flagship */}
            <div className="rounded-3xl p-8 sm:p-9 flex flex-col justify-between space-y-6 bg-gradient-to-b from-blue-50/50 via-white to-white border-2 border-blue-600 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                🔥 Most Popular for High Practice Growth
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
                  Regional Dominator
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Dental Market Dominator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Engineered to capture key treatments like Dental Implants, Invisalign, and Veneers across 15+ surrounding postcodes.
                </p>

                <div className="pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-slate-950">$990</span>
                    <span className="text-xs font-semibold text-slate-500">AUD / month</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>15+ Suburb Micro-Silos:</strong> Capturing affluent neighboring suburbs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Google AI & Gemini Overviews:</strong> Ranked as #1 recommended clinic</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Core Treatment Focus:</strong> Implants, Invisalign, Restorations, Veneers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100% Territory Exclusivity:</strong> We lock your postal codes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Instant WhatsApp Consultation & Call Tracking Integration</span>
                  </li>
                </ul>
              </div>

              <a
                href="#dental-audit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm text-center block shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-2px]"
              >
                Claim Regional Dental Exclusivity →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Dental Audit Form Section */}
      <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80" id="dental-audit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                <span>100% Free • No Obligation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Request Your Practice&apos;s <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Free Dental SEO Audit</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                We’ll manually analyze your practice’s Google Maps 3-Pack rankings, surrounding suburb proximity drops, and competitor gaps for Dental Implants and Invisalign.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prefer a Quick WhatsApp Chat?</div>
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20review%20our%20dental%20practice%20rankings%20on%20WhatsApp."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold text-sm transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    <span>Chat Direct on WhatsApp (+61 401 164 987)</span>
                  </div>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-clean rounded-3xl p-8 sm:p-10 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Dental Audit Request Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you! Our lead dental growth architect is preparing the custom Google Maps & Suburb Proximity Audit for <strong className="text-slate-900">{formData.practiceName || "your practice"}</strong>.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto">
                      Delivered via WhatsApp & Email within 4–6 business hours.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        Claim Your Dental Growth Audit
                      </h3>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                        Takes 60s
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Practice / Clinic Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gold Coast Dental Arts"
                          value={formData.practiceName}
                          onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Principal Dentist / Contact Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. James Miller"
                          value={formData.dentistName}
                          onChange={(e) => setFormData({ ...formData, dentistName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Clinic Suburb & State *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Robina QLD 4226"
                          value={formData.suburb}
                          onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Current Website URL</label>
                        <input
                          type="text"
                          placeholder="e.g. https://goldcoastdental.com.au"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800">Priority Treatment to Scale *</label>
                      <select
                        value={formData.priorityTreatment}
                        onChange={(e) => setFormData({ ...formData, priorityTreatment: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      >
                        <option>Dental Implants & All-on-4</option>
                        <option>Invisalign & Clear Aligners</option>
                        <option>Porcelain Veneers & Cosmetic Dentistry</option>
                        <option>Emergency & General Family Care</option>
                        <option>Full Practice Comprehensive Scale</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 0401 164 987"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. reception@clinic.com.au"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Generate Our Custom Practice Audit</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Dental FAQ */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Dental Practice Growth <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">FAQ</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Common questions from Australian dentists and practice managers regarding SEO and AHPRA compliance.
            </p>
          </div>

          <div className="space-y-4">
            {dentalFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? "bg-blue-50/40 border-blue-300 shadow-md" : "bg-white border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-base sm:text-lg"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed pt-1 border-t border-blue-100 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
