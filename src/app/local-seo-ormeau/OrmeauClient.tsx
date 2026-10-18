"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Zap,
  ChevronDown,
  Send,
  Building2,
  HelpCircle,
} from "lucide-react";

export default function OrmeauClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    tradeType: "Industrial Trades & M1 Commercial",
    phone: "",
    website: "",
  });

  const ormeauSuburbs = [
    { name: "Ormeau Industrial Precinct", postcode: "4208", highlight: "M1 Heavy Industrial & Trade HQ" },
    { name: "Ormeau Hills Estate", postcode: "4208", highlight: "High-Growth Residential Corridor" },
    { name: "Kingsholme Precinct", postcode: "4208", highlight: "Acreage & Residential Trades" },
    { name: "Ormeau Ridge Precinct", postcode: "4208", highlight: "Family Residential Neighborhood" },
    { name: "Pimpama M1 Link", postcode: "4208", highlight: "Southern Commercial Connector" },
    { name: "Yatala Boundary Corridor", postcode: "4208", highlight: "Northern Industrial Gateway" },
  ];

  const ormeauFaqs = [
    {
      q: "Why is Ormeau (Postcode 4208) a critical trade & industrial search hub?",
      a: "Ormeau sits directly on the M1 Motorway corridor between Gold Coast and Brisbane. It houses hundreds of heavy trade headquarters, concreters, steel fabricators, roofing specialists, and residential service contractors. Businesses ranking #1 on Google Maps for 4208 capture both local residential quote requests and high-value B2B commercial contracts.",
    },
    {
      q: "How does Vortic Growth help Ormeau contractors win M1 corridor jobs?",
      a: "We engineer hyper-local location nodes for Ormeau Industrial Park, Ormeau Hills, and Kingsholme. By injecting local ABN schema and City of Gold Coast planning compliance data into your entity graph, Google AI and Maps rank your profile at the top across Northern Gold Coast postcodes.",
    },
    {
      q: "How long does it take for an Ormeau business to reach the Google Maps 3-Pack?",
      a: "Most Ormeau clients see first movement within 30 to 45 days — that is how long citation cleanup, Google Business Profile optimisation, and review velocity fixes typically take to register. Dominant 3-Pack positions across your money keywords in Postcode 4208 usually consolidate between months two and four, depending on trade competitiveness.",
    },
    {
      q: "Do Google reviews really matter for industrial and B2B trades in 4208?",
      a: "Yes — even commercial buyers check reviews before shortlisting suppliers. Procurement managers and builders Google your business name, and a thin review profile next to a competitor with 80 recent reviews loses the job before you quote. We install a simple post-job review system that captures genuine suburb-mentioning reviews without fakes or incentives.",
    },
    {
      q: "Will Google AI Overviews and Gemini recommend my Ormeau business?",
      a: "AI Overviews cite businesses with clear entity data: a verified Google Business Profile, consistent NAP citations, local schema markup, and suburb-specific content answering real questions. We structure all four for 4208, so when someone asks Gemini for the best concreter or electrician near Ormeau Hills, your business is the entity the AI confidently cites.",
    },
    {
      q: "Do you work with my competitors in Ormeau?",
      a: "No. We take on exactly one business per trade category in the Ormeau 4208 territory. If we run local SEO for your roofing company in Ormeau Hills, we will never take on another Ormeau roofer. Your competitive advantage on Google Maps stays exclusively yours for as long as you are with us.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Ormeau & Ormeau Hills • Postcode 4208</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Local SEO & Maps Dominance in <span className="gradient-text">Ormeau (4208)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Dominate Google search results across <strong className="text-white font-semibold">Ormeau Industrial Park, Ormeau Hills, and Kingsholme</strong>. Specialized search engine architecture for trade headquarters, industrial services, and residential contractors.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#ormeau-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Ormeau Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="ormeau-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Free Ormeau 4208 Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your 4208 Map Rankings</h3>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received!</h4>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        await fetch("/api/audit", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ ...formData, suburb: "Ormeau 4208", source: "Ormeau Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request for Ormeau (4208):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Industry: ${formData.tradeType}\n• Suburb: Ormeau (4208)`
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
                        placeholder="e.g. Ormeau Steel & Roofing"
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
                        placeholder="e.g. Wayne Harris"
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
                          <option>Industrial Trades & M1 Commercial</option>
                          <option>Concreting & Excavation</option>
                          <option>Plumbing & Electrical</option>
                          <option>Residential Building</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free Ormeau 4208 Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Nodes */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ormeau 4208 Geographic Nodes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ormeauSuburbs.map((sub, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-white text-base">{sub.name}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300">{sub.postcode}</span>
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
              <span>The 4208 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Ormeau Trade Businesses Struggle to Win Work on Google?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Ormeau sits on the M1 Motorway between Brisbane and the Gold Coast, and that single fact shapes everything about local search here. The industrial estates off the motorway house hundreds of trade headquarters — concreters, steel fabricators, roofing companies, diesel mechanics, commercial electricians — all bidding for the same &quot;near me&quot; searches. At the same time, the residential boom in Ormeau Hills, Norfolk Village, and Kingsholme means thousands of families searching daily for plumbers, sparkies, concreters, and builders. Demand is enormous. So is the competition.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              And the competition doesn&apos;t stop at the 4208 boundary. Yatala&apos;s industrial precincts sit minutes north on the M1, and hungry Pimpama and Coomera tradies happily bid on Ormeau keywords. Meanwhile commercial clients search from offices across the corridor — if your Google Business Profile carries weak entity signals, Google hands those high-value B2B contracts to whoever looks more established online, regardless of who does better work.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why does a Yatala competitor outrank my Ormeau business when I&apos;m closer to the customer?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Google weighs proximity, relevance, and prominence — and prominence usually decides it. A Yatala workshop with 150 recent reviews, complete service categories, and consistent NAP citations can outrank a closer Ormeau business with a thin profile. Proximity gets you considered; prominence gets you called. That is exactly the pillar we build.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Most of my work comes from builders and repeat commercial clients — do I still need local SEO?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yes — because even referred buyers Google your business name before signing, and procurement managers shortlist suppliers from Maps. Meanwhile every new Norfolk Village or Ormeau Hills household searches from scratch. If competitors own the 4208 3-Pack, they quietly collect the inbound work you are leaving on the table.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                What&apos;s the difference between ranking in Ormeau and ranking across the whole M1 corridor?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ranking in Ormeau means winning &quot;near me&quot; searches inside 4208. Ranking across the corridor means building suburb-level authority in Yatala, Pimpama, Coomera, and Ormeau Hills so your Google Business Profile earns proximity credit beyond your doorstep. We build both — starting with your home territory, then expanding outward.
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
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google displays above all organic results for local searches — with star ratings, map pins, review counts, and tap-to-call buttons. For queries like &quot;concreter Ormeau&quot; or &quot;electrician near Ormeau Hills&quot;, the 3-Pack captures the majority of calls because most searchers never scroll past it. Winning a spot requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-specific relevance signals for 4208 — the four pillars our Ormeau framework is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Ormeau Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4208 is the same every time: Ormeau businesses don&apos;t lose on quality of work — they lose on entity signals. Here is the exact five-step sequence we run for every Ormeau client. No black box, no jargon walls.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild for 4208</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories (most trade profiles we inherit have the wrong primary category), full service lists with Ormeau, Ormeau Hills, and Kingsholme modifiers, geo-tagged photos of real job sites, and Q&amp;A seeding. Most 4208 profiles we inherit are under half complete — that alone leaks rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, HiPages, Oneflare, and trade directories confuses Google&apos;s entity graph and splits your authority. We standardise your NAP everywhere, kill duplicates, and build fresh citations on the directories that actually move northern Gold Coast rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-job SMS flow turns happy customers into a steady stream of suburb-mentioning reviews — &quot;great concreter in Ormeau Hills&quot; carries real ranking weight. No fake reviews, no incentives, just systematic capture. In our experience, 50+ genuine reviews is the tipping point where 4208 businesses start holding 3-Pack positions.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and suburb entities (Ormeau • Ormeau Hills • M1 corridor • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your business as the verified local entity when someone asks for the best trade in 4208.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each pocket you serve — the industrial precinct, Norfolk Village, Kingsholme acreage — gets genuinely unique content written for its landmarks, postcodes, and customer base, like this page for Ormeau. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4208. Anyone promising overnight rankings is selling something Google will eventually penalise.
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
              The Ormeau Landmarks We Optimise Around
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            &quot;Near me&quot; searches cluster around the places people actually go, so we wire your entity to the landmarks that define 4208: the <strong className="text-white">Ormeau industrial estates</strong> along the M1 corridor, <strong className="text-white">Norfolk Village</strong> and its state school, <strong className="text-white">Ormeau Marketplace</strong> and <strong className="text-white">Ormeau Village Shopping Centre</strong>, <strong className="text-white">Ormeau train station</strong> on the Brisbane–Gold Coast line, <strong className="text-white">Ormeau Woods State High School</strong>, <strong className="text-white">Livingstone Christian College</strong>, and the <strong className="text-white">Ormeau Hill District Sports Park</strong>. When your business entity sits inside this landmark graph, Google — and Google&apos;s AI — treats you as unmistakably local.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Local issues shaping 4208 search right now: the M1 is one of Australia&apos;s busiest motorways, and peak-hour congestion keeps pushing Ormeau Hills and Norfolk Village residents toward &quot;near me&quot; searches instead of driving to Yatala or Beenleigh suppliers — proximity searches keep climbing. Meanwhile the $2.4 billion Coomera Connector, the M1&apos;s planned alternative, is reshaping commuter flows through the northern corridor, and every new estate release drops more competing tradies into the same 4208 auction. Businesses that locked in 3-Pack positions early are compounding their lead; latecomers pay more for every click.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Ormeau Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Ormeau business owners need to know about Google Maps, AI search, and ranking in Postcode 4208.
            </p>
          </div>
          <div className="space-y-4">
            {ormeauFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-colors">
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
            Ready to Own the Ormeau 4208 Territory in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per trade category in Ormeau (4208). Get your free street-by-street geo-grid audit and see exactly where you stand before a Yatala or Pimpama competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#ormeau-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4208 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
