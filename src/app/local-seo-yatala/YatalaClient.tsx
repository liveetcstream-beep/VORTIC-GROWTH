"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, MapPin, CheckCircle2, ArrowRight, Zap, Send, ChevronDown, HelpCircle } from "lucide-react";

export default function YatalaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ businessName: "", contactName: "", phone: "" });

  const yatalaAreas = [
    { name: "Yatala", postcode: "4207", highlight: "Enterprise Area & M1 Logistics Corridor" },
    { name: "Stapylton", postcode: "4207", highlight: "Industrial & Manufacturing Estates" },
    { name: "Beenleigh", postcode: "4207", highlight: "Rail Hub & Commercial Centre" },
    { name: "Belivah", postcode: "4207", highlight: "Semi-Rural & Acreage Holdings" },
    { name: "Bahrs Scrub", postcode: "4207", highlight: "Residential Growth Pocket" },
    { name: "Ormeau", postcode: "4208", highlight: "Northern Growth Corridor" },
  ];

  const yatalaFaqs = [
    {
      q: "How long does it take for a Yatala industrial business to reach the Google Maps 3-Pack?",
      a: "Most Yatala clients see first movement within 30 to 45 days — citation cleanup, Google Business Profile optimisation, and review velocity fixes typically register in that window. Dominant 3-Pack positions across your money keywords in Postcode 4207 usually consolidate between months two and four, depending on how competitive your industrial category is.",
    },
    {
      q: "Does local SEO work for B2B logistics and manufacturing in Yatala?",
      a: "Yes — B2B buyers research exactly like consumers. Procurement managers Google '3PL Yatala', 'steel fabrication Brisbane Gold Coast corridor', and 'warehouse for lease Yatala' before every shortlist. A verified Google Business Profile with strong reviews and 4207-specific content puts your operation on that shortlist instead of a competitor's.",
    },
    {
      q: "Do Google reviews matter when our clients are other businesses?",
      a: "They matter enormously. Operations managers and procurement teams check reviews before committing to suppliers, freight partners, or contractors — a Yatala business with 60 recent reviews beats a silent rival every time. We install a simple post-project SMS system so every satisfied client becomes a ranking asset, with zero fake reviews.",
    },
    {
      q: "Will Google AI Overviews and Gemini cite our Yatala operation?",
      a: "AI Overviews cite businesses with clean entity data: a verified Google Business Profile, consistent NAP citations, LocalBusiness schema markup, and corridor-specific content answering real questions. We structure all four, so when someone asks Gemini for the best logistics provider between Brisbane and the Gold Coast, your Yatala business is the entity it cites.",
    },
    {
      q: "Do you work with our competitors in the Yatala Enterprise Area?",
      a: "No. We take on exactly one business per industrial category in the Yatala 4207 territory. If we run local SEO for your transport company in the Enterprise Area, we will never take on another Yatala transport company. Your Google Maps advantage stays exclusively yours for as long as you're with us.",
    },
    {
      q: "How much does local SEO cost for a Yatala industrial business?",
      a: "Our packages run from AUD $300 to $2,000 per month depending on your category's competitiveness and how much of the Brisbane–Gold Coast corridor you want to dominate. Every engagement starts with a free 4207 geo-grid audit showing exactly where you rank today — so you see the gap before spending a dollar.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <section id="yatala-audit" className="relative pt-24 pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span>Yatala Enterprise Area &amp; M1 Precinct • 4207</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Industrial Local SEO for <span className="gradient-text">Yatala (4207)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Capture heavy B2B manufacturing, logistics, and industrial trade search volume across Yatala Enterprise Area.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-3"><CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" /><h4 className="text-lg font-bold text-white">Audit Request Received!</h4></div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                try { await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, suburb: "Yatala 4207", source: "Yatala Audit Form" }) }); } catch(err){}
                const waText = encodeURIComponent(`Hi Bilal! Industrial Audit Request for Yatala (4207):\n• Business: ${formData.businessName}\n• Contact: ${formData.contactName}\n• Phone: ${formData.phone}`);
                window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                setFormSubmitted(true);
              }} className="space-y-4 text-xs">
                <div><label className="block text-slate-300 mb-1">Company Name *</label><input type="text" required placeholder="e.g. Yatala Steel & Logistics" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Your Name *</label><input type="text" required placeholder="e.g. Peter Thorne" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Phone *</label><input type="tel" required placeholder="0400 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950"><Send className="w-4 h-4 inline mr-1" />Get Free Yatala Industrial Audit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Yatala businesses struggle — pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4207 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Yatala Industrial Businesses Struggle to Show Up on Google?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The Yatala Enterprise Area is one of South East Queensland&apos;s great industrial powerhouses — Vantage Yatala, Stockland&apos;s distribution centres, and thousands of square metres of warehousing sitting 500 metres from the M1, midway between Brisbane and the Gold Coast. Yet most of the businesses inside those sheds are invisible online. National groups run centralised marketing from Sydney or Melbourne, and local operators still rely on word of mouth — while procurement managers Google &quot;3PL Brisbane Gold Coast corridor&quot; and &quot;steel fabrication Yatala&quot; from their desks every single morning.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Here&apos;s the B2B reality nobody tells industrial tenants: searches like &quot;warehouse for lease Yatala&quot; or &quot;transport company Gold Coast Brisbane&quot; are low-volume but ferociously high-value. One ranking position can mean a ten-year lease or a national distribution contract. And everyone who drives this corridor knows the landmark — Yatala Pies at Exit 38, serving 3,500 pies a day since 1914 — which tells you exactly how much commercial attention flows through this short stretch of motorway. The traffic is there. The question is whether Google shows <em>your</em> shed when buyers search.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              And the corridor keeps getting more competitive. With the Port of Brisbane half an hour north, both international airports within easy reach, and e-commerce pushing warehouse demand ever higher, national 3PL brands keep planting flags all along the M1. A Yatala tenant with no Google presence is effectively invisible to the Brisbane procurement manager choosing between three shortlisted sheds — two of which already hold eighty reviews and a fully built-out profile. In 4207, obscurity isn&apos;t neutral. It&apos;s a slow leak of contracts to whoever bothered to claim their listing.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Our clients are procurement managers, not people Googling on phones — does Google Maps matter for B2B?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Procurement managers <em>are</em> Googling — at their desks, building supplier shortlists before tenders go out. &quot;Logistics company Yatala&quot; and &quot;industrial electrician Gold Coast&quot; are researched exactly like consumer searches. A verified Google Business Profile with strong reviews is frequently the difference between making the shortlist and never being seen at all.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                A competitor in Wacol outranks us across Brisbane — can a Yatala business beat them?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yes — by owning the corridor instead of the whole city. Google rewards the most relevant local entity for corridor searches. A Yatala operation with corridor-specific content, Yatala citations, and M1 service-area signals can outrank a Brisbane giant for &quot;distribution centre Brisbane Gold Coast&quot;. Proximity plus relevance beats distant authority.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Industrial B2B keywords are brutally expensive on Google Ads — is SEO actually cheaper?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Industrial B2B clicks are among the priciest in Australia — and they stop the instant you pause spend. Local SEO builds a compounding asset instead: rankings, reviews, and content that keep generating tender shortlists for years. A single 3-Pack position in 4207 can return more revenue than twelve months of ad spend.
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
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google shows at the top of local searches — with map pins, star ratings, and click-to-call buttons — before any regular website results appear. For searches like &quot;warehouse Yatala&quot; or &quot;transport company near Yatala&quot;, the 3-Pack captures the overwhelming majority of enquiries, because searchers rarely scroll past it. Ranking there requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and corridor-level relevance signals — the four pillars our Yatala framework is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Yatala Industrial Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4207 is unmistakable: industrial operators don&apos;t lose because their facilities are worse — they lose on entity signals. Unclaimed profiles, wrong categories, inconsistent listings across directories. Here&apos;s the exact sequence we run for every Yatala client. No black box, no jargon walls.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            One thing that makes 4207 different from suburban Gold Coast: your buyers are operations managers and procurement teams, not walk-in consumers. That changes the keyword set — &quot;3PL&quot;, &quot;distribution&quot;, &quot;contract logistics&quot;, and &quot;industrial&quot; modifiers matter more than &quot;near me&quot; — and it changes what Google rewards. Detailed service pages, genuine B2B reviews, and corridor-specific content outweigh generic suburb mentions every time. Our Yatala framework is built for exactly that buyer.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild for industrial categories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories for logistics, manufacturing, or industrial services, full service lists with 4207 corridor keywords, geo-tagged photos of the facility and fleet, and Q&amp;A seeding. Most Yatala profiles we inherit are unclaimed or 40% complete — that alone hands rankings to competitors.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, and logistics directories confuses Google&apos;s entity graph. We standardise your NAP everywhere and build fresh citations on the directories that actually move South East Queensland industrial rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system for B2B decision-makers</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-project SMS flow turns satisfied clients into a steady stream of reviews mentioning Yatala and your service line. No fake reviews, no incentives — just systematic capture. In our experience, 50+ genuine reviews is the tipping point where 4207 industrial businesses start holding 3-Pack positions.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and corridor entities (Yatala Enterprise Area • M1 Pacific Motorway • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your operation as the verified industrial entity.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Corridor content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each area you serve gets genuinely unique content written for its estates, postcodes, and buyer base — like this page for Yatala. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4207. Anyone promising overnight rankings is selling something Google will eventually penalise.
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
              Yatala &amp; Surrounds We Rank
            </h2>
            <p className="text-sm text-slate-400">
              From the Enterprise Area to the Beenleigh rail hub — corridor-level campaigns across the Brisbane–Gold Coast industrial belt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {yatalaAreas.map((area) => (
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
            Landmarks we optimise around include Yatala Pies at Exit 38 — a Queensland icon since 1914 — Vantage Yatala, the Stockland Yatala Distribution Centre, the M1 Pacific Motorway, and Beenleigh railway station — because &quot;near me&quot; searches cluster around the places people actually navigate by. We also build content around Exit 38 search behaviour, since M1 exit-based queries are how corridor buyers actually navigate this stretch.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Yatala Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Yatala industrial operators need to know about Google Maps, AI search, and ranking in Postcode 4207.
            </p>
          </div>
          <div className="space-y-4">
            {yatalaFaqs.map((faq, idx) => (
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
            Ready to Own the Yatala 3-Pack in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per industrial category in Yatala (4207). Get your free corridor geo-grid audit and see exactly where you stand before your competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#yatala-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4207 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
