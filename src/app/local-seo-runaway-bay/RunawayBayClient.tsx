"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle2, ArrowRight, Zap, Send, ChevronDown, HelpCircle } from "lucide-react";

export default function RunawayBayClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ businessName: "", contactName: "", phone: "" });

  const runawayBayAreas = [
    { name: "Runaway Bay", postcode: "4216", highlight: "Marina Precinct & Broadwater Frontage" },
    { name: "Biggera Waters", postcode: "4216", highlight: "Harbour Town Outlets & Waterfront Living" },
    { name: "Labrador", postcode: "4212", highlight: "Marine Services & Waterfront Dining" },
    { name: "Hollywell", postcode: "4216", highlight: "Bayview Harbour & Yacht Squadron" },
    { name: "Paradise Point", postcode: "4216", highlight: "Waterfront Dining & Sovereign Islands" },
    { name: "Coombabah", postcode: "4216", highlight: "Family Residential & Local Services" },
  ];

  const runawayBayFaqs = [
    {
      q: "How long does it take for a Runaway Bay business to reach the Google Maps 3-Pack?",
      a: "Most Runaway Bay clients see first movement within 30 to 45 days — citation cleanup, Google Business Profile optimisation, and review velocity fixes take that long to register with Google. Dominant 3-Pack positions across your money keywords in Postcode 4216 usually consolidate between months two and four, depending on your trade's competition.",
    },
    {
      q: "Why does Google show Jamaica results when people search for my Runaway Bay business?",
      a: "Because 'Runaway Bay' is also a famous resort town in Jamaica, and Google defaults to the stronger entity when your location signals are weak. The fix is entity disambiguation: 'Runaway Bay QLD 4216, Australia' written identically across your Google Business Profile, citations, and local schema — then Google stops showing Caribbean results to your customers.",
    },
    {
      q: "Do Google reviews really affect my ranking in Runaway Bay (4216)?",
      a: "Yes — review count, velocity, and keyword relevance are among the strongest local ranking factors Google uses. Businesses holding the Runaway Bay 3-Pack typically carry 50+ recent reviews that mention the suburb, the marina, or the service. We install a simple post-job SMS system so every happy customer becomes a ranking asset — no fake reviews, no incentives, ever.",
    },
    {
      q: "Will Google AI Overviews and Gemini recommend my Runaway Bay business?",
      a: "AI Overviews cite businesses with clean entity data: a verified Google Business Profile, consistent NAP citations, local schema markup, and suburb-specific content answering real questions. We build all four with explicit 'Runaway Bay QLD 4216, Gold Coast' entity signals, so when someone asks Gemini for the best marine mechanic near the Broadwater, your business is the entity the AI cites.",
    },
    {
      q: "Do you work with my competitors in Runaway Bay?",
      a: "No. We take on exactly one business per trade category in the Runaway Bay 4216 territory. If we run local SEO for your marine service at the marina, we will never take on another Runaway Bay marine business. Your advantage on Google Maps stays exclusively yours for as long as you're with us.",
    },
    {
      q: "How much does local SEO cost for a Runaway Bay business?",
      a: "Our local SEO packages run from AUD $300 to $2,000 per month, depending on your trade's competitiveness and how many suburbs you want to dominate. Every engagement starts with a free 4216 geo-grid audit showing exactly where you rank street-by-street today — so you can see the gap before spending a single dollar.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <section id="runaway-bay-audit" className="relative pt-24 pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Runaway Bay, Biggera Waters &amp; Labrador • 4216</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Local SEO for <span className="gradient-text">Runaway Bay (4216)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Dominate Google search across Runaway Bay Marina, Biggera Waters, and Labrador coastal enclaves.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-3"><CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" /><h4 className="text-lg font-bold text-white">Audit Request Received!</h4></div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                try { await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, suburb: "Runaway Bay 4216", source: "Runaway Bay Audit Form" }) }); } catch(err){}
                const waText = encodeURIComponent(`Hi Bilal! Audit Request for Runaway Bay (4216):\n• Business: ${formData.businessName}\n• Contact: ${formData.contactName}\n• Phone: ${formData.phone}`);
                window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                setFormSubmitted(true);
              }} className="space-y-4 text-xs">
                <div><label className="block text-slate-300 mb-1">Business Name *</label><input type="text" required placeholder="e.g. Runaway Bay Marine Services" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Your Name *</label><input type="text" required placeholder="e.g. Steve Walsh" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Phone *</label><input type="tel" required placeholder="0400 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950"><Send className="w-4 h-4 inline mr-1" />Get Free Runaway Bay Audit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Runaway Bay businesses struggle — pain points + inline Q&A */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>The 4216 Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Do Runaway Bay Businesses Struggle to Show Up on Google Maps?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Runaway Bay sits on some of the most valuable search real estate on the Gold Coast — and the most misunderstood. This is Broadwater waterfront country: canal mansions with private pontoons, the Runaway Bay Marina precinct, and marine businesses serving boat owners who think nothing of spending five figures on a refit. Yet a Biggera Waters boat detailer or a Hollywell marine mechanic can run a flawless operation for a decade and still watch the phone go quiet — because Surfers Paradise and Broadbeach agencies happily bid on 4216 keywords, and competitors with deeper review profiles own the 3-Pack above them.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Then there&apos;s the problem no other Gold Coast suburb has: Google thinks you&apos;re in the Caribbean. &quot;Runaway Bay&quot; is a famous resort town in Jamaica, and when a local business has weak location signals, Google happily serves Jamaican travel results to Gold Coast searchers — burying genuine 4216 businesses. Add tourism-driven seasonality, transient renters who search for everything instead of asking neighbours, and competitors running suspicious review spikes, and you get a suburb where the best business rarely wins — the best-optimised one does.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              And the economics here punish invisibility harder than anywhere else on the northern Gold Coast. A single superyacht refit, a waterfront restaurant&apos;s Friday night, or a canal-front home renovation is worth thousands — sometimes tens of thousands — to the business that wins the call. When your Google Business Profile is half-finished and your reviews stalled at eleven, those high-value searches don&apos;t go to the cheapest option. They go to the business Google trusts enough to show first.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why does my competitor rank above me on Google Maps when my business is closer to the searcher?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because Google ranks local results on three pillars — proximity, relevance, and prominence — and proximity alone rarely wins. A Hollywell marine workshop with 120 recent reviews, complete service listings, and suburb-specific pages can outrank a closer Runaway Bay competitor with a bare profile. Prominence is the pillar you control — and it&apos;s exactly what we build.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Is Google really confusing my business with Runaway Bay in Jamaica?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yes — and it costs you customers. &quot;Runaway Bay&quot; is a world-famous resort town in Jamaica, so when your location signals are thin, Google serves Caribbean travel results to Gold Coast searchers. We fix it with entity disambiguation: &quot;Runaway Bay QLD 4216, Australia&quot; on your profile, matching NAP citations, and local schema telling Google exactly which Runaway Bay you are.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                I burned $4,000 on Google Ads — why would SEO be any different?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because paid clicks for Gold Coast marine and trade keywords run $35–$65 each, and the tap turns off the day you stop paying. Local SEO compounds instead: every review, citation, and suburb page keeps working month after month. Most of our 4216 clients invest less per month than a week of aggressive Ads — and they own the asset outright.
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
              The <strong className="text-white">Google Maps 3-Pack</strong> is the block of three business listings Google shows at the top of local searches — with map pins, star ratings, and click-to-call buttons — before any regular website results appear. For searches like &quot;boat detailing Runaway Bay&quot; or &quot;restaurant near Runaway Bay Marina&quot;, the 3-Pack captures the overwhelming majority of calls, because searchers rarely scroll past it. Ranking there requires a verified Google Business Profile, consistent NAP citations across Australian directories, steady review velocity, and suburb-level relevance signals — the four pillars our Runaway Bay framework is built on.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In Runaway Bay, the 3-Pack matters more than almost anywhere else on the Gold Coast. Marine and waterfront businesses live on high-value, low-volume enquiries — a single 3-Pack call for a yacht service or waterfront build can be worth more than a month of walk-ins. And because Google&apos;s AI Overviews now summarise local results before the map even loads, the businesses with the strongest entity signals win twice: once in the pack, once in the AI answer.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — E-E-A-T */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How We Get Runaway Bay Businesses Into the Google Maps 3-Pack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We&apos;ve run local search campaigns across 57 Gold Coast suburbs, and the pattern in 4216 is unmistakable: businesses don&apos;t lose because their service is worse — they lose on entity signals, and in Runaway Bay they also lose to an identity crisis. Here&apos;s the exact sequence we run for every 4216 client. No black box, no jargon walls.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The marina economy makes 4216 unusual. Most suburbs have one dominant search pattern; Runaway Bay has two — the marine precinct around the marina and Bayview Street, where boat owners search for detailing, mechanics, and brokers, and the residential waterfront, where canal-front homeowners search for builders, restaurants, and local services. Your Google Business Profile has to win both, with service-area targeting and categories that speak to each audience.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">1</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Google Business Profile rebuild — with Jamaica-proofing</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We audit and rebuild your GBP from zero: correct primary and secondary categories, full service lists with 4216 suburb keywords, geo-tagged photos of the marina and Broadwater frontage, and Q&amp;A seeding. Critically, your address is formatted as &quot;Runaway Bay QLD 4216, Australia&quot; everywhere — so Google&apos;s entity graph can never confuse you with the Caribbean resort town again.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">2</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">NAP citation cleanup across Australian directories</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Inconsistent name-address-phone data across TrueLocal, Yelp AU, Yellow Pages, and marine trade directories confuses Google&apos;s entity graph — and every inconsistency weakens your claim to be the Gold Coast Runaway Bay. We standardise your NAP identically everywhere and build fresh citations on the directories that actually move Gold Coast rankings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">3</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Review velocity system</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">A simple post-job SMS flow turns happy customers into a steady stream of suburb-mentioning reviews — &quot;best boat detailer in Runaway Bay&quot; beats a generic five stars every time. No fake reviews, no incentives. In our experience, 50+ genuine reviews is the tipping point where 4216 businesses start holding 3-Pack positions.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">4</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Local schema &amp; entity wiring for AI search</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We add LocalBusiness JSON-LD schema and sameAs entity triples linking your site to your GBP, ABN record, and suburb entities (Runaway Bay • Broadwater • City of Gold Coast). This is what lets Google AI Overviews and Perplexity cite your business as the verified local entity — and it doubles as Jamaica-proofing for AI search too.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300">5</div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">Suburb content silos — never duplicated</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Each suburb you serve gets genuinely unique content written for its landmarks, postcodes, and customer base — like this page for Runaway Bay. Google rewards it; template-swapped doorway pages get filtered. That&apos;s why every territory page on this site reads differently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4">
            Honest expectations: initial 3-Pack movement typically shows in 30–45 days; consolidated positions across money keywords take two to four months in 4216. Anyone promising overnight rankings is selling something Google will eventually penalise.
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
              Runaway Bay &amp; Surrounds We Rank
            </h2>
            <p className="text-sm text-slate-400">
              From the marina precinct to the Broadwater shoreline — suburb-level campaigns across the 4216 waterfront and its neighbours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {runawayBayAreas.map((area) => (
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
            Landmarks we optimise around include Runaway Bay Marina, Bayview Harbour Yacht Squadron, Runaway Bay Shopping Village, the Sports Super Centre, Harbour Town Premium Outlets, and the Sovereign Islands — because &quot;near me&quot; searches cluster around the places people actually go. We also wire in the Broadwater itself: searches like &quot;near the Broadwater&quot; pull enormous local intent, and most 4216 businesses never claim them.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Runaway Bay Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Runaway Bay business owners need to know about Google Maps, AI search, and ranking in Postcode 4216.
            </p>
          </div>
          <div className="space-y-4">
            {runawayBayFaqs.map((faq, idx) => (
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
            Ready to Own the Runaway Bay 3-Pack in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per trade category in Runaway Bay (4216). Get your free street-by-street geo-grid audit and see exactly where you stand before your competitor locks the territory.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#runaway-bay-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free 4216 Geo-Grid Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
