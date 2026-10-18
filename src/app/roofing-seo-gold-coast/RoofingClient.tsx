"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hammer,
  CheckCircle2,
  ArrowRight,
  Send,
  ChevronDown,
  HelpCircle,
  MapPin,
  ShieldCheck,
  CloudLightning,
  AlertTriangle,
} from "lucide-react";

export default function RoofingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    suburbs: "Gold Coast & M1 Corridor",
  });

  const roofingAreas = [
    { name: "Burleigh Heads", postcode: "4220", highlight: "Salt-air corrosion & coastal metal re-roofs" },
    { name: "Currumbin", postcode: "4223", highlight: "Storm-exposed ridges & tile restorations" },
    { name: "Palm Beach", postcode: "4221", highlight: "Townhouse complexes & unit roof plumbing" },
    { name: "Broadbeach", postcode: "4218", highlight: "Commercial roofing & high-rise compliance" },
    { name: "Robina", postcode: "4226", highlight: "Masterplanned estates & new tile roofs" },
    { name: "Nerang", postcode: "4211", highlight: "Industrial sheds & commercial metal roofing" },
    { name: "Coomera", postcode: "4209", highlight: "New estates & pre-purchase roof inspections" },
    { name: "Helensvale", postcode: "4212", highlight: "Family homes, gutters & fascia replacement" },
    { name: "Ormeau", postcode: "4208", highlight: "Growth corridor roof plumbing for new builds" },
    { name: "Runaway Bay", postcode: "4216", highlight: "Waterfront homes & salt corrosion repairs" },
    { name: "Southport", postcode: "4215", highlight: "Heritage tiles & apartment block re-roofs" },
    { name: "Tugun", postcode: "4224", highlight: "Beachside cottages & storm damage repairs" },
  ];

  const methodologySteps = [
    {
      n: "01",
      title: "Licence-First Trust Signals",
      body: "In Queensland, any roofing job over $3,300 legally requires a QBCC-licensed contractor — Roof Tiling or Roof & Wall Cladding class — and roof plumbing needs an occupational licence at any job value. We put your licence number front and centre on your Google Business Profile and website, because it is the first thing a careful Gold Coast homeowner looks for before shortlisting a roofer.",
    },
    {
      n: "02",
      title: "Storm-Season Service Architecture",
      body: "Google reads your website to decide which services you genuinely offer. We build dedicated, genuinely useful sections for roof restoration, metal roof replacement, storm damage repair, roof plumbing and gutter replacement — each tied to real Gold Coast conditions like wind region B1 and coastal salt-air exposure — so you rank for the job types themselves, not just the word \u201Croofer\u201D.",
    },
    {
      n: "03",
      title: "Review Velocity Engine",
      body: "One review a month does not move the needle. We install a simple system: every finished restoration or re-roof triggers a review request within 48 hours, guiding happy customers to mention the service and the suburb. Fresh, specific reviews naming real Gold Coast suburbs are the fuel the Maps 3-Pack runs on.",
    },
    {
      n: "04",
      title: "Citations, NAP & RoofingContractor Schema",
      body: "NAP — your business name, address and phone number — must match character-for-character across every Australian directory Google checks. We clean up inconsistencies, build citations on the directories that actually matter for tradies, and add RoofingContractor JSON-LD schema markup so Google unambiguously understands your trade, your services and your service area.",
    },
    {
      n: "05",
      title: "Suburb & Postcode Entity Clusters",
      body: "We build location authority suburb by suburb — Burleigh Heads 4220, Robina 4226, Coomera 4209 — with genuinely local content for each area, never duplicated doorway pages. Your Google Business Profile gains proximity authority across the whole Gold Coast instead of a single postcode, so surrounding suburbs start calling too.",
    },
  ];

  const roofingFaqs = [
    {
      q: "How long until my roofing business reaches the Google Maps 3-Pack?",
      a: "Most roofing clients see first 3-Pack movements within 30 to 45 days as we fix citation errors, sharpen service categories and restart review flow. Dominant positions across high-value keywords like \u201Croof restoration\u201D typically consolidate between months two and four. Storm season can accelerate everything — demand spikes do half the work.",
    },
    {
      q: "Do I need a QBCC licence to advertise roofing on Google?",
      a: "Google will not check, but Queensland law and your customers will. Any roofing job over $3,300 requires a QBCC licence — Roof Tiling or Roof & Wall Cladding class — and roof plumbing needs an occupational plumbing licence at any value. We display your licence number prominently, because unlicensed operators are the first thing savvy homeowners filter out.",
    },
    {
      q: "Why do hipages leads cost me over $200 a job when my Google listing is free?",
      a: "Because hipages sells the same lead to three roofers and charges you membership plus credits win or lose — industry maths lands near $232 in fees per booked job. Your Google Business Profile costs nothing, and every caller rings you alone. One channel rents you quote races; the other builds an asset that keeps ringing.",
    },
    {
      q: "Can local SEO actually bring me insurance and storm-damage work?",
      a: "Yes — storm queries are the highest-intent searches a roofer can win. After ex-Tropical Cyclone Alfred in March 2025, Gold Coast searches for storm damage repair spiked for weeks. We position you for \u201Cstorm damage roof repair [suburb]\u201D searches and make your insurance-friendly process obvious, so assessors and homeowners find a roofer they can verify.",
    },
    {
      q: "Do you change the SEO strategy during storm season?",
      a: "Absolutely. From November to May we shift weight to emergency and storm-damage signals: rapid review pushes after major weather events, storm-specific content, and making sure your hours, photos and services reflect emergency availability. When demand surges tenfold overnight, the roofer Google already trusts wins.",
    },
    {
      q: "Will you do SEO for my direct competitors as well?",
      a: "No. We take on one roofing business per Gold Coast territory — if we rank your company for roof restoration across the southern Gold Coast, we will not take your competitor next door. That exclusivity is the whole point: your investment never funds someone else's rankings.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
                <Hammer className="w-4 h-4 text-indigo-400" />
                <span>Roofing & Construction SEO • Gold Coast 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                #1 Local SEO & Google Maps for <span className="gradient-text">Gold Coast Roofers</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Capture high-ticket ($10,000 to $45,000+) roof restoration, metal roof replacement, and storm repair jobs across Gold Coast suburbs without paying Google Ads.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#roofing-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Roofing Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="roofing-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white">Check Your Roofing Territory</h3>
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
                          body: JSON.stringify({ ...formData, tradeType: "Roofing & Restoration", source: "Roofing SEO Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request on Vortic Growth for Roofing SEO:\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Territory Target: ${formData.suburbs}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                      setFormSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Roofing Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gold Coast Metal Roofing"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Craig Miller"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
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
                      <span>Check Roofing Territory Availability</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Definition Box: What Is the Google Maps 3-Pack? */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 border border-indigo-500/30 rounded-3xl p-8 sm:p-10 space-y-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What Is the Google Maps 3-Pack — And Why Does It Decide Which Roofer Gets the Call?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">The Google Maps 3-Pack is the block of three business listings Google shows above every website result</strong> for searches like &quot;roofer near me&quot; or &quot;roof restoration Burleigh Heads&quot;. Each listing shows star ratings, review counts, photos and a tap-to-call button. On mobile — where most emergency roofing searches happen — the 3-Pack wins the overwhelming majority of calls, because homeowners rarely scroll past it.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Industry surveys of Australian roofing businesses put Google Search — organic results plus the Maps pack — at roughly 48% of where roofing enquiries originate, ahead of Google Ads at 22% and lead platforms at 14%. When a Gold Coast storm hits at 9pm and water is coming through the ceiling, nobody asks a mate for a referral. They search, they tap the first trusted listing, and that roofer wins a job worth thousands.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points + Inline Q&A */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-300">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Real Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Do Good Gold Coast Roofers Keep Losing $20,000+ Jobs?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Because the best roofer rarely wins the job — the most visible one does. Across the Gold Coast, $10,000 to $45,000 roof restorations and re-roofs go to whoever owns the Google Maps 3-Pack when the homeowner searches. If that is not you, you are not losing on workmanship. You are losing on visibility, and every storm season hands your competitors a fresh pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-indigo-500/40 transition-all">
              <h3 className="text-base font-extrabold text-white leading-snug">
                &quot;Why does a competitor with 12 reviews outrank me when I have 40?&quot;
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Google does not count reviews like votes. The local pack weighs review velocity, the words customers use inside reviews, and your overall entity strength. A Miami roofer collecting five fresh &quot;metal roof replacement&quot; reviews a month will outrank a Burleigh roofer sitting on 40 two-year-old generic ones. Recency plus relevance beats raw totals, every time.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-indigo-500/40 transition-all">
              <h3 className="text-base font-extrabold text-white leading-snug">
                &quot;I pay hundreds a month for hipages — why are the leads still rubbish?&quot;
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                hipages plans run $139 to $649 a month ex GST, plus credits per accepted lead — and every lead goes to three roofers, so you pay to enter a quote race. Industry maths puts the true cost near $232 per booked job before your van moves. Lead platforms rent you jobs; your own listing brings callers who ring only you.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-indigo-500/40 transition-all">
              <h3 className="text-base font-extrabold text-white leading-snug">
                &quot;My Google Ads get clicks — so why am I not getting re-roof enquiries?&quot;
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Roofing keywords are among the priciest clicks in Australian local search, and most of that traffic lands on generic pages with no licence number, no suburb proof and no reason to call now. Clicks without trust signals just burn budget. The Maps 3-Pack converts better because the caller has seen your reviews, your photos and your service area before dialling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <CloudLightning className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-white text-sm">Storm-Season Calls Go to Whoever Google Shows First</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A Gold Coast storm does not wait for business hours. When tiles lift at 11pm in Tugun, the homeowner searches &quot;emergency roof repair near me&quot; and calls whoever Google shows first. If your profile is buried, that $8,000 storm-damage job goes to the roofer who owns the 3-Pack — not the best roofer.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-white text-sm">Insurance Work Finds the Roofer Google Trusts</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  After ex-Tropical Cyclone Alfred in March 2025, Gold Coast homeowners lodged thousands of storm-damage claims, and disputes over pre-existing versus storm damage made documentation critical. Assessors shortlist roofers they can find and verify online. If your Google presence looks thin next to a competitor&apos;s, their quote gets requested — yours doesn&apos;t.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5-Step Roofing Methodology */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <Hammer className="w-3.5 h-3.5" />
              <span>Roofing Search Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How Do We Get Roofers Into the Gold Coast Maps 3-Pack?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We rebuild your entire local search footprint around how Gold Coast homeowners actually choose a roofer: licence trust, storm-season relevance, fresh suburb-specific reviews, and clean technical signals. Five steps, in order — each one compounds the last, and none of it involves fake reviews or spammy tactics.
            </p>
          </div>

          <div className="space-y-5">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition-all">
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold text-lg shadow-lg shadow-indigo-500/25">
                    {step.n}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Gold Coast Service Areas Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Service Area Entity Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Gold Coast Suburbs Where We Rank Roofing Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Roofing demand is not the same in every Gold Coast postcode. Coastal strips fight salt corrosion, growth corridors need new-build roof plumbing, and established suburbs live on restorations. We build ranking strength suburb by suburb:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingAreas.map((area, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-white text-base">{area.name}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300">
                    {area.postcode}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{area.highlight}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Roofing Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Roofing SEO Questions Gold Coast Roofers Ask Us</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Straight answers on Maps rankings, QBCC licensing, lead platforms and storm-season strategy for Gold Coast roofing businesses.
            </p>
          </div>

          <div className="space-y-4">
            {roofingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
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
            Is Your Roofing Territory Still Available?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only partner with one roofing business per Gold Coast territory. Check whether your patch — from the coastal strip to the M1 growth corridor — is still open with a free, no-obligation Google Maps audit.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#roofing-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Claim Free Roofing Maps Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
