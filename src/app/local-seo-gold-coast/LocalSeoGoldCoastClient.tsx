"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Star,
  Search,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  PhoneCall,
  ChevronDown,
  Check,
  Send,
  Building,
  Hammer,
  Stethoscope,
  Scale,
} from "lucide-react";

export default function LocalSeoGoldCoastPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    suburb: "Surfers Paradise",
    industry: "Dental & Healthcare",
    website: "",
    phone: "",
  });

  const goldCoastSuburbs = [
    { name: "Surfers Paradise", postcode: "4217", type: "Commercial & Tourism Hub" },
    { name: "Southport", postcode: "4215", type: "CBD & Medical / Legal District" },
    { name: "Robina", postcode: "4226", type: "Health & Commercial Precinct" },
    { name: "Broadbeach", postcode: "4218", type: "High-Income Residential Hub" },
    { name: "Burleigh Heads", postcode: "4220", type: "Lifestyle & Trade Growth Area" },
    { name: "Coomera", postcode: "4209", type: "Northern Growth Corridor" },
    { name: "Pimpama", postcode: "4209", type: "High-Growth Residential & Building" },
    { name: "Helensvale", postcode: "4212", type: "Northern Transport & Trade Center" },
    { name: "Hope Island", postcode: "4212", type: "Affluent Waterfront Enclave" },
    { name: "Ormeau", postcode: "4208", type: "Industrial & Northern Trade Hub" },
    { name: "Varsity Lakes", postcode: "4227", type: "Tech & Professional Offices" },
    { name: "Bundall", postcode: "4217", type: "Corporate & Showroom Strip" },
    { name: "Mermaid Beach", postcode: "4218", type: "High-LTV Coastal Suburb" },
    { name: "Palm Beach", postcode: "4221", type: "Southern Coastal Hub" },
    { name: "Coolangatta", postcode: "4225", type: "Southern Gateway & Cross-Border" },
  ];

  const gcCaseStudies = [
    {
      business: "Gold Coast Concreters QLD",
      suburbs: "Pimpama, Coomera & Northern Gold Coast",
      metric: "45+ Inbound Calls / Mo",
      achievement: "#1 in Google AI Overviews & Maps 3-Pack across 57 Northern Gold Coast Suburbs.",
      icon: Hammer,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      business: "Coastal Cosmetic Dental Clinic",
      suburbs: "Robina, Southport & Broadbeach",
      metric: "38+ Patient Bookings / Mo",
      achievement: "Dominating high-margin Implant and Invisalign searches on Page 1 Google Maps.",
      icon: Stethoscope,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      business: "Pacific Coast Legal Partners",
      suburbs: "Southport CBD & Surfers Paradise",
      metric: "22+ Monthly Retainers",
      achievement: "Top 3 Google Maps for commercial dispute and conveyancing search queries.",
      icon: Scale,
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    },
  ];

  const gcFaqs = [
    {
      q: "Why does generic Gold Coast SEO fail to rank in individual suburbs?",
      a: "Most generic SEO agencies only optimize a single page for 'Gold Coast', completely ignoring the 50+ individual postcodes where customers actually search (like Robina, Pimpama, Southport, or Burleigh). Our Suburb Domination framework builds dedicated micro-silo pages for every target postcode, giving you Google Maps 3-Pack proximity superiority in multiple neighborhoods simultaneously.",
    },
    {
      q: "What is the 1-Partner-Per-Territory Exclusivity Rule?",
      a: "We strictly partner with only ONE business per industry specialization per Gold Coast territory. For example, if we represent your dental clinic or concreting company in Robina and Surfers Paradise, we will never accept your direct competitor in those postcodes. Your strategy remains 100% exclusive to you.",
    },
    {
      q: "How does Google AI Overview (GEO) optimization work on the Gold Coast?",
      a: "Google now uses Gemini AI to generate answers above traditional search results. If your business lacks structured local entity schema and clinical/trade EEAT signals, AI searchers will never see you. We format your content and technical graph so Google AI cites your business as the #1 verified local authority.",
    },
    {
      q: "Do you lock clients into 6 or 12-month contracts?",
      a: "No. We operate strictly on a month-to-month partnership model with zero lock-in contracts. You stay because you get measurable inbound calls and client revenue, not because you're trapped in legal paperwork.",
    },
    {
      q: "How quickly do rankings and inbound leads start coming in?",
      a: "Initial Google Maps 3-Pack movement and suburb ranking improvements typically manifest between 30 and 45 days. Our clients see full compound booking velocity within 60 to 90 days as local entity authority and Australian citations mature.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-indigo-50/60 via-white to-white overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Gold Coast Local SEO & Search Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Dominate <span className="gradient-text">Google Maps 3-Pack</span> & Suburb Rankings Across Gold Coast.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                We engineer hyper-local organic search visibility and Generative AI (GEO) authority for Gold Coast <strong>Dentists, Healthcare Clinics, Builders, Concreters & Professional Firms</strong>. 100% Territory Exclusivity with Zero Lock-in Contracts.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20Gold%20Coast%20business%20owner.%20I'd%20like%20to%20claim%20my%20Free%20Local%20SEO%20Audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all hover:translate-y-[-2px]"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <div className="text-left leading-tight">
                    <div className="font-extrabold">Instant WhatsApp Strategy Call</div>
                    <div className="text-xs text-emerald-100 font-normal">+61 401 164 987 • Direct with Bilal</div>
                  </div>
                </a>

                <a
                  href="#gc-audit"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border border-slate-300 shadow-sm transition-all hover:translate-y-[-2px]"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="w-4 h-4 text-indigo-600" />
                </a>
              </div>

              {/* Trust Guarantees */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Suburb Exclusivity</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google AI Overview Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Lock-in Contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Australian Citations</span>
                </div>
              </div>

            </div>

            {/* Right Column: Simulated Gold Coast Map Pack Card */}
            <div className="lg:col-span-5 relative">
              <div className="card-clean rounded-3xl p-7 space-y-5 shadow-2xl border-2 border-indigo-200 relative">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Gold Coast Live Search Simulation
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">QLD 4217</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>&quot;best emergency dentist southport gold coast&quot;</span>
                </div>

                {/* #1 Winner Card */}
                <div className="p-4 rounded-2xl bg-indigo-50/80 border-2 border-indigo-600 shadow-md space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <div className="font-extrabold text-slate-900 text-sm">Your Practice / Business</div>
                        <div className="flex items-center gap-1 text-xs text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-slate-800">5.0</span>
                          <span className="text-slate-500 text-[11px]">(80+ Verified Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-600 text-white text-[11px] font-bold">
                      #1 Winner
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium pt-1 border-t border-indigo-100 flex items-center justify-between">
                    <span>Gold Coast Suburb Silo Active</span>
                    <span className="font-bold text-emerald-700">38+ Inbound Leads / Mo</span>
                  </div>
                </div>

                {/* #2 Dimmed */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 opacity-60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center">2</span>
                    <span className="font-semibold text-slate-700">Competitor Clinic B</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Page 1 Contender</span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 text-center">
                  📈 Average Client ROI: 340% Traffic & Quote Call Increase
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Suburbs Grid Section */}
      <section className="py-20 bg-white border-b border-slate-200/80" id="suburbs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Building className="w-4 h-4 text-indigo-600" />
              <span>Complete Regional Coverage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Gold Coast Suburbs We <span className="gradient-text">Engineered to Dominate</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We build hyper-localized organic micro-silos across every high-income postcode and growth corridor on the Gold Coast.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {goldCoastSuburbs.map((s, idx) => (
              <div
                key={idx}
                className="card-clean rounded-2xl p-4 flex flex-col justify-between space-y-2 hover:border-indigo-400 transition-all border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900">{s.name}</span>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                    {s.postcode}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {s.type}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Verified Gold Coast Case Studies */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-200/80" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Real Gold Coast Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Verified Client Proof Across <span className="gradient-text">Gold Coast Markets</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gcCaseStudies.map((cs, idx) => {
              const Icon = cs.icon;
              return (
                <div
                  key={idx}
                  className="card-clean rounded-3xl p-7 flex flex-col justify-between space-y-6 border border-slate-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${cs.badgeColor}`}>
                        {cs.metric}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900">{cs.business}</h3>
                      <div className="text-xs font-semibold text-slate-500 flex items-center gap-1 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{cs.suburbs}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.achievement}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 text-center">
                    ✓ Verified Live Rankings & Call Logs Audited
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Gold Coast Pricing Section */}
      <section className="py-20 bg-white border-b border-slate-200/80" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Predictable Investment. <span className="gradient-text">100% Suburb Exclusivity in AUD.</span>
            </h2>
            <p className="text-base text-slate-600">
              No locked-in contracts. Strict 1-client territory exclusivity per trade or practice area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Plan 1 */}
            <div className="card-clean rounded-3xl p-8 flex flex-col justify-between space-y-6 border border-slate-200">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  Modular Starter
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Google Maps 3-Pack Sprint
                </h3>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">AUD $300</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Google Business Profile Optimization</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Local Australian Directory Citations (YellowPages, TrueLocal)</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Systematic Review Generation Framework</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Month-to-Month (No Lock-in Contracts)</span></li>
                </ul>
              </div>
              <a href="#gc-audit" className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-sm text-center block">
                Start Local 3-Pack Plan
              </a>
            </div>

            {/* Plan 2 */}
            <div className="rounded-3xl p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-indigo-50/70 via-white to-white border-2 border-indigo-600 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                🔥 RECOMMENDED (Full Domination)
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md">
                  Regional Dominator
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Full Growth Engine
                </h3>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">AUD $2,000</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                  <div className="text-xs font-medium text-slate-500 pt-1">(+ AUD $900 one-off technical setup)</div>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>15+ Dedicated Suburb Micro-Silos</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Google AI & Gemini Overviews (GEO)</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Toxic Backlink Audit & Disavow (Cleanup)</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>100% Suburb Territory Exclusivity</strong></span></li>
                </ul>
              </div>
              <a href="#gc-audit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-sm text-center block shadow-lg shadow-indigo-600/30">
                Claim Gold Coast Exclusivity →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Gold Coast Audit Form Section */}
      <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80" id="gc-audit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                <span>100% Free • No Obligation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Claim Your Gold Coast <span className="gradient-text">Suburb Ranking Audit</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                We will manually audit your Google Maps 3-Pack radius, competitor brand leaks, and high-intent search gaps across Gold Coast postcodes.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prefer a Quick WhatsApp Chat?</div>
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20review%20our%20Gold%20Coast%20rankings%20on%20WhatsApp."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold text-sm transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    <span>Message Bilal on WhatsApp (+61 401 164 987)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </a>
              </div>
            </div>

            {/* Audit Form Card */}
            <div className="lg:col-span-7">
              <div className="card-clean rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Audit Request Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you! Our Lead Search Architect is manually preparing your Gold Coast Suburb Grid Audit. We will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 pb-2">
                      Get Your Free Gold Coast SEO Audit
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Business / Clinic Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gold Coast Dental Arts"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Contact Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. John / Dave"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Primary Suburb</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Southport / Robina / Pimpama"
                          value={formData.suburb}
                          onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="0401 164 987"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Website URL</label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourwebsite.com.au"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:translate-y-[-1px] mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send My Free Gold Coast Audit Report</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-slate-200/80" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Gold Coast Local SEO <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {gcFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-clean rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180 text-indigo-600" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100">
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
