"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
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
  Check,
  ChevronDown,
  Clock,
  Send,
  Award,
  Hammer,
} from "lucide-react";

export default function BuildersSeoClient() {
  const [projectType, setProjectType] = useState<"custom" | "renovation" | "luxury" | "commercial">("custom");
  const [inboundInquiries, setInboundInquiries] = useState(12);
  const [avgProjectValue, setAvgProjectValue] = useState(750000);
  const [contractCloseRate, setContractCloseRate] = useState(25);

  const projectPresets = {
    custom: { name: "Custom Architectural Home", avg: 750000, defaultLeads: 12 },
    renovation: { name: "Major Home Renovation & Extension", avg: 220000, defaultLeads: 18 },
    luxury: { name: "Luxury Waterfront Build (Hope Island/Sovereign)", avg: 1500000, defaultLeads: 8 },
    commercial: { name: "Commercial Fitout & Light Industrial", avg: 450000, defaultLeads: 10 },
  };

  const handleProjectChange = (key: "custom" | "renovation" | "luxury" | "commercial") => {
    setProjectType(key);
    setAvgProjectValue(projectPresets[key].avg);
    setInboundInquiries(projectPresets[key].defaultLeads);
  };

  const signedContracts = Math.round((inboundInquiries * (contractCloseRate / 100)) * 10) / 10;
  const monthlyPipeline = Math.round(signedContracts * avgProjectValue);
  const annualPipeline = monthlyPipeline * 12;
  const roiMultiplier = Math.round((monthlyPipeline / 2000) * 10) / 10;

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    builderName: "",
    contactName: "",
    suburb: "",
    website: "",
    qbccNumber: "",
    phone: "",
  });

  const faqs = [
    {
      q: "How does Local SEO help custom builders win $500k+ building contracts?",
      a: "High-net-worth homeowners searching for 'luxury custom home builder Hope Island' or 'architectural builder Burleigh Heads' do not click on untargeted social ads. They search Google with extreme intent. By ranking #1 in Google Maps 3-Pack and building deep suburb micro-silos with verified QBCC schema and portfolio authority, you capture prospects right when they are ready to sign preliminary building agreements.",
    },
    {
      q: "Why do builder Google Ads cost so much and fail to deliver quality leads?",
      a: "Generic keywords like 'home builder Gold Coast' cost upwards of $25 to $45 per click on Google Ads. Many clicks are tire-kickers or sub-contractors looking for work. Our Organic Suburb Domination framework targets hyper-specific high-margin keywords ('custom waterfront home builders 4212', 'dual living builders Coomera') that generate exclusive, pre-qualified inquiries with zero ongoing cost per click.",
    },
    {
      q: "Is territory exclusivity guaranteed for my building company?",
      a: "Yes, 100%. We operate on a strict 1-Partner-Per-Territory rule. If we partner with your custom building firm on the Gold Coast or specific trade corridor, we will NEVER work with your direct building competitor in that territory. You get 100% of our focus and ranking power.",
    },
    {
      q: "How long does it take for a building company to see high-value inquiries?",
      a: "Phase 1 technical fix, Google Business Profile re-architecture, and QBCC structured schema are deployed in the first 14 days. Suburb micro-silos typically achieve Google Maps 3-Pack and Page 1 ranking within 45 to 90 days. Because a single custom home contract represents $500k to $1.5M+, just one converted inquiry delivers immediate massive ROI.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-xs sm:text-sm font-bold text-indigo-300 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span>Gold Coast & QLD Custom Builders Specialization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Win High-Margin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Custom Home Contracts</span> From Google Search
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Engineered Google Maps 3-Pack rankings and suburb-level organic lead funnels for custom builders, luxury renovators, and architectural contractors across the Gold Coast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#builder-audit"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/30 text-center transition-all hover:translate-y-[-2px]"
              >
                Claim Exclusive Builder Territory →
              </a>
              <a
                href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20custom%20builder%20on%20the%20Gold%20Coast%20and%20want%20to%20discuss%20SEO."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 text-center flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp Strategy Call
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">$1M+</div>
                <div className="text-slate-400">Average Project Value</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-indigo-400">100%</div>
                <div className="text-slate-400">Territory Exclusivity</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white">QBCC</div>
                <div className="text-slate-400">Schema Integrated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Calculator className="w-4 h-4 text-indigo-600" />
              <span>Builder Revenue Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Calculate Your <span className="gradient-text">Annual Construction Pipeline</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              See what 8 to 15 exclusive custom build inquiries will add to your annual revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 card-clean p-7 sm:p-9 rounded-3xl space-y-8 flex flex-col justify-between">
              <div className="space-y-3">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                  <span>1. Select Primary Build Type:</span>
                  <span className="text-xs text-indigo-600 font-bold">{projectPresets[projectType].name}</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(["custom", "renovation", "luxury", "commercial"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleProjectChange(key)}
                      className={`px-3.5 py-3 rounded-xl text-xs font-bold transition-all text-left border ${
                        projectType === key
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {projectPresets[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1 */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">2. Targeted Monthly Build Inquiries:</label>
                  <span className="text-lg font-black text-indigo-600 bg-indigo-50 px-3 py-0.5 rounded-lg border border-indigo-100">
                    {inboundInquiries} Inquiries / Mo
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="1"
                  value={inboundInquiries}
                  onChange={(e) => setInboundInquiries(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">3. Average Build Contract Value ($AUD):</label>
                  <span className="text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-lg border border-emerald-100">
                    ${avgProjectValue.toLocaleString()} AUD
                  </span>
                </div>
                <input
                  type="range"
                  min="150000"
                  max="3000000"
                  step="50000"
                  value={avgProjectValue}
                  onChange={(e) => setAvgProjectValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">4. Contract Close Rate (%):</label>
                  <span className="text-base font-black text-slate-800 bg-slate-100 px-3 py-0.5 rounded-lg border border-slate-200">
                    {contractCloseRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={contractCloseRate}
                  onChange={(e) => setContractCloseRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                />
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-9 text-white shadow-2xl flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Projected Pipeline
                  </span>
                  <span className="text-[11px] font-bold bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800">
                    100% Exclusive
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Monthly Contract Volume:</div>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                    ${monthlyPipeline.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400 tracking-normal"> AUD/mo</span>
                  </div>
                  <p className="text-xs text-slate-400">Based on ~<strong className="text-white">{signedContracts} signed contracts</strong> / month.</p>
                </div>

                <div className="space-y-1 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Annual Pipeline Added:</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ${annualPipeline.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400 tracking-normal"> AUD/yr</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-950/70 border border-indigo-800/70 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-indigo-300">Estimated ROI:</div>
                    <div className="text-2xl font-black text-white">{roiMultiplier}x ROI</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-slate-400 font-medium">Payoff:</div>
                    <div className="text-xs font-bold text-emerald-400">1 Contract Covers 5+ Years</div>
                  </div>
                </div>
              </div>

              <a
                href="#builder-audit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 text-white font-extrabold text-center block shadow-lg text-sm transition-all hover:translate-y-[-2px]"
              >
                Lock Down Your Suburb Territory →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Builder Investment Plans (AUD)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Transparent Pricing. <span className="gradient-text">Zero Lock-In Contracts.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="card-clean rounded-3xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  Modular Starter
                </span>
                <h3 className="text-2xl font-black text-slate-900">Local 3-Pack & GBP</h3>
                <p className="text-xs text-slate-500">Google Business Profile optimization and local master builder citations.</p>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">AUD $300</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>GBP 3-Pack Optimization</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>QBCC License & Schema Integration</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Australian Directory Citations</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Month-to-Month Flexibility</span></li>
                </ul>
              </div>
              <a href="#builder-audit" className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-sm text-center block hover:bg-slate-800">
                Start Local 3-Pack Plan
              </a>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-indigo-50/60 via-white to-white border-2 border-indigo-600 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                🔥 RECOMMENDED (Full Suburb Engine)
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md">
                  Regional Dominator
                </span>
                <h3 className="text-2xl font-black text-slate-900">Full Growth Engine</h3>
                <p className="text-xs text-slate-500">Comprehensive custom home SEO across affluent Gold Coast suburbs.</p>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">AUD $2,000</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                  <div className="text-xs font-medium text-slate-500 pt-1">(+ AUD $900 one-off Phase 1 Technical Setup)</div>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>15+ Affluent Suburb Micro-Silos (Hope Island, Robina, Burleigh)</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Google AI Overviews & Gemini (GEO) Ranking</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Project Portfolio Schema & Speed Optimization</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>100% Suburb Territory Exclusivity Guarantee</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Direct Access to Lead Search Architect</strong></span></li>
                </ul>
              </div>
              <a href="#builder-audit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-sm text-center block shadow-lg shadow-indigo-600/30 hover:shadow-xl">
                Claim Builder Domination →
              </a>
            </div>

            {/* Card 3 */}
            <div className="card-clean rounded-3xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Turnkey Live Asset
                </span>
                <h3 className="text-2xl font-black text-slate-900">Exclusive Asset Lease</h3>
                <p className="text-xs text-slate-500">Lease a live Page 1 ranked custom builder digital asset.</p>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">AUD $450 – $650</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mt-2 inline-block border border-emerald-200">
                    🎁 AUD $290 30-Day Trial Available
                  </div>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Immediate builder quote calls from day one</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Live Page 1 ranked platform</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Direct phone & quote routing</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Your QBCC license integrated</span></li>
                </ul>
              </div>
              <a href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20check%20Builder%20Asset%20Lease%20availability." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-sm text-center block hover:bg-slate-800">
                Inquire Asset Lease
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="builder-audit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                <span>100% Free • No Sales Pressure</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Claim Your Free <span className="gradient-text">Custom Builder Suburb Audit</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We'll analyze your current Google Maps ranking, QBCC schema footprint, and affluent Gold Coast search gaps for custom home and renovation searches.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="card-clean rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl bg-white">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Audit Request Received</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      We'll prepare your custom Gold Coast builder ranking audit within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Building Company Name</label>
                        <input
                          type="text"
                          required
                          value={formData.builderName}
                          onChange={(e) => setFormData({ ...formData, builderName: e.target.value })}
                          placeholder="e.g. Coastline Custom Homes"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="e.g. Jason Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Primary Target Suburb</label>
                        <input
                          type="text"
                          required
                          value={formData.suburb}
                          onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                          placeholder="e.g. Hope Island, Robina, Burleigh"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Mobile / Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 0401 164 987"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Website (Optional)</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://www.yourbuildingfirm.com.au"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all"
                    >
                      Request Free Custom Builder Audit →
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
              Builder SEO <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="card-clean rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
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
