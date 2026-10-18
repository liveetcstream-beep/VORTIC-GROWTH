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
  Search,
  ShieldCheck,
  TrendingUp,
  Zap,
  ChevronDown,
  Building2,
  Hammer,
  Send,
  HelpCircle,
} from "lucide-react";

export default function CoomeraClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    tradeType: "Commercial & Industrial Trade",
    phone: "",
    website: "",
  });

  const coomeraSuburbs = [
    { name: "Coomera Town Centre", postcode: "4209", highlight: "Westfield & Commercial Hub" },
    { name: "Upper Coomera", postcode: "4209", highlight: "Residential & Schooling Precinct" },
    { name: "Coomera Waters", postcode: "4209", highlight: "High-LTV Waterfront Enclave" },
    { name: "Marine Precinct", postcode: "4209", highlight: "Industrial & Marine Trades" },
    { name: "Pimpama Boundary", postcode: "4209", highlight: "M1 Northern Growth Corridor" },
    { name: "Oxenford Link", postcode: "4210", highlight: "Southern Commercial Connector" },
  ];

  const coomeraFaqs = [
    {
      q: "How does Coomera (Postcode 4209) local search differ from Southern Gold Coast?",
      a: "Coomera is the primary commercial engine of the Northern Gold Coast. With Westfield Coomera, the Gold Coast Marine Precinct, and over 15,000 households across Upper Coomera and Coomera Waters, intent is split between B2B commercial contractors and urgent residential service calls. Our local SEO framework targets both B2B industrial queries and high-intent residential map searches.",
    },
    {
      q: "Why is Google Business Profile proximity critical along the Coomera Town Centre corridor?",
      a: "Google uses hyper-local centroid proximity around Foxwell Road and Dreamworld Parkway. If your Google Business Profile isn't optimized with geo-tagged local citations and structured location schema for Postcode 4209, searchers in Upper Coomera or Coomera Waters will be directed to competitors down in Helensvale or Southport.",
    },
    {
      q: "How do you help Coomera trade businesses capture M1 highway service traffic?",
      a: "The M1 Motorway experiences over 140,000 vehicle movements daily through Coomera Exit 54 and Exit 57. We optimize your local profiles for emergency search triggers like 'emergency plumber Coomera Exit 54' or 'commercial electrician Upper Coomera', driving high-margin immediate booking calls.",
    },
    {
      q: "What is your Territory Exclusivity Guarantee for Coomera businesses?",
      a: "We accept strictly ONE partner per trade or professional category in Coomera (4209). When we optimize your local search authority in Upper Coomera and Coomera Waters, we lock out your local competitors from accessing our Search Engine & AI Optimization framework.",
    },
    {
      q: "How long does it take for a Coomera business to reach the Google Maps 3-Pack?",
      a: "Most Coomera clients see first movement within 30 to 45 days — that is how long citation cleanup, Google Business Profile optimisation, and review velocity fixes typically take to register. Dominant 3-Pack positions across money keywords in Postcode 4209 usually consolidate between months two and four, depending on how competitive your category is.",
    },
    {
      q: "Do Google reviews really affect my ranking in Coomera (4209)?",
      a: "Yes — review count, velocity, and keyword relevance are among the strongest local ranking factors Google uses. Businesses holding the Coomera 3-Pack typically carry 50+ recent reviews mentioning the suburb or service. We install a simple post-job review system so every happy Upper Coomera or Coomera Waters customer becomes a ranking asset, with no fake or incentivised reviews.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Coomera & Upper Coomera • Postcode 4209 SEO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                #1 Local SEO & Google Maps Dominance in <span className="gradient-text">Coomera (4209)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Capture the highest-value residential and commercial search traffic in <strong className="text-white font-semibold">Coomera Town Centre, Upper Coomera, and Coomera Waters</strong>. Engineered for tradies, healthcare practices, and local commercial services.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Maps 3-Pack</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Coomera Marine Precinct</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Exclusivity Protection</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#coomera-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Coomera Grid Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20business%20owner%20in%20Coomera%20looking%20for%20Local%20SEO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-bold text-sm bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Search Architect</span>
                </a>
              </div>

            </div>

            {/* Quick Audit Card */}
            <div className="lg:col-span-5">
              <div id="coomera-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Free Coomera Map Grid Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your Coomera 4209 Rankings</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Enter your Coomera business details. We will send you a 4209 geo-grid report analyzing your visibility in Upper Coomera & Westfield precinct.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received & Sent to WhatsApp!</h4>
                    <p className="text-xs text-slate-300">
                      Our Lead Search Architect has received your Coomera business details and will analyze your profile shortly.
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
                          body: JSON.stringify({ ...formData, suburb: "Coomera 4209", source: "Coomera Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request on Vortic Growth for Coomera (4209):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Industry: ${formData.tradeType}\n• Suburb: Coomera (4209)`
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
                        placeholder="e.g. Coomera Electrical & Solar"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jason Smith"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
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
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Industry</label>
                        <select
                          value={formData.tradeType}
                          onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-indigo-500"
                        >
                          <option>Commercial & Industrial Trade</option>
                          <option>Plumbing & Electrical</option>
                          <option>Concreting & Builders</option>
                          <option>Healthcare & Allied Health</option>
                          <option>Professional Services</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free Coomera Geo-Grid Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Local Suburbs & Nodes Grid */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Coomera 4209 Geographic Power Nodes
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We engineer hyper-local content and schema nodes across Coomera&apos;s key retail, marine, and residential hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coomeraSuburbs.map((sub, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-white text-base">{sub.name}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300">
                    {sub.postcode}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{sub.highlight}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4209 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Is Coomera the Hardest Suburb on the Gold Coast to Win on Google?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Coomera added roughly 4,770 residents since the 2021 Census — a 23.6% jump that puts it in the top 2% of Australian suburbs for population growth. Westfield Coomera anchors a $1.5 billion town centre build-out. Dreamworld&apos;s owners just won Queensland Government approval for a 55-hectare tourism precinct next door. And the 250-hectare Gold Coast Marine Precinct along the Coomera River employs around 3,500 people building recreational craft. Every one of those developments brings new businesses fighting for the same &quot;near me&quot; searches you want.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Then there&apos;s the split-intent problem, which is uniquely Coomera. Along the river and the marine precinct, searchers are B2B: shipwrights, marine electricians, commercial fabricators chasing contract work. Fifteen minutes west in Upper Coomera and Coomera Waters, it&apos;s urgent residential calls — burst pipes, switchboards, air-con failures in 35-degree heat. One Google Business Profile has to win both games. Add Dreamworld and WhiteWater World tourist traffic — aggregators and national chains bid aggressively on 4209 keywords — and you get the most contested local SERP in northern Gold Coast.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Coomera is growing so fast — shouldn&apos;t new customers just find me automatically?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Growth creates demand <em>and</em> competitors. Every new Upper Coomera estate brings rival tradies, and national franchises deliberately target 4209 postcodes. Google doesn&apos;t rank you for existing — it ranks whoever holds the strongest prominence signals: reviews, citations, and suburb-relevant content. Standing still here means sliding backwards.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why do I rank near Foxwell Road but disappear around Westfield Coomera?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google&apos;s local results shift with the searcher&apos;s exact location — the local centroid effect. Your Google Business Profile has a proximity radius, and outside it stronger competitors win. We fix it with suburb-level content silos, geo-tagged citations, and service-area signals that stretch your ranking footprint across all of 4209, from the marine precinct to Coomera Waters.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Should my Coomera business target Dreamworld tourists or local residents?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                It depends on your trade. Cafes, accommodation, and experiences near Dreamworld Parkway can win tourist searches; tradies, healthcare, and professional services should target the 24,995 locals generating daily high-intent searches. We segment the strategy so you never pay — in effort or ad spend — to rank for traffic that won&apos;t convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definition box — AEO/GEO */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-500/5 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What Is the Google Maps 3-Pack?</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google displays above all organic results for local searches — with star ratings, map pins, review counts, and tap-to-call buttons. For queries like &quot;plumber Coomera&quot; or &quot;dentist near Westfield Coomera&quot;, the 3-Pack captures the majority of calls because most searchers never scroll past it. Winning a spot requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-specific relevance signals for 4209 — the four pillars our Coomera framework is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Coomera Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and Coomera&apos;s challenge is always the same: too much competition, split between two completely different customer types. Here is the exact five-step sequence we run for every 4209 client. No black box, no jargon walls.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild for 4209&apos;s dual intent</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We rebuild your GBP around both customer types: residential services tagged to Upper Coomera and Coomera Waters, commercial services tagged to the marine precinct and Coomera Town Centre. Correct categories, full service lists with 4209 suburb keywords, geo-tagged photos, and Q&amp;A seeding — most profiles we inherit are under half complete.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, and trade directories confuses Google&apos;s entity graph. We standardise your NAP everywhere and build fresh citations on the directories that actually move Gold Coast rankings — including marine and trade-specific listings for precinct businesses.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-job SMS flow turns happy customers into a steady stream of suburb-mentioning reviews — &quot;best electrician in Upper Coomera&quot; carries genuine ranking weight. No fake reviews, no incentives, just systematic capture. In our experience, 50+ genuine reviews is the tipping point where 4209 businesses start holding 3-Pack positions.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and suburb entities (Coomera • Dreamworld precinct • Coomera River marine precinct • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your business as the verified local entity.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Upper Coomera families, Coomera Waters waterfront owners, and marine precinct contractors search differently — so each gets genuinely unique content, like this page for Coomera. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4209&apos;s competitive field. Anyone promising overnight rankings is selling something Google will eventually penalise.
          </p>
        </div>
      </section>

      {/* Local landmarks strip */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Landmark Entity Signals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Coomera Landmarks We Optimise Around
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            &quot;Near me&quot; searches cluster around the places people actually go, so we wire your entity to the landmarks that define 4209: <strong className="text-white">Westfield Coomera</strong> and the <strong className="text-white">Coomera Town Centre</strong> precinct, <strong className="text-white">Dreamworld</strong> and <strong className="text-white">WhiteWater World</strong> on Dreamworld Parkway, the <strong className="text-white">Gold Coast Marine Precinct</strong> and <strong className="text-white">Coomera Waters Marina</strong> on the Coomera River, <strong className="text-white">Coomera train station</strong>, and the <strong className="text-white">M1 Exits 54 and 57</strong> interchanges. When your business entity sits inside this landmark graph, Google — and Google&apos;s AI — treats you as unmistakably local.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Local issues shaping 4209 search right now: the $2.4 billion Coomera Connector is carving a second M1 corridor through the northern Gold Coast, shifting where commuters — and &quot;near me&quot; searches — cluster. Brisbane 2032 Olympics infrastructure spending is accelerating development across the corridor, pulling in outside contractors who bid on Coomera keywords without any local presence. And summer storm season reliably spikes emergency trade searches across Upper Coomera&apos;s newer estates. In a market moving this fast, the businesses holding 3-Pack positions compound their lead every single month.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Coomera Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {coomeraFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
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
            Ready to Dominate Coomera Local Search in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per trade category in Coomera (4209). Get your free street-by-street geo-grid audit and secure your territory before a competitor locks you out of the fastest-growing suburb on the Gold Coast.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#coomera-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4209 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
