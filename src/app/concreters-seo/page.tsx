"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hammer,
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
  ExternalLink,
  Check,
  ChevronDown,
  Clock,
  Send,
  Award,
  PhoneForwarded,
} from "lucide-react";

export default function ConcretersSeoPage() {
  // Calculator State
  const [jobType, setJobType] = useState<"driveway" | "slab" | "resurfacing" | "commercial">("driveway");
  const [inboundCalls, setInboundCalls] = useState(35);
  const [avgJobValue, setAvgJobValue] = useState(8500);
  const [quoteCloseRate, setQuoteCloseRate] = useState(30);

  const jobPresets = {
    driveway: { name: "Exposed Aggregate & Plain Driveways", avg: 8500, defaultLeads: 35 },
    slab: { name: "House Slabs & Shed Foundations", avg: 14000, defaultLeads: 25 },
    resurfacing: { name: "Covercrete Spray-on Resurfacing", avg: 6500, defaultLeads: 30 },
    commercial: { name: "Commercial & Civil Concrete Packages", avg: 45000, defaultLeads: 12 },
  };

  const handleJobChange = (key: "driveway" | "slab" | "resurfacing" | "commercial") => {
    setJobType(key);
    setAvgJobValue(jobPresets[key].avg);
    setInboundCalls(jobPresets[key].defaultLeads);
  };

  const closedJobs = Math.round((inboundCalls * (quoteCloseRate / 100)) * 10) / 10;
  const monthlyRevenue = Math.round(closedJobs * avgJobValue);
  const annualRevenue = monthlyRevenue * 12;
  const roiMultiplier = Math.round((monthlyRevenue / 1450) * 10) / 10;

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contractorName: "",
    suburb: "",
    website: "",
    primaryConcreteWork: "Exposed Aggregate & Driveways",
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

  const concreteFaqs = [
    {
      q: "How does your 45+ leads/month concreter system actually work?",
      a: "Instead of building a simple 5-page website, we construct a 40–60 page hyper-local topical authority engine covering every surrounding suburb and postcode in your city (e.g. Pimpama, Ormeau, Coomera, Helensvale, Robina). We optimize for Google Maps 3-Packs and Google AI Overviews so when homeowners search for 'concreters near me' or 'exposed aggregate driveway [suburb]', your business appears at the top.",
    },
    {
      q: "What is the Exclusive Turnkey Asset Lease (Rank & Rent) option?",
      a: "If we already own and operate a live, Page 1-ranked asset (such as goldcoastconcretersqld.com.au), you can lease it exclusively. We forward 100% of all incoming phone calls and quote forms directly to your mobile. You get immediate jobs from day one with zero setup delay.",
    },
    {
      q: "Do you give these leads to other competing concreters?",
      a: "Never. We operate on strict 100% geographic exclusivity. We partner with only ONE concreting contractor per territory. Every single phone call, quote request, and commercial inquiry goes exclusively to your business.",
    },
    {
      q: "Why is this better than buying leads on HiPages or paying for Google Ads?",
      a: "On HiPages or Bark, leads are sold to 3 to 5 competing concreters at the same time, forcing a race to the bottom on price. On Google Ads, you pay $40–$90 per click even if they never call you. With Vortic Growth, your organic search engine produces 100% exclusive inbound calls where homeowners are calling you directly as the #1 local authority.",
    },
  ];

  const rankingTable = [
    { query: "architectural concrete pimpama", status: "#1 Source in Google AI Overview", isAi: true, note: "High-Margin Decorative" },
    { query: "concreters ormeau", status: "Position #4 (Page 1 Top 5)", isAi: false, note: "Core Northern GC Hub" },
    { query: "covercrete resurfacing gold coast", status: "Position #5 (Page 1)", isAi: false, note: "Spray-on Resurfacing ($8k+)" },
    { query: "concreters pimpama", status: "Page 1 (Top 3 Contender)", isAi: false, note: "High-Volume Suburb" },
    { query: "stencil stamped concrete gold coast", status: "Position #6 (Page 1)", isAi: false, note: "Decorative Slabs" },
    { query: "concreters willow vale", status: "Position #11 (Top of Page 2)", isAi: false, note: "Acreage Slabs ($20k+)" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
                <span className="text-base">🏗️</span>
                <span>Specialized Concreter & Trade Lead Engine</span>
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-extrabold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                  Verified 45+ Leads/Mo
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Dominate Google Maps & Lock In{" "}
                <span className="gradient-text">40+ Inbound Concreting Jobs</span> Every Month
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                We engineer hyper-local suburb search engines and Google Maps 3-Pack supremacy for concrete contractors. Stop fighting 5 other tradies on HiPages and turn your mobile into a 24/7 exclusive inbound quote machine.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20Concrete%20Contractor.%20I'd%20like%20to%20claim%20my%20Free%20Concreter%20SEO%20&%20Suburb%20Audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:translate-y-[-2px] transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <div className="text-left leading-tight">
                    <div className="font-extrabold">Instant WhatsApp Strategy Call</div>
                    <div className="text-xs text-emerald-100 font-normal">Direct with Lead Concreting SEO Architect</div>
                  </div>
                </a>

                <a
                  href="#concrete-audit"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border border-slate-300 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="w-4 h-4 text-indigo-600" />
                </a>
              </div>

              {/* Flagship Asset Note */}
              <div className="pt-4 flex items-center gap-4 border-t border-slate-200 w-full">
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-slate-800 ml-1.5 text-sm">Verified Flagship Case Study:</span>
                </div>
                <a
                  href="https://goldcoastconcretersqld.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
                >
                  <span>Gold Coast Concreters QLD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Live Proof Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-70"></div>

                <div className="relative rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        G
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                          Google Maps 3-Pack Dominance
                          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                        </div>
                        <div className="text-[11px] text-slate-500">Live Inbound Concreting Engine</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      Position #1
                    </span>
                  </div>

                  {/* Search bar */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-semibold text-slate-900">concreters pimpama gold coast</span>
                    <span className="ml-auto text-[10px] uppercase font-bold text-slate-400">QLD</span>
                  </div>

                  {/* Winner Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-blue-50/40 to-white border-2 border-indigo-500 shadow-md space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                          1
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                            Gold Coast Concreters QLD
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-amber-500 pt-0.5">
                            <span className="font-bold text-slate-800">5.0</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-slate-500 font-medium text-[11px]">(48 reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shadow-sm">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </span>
                        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs shadow-sm">
                          <MapPin className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-indigo-100">
                      <span className="text-slate-600 font-medium">Concrete Contractor • Pimpama & Coomera</span>
                      <span className="text-indigo-700 font-bold bg-indigo-100 px-2 py-0.5 rounded">
                        <Zap className="w-3 h-3 inline mr-0.5" /> 45+ Leads / Mo
                      </span>
                    </div>
                  </div>

                  {/* Commercial Lead Inquiries Proof */}
                  <div className="p-3 rounded-xl bg-slate-900 text-white space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-indigo-300 font-bold uppercase">
                      <span>Commercial Lead Evidence</span>
                      <span className="text-emerald-400">$40k – $60k Inquiry</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Received direct quote request for major commercial slab package in Northern Gold Coast.
                    </p>
                  </div>

                  {/* Stat Strip */}
                  <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-100">
                    <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-center">
                      <div className="text-lg font-black text-indigo-900">+340%</div>
                      <div className="text-[11px] font-semibold text-indigo-700">Inbound Call Surge</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                      <div className="text-lg font-black text-emerald-900">&lt; 0.8s</div>
                      <div className="text-[11px] font-semibold text-emerald-700">Mobile Speed</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Flagship SERP Verification Table */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Real Google Rankings</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Live SERP & <span className="gradient-text">Google AI Rankings</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Verified queries checked on Google Australia for our flagship asset <strong className="text-slate-900">Gold Coast Concreters QLD</strong>.
            </p>
          </div>

          <div className="card-clean rounded-3xl p-7 sm:p-8 space-y-6 max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px] tracking-wider">
                    <th className="pb-3 pr-4">Search Query</th>
                    <th className="pb-3 px-4">Google SERP Status</th>
                    <th className="pb-3 pl-4">Target Job Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {rankingTable.map((r, i) => (
                    <tr key={i} className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3.5 pr-4">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          {r.query}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-extrabold ${
                            r.isAi
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="py-3.5 pl-4">
                        <span className="text-xs text-slate-600 font-medium">{r.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Concreter ROI Calculator */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Calculator className="w-4 h-4 text-indigo-600" />
              <span>Concreter Revenue Estimator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Calculate Your <span className="gradient-text">Monthly Concreting Pipeline</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              See what 30 to 45 exclusive monthly inbound quote calls will add to your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Input Controls */}
            <div className="lg:col-span-7 card-clean p-7 sm:p-9 rounded-3xl space-y-8 flex flex-col justify-between">
              
              <div className="space-y-3">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                  <span>1. Select Primary Concrete Work:</span>
                  <span className="text-xs text-indigo-600 font-bold">{jobPresets[jobType].name}</span>
                </label>

                <div className="grid grid-cols-2 gap-2.5">
                  {(["driveway", "slab", "resurfacing", "commercial"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleJobChange(key)}
                      className={`px-3.5 py-3 rounded-xl text-xs font-bold transition-all text-left border ${
                        jobType === key
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {jobPresets[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Inbound Calls */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">
                    2. Targeted Monthly Quote Calls:
                  </label>
                  <span className="text-lg font-black text-indigo-600 bg-indigo-50 px-3 py-0.5 rounded-lg border border-indigo-100">
                    {inboundCalls} Calls / Mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="5"
                  value={inboundCalls}
                  onChange={(e) => setInboundCalls(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>10 Calls (Starter)</span>
                  <span>35 Calls (Gold Coast Concreters Avg)</span>
                  <span>70 Calls (Multi-Suburb Hub)</span>
                </div>
              </div>

              {/* Slider 2: Avg Job Value */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">
                    3. Average Job Value ($AUD):
                  </label>
                  <span className="text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-lg border border-emerald-100">
                    ${avgJobValue.toLocaleString()} AUD
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="50000"
                  step="500"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 3: Quote Close Rate */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900">
                    4. Your Typical Quote Close Rate (%):
                  </label>
                  <span className="text-base font-black text-slate-800 bg-slate-100 px-3 py-0.5 rounded-lg border border-slate-200">
                    {quoteCloseRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="5"
                  value={quoteCloseRate}
                  onChange={(e) => setQuoteCloseRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                />
              </div>

            </div>

            {/* Right: Output Card */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-9 text-white shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Projected Concreter Revenue
                  </span>
                  <span className="text-[11px] font-bold bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800">
                    100% Exclusive Leads
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Projected Monthly Revenue:
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-1 text-emerald-400">
                    ${monthlyRevenue.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400 tracking-normal">AUD/mo</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    Based on ~<strong className="text-white font-bold">{closedJobs} signed jobs</strong> every month.
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Annual Concreting Pipeline:
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ${annualRevenue.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400 tracking-normal">AUD/yr</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-950/70 border border-indigo-800/70 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-indigo-300">Estimated Return on Investment:</div>
                    <div className="text-2xl font-black text-white tracking-tight">
                      {roiMultiplier}x ROI
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-slate-400 font-medium">Payoff Benchmark:</div>
                    <div className="text-xs font-bold text-emerald-400">Just 1 Job Covers 6+ Mos</div>
                  </div>
                </div>

              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <a
                  href="#concrete-audit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-center block shadow-lg shadow-indigo-600/30 hover:translate-y-[-2px] transition-all text-sm"
                >
                  Lock Down Your Suburb Territory →
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Territory Exclusivity Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Concreter Pricing Packages */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Concreter Growth Packages</span>
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
                  Single Suburb
                </span>
                <h3 className="text-2xl font-black text-slate-900">Foundation Sprint</h3>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">$850</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>GBP 3-Pack Optimization</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Top 5 High-Intent Keywords</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>QBCC Schema Integration</span></li>
                </ul>
              </div>
              <a href="#concrete-audit" className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-sm text-center block">
                Start Foundation
              </a>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-indigo-50/50 via-white to-white border-2 border-indigo-600 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                🔥 Most Popular for High ROI
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md">
                  Regional Dominator
                </span>
                <h3 className="text-2xl font-black text-slate-900">Market Dominator</h3>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">$1,450</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>15+ Suburb Micro-Silos</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Google AI Overviews (GEO)</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>Instant WhatsApp Routing</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span><strong>100% Territory Exclusivity</strong></span></li>
                </ul>
              </div>
              <a href="#concrete-audit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-sm text-center block shadow-lg shadow-indigo-600/30">
                Claim Regional Domination →
              </a>
            </div>

            {/* Card 3 */}
            <div className="card-clean rounded-3xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Turnkey Live Asset
                </span>
                <h3 className="text-2xl font-black text-slate-900">Exclusive Asset Lease</h3>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-950">$750 – $1k</span>
                  <span className="text-xs font-semibold text-slate-500"> / month</span>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block border border-emerald-200">
                    🎁 $500 30-Day Trial Available
                  </div>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Immediate leads from day one</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Live Page 1 ranked platform</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Direct phone & form forwarding</span></li>
                </ul>
              </div>
              <a href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20check%20Concreter%20Asset%20Lease%20availability." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-sm text-center block">
                Inquire Asset Lease
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Audit Form Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="concrete-audit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                <span>100% Free • No Sales Pressure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Claim Your Free <span className="gradient-text">Concreter Suburb Grid</span> Audit
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                We’ll manually analyze your Google Maps rankings and surrounding suburb visibility gaps for driveways, house slabs, and commercial concrete packages.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct WhatsApp Strategy Line:</div>
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20concreter%20and%20I'd%20like%20a%20quick%20free%20audit%20over%20WhatsApp."
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
                      Concreter Audit Request Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you! Our lead search architect is preparing the custom Google Maps & Suburb Proximity Audit for <strong className="text-slate-900">{formData.businessName || "your concreting business"}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        Request Your Concreter Growth Audit
                      </h3>
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                        Takes 60s
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Business / Company Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gold Coast Slabs & Driveways"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dave Harrison"
                          value={formData.contractorName}
                          onChange={(e) => setFormData({ ...formData, contractorName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Target Suburb & Region *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Pimpama / Northern Gold Coast"
                          value={formData.suburb}
                          onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Current Website URL (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. https://myconcreting.com.au"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800">Primary Focus *</label>
                      <select
                        value={formData.primaryConcreteWork}
                        onChange={(e) => setFormData({ ...formData, primaryConcreteWork: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      >
                        <option>Exposed Aggregate & Plain Driveways</option>
                        <option>House Slabs & Shed Slabs</option>
                        <option>Covercrete Spray-on Resurfacing</option>
                        <option>Commercial Slabs & Foundations</option>
                        <option>Full Comprehensive Concreting</option>
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
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. quotes@myconcreting.com.au"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Generate My Concreter Growth Audit</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Concreter FAQ */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Concreter SEO <span className="gradient-text">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {concreteFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? "bg-indigo-50/40 border-indigo-300 shadow-md" : "bg-white border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-base sm:text-lg"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed pt-1 border-t border-indigo-100 font-normal">
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
