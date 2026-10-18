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
  Zap,
  ChevronDown,
  Send,
  HelpCircle,
  Anchor,
} from "lucide-react";

export default function HopeIslandClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    tradeType: "Luxury Home Services & Marine Trades",
    phone: "",
    website: "",
  });

  const hopeIslandSuburbs = [
    { name: "Sanctuary Cove Marina", postcode: "4212", highlight: "Luxury Marine & Gated Community" },
    { name: "Hope Island Resort", postcode: "4212", highlight: "Golf & Gated Residential Precinct" },
    { name: "Santa Barbara Waterfront", postcode: "4212", highlight: "Deepwater Canal Enclave" },
    { name: "Hope Island Marketplace", postcode: "4212", highlight: "Commercial & Health Precinct" },
    { name: "Coomera Waters Connector", postcode: "4212", highlight: "Northern Coastal Corridor" },
    { name: "Oyster Cove", postcode: "4212", highlight: "Affluent Waterfront Suburb" },
  ];

  const hopeIslandFaqs = [
    {
      q: "Why is Hope Island & Sanctuary Cove (Postcode 4212) a high-LTV customer market?",
      a: "Hope Island and Sanctuary Cove represent Queensland&apos;s highest concentration of high-net-worth homeowners and marine vessel owners. Searches for luxury custom builders, marine contractors, cosmetic dentists, and high-end landscapers carry job values exceeding $20,000 to $250,000+. Ranking #1 in Google Maps for 4212 delivers high-margin clients who value quality over low pricing.",
    },
    {
      q: "How does GEO Optimization capture high-net-worth inquiries in Sanctuary Cove?",
      a: "Affluent residents increasingly ask Google Gemini AI and voice assistants instead of scrolling search results. We engineer local entity triples that connect your business directly to the Sanctuary Cove Marina and Hope Island Resort Knowledge Graph nodes, with verified GBP data, schema markup, and suburb-specific content — so AI search engines cite your brand as the trusted local answer.",
    },
    {
      q: "How long does it take to reach the Google Maps 3-Pack in Hope Island?",
      a: "Most Hope Island clients see first movement within 30 to 45 days — that is how long citation cleanup, Google Business Profile optimisation, and review velocity fixes typically take to register. Because 4212 luxury searches carry lower volume but extreme value, dominant 3-Pack positions usually consolidate between months two and four, depending on your trade&apos;s competition.",
    },
    {
      q: "Do you work with my competitors in Hope Island or Sanctuary Cove?",
      a: "No. We take on exactly one business per trade category in the Hope Island 4212 territory. If we run local SEO for your marine contracting company at Sanctuary Cove, we will never take on another Hope Island marine contractor. In a prestige market where every job is worth five figures, that exclusivity is the entire point.",
    },
    {
      q: "How do affluent Sanctuary Cove clients actually search for services?",
      a: "They search with high intent and high scepticism: &quot;best custom builder Sanctuary Cove&quot;, &quot;marine electrician near me&quot;, cosmetic and medical queries with suburb modifiers — and increasingly they just ask Gemini or Siri. They also vet ruthlessly: thin Google profiles, few reviews, or stock photos kill trust instantly. Your Maps presence has to look as premium as your work is.",
    },
    {
      q: "How much does local SEO cost for a Hope Island business?",
      a: "Our local SEO packages run from AUD $300 to $2,000 per month depending on your trade&apos;s competitiveness and how many northern Gold Coast suburbs you want to dominate. Given that a single Sanctuary Cove job can exceed $100,000, most Hope Island clients recover their SEO investment from one converted Maps enquiry. Every engagement starts with a free 4212 geo-grid audit.",
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
                <Anchor className="w-4 h-4 text-indigo-400" />
                <span>Hope Island & Sanctuary Cove • Postcode 4212</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Local SEO for <span className="gradient-text">Hope Island & Sanctuary Cove</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Capture high-LTV clients in Queensland&apos;s premier waterfront gated enclaves: <strong className="text-white font-semibold">Hope Island Resort, Sanctuary Cove, and Santa Barbara</strong>. Built for luxury trades, custom builders, and medical practices.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#hope-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Hope Island Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="hope-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Free Hope Island 4212 Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your 4212 Rankings</h3>
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
                          body: JSON.stringify({ ...formData, suburb: "Hope Island 4212", source: "Hope Island Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request for Hope Island (4212):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Industry: ${formData.tradeType}\n• Suburb: Hope Island & Sanctuary Cove (4212)`
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
                        placeholder="e.g. Hope Island Marine & Building Services"
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
                        placeholder="e.g. Richard Vance"
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
                          <option>Luxury Home Services & Marine Trades</option>
                          <option>Custom Builders & Renovators</option>
                          <option>Cosmetic Dental & Medical</option>
                          <option>Professional Legal & Financial</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free Hope Island Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 4212 Luxury Problem — pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4212 Luxury Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Hope Island Businesses Struggle to Win High-Value Clients on Google?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Hope Island and Sanctuary Cove hold Queensland&apos;s highest concentration of high-net-worth homeowners and marine vessel owners — and a single job here can run from $20,000 to $250,000+. But affluent clients research ruthlessly. They Google your business name, read every review, and increasingly just ask Gemini or Siri who to call. A luxury builder, marine contractor, or cosmetic dentist with a thin Google profile will lose to a competitor who <em>looks</em> premium online — regardless of who does better work. Behind the gates of Sanctuary Cove, reputation is the economy, and Google is where reputations get checked.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The search landscape makes it harder. Luxury-intent searches in 4212 carry low volume but extreme value per click, Brisbane firms and national aggregators bid aggressively on &quot;Sanctuary Cove&quot; keywords, and &quot;near me&quot; demand clusters around the marina village, Hope Island Marketplace, and the Santa Barbara waterfront. Add marine seasonality — the Sanctuary Cove International Boat Show alone floods the precinct with high-intent buyers every year — and timing your visibility becomes as important as the visibility itself.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                My clients come from referrals inside Sanctuary Cove — why do I need Google at all?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because even referred clients Google your name before they call — and affluent buyers vet harder than anyone. New residents arriving in Hope Island Resort or Santa Barbara know nobody yet and search everything. If your Maps presence looks thin next to a competitor&apos;s polished profile, the referral dies at the verification step, no matter who recommended you.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                How do I get in front of high-net-worth clients who ask AI assistants instead of Googling?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Through GEO — Generative Engine Optimisation. We engineer local entity triples that connect your business directly to the Sanctuary Cove Marina and Hope Island Resort Knowledge Graph nodes, backed by a verified Google Business Profile, local schema markup, and suburb-specific content. When someone asks Gemini for the best marine contractor near Sanctuary Cove, your business is the entity the AI can confidently cite.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Won&apos;t SEO just bring me tyre-kickers instead of premium clients?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Only if it&apos;s done generically. We target luxury-intent keywords — &quot;custom builder Sanctuary Cove&quot;, not &quot;cheap builder Gold Coast&quot; — and your Google Business Profile is presented to match: geo-tagged project photography, detailed premium services, and reviews that mention high-end work. The right targeting plus the right presentation filters out bargain hunters before they ever call.
              </p>
            </div>
          </div>
        </div>
      </section>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Timing matters as much as visibility here. Marine trades ride a seasonal wave that peaks around the Sanctuary Cove International Boat Show, when the 300+ berth marina fills with buyers actively spending. Landscapers and outdoor builders surge through the dry winter months when waterfront entertaining moves outside, while tourism-driven foot traffic around the marina village lifts hospitality-adjacent trades in school holidays. A Hope Island SEO campaign has to be tuned to these rhythms — ranking hardest exactly when the highest-value clients are searching.
          </p>
        </div>
      </section>

      {/* Definition box — AEO/GEO */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-500/5 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What Is the Google Maps 3-Pack?</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google shows at the top of local searches — with map pins, star ratings, and click-to-call buttons — before any regular website results appear. For searches like &quot;marine electrician Sanctuary Cove&quot; or &quot;cosmetic dentist Hope Island&quot;, the 3-Pack captures the overwhelming majority of enquiries, because affluent searchers rarely scroll past it. Ranking there requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-level relevance signals for 4212 — the four pillars our Hope Island framework is built on.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The same foundation now feeds AI search. When an affluent client asks Gemini for the best-reviewed marine contractor near Sanctuary Cove, the AI cites businesses with verified profiles, consistent citations, and suburb-specific content — not the ones with the flashiest ads. In 4212&apos;s prestige market, the 3-Pack and AI citations increasingly come from the same entity signals.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Hope Island Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4212&apos;s prestige enclaves is distinct: businesses don&apos;t lose on price — they lose on perceived authority. Here&apos;s the exact sequence we run for every Hope Island client. No black box, no jargon walls.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild — presented premium</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories, full premium service lists with 4212 suburb keywords, geo-tagged project photography around Sanctuary Cove Marina and Hope Island Resort, and Q&amp;A seeding. In a luxury market, a half-finished profile doesn&apos;t just leak rankings — it actively repels high-value clients.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, and marine/trade directories confuses Google&apos;s entity graph. We standardise your NAP everywhere and build fresh citations on the directories that actually move Gold Coast rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system — quality over quantity</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A discreet post-project follow-up turns high-value clients into detailed, suburb-mentioning reviews — the kind that mention the marina berth rewiring or the full-home renovation, not just &quot;great service&quot;. No fake reviews, no incentives. In prestige markets, ten substantive reviews outperform fifty generic ones.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and prestige suburb entities (Sanctuary Cove • Hope Island Resort • City of Gold Coast). This is what lets Google AI Overviews, Gemini, and Perplexity cite your business as the verified local entity when affluent clients ask AI instead of Googling.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each suburb you serve gets genuinely unique content written for its landmarks, postcodes, and customer base — like this page for Hope Island. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4212. Anyone promising overnight rankings is selling something Google will eventually penalise.
          </p>
        </div>
      </section>

      {/* Geographic Nodes */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Service Territory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hope Island 4212 Power Nodes
            </h2>
            <p className="text-sm text-slate-400">
              Suburb-level campaigns across Queensland&apos;s premier waterfront enclaves — Postcode 4212.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hopeIslandSuburbs.map((sub, idx) => (
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
            Landmarks we optimise around include Sanctuary Cove — Australia&apos;s premier gated golf and marina community, the first fully integrated residential resort, spread over 470 hectares with four man-made harbours and direct Broadwater access — the 300+ berth Sanctuary Cove Marina and its annual International Boat Show, the Arnold Palmer-designed Pines and the Palms championship golf courses, the Sanctuary Cove Country Club and InterContinental Resort, Hope Island Marketplace, the deepwater canals of Santa Barbara, and the planned Hope Island railway station — because &quot;near me&quot; searches cluster around the places people actually go.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Hope Island Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Hope Island Local SEO FAQs</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Hope Island and Sanctuary Cove business owners need to know about Google Maps, AI search, and ranking in Postcode 4212.
            </p>
          </div>
          <div className="space-y-4">
            {hopeIslandFaqs.map((faq, idx) => (
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
            Ready to Own the Hope Island 3-Pack in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per trade category in Hope Island (4212). Get your free street-by-street geo-grid audit and see exactly where you stand before your competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#hope-audit"
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
