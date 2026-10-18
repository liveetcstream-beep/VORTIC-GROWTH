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
  ShieldAlert,
  Target,
  MapPinned,
  TrendingDown,
  Users,
  FileCheck,
  BadgeCheck,
  Landmark,
  HelpCircle,
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
    {
      q: "Do you work with builders outside the Gold Coast?",
      a: "Our core focus is the Gold Coast — from Coomera to Coolangatta — because deep suburb-level relevance is what wins the 3-Pack. We also take on select partners across the Tweed Coast and Brisbane on application. If your territory is outside these areas, mention it in your audit request and we will tell you honestly whether we are the right fit.",
    },
    {
      q: "What does the QBCC schema integration actually do?",
      a: "It encodes your QBCC licence number, business entity, service areas and review data into structured markup that Google and AI search engines can read with certainty. When a homeowner searches 'licensed custom builder Hope Island', entity clarity is what separates businesses Google confidently recommends from businesses it is unsure about. It also protects you against unlicensed competitors appearing more 'legitimate' online than they are.",
    },
    {
      q: "My builder website is old and slow. Can you still help?",
      a: "Yes — and it is more common than you think. Many established builders run on websites built a decade ago that load slowly, break on mobile, and have no schema at all. Phase 1 of every engagement includes a technical overhaul: speed optimisation, mobile fixes, and proper site architecture. If a site is beyond saving, we will tell you straight and quote a rebuild rather than polishing something that cannot rank.",
    },
    {
      q: "How is this different from hiring a general SEO agency?",
      a: "General agencies chase traffic and vanity rankings. We chase signed building contracts. Every keyword, suburb silo and portfolio page is chosen for commercial intent and project value — and we only ever work with one builder per territory, so your investment never funds a competitor's rankings. You also work directly with a lead search architect who understands construction sales cycles, not an account manager juggling forty clients.",
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

      {/* Pain Points Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs sm:text-sm font-bold text-red-900 shadow-sm">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <span>The Invisible Builder Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Why Good Builders Lose <span className="gradient-text">$1M+ Contracts</span> Every Year
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              It is rarely about build quality. The builders winning the best Gold Coast contracts are simply the ones
              Google shows first when a homeowner is ready to sign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-clean rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">The Aggregator Trap</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Platforms like hipages, Oneflare and ServiceSeeking sell the <em>same</em> lead to four or five builders
                at once, then take their cut. You compete on price against builders you have never met, for a homeowner
                who chose whoever replied fastest — not whoever builds best. Every year on aggregators trains the market
                to treat your $800,000 custom build like a commodity.
              </p>
            </div>
            <div className="card-clean rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                <MapPinned className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Invisible in the Maps 3-Pack</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When someone searches <strong>"custom home builder Hope Island"</strong> or{" "}
                <strong>"luxury builder Burleigh Heads"</strong>, Google shows three businesses in the Maps 3-Pack — and
                those three get the calls. If your Google Business Profile is unoptimised, miscategorised, or missing
                suburb relevance, you do not exist for the highest-intent searches in your own territory.
              </p>
            </div>
            <div className="card-clean rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">The Google Ads Money Pit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                "Home builder Gold Coast" clicks cost $25 to $45 <em>each</em> — and a large share are job seekers,
                suppliers, or researchers with no project. One month of serious Ads spend can exceed $8,000 with a
                pipeline of tyre-kickers to show for it. The day you pause Ads, every inquiry stops. Organic rankings
                keep compounding instead.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 sm:p-8">
            <p className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              Why do most Gold Coast builders still rely on word of mouth instead of Google?
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Because word of mouth <em>worked</em> — until it did not. Referral pipelines are unpredictable: three great
              months, then silence. Meanwhile a new generation of homeowners researches builders entirely on Google and
              Google Maps, checking reviews, photos and QBCC licence details before ever calling. Builders who rank
              capture that demand directly; builders who do not wait for the phone to ring.
            </p>
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

      {/* Methodology Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Target className="w-4 h-4 text-indigo-600" />
              <span>The Suburb Domination Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              How We Rank <span className="gradient-text">Builders</span> in the Maps 3-Pack
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              A five-phase system built specifically for high-value building companies — not recycled generic SEO.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                n: "01",
                t: "Google Business Profile Re-Architecture",
                d: "We rebuild your GBP from the ground up: correct primary and secondary categories, service-area mapping across your target suburbs, geo-tagged project photos, product/service entries for each build type, and Q&A seeding. Most builder profiles we audit are missing half of these fields — which is exactly why they do not rank.",
              },
              {
                n: "02",
                t: "QBCC Licence & Entity Schema Integration",
                d: "Your QBCC licence number, business entity details, service areas and reviews are encoded in structured schema markup on every page. This tells Google — and AI search engines like Gemini — precisely who you are, where you are licensed to build, and what you build. Entity clarity is what gets businesses cited in AI Overviews.",
              },
              {
                n: "03",
                t: "Affluent Suburb Micro-Silos",
                d: "Instead of one generic 'builder Gold Coast' page, we build deep content silos for each high-value suburb: Hope Island waterfront builds, Robina knockdown-rebuilds, Burleigh architectural renovations. Each silo targets the exact phrases wealthy homeowners type — 'custom waterfront home builders 4212', 'dual living builders Coomera' — with zero wasted relevance.",
              },
              {
                n: "04",
                t: "Project Portfolio Authority",
                d: "Completed builds become ranking assets. Each project gets its own optimised page: location, build type, contract value band, architect, and photography — all marked up with schema. A portfolio of ten documented $1M+ builds is proof Google can read, and it is proof competitors cannot copy overnight.",
              },
              {
                n: "05",
                t: "Review & Citation Engine",
                d: "We systematise review generation at handover — the moment clients are happiest — and build NAP-consistent citations across Australian directories (True Local, Yellow Pages, LocalSearch, Hotfrog) plus Gold Coast-specific sources. Consistent citations plus a growing review profile is the compounding signal that holds 3-Pack positions.",
              },
            ].map((s) => (
              <div key={s.n} className="card-clean rounded-2xl p-6 sm:p-8 flex gap-5 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white font-black flex items-center justify-center text-sm">
                  {s.n}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">{s.t}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 sm:p-8 space-y-4">
            <div>
              <p className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                What exactly is a "suburb micro-silo"?
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                A micro-silo is a cluster of interlinked pages dedicated to one suburb and one build type — for example,
                a hub page for "Custom Home Builder Hope Island" linking to child pages for waterfront builds,
                knockdown-rebuilds and luxury renovations in 4212. Google reads the cluster as deep topical authority for
                that suburb, which is why silo pages outrank generic single service pages.
              </p>
            </div>
            <div className="pt-4 border-t border-indigo-100">
              <p className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                How is this different from what a general SEO agency does?
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                General agencies optimise for traffic; we optimise for signed building contracts. Every keyword we target
                is chosen for commercial intent and project value — "luxury custom home builder Sovereign Islands" will
                always beat "building tips blog" in our strategy. And with 1-partner-per-territory exclusivity, we never
                rank your competitor alongside you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Territories Section */}
      <section className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-xs sm:text-sm font-bold text-indigo-300">
              <Landmark className="w-4 h-4 text-indigo-400" />
              <span>Exclusive Territories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Gold Coast Builder Territories We Dominate
            </h2>
            <p className="text-base text-slate-400">
              One partner per territory. When your suburb is claimed, it is locked — we will never work with your
              direct competitor there.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              ["Hope Island", "4212"], ["Sanctuary Cove", "4212"], ["Robina", "4226"], ["Burleigh Heads", "4220"],
              ["Palm Beach", "4221"], ["Currumbin", "4223"], ["Tallebudgera", "4228"], ["Coolangatta", "4225"],
              ["Broadbeach Waters", "4218"], ["Mermaid Waters", "4218"], ["Main Beach", "4217"], ["Surfers Paradise", "4217"],
              ["Southport", "4215"], ["Arundel", "4214"], ["Helensvale", "4212"], ["Oxenford", "4210"],
              ["Coomera", "4209"], ["Upper Coomera", "4209"], ["Pimpama", "4209"], ["Ormeau", "4208"],
            ].map(([suburb, pc]) => (
              <div key={suburb} className="rounded-xl bg-slate-900/80 border border-slate-800 px-4 py-3.5 flex items-center justify-between gap-2 hover:border-indigo-500/50 transition-colors">
                <span className="text-sm font-bold text-white">{suburb}</span>
                <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-md">{pc}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8 max-w-2xl mx-auto">
            Building outside these suburbs? We also partner with builders across the Tweed Coast and Brisbane on
            application — <a href="#builder-audit" className="text-indigo-400 font-bold hover:text-indigo-300">ask about your territory →</a>
          </p>
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
                    <h3 className="text-2xl font-black text-slate-900">Audit Request Received & Sent to WhatsApp!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Our Lead Builder Search Architect has received your details and will prepare your ranking audit shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        await fetch("/api/audit", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            businessName: formData.builderName,
                            contactName: formData.contactName,
                            suburb: formData.suburb,
                            phone: formData.phone,
                            website: formData.website,
                            source: "Builders SEO Audit Form",
                          }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted a Custom Builder Audit Request on Vortic Growth:\n\n• Building Company: ${formData.builderName}\n• Contact Name: ${formData.contactName}\n• Suburb: ${formData.suburb}\n• Phone: ${formData.phone}\n• Website: ${formData.website}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
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
