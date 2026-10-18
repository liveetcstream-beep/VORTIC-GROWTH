"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle2, ArrowRight, Zap, Send, ChevronDown, HelpCircle } from "lucide-react";

export default function OxenfordClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ businessName: "", contactName: "", tradeType: "Residential Trade", phone: "", website: "" });

  const oxenfordAreas = [
    { name: "Oxenford", postcode: "4210", highlight: "Theme Park Precinct & M1 Gateway" },
    { name: "Pacific Pines", postcode: "4210", highlight: "Family Residential Growth Zone" },
    { name: "Maudsland", postcode: "4210", highlight: "Riverside Residential & Acreage" },
    { name: "Gaven", postcode: "4211", highlight: "Light Industrial & Trade Services" },
    { name: "Helensvale", postcode: "4212", highlight: "Retail & Commercial Hub" },
    { name: "Upper Coomera", postcode: "4209", highlight: "Northern Growth Corridor" },
  ];

  const oxenfordFaqs = [
    {
      q: "How long does it take for an Oxenford business to reach the Google Maps 3-Pack?",
      a: "Most Oxenford clients see first movement within 30 to 45 days — that's how long citation cleanup, Google Business Profile optimisation, and review velocity fixes typically take to register. Dominant 3-Pack positions across your money keywords in Postcode 4210 usually consolidate between months two and four, depending on how competitive your trade is.",
    },
    {
      q: "Why do bigger Surfers Paradise agencies outrank my Oxenford business on Google Maps?",
      a: "Because Google ranks local results on three pillars — proximity, relevance, and prominence — and proximity alone rarely wins. A Surfers firm with 300 reviews, complete service listings, and strong local entity signals can outrank a closer Oxenford business with a thin profile. The fix isn't moving suburbs — it's building stronger prominence signals: reviews, citations, suburb-specific content, and a fully optimised Google Business Profile tied to 4210.",
    },
    {
      q: "Do Google reviews really affect my ranking in Oxenford (4210)?",
      a: "Yes — review count, velocity, and keyword relevance are among the strongest local ranking factors. Businesses in the Oxenford 3-Pack typically hold 50+ recent reviews mentioning the suburb or service. We install a simple post-job review system so every happy Pacific Pines or Maudsland customer becomes a ranking asset, without fake or incentivised reviews.",
    },
    {
      q: "Will Google AI Overviews and Gemini recommend my Oxenford business?",
      a: "AI Overviews cite businesses with clear entity data: a verified Google Business Profile, consistent NAP citations, local schema markup, and suburb-specific content that answers real questions. We structure all four, so when someone asks Gemini for the best plumber or dentist near Movie World, your business is the entity the AI can confidently cite.",
    },
    {
      q: "Do you work with my competitors in Oxenford?",
      a: "No. We take on exactly one business per trade category in the Oxenford 4210 territory. If we run local SEO for your plumbing company in Pacific Pines, we will never take on another Oxenford plumber. Your competitive advantage on Google Maps stays exclusively yours for as long as you're with us.",
    },
    {
      q: "How much does local SEO cost for a small Oxenford business?",
      a: "Our local SEO packages run from AUD $300 to $2,000 per month depending on your trade's competitiveness and how many suburbs you want to dominate. Every engagement starts with a free 4210 geo-grid audit that shows exactly where you rank street-by-street today — so you can see the gap before spending a dollar.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <section id="oxenford-audit" className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Oxenford &amp; Pacific Pines • Postcode 4210</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Local SEO for <span className="gradient-text">Oxenford (4210)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Dominate Google Maps 3-Pack rankings in <strong className="text-white font-semibold">Oxenford, Pacific Pines, and Maudsland</strong>.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-3"><CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" /><h4 className="text-lg font-bold text-white">Audit Request Received!</h4></div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                try { await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, suburb: "Oxenford 4210", source: "Oxenford Audit Form" }) }); } catch(err){}
                const waText = encodeURIComponent(`Hi Bilal! I just submitted an Audit Request for Oxenford (4210):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}`);
                window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                setFormSubmitted(true);
              }} className="space-y-4 text-xs">
                <div><label className="block text-slate-300 mb-1">Business Name *</label><input type="text" required placeholder="e.g. Oxenford Plumbing" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Your Name *</label><input type="text" required placeholder="e.g. Sam Cook" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Phone *</label><input type="tel" required placeholder="0400 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950"><Send className="w-4 h-4 inline mr-1" />Get Free Oxenford Audit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Oxenford businesses struggle — pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4210 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Oxenford Businesses Struggle to Show Up on Google Maps?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Oxenford sits in one of the Gold Coast&apos;s most awkward search battlegrounds. You&apos;re wedged between the northern growth corridor — Pimpama, Coomera, Upper Coomera — and the big-budget operators in Surfers Paradise and Broadbeach who happily bid on <em>your</em> suburb&apos;s keywords. A Pacific Pines plumber or a Maudsland electrician can do flawless work for a decade and still watch the phone go quiet, simply because a competitor with 200 Google reviews and a fully optimised Google Business Profile owns the 3-Pack above them.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Add the theme-park precinct effect: Warner Bros. Movie World, Wet&apos;n&apos;Wild, Paradise Country and Australian Outback Spectacular pull enormous tourist and day-visitor traffic through Oxenford and the M1 corridor. That&apos;s great for foot traffic — but it also means national chains and aggregators fight hard for &quot;near me&quot; searches in 4210, pushing genuine local businesses further down the map pack.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why does my competitor rank above me on Google Maps when my business is closer to the searcher?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Google ranks local results on three pillars — proximity, relevance, and prominence — and proximity alone rarely wins. A Gaven workshop with 120 recent reviews, complete service listings, and suburb-specific pages can outrank a closer Oxenford competitor with a bare profile. Prominence is the pillar you control, and it&apos;s exactly what we build.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Do I really need SEO if most of my work comes from word of mouth in Pacific Pines?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Word of mouth starts the conversation — Google finishes it. Even referred customers search your business name before calling, and new Pacific Pines estates fill with residents who know nobody yet and search everything. If you&apos;re invisible on Maps, those high-intent searches go straight to whoever <em>is</em> visible, referral or not.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                I tried Google Ads — why did $3,000 disappear with nothing to show?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because paid clicks in Gold Coast trades run $35–$65 each, and ads stop the day you stop paying. Local SEO compounds instead: every review, citation, and suburb page keeps working month after month. Most of our Oxenford clients spend less per month than one week of aggressive Ads — and own the asset outright.
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
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google shows at the top of local searches — with map pins, star ratings, and click-to-call buttons — before any regular website results appear. For searches like &quot;plumber Oxenford&quot; or &quot;dentist near Pacific Pines&quot;, the 3-Pack captures the overwhelming majority of calls, because searchers rarely scroll past it. Ranking there requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-level relevance signals — the four pillars our Oxenford framework is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Oxenford Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4210 is consistent: businesses don&apos;t lose because their service is worse — they lose on entity signals. Here&apos;s the exact sequence we run for every Oxenford client. No black box, no jargon walls.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories, full service lists with 4210 suburb keywords, geo-tagged photos, products, and Q&amp;A seeding. Most Oxenford profiles we inherit are 40% complete — that alone leaks rankings.</p>
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
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-job SMS flow turns happy customers into a steady stream of suburb-mentioning reviews. No fake reviews, no incentives — just systematic capture. In our experience, 50+ genuine reviews is the tipping point where 4210 businesses start holding 3-Pack positions.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and suburb entities (Oxenford • M1 corridor • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your business as the verified local entity.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each suburb you serve gets genuinely unique content written for its landmarks, postcodes, and customer base — like this page for Oxenford. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated #1 positions across money keywords take two to four months in 4210. Anyone promising overnight rankings is selling something Google will eventually penalise.
          </p>
        </div>
      </section>

      {/* Local areas grid */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Service Territory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Oxenford &amp; Surrounds We Rank
            </h2>
            <p className="text-sm text-slate-400">
              From the theme-park precinct to the M1 growth corridor — suburb-level campaigns across northern Gold Coast postcodes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {oxenfordAreas.map((area) => (
              <div key={area.name} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2 hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">{area.name}</h3>
                  <span className="text-xs font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-2.5 py-1">{area.postcode}</span>
                </div>
                <p className="text-xs text-slate-400">{area.highlight}</p>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
            Landmarks we optimise around include Warner Bros. Movie World, Wet&apos;n&apos;Wild Gold Coast, Paradise Country, Australian Outback Spectacular, and the Oxenford commercial strip along the M1 — because &quot;near me&quot; searches cluster around the places people actually go.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Oxenford Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Oxenford business owners need to know about Google Maps, AI search, and ranking in Postcode 4210.
            </p>
          </div>
          <div className="space-y-4">
            {oxenfordFaqs.map((faq, idx) => (
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
            Ready to Own the Oxenford 3-Pack in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per trade category in Oxenford (4210). Get your free street-by-street geo-grid audit and see exactly where you stand before your competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#oxenford-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4210 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
