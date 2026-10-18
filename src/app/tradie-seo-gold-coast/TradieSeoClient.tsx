"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hammer,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Zap,
  ChevronDown,
  Wrench,
  Truck,
  Flame,
  Send,
  HelpCircle,
  CloudLightning,
  Thermometer,
  Leaf,
  Snowflake,
  BadgeCheck,
  Star,
  PhoneCall,
} from "lucide-react";

export default function TradieSeoClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    tradeType: "Concreting",
    phone: "",
    suburbs: "Pimpama & Coomera Corridor",
  });

  const tradieTrades = [
    { name: "Concreters & Driveways", avgTicket: "$8,500 - $32,000", focus: "Slab Extensions, Exposed Aggregate, Commercial Paving" },
    { name: "Plumbers & Gas Fitters", avgTicket: "$450 - $14,000", focus: "Blocked Drains, Emergency Callouts, Hot Water Upgrades" },
    { name: "Electricians & Solar", avgTicket: "$650 - $18,000", focus: "EV Chargers, Solar Battery Storage, Switchboard Upgrades" },
    { name: "Roofers & Restoration", avgTicket: "$6,000 - $45,000", focus: "Storm Repair, Metal Roof Replacement, Tile Painting" },
    { name: "Builders & Renovators", avgTicket: "$40,000 - $350,000+", focus: "Granny Flats, Second Story Additions, Full Home Builds" },
    { name: "HVAC & Air Conditioning", avgTicket: "$1,800 - $22,000", focus: "Ducted Air Systems, Commercial Chillers, Split Install" },
  ];

  const territories = [
    {
      trade: "Concreters & Driveways",
      areas: "Pimpama 4209 • Coomera 4209 • Ormeau 4208",
      why: "New estates mean new driveways, shed slabs and exposed aggregate — and the reactive clay soil across the northern corridor makes genuine local soil knowledge a real ranking asset.",
    },
    {
      trade: "Plumbers & Gas Fitters",
      areas: "Helensvale 4212 • Oxenford 4210 • Pacific Pines",
      why: "Storm season (October–April) floods stormwater systems, while established suburbs keep serving up ageing hot water units and blocked drains on repeat.",
    },
    {
      trade: "Electricians & Solar",
      areas: "Pimpama 4209 • Upper Coomera • Ormeau 4208",
      why: "New builds need complete fit-outs, and EV chargers plus solar battery retrofits are the fastest-growing residential electrical work on the Coast.",
    },
    {
      trade: "Roofers & Restoration",
      areas: "Yatala 4207 • Ormeau 4208 • Northern Corridor",
      why: "Summer storms tear through metal roofing every year. Pre-storm inspections and post-storm repairs drive the most urgent — and highest-converting — calls of the year.",
    },
    {
      trade: "Builders & Renovators",
      areas: "Ormeau 4208 • Pimpama 4209 • Coomera 4209",
      why: "House-and-land packages, second-storey additions and granny flats. Queensland law requires a QBCC licence for work over $3,300 — we make yours visible everywhere Google looks.",
    },
    {
      trade: "HVAC & Air Conditioning",
      areas: "Surfers Paradise 4217 • Broadbeach 4218 • Southport",
      why: "High-rise apartments and holiday rentals chew through split systems every summer. Body corporates search, compare and call — usually within the hour.",
    },
  ];

  const methodology = [
    {
      step: "Step 1",
      title: "Rebuild Your Google Business Profile Around ONE Trade",
      body: "Google gives you one primary category per profile — and stuffing nine secondary categories dilutes your relevance instead of helping. We pick your money category, lock your NAP (Name, Address, Phone) identical everywhere, and set service areas to the corridors you actually serve: Pimpama 4209, Coomera 4209, Ormeau 4208 and beyond. Then we load the profile with photos of real jobs, not stock images.",
    },
    {
      step: "Step 2",
      title: "Turn Every Finished Job Into Review Velocity",
      body: "Review velocity — the steady rate of new Google reviews landing on your profile — is one of the strongest prominence signals Google measures. We set up a dead-simple SMS flow: job done, customer gets a one-tap review link within the hour. Then we reply to every single review, good or bad, because Google watches that too.",
    },
    {
      step: "Step 3",
      title: "Clean Up Citations & Prove You're Licensed",
      body: "We audit every directory listing your business across the web and fix NAP inconsistencies that quietly bleed ranking power. Then we put your QBCC licence number on your website and your profile. In Queensland, building work over $3,300 legally requires a QBCC licence — displaying it is a trust signal for homeowners and for Google's E-E-A-T assessment alike. We also add LocalBusiness schema markup so search engines understand exactly what entity you are.",
    },
    {
      step: "Step 4",
      title: "Build Suburb Authority Hubs — Not Doorway Spam",
      body: "One unique, genuinely local content hub per key corridor. A concreter's Pimpama page talks reactive clay soil and slab engineering for new estates; it says nothing like the Ormeau page. Google penalises copy-paste doorway pages with swapped suburb names, so every hub carries real local proof: suburb-specific job photos, council approval notes and neighbouring suburbs you actually service.",
    },
    {
      step: "Step 5",
      title: "Get Cited By AI Search, Not Just Ranked By Google",
      body: "Google removed the Q&A feature from Business Profiles — the answers AI gives about your business now come from what's published on your website. We structure entity-rich FAQs and definition content that Gemini, Perplexity and Google AI Overviews can lift and cite, so when a homeowner asks AI \"who's the best concreter in Pimpama?\", your business is the verified answer.",
    },
  ];

  const tradieFaqs = [
    {
      q: "How is tradie SEO different from regular SEO?",
      a: "Tradie SEO is Maps-first, not website-first. Nobody reads three blog posts before calling an emergency plumber — they Google, see the 3-Pack, and tap call. Everything we do is engineered for that sixty-second decision: complete profiles, recent reviews, correct categories and suburb proof, so you win the tap instead of the click.",
    },
    {
      q: "Can one Google Business Profile rank my plumbing, electrical and building divisions?",
      a: "Only partially. Google allows one primary category per profile, so if it's set to Plumber, your electrical and building services barely surface. Secondary categories help but dilute relevance if overused. Our strategy: lead the profile with your highest-margin trade, support the others with dedicated service pages, and only split profiles where the businesses are genuinely separate entities.",
    },
    {
      q: "Should I cancel hipages once I start ranking on Google Maps?",
      a: "Not necessarily — but run the maths. Hipages plans run $139 to $649 a month plus per-lead credits, each lead shared with up to three businesses: near $232 in platform fees per booked job. A Maps ranking costs nothing per call and the customer is yours alone. Most clients run both, then taper the platform as organic calls take over.",
    },
    {
      q: "How long does it take a Gold Coast tradie to hit the Maps 3-Pack?",
      a: "Honest answer: most trade clients see 3-Pack movement within 30 to 45 days as we fix citations, rebuild the profile and kick off review velocity. Dominant positions across your money keywords typically consolidate between months two and four. Anyone promising page-one in a week is selling something Google doesn't sell.",
    },
    {
      q: "What does my QBCC licence have to do with Google rankings?",
      a: "Everything about trust. Homeowners check licensing before letting a stranger into their house, and Google's quality guidelines reward verifiable expertise. We display your QBCC licence number on your website and profile, because in Queensland any building work over $3,300 legally requires one — it filters out unlicensed competitors and reassures high-value clients in the same stroke.",
    },
    {
      q: "Will Google AI Overviews replace the Maps 3-Pack for tradie searches?",
      a: "No — \"near me\" searches trigger the map pack first: the customer needs a phone number, not an essay. But AI answers cite local entities, so the businesses AI recommends are the ones with clean entity data — consistent NAP, structured FAQs and schema. Our GEO layer gets you cited by AI and ranked by Maps: double exposure, one foundation.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
                <Hammer className="w-4 h-4 text-indigo-400" />
                <span>Gold Coast Tradie Search Blueprint • 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Dominant Local SEO & Google Maps for <span className="gradient-text">Gold Coast Tradies</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Stop relying on word-of-mouth or wasting thousands on overpriced Google Ads. We engineer high-ranking Google Maps & AI Search architectures that drive <strong className="text-white font-semibold">45+ inbound quote calls monthly</strong> for Gold Coast contractors.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Maps 3-Pack</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>0% Pay-Per-Click Fees</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% Territory Lock</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#tradie-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Tradie Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Audit Card */}
            <div className="lg:col-span-5">
              <div id="tradie-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Exclusive Tradie Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your Trade Territory</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Check if your trade category is still available in Pimpama, Coomera, Ormeau, or Helensvale.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received & Sent to WhatsApp!</h4>
                    <p className="text-xs text-slate-300">
                      Our Lead Tradie Search Architect has received your details and will check territory availability for your trade category shortly.
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
                          body: JSON.stringify({ ...formData, source: "Tradie SEO Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted a Tradie SEO Audit Request on Vortic Growth:\n\n• Business: ${formData.businessName}\n• Trade Category: ${formData.tradeType}\n• Phone: ${formData.phone}\n• Territory Target: ${formData.suburbs}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                      setFormSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. GC Pro Concreting"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Trade Category *</label>
                      <select
                        value={formData.tradeType}
                        onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option>Concreting</option>
                        <option>Plumbing & Gas</option>
                        <option>Electrical & Solar</option>
                        <option>Roofing & Restoration</option>
                        <option>Building & Renovations</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Check Territory Availability</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Targeted High-LTV Trade Verticals
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We specialize in trade businesses where a single inbound call generates thousands in net profit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradieTrades.map((t, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all space-y-3">
                <h3 className="font-extrabold text-white text-lg">{t.name}</h3>
                <div className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-md inline-block">
                  Avg Ticket: {t.avgTicket}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{t.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points + Inline Q&As */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-300">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>The Quiet Phone Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Your Phone Stopped Ringing (And It&apos;s Not Your Workmanship)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Here&apos;s the uncomfortable truth we tell every Gold Coast contractor who comes to us: your workmanship isn&apos;t the problem. Your visibility is. When a Pimpama homeowner&apos;s hot water system dies at 6am, they don&apos;t ask the neighbour for a recommendation — they Google &quot;emergency plumber near me&quot; and call one of the first three businesses in the Google Maps 3-Pack. If that&apos;s not you, the $1,200 job goes to the bloke above you. Not the better tradie. The more visible one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-extrabold text-white leading-snug">
                Why does my competitor outrank me on Google Maps when my work is better?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Maps rankings don&apos;t measure workmanship — they measure relevance, distance and prominence. Your competitor&apos;s Google Business Profile is probably more complete: the right primary category, eighty-plus recent reviews, suburb-specific services listed, photos uploaded weekly. Google rewards the best-maintained profile, not the best tradie. The good news? Every one of those signals is fixable.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-extrabold text-white leading-snug">
                I&apos;m already paying hipages monthly — why am I still quoting against two other tradies?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because hipages rents you shared leads. Plans run $139 to $649 a month plus credits every time you accept a lead — and that same lead goes to up to three businesses. Industry maths puts it near $232 in platform fees per booked job, win or lose. A Google Maps ranking is different: the customer calls you directly, nobody else is quoting, and you own the relationship outright.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-extrabold text-white leading-snug">
                My Google Ads used to work — why are clicks so expensive now?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google Ads is an auction, and you&apos;re bidding against national aggregators with bottomless budgets. Clicks for &quot;plumber Pimpama&quot; or &quot;concreter Gold Coast&quot; now cost $25 to $65 each. Three clicks that don&apos;t convert and you&apos;ve torched $150 before breakfast. Organic Maps rankings don&apos;t charge per click — once you&apos;re in the 3-Pack, every call is free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Box: Google Maps 3-Pack */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/40 text-xs font-bold text-indigo-300">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Definition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Is the Google Maps 3-Pack?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              The Google Maps 3-Pack is the block of three business listings — with map pins, star ratings and click-to-call buttons — that Google shows above all organic results when someone searches for a local service like &quot;electrician near me&quot;. For Gold Coast tradies, the 3-Pack captures the majority of urgent, high-intent calls, because most customers never scroll past it.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              If you&apos;re sitting in position four, you&apos;re invisible. That single cutoff is why everything on this page exists.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Methodology */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Wrench className="w-3.5 h-3.5" />
              <span>How We Rank Tradies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              The Tradie Maps Domination Method: 5 Steps
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              This is the exact process we run for every trade client across our 57-suburb Gold Coast footprint — no black box, no jargon. Here&apos;s what happens after you claim your audit:
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {methodology.map((m, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-indigo-500/25">
                    {idx + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">{m.step}</div>
                  <h3 className="text-lg font-extrabold text-white">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades & Territories Grid */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Where The Work Actually Is</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Trades We Rank &amp; the Territories They Win
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Different trades win in different corridors. The northern growth corridor — Pimpama, Coomera, Ormeau — holds the Coast&apos;s highest concentration of new-build development, while established suburbs deliver the repeat maintenance work. Here&apos;s where each trade&apos;s money searches actually come from:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {territories.map((t, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all space-y-3">
                <h3 className="font-extrabold text-white text-lg">{t.trade}</h3>
                <div className="text-[11px] font-mono font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-3 py-1.5 rounded-md inline-block">
                  {t.areas}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{t.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonality / Environment */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300">
              <CloudLightning className="w-3.5 h-3.5" />
              <span>Gold Coast Reality Check</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Gold Coast Seasons Decide Who Gets the Calls
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The Coast doesn&apos;t have a winter slowdown the way southern states do — it has a weather calendar, and each trade lives or dies by it. Your Google presence should breathe with the seasons, not sit static while demand swings past you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <CloudLightning className="w-8 h-8 text-indigo-400" />
              <h3 className="font-extrabold text-white">Storm Season (Oct–Apr)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Summer storms tear through the Coast every year. Roofers and plumbers: this is your harvest — leaks, torn metal roofing, flooded stormwater. Your Maps profile must be bulletproof before the first storm cell hits, not after.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <Thermometer className="w-8 h-8 text-red-400" />
              <h3 className="font-extrabold text-white">Summer Heat (Dec–Feb)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Relentless heat kills air conditioners across Surfers Paradise high-rises and Broadbeach holiday rentals. HVAC searches spike with the temperature — the tradies already ranked in the 3-Pack take the breakdown calls while everyone else sweats.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <Leaf className="w-8 h-8 text-emerald-400" />
              <h3 className="font-extrabold text-white">Autumn Prep (Mar–May)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The most underrated season on the Coast. Homeowners notice summer wear and book gutter cleans, roof inspections and pre-winter maintenance. Smart tradies reframe their profile messaging around &quot;storm damage prevention&quot; and fill the diary before winter.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <Snowflake className="w-8 h-8 text-sky-400" />
              <h3 className="font-extrabold text-white">Winter Build (Jun–Aug)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Emergency calls dip, renovations rise — and it&apos;s the best time to build rankings. Winter is when smart tradies fix citations, stack reviews and publish suburb content, so they&apos;re already in the 3-Pack when storm season demand explodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tradie Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Tradie SEO Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Straight answers for Gold Coast contractors on Google Maps, lead platforms, licensing and AI search.
            </p>
          </div>

          <div className="space-y-4">
            {tradieFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Bar */}
      <section className="py-16 bg-gradient-to-r from-indigo-950 via-slate-950 to-purple-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Own Your Trade Territory in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            One trade, one territory, one partner. Check whether your trade category is still available in your corridor — then let&apos;s make your phone ring like it&apos;s storm season all year.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#tradie-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Claim Your Free Tradie Territory Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
