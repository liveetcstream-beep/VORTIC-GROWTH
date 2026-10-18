"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle2, ArrowRight, Zap, Send, ChevronDown, HelpCircle } from "lucide-react";

export default function ArundelClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ businessName: "", contactName: "", phone: "" });

  const arundelAreas = [
    { name: "Arundel", postcode: "4214", highlight: "Brisbane Road Industrial Precinct" },
    { name: "Parkwood", postcode: "4214", highlight: "Golf, Light Rail & Residential Growth" },
    { name: "Arundel Hills", postcode: "4214", highlight: "Country Club & Acreage Living" },
    { name: "Molendinar", postcode: "4214", highlight: "Industrial & Trade Services Hub" },
    { name: "Ashmore", postcode: "4214", highlight: "Retail & Commercial Strip" },
    { name: "Southport", postcode: "4215", highlight: "CBD & Hospital Precinct" },
  ];

  const arundelFaqs = [
    {
      q: "How long does it take for an Arundel business to reach the Google Maps 3-Pack?",
      a: "Most Arundel clients see first movement within 30 to 45 days — citation cleanup, Google Business Profile optimisation, and review velocity fixes typically register in that window. Dominant 3-Pack positions across your money keywords in Postcode 4214 usually consolidate between months two and four, depending on trade competitiveness.",
    },
    {
      q: "Does local SEO actually work for B2B industrial businesses in Arundel?",
      a: "Yes — and it's often more decisive than in consumer trades. Procurement managers, builders, and facility managers Google suppliers before every shortlist: 'steel fabrication Arundel', 'industrial electrician Gold Coast'. A verified Google Business Profile with strong reviews and 4214-specific content puts you on that shortlist instead of your competitor.",
    },
    {
      q: "Do Google reviews really matter for an industrial workshop in Arundel?",
      a: "Absolutely. B2B buyers check reviews before committing to suppliers — a workshop with 60 recent reviews mentioning Arundel and the trade beats a silent competitor every time. We install a simple post-job SMS system so every satisfied client becomes a ranking asset. No fake reviews, no incentives, just systematic capture.",
    },
    {
      q: "Will Google AI Overviews and Gemini recommend my Arundel business?",
      a: "AI Overviews cite businesses with clean entity data: a verified Google Business Profile, consistent NAP citations, LocalBusiness schema markup, and suburb-specific content answering real questions. We structure all four, so when someone asks Gemini for the best industrial supplier near Brisbane Road, your business is the entity it cites.",
    },
    {
      q: "Do you work with my competitors in Arundel?",
      a: "No. We take on exactly one business per trade category in the Arundel 4214 territory. If we run local SEO for your fabrication shop on Technology Drive, we will never take on another Arundel fabricator. Your Google Maps advantage stays exclusively yours for as long as you're with us.",
    },
    {
      q: "How much does local SEO cost for an Arundel industrial business?",
      a: "Our packages run from AUD $300 to $2,000 per month depending on your trade's competitiveness and how many suburbs you want to dominate. Every engagement starts with a free 4214 geo-grid audit showing exactly where you rank street-by-street today — so you see the gap before spending a dollar.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <section id="arundel-audit" className="relative pt-24 pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Arundel &amp; Parkwood • Postcode 4214</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Local SEO for <span className="gradient-text">Arundel (4214)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Target Arundel Industrial Park, Parkwood, and Health Knowledge Precinct.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-3"><CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" /><h4 className="text-lg font-bold text-white">Audit Request Received!</h4></div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                try { await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, suburb: "Arundel 4214", source: "Arundel Audit Form" }) }); } catch(err){}
                const waText = encodeURIComponent(`Hi Bilal! Audit Request for Arundel (4214):\n• Business: ${formData.businessName}\n• Contact: ${formData.contactName}\n• Phone: ${formData.phone}`);
                window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                setFormSubmitted(true);
              }} className="space-y-4 text-xs">
                <div><label className="block text-slate-300 mb-1">Business Name *</label><input type="text" required placeholder="e.g. Arundel Trade Supplies" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Your Name *</label><input type="text" required placeholder="e.g. David Ross" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Phone *</label><input type="tel" required placeholder="0400 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950"><Send className="w-4 h-4 inline mr-1" />Get Free Arundel Audit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Arundel businesses struggle — pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4214 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Arundel Businesses Struggle to Show Up on Google Maps?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Arundel is the Gold Coast&apos;s industrial engine room. Brisbane Road, Technology Drive, and Distribution Court are lined with tilt-panel warehouses, steel fabricators, and trade suppliers running three-phase power and container-height roller doors. Yet on Google Maps, Arundel is a shadow suburb — wedged between big-budget Southport CBD agencies and the northern growth corridor. A fabricator on Technology Drive can do flawless structural steelwork for twenty years and still lose the &quot;steel fabrication near me&quot; search to a Southport competitor with 150 Google reviews and a fully optimised Google Business Profile.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Then there&apos;s the B2B blind spot. Procurement managers, builders, and facility managers Google suppliers at 7am before the site day starts — &quot;industrial electrician Arundel&quot;, &quot;trade supplies near Parkwood&quot;. If your Google Business Profile is a bare listing with six reviews from 2019, you simply don&apos;t exist in that 7am shortlist. And &quot;near me&quot; searches cluster around the landmarks people actually navigate by — Harbour Town Premium Outlets, the Gold Coast University Hospital precinct, the M1 exits — exactly the anchor points your better-optimised competitors are already targeting.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              There&apos;s also the corridor squeeze. The Smith Street Motorway funnels tens of thousands of vehicles daily between the M1 and Southport, and every trade business along Brisbane Road ends up bidding for the same &quot;near me&quot; searches. Meanwhile the Health and Knowledge Precinct next door keeps drawing medical, allied-health, and professional services tenants — high-value clients who all Google before they buy. In 4214, you&apos;re not competing with the workshop next door. You&apos;re competing with every well-optimised business within a fifteen-minute drive, and most of them started building their review base years ago.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why does a Southport competitor outrank my Arundel workshop when I&apos;m closer to the searcher?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Google ranks local results on three pillars — proximity, relevance, and prominence — and proximity alone rarely wins. A Southport firm with 200 reviews, complete service listings, and suburb-specific pages can outrank a closer Arundel shed with a thin profile. Prominence is the pillar you control, and it&apos;s exactly what we build: reviews, citations, and 4214-specific content.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Most of my work is repeat B2B — do industrial businesses really need Google Maps?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Repeat work keeps the lights on; Google wins the growth. Every new procurement manager, builder, or maintenance contractor Googles suppliers before shortlisting — then checks your reviews before calling. If you&apos;re invisible on Maps in 4214, those tenders go straight to whoever <em>is</em> visible. Think of the 3-Pack as your 24/7 estimator.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                I burned thousands on Google Ads — why would SEO be any different?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Gold Coast trade clicks cost $35–$65 each and vanish the day you pause spend. Local SEO compounds instead: every review, citation, and suburb page keeps pulling enquiries month after month. Most of our Arundel clients spend less per month than one aggressive week of Ads — and own the ranking asset outright.
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
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google shows at the top of local searches — with map pins, star ratings, and click-to-call buttons — before any regular website results appear. For searches like &quot;industrial supplies Arundel&quot; or &quot;fabricator near Parkwood&quot;, the 3-Pack captures the overwhelming majority of enquiries, because searchers rarely scroll past it. Ranking there requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-level relevance signals — the four pillars our Arundel framework is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Arundel Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4214 is consistent: industrial businesses don&apos;t lose because their workmanship is worse — they lose on entity signals. Bare profiles, inconsistent directory listings, and zero review momentum. Here&apos;s the exact sequence we run for every Arundel client. No black box, no jargon walls.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            One thing that makes 4214 different from the beachside suburbs: your buyers are often other businesses, not walk-in consumers. That changes the keyword set — &quot;supplier&quot;, &quot;fabrication&quot;, &quot;wholesale&quot;, and &quot;commercial&quot; modifiers matter more than &quot;near me&quot; — and it changes the review game, because a single detailed B2B review naming your trade carries more weight than ten generic five-star ratings. Our Arundel framework is tuned for exactly that buyer.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild for industrial categories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories for your trade, full service lists with 4214 suburb keywords, geo-tagged photos of the workshop and yard, and Q&amp;A seeding. Most Arundel profiles we inherit are 40% complete — that alone leaks rankings to Southport competitors.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, and trade directories confuses Google&apos;s entity graph. We standardise your NAP everywhere and build fresh citations on the directories that actually move Gold Coast rankings — including industry-specific ones for manufacturing and trade supply.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system for B2B buyers</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-job SMS flow turns satisfied clients into a steady stream of suburb-mentioning reviews. No fake reviews, no incentives — just systematic capture. In our experience, 50+ genuine reviews is the tipping point where 4214 industrial businesses start holding 3-Pack positions against bigger-budget rivals.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and suburb entities (Arundel • Brisbane Road • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your business as the verified local entity when buyers ask for suppliers.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each suburb you serve gets genuinely unique content written for its landmarks, postcodes, and customer base — like this page for Arundel. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4214. Anyone promising overnight rankings is selling something Google will eventually penalise.
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
              Arundel &amp; Surrounds We Rank
            </h2>
            <p className="text-sm text-slate-400">
              From the Brisbane Road industrial strip to the Parkwood growth corridor — suburb-level campaigns across central Gold Coast postcodes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {arundelAreas.map((area) => (
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
            Landmarks we optimise around include Arundel Hills Country Club, Harbour Town Premium Outlets, the Brisbane Road industrial strip, the Smith Street Motorway corridor, and the Gold Coast University Hospital precinct — because &quot;near me&quot; searches cluster around the places people actually go. We also build location signals around the Parkwood light rail stations and the Arundel Hills estate entrances, where residential &quot;near me&quot; demand concentrates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Arundel Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Arundel business owners need to know about Google Maps, AI search, and ranking in Postcode 4214.
            </p>
          </div>
          <div className="space-y-4">
            {arundelFaqs.map((faq, idx) => (
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
            Ready to Own the Arundel 3-Pack in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per trade category in Arundel (4214). Get your free street-by-street geo-grid audit and see exactly where you stand before your competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#arundel-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4214 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
