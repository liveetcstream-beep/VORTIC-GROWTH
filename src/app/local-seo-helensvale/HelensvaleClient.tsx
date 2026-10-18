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
  Zap,
  ChevronDown,
  Building,
  Hammer,
  Send,
  HelpCircle,
} from "lucide-react";

export default function HelensvaleClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    tradeType: "Commercial & Residential Services",
    phone: "",
    website: "",
  });

  const helensvaleSuburbs = [
    { name: "Westfield Helensvale Precinct", postcode: "4212", highlight: "Major Retail & Commercial Hub" },
    { name: "Helensvale Heavy Rail & G:link", postcode: "4212", highlight: "Northern Transport Interchange" },
    { name: "Rivergate & Coombabah Boundary", postcode: "4212", highlight: "Residential & Trade Enclave" },
    { name: "Discovery Lake Precinct", postcode: "4212", highlight: "High-LTV Residential Suburb" },
    { name: "Monterey Keys Corridor", postcode: "4212", highlight: "Affluent Waterfront Suburb" },
    { name: "Hope Island Link", postcode: "4212", highlight: "Northern Commercial Connector" },
  ];

  const helensvaleFaqs = [
    {
      q: "Why is Helensvale (Postcode 4212) a high-conversion local search hub?",
      a: "Helensvale is the transport and commercial backbone of the Northern Gold Coast, connecting the M1 Motorway, heavy rail, and the G:link light rail. Homeowners across Helensvale, Monterey Keys, and Oyster Cove search daily for emergency tradies, dental clinics, and local services. Ranking in the Google Maps 3-Pack for 4212 secures immediate, high-intent local calls.",
    },
    {
      q: "How does Vortic Growth optimize Helensvale businesses for Google AI Overviews?",
      a: "We structure your business entity in Google&apos;s Knowledge Graph using local schema triples that tie your brand to Helensvale 4212, the Westfield Helensvale precinct, and the City of Gold Coast. When residents ask Gemini or Perplexity for the top-rated service provider in Helensvale, your business gets cited as the verified local entity.",
    },
    {
      q: "Do you offer territory exclusivity for Helensvale businesses?",
      a: "Yes. We enforce a strict 1-Partner-Per-Territory rule, which means we only represent ONE business per industry category in Helensvale (4212). If we run local SEO for your plumbing company here, we will never take on another Helensvale plumber. Your competitive advantage on Google Maps stays exclusively yours.",
    },
    {
      q: "How long does it take a Helensvale business to reach the Google Maps 3-Pack?",
      a: "Most Helensvale clients see first movement within 30 to 45 days — that is how long citation cleanup, Google Business Profile optimisation, and review velocity fixes typically take to register. Dominant 3-Pack positions across your money keywords in Postcode 4212 usually consolidate between months two and four, depending on how competitive your trade is.",
    },
    {
      q: "Do Google reviews really affect my ranking in Helensvale (4212)?",
      a: "Yes — review count, velocity, and keyword relevance are among the strongest local ranking factors Google uses. Businesses holding the Helensvale 3-Pack typically carry 50+ recent reviews mentioning the suburb or service. We install a simple post-job review system so every happy customer in Monterey Keys or Oyster Cove becomes a ranking asset, with no fake or incentivised reviews.",
    },
    {
      q: "How much does local SEO cost for a Helensvale business?",
      a: "Our local SEO packages run from AUD $300 to $2,000 per month depending on your trade&apos;s competitiveness and how many northern Gold Coast suburbs you want to dominate. Every engagement starts with a free 4212 geo-grid audit showing exactly where you rank street-by-street today — so you see the gap before spending a dollar.",
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
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Helensvale Postcode 4212 • Local SEO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Dominate Google Maps & AI Search in <span className="gradient-text">Helensvale (4212)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Capture the highest-value residential and commercial search traffic in <strong className="text-white font-semibold">Helensvale, Monterey Keys, and Oyster Cove</strong>. Built for tradies, medical practices, and professional services.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Maps 3-Pack</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Gemini AI Citations</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% Exclusivity</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#helensvale-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Helensvale Grid Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="helensvale-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Free Helensvale 4212 Grid Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your 4212 Map Rankings</h3>
                  <p className="text-xs text-slate-400">
                    Enter your Helensvale business details below for a custom geo-grid analysis.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received!</h4>
                    <p className="text-xs text-slate-300">Opening WhatsApp with your details...</p>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        await fetch("/api/audit", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ ...formData, suburb: "Helensvale 4212", source: "Helensvale Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request for Helensvale (4212):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Industry: ${formData.tradeType}\n• Suburb: Helensvale (4212)`
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
                        placeholder="e.g. Helensvale Plumbing Services"
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
                        placeholder="e.g. Michael Taylor"
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
                          <option>Commercial & Residential Services</option>
                          <option>Plumbing & Electrical</option>
                          <option>Building & Renovations</option>
                          <option>Healthcare & Dental</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free Helensvale Geo-Grid Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 4212 Problem — pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4212 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Helensvale Businesses Struggle to Show Up on Google Maps?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Helensvale is the northern Gold Coast&apos;s transport and commercial backbone — Westfield Helensvale anchors the retail strip, Helensvale station is the only place on the Coast where heavy rail, the G:link light rail, and buses all interconnect, and the M1 Motorway meets the Gold Coast Highway right here. That makes 4212 a magnet for &quot;near me&quot; searches. It also makes it a battleground. Big-budget agencies in Surfers Paradise and Broadbeach happily bid on <em>your</em> suburb&apos;s keywords, and a Helensvale electrician or dental clinic can serve the area brilliantly for a decade yet watch the phone go quiet — simply because a competitor with 200 Google reviews and a fully optimised Google Business Profile owns the 3-Pack above them.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Then there&apos;s the commuter effect. Thousands of people flow through Helensvale station every day, the G:link runs south to Southport, Surfers Paradise, and Broadbeach, and search demand clusters hard around Westfield, the station interchange, and the canal estates of Monterey Keys and Oyster Cove. National chains and lead aggregators fight aggressively for those exact searches, which pushes genuine local businesses further down the map pack — even when the local business is the better choice.
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The local market adds its own pressure. Helensvale keeps absorbing new estates and a transient renter population that searches for everything instead of asking neighbours, while established homeowners in Monterey Keys and Oyster Cove expect established, review-backed operators. Meanwhile the planned Hope Island railway station and ongoing northern corridor growth keep pushing commercial rents — and customer expectations — upward. In a suburb this competitive, being the best-kept secret on Google Maps is the same as being invisible.
          </p>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why does my competitor rank above me on Google Maps when my business is closer to the searcher?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Google ranks local results on three pillars — proximity, relevance, and prominence — and proximity alone rarely wins. A competitor near Westfield Helensvale with 200 recent reviews, complete service listings, and suburb-specific pages can outrank a closer business with a bare profile. Prominence is the pillar you control, and it&apos;s exactly what we build.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Most of my work comes from word of mouth around Helensvale — do I really need SEO?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Word of mouth starts the conversation — Google finishes it. Even referred customers search your business name before calling, and new estates around Discovery Lake and Coombabah keep filling with residents who know nobody yet and search everything. If you&apos;re invisible on Maps, those high-intent searches go straight to whoever <em>is</em> visible, referral or not.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                I burned $3,000 on Google Ads with nothing to show — why would SEO be any different?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because paid clicks in Gold Coast trades run $35–$65 each, and ads stop the day you stop paying. Local SEO compounds instead: every review, citation, and suburb page keeps working month after month. Most of our Helensvale clients spend less per month than one week of aggressive Ads — and they own the asset outright.
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
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google shows at the top of local searches — with map pins, star ratings, and click-to-call buttons — before any regular website results appear. For searches like &quot;plumber Helensvale&quot; or &quot;dentist near Monterey Keys&quot;, the 3-Pack captures the overwhelming majority of calls, because searchers rarely scroll past it. Ranking there requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-level relevance signals for 4212 — the four pillars our Helensvale framework is built on.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The same signals now feed AI search. When someone asks Gemini or Perplexity for the best-reviewed electrician near Westfield Helensvale, the AI cites businesses with verified Google Business Profiles, consistent citations, and suburb-specific content — the exact entity data this page structure provides. Ranking in the 3-Pack and being cited by AI increasingly come from the same foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Helensvale Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4212 is consistent: businesses don&apos;t lose because their service is worse — they lose on entity signals. Here&apos;s the exact sequence we run for every Helensvale client. No black box, no jargon walls.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories, full service lists with 4212 suburb keywords, geo-tagged photos around Westfield Helensvale and the station precinct, products, and Q&amp;A seeding. Most Helensvale profiles we inherit are barely half complete — that alone leaks rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, and trade directories confuses Google&apos;s entity graph. We standardise your NAP everywhere and build fresh citations on the directories that actually move Gold Coast rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-job SMS flow turns happy customers into a steady stream of suburb-mentioning reviews. No fake reviews, no incentives — just systematic capture. In our experience, 50+ genuine reviews is the tipping point where 4212 businesses start holding 3-Pack positions.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and suburb entities (Helensvale • Westfield precinct • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your business as the verified local entity.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each suburb you serve gets genuinely unique content written for its landmarks, postcodes, and customer base — like this page for Helensvale. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4212. Anyone promising overnight rankings is selling something Google will eventually penalise.
          </p>
        </div>
      </section>

      {/* Suburb Nodes */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Service Territory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Helensvale 4212 Geographic Nodes
            </h2>
            <p className="text-sm text-slate-400">
              Suburb-level campaigns across the northern Gold Coast&apos;s transport and commercial heart — Postcode 4212.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helensvaleSuburbs.map((sub, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-white text-base">{sub.name}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300">{sub.postcode}</span>
                </div>
                <p className="text-xs text-slate-400">{sub.highlight}</p>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
            Landmarks we optimise around include Westfield Helensvale (opened 2005), Helensvale station — the only train, G:link tram, and bus interchange on the Gold Coast — the G:link northern terminus, the canal estates of Monterey Keys and Oyster Cove on the Coomera River, Discovery Park, and the planned Hope Island railway station — because &quot;near me&quot; searches cluster around the places people actually go.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Helensvale Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Helensvale Local SEO FAQs</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Helensvale business owners need to know about Google Maps, AI search, and ranking in Postcode 4212.
            </p>
          </div>
          <div className="space-y-4">
            {helensvaleFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">{faq.a}</div>
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
            Ready to Own the Helensvale 3-Pack in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per industry category in Helensvale (4212). Get your free street-by-street geo-grid audit and see exactly where you stand before your competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#helensvale-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4212 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
