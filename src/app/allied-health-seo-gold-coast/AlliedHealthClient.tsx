"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  Send,
  ChevronDown,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  Search,
  AlertTriangle,
  FileCheck,
} from "lucide-react";

const precincts = [
  { name: "Southport Health Precinct", postcode: "4215", highlight: "Gold Coast University Hospital catchment; dense GP and specialist referral network" },
  { name: "Robina Health Precinct", postcode: "4226", highlight: "Robina Hospital and Town Centre corridor; strong NDIS participant demand" },
  { name: "Benowa / Pindara Precinct", postcode: "4217", highlight: "Pindara Private Hospital catchment; established private-health patient base" },
  { name: "Broadbeach Medical Strip", postcode: "4218", highlight: "Oasis Centre coastal clinics; the Coast&apos;s most competitive physio corridor" },
  { name: "Burleigh Heads Wellness Hub", postcode: "4220", highlight: "Rehab, exercise physiology and wellness studios along the southern coastal strip" },
  { name: "Tugun / Southern Corridor", postcode: "4224", highlight: "John Flynn Private Hospital catchment; fast-growing family suburbs" },
];

const methodologySteps = [
  {
    n: "01",
    title: "Compliant Google Business Profile Foundation",
    body: "We claim and verify your listing, set the exact primary category (&quot;Physiotherapist&quot;, &quot;Occupational therapist&quot;, &quot;Podiatrist&quot;), use your real registered business name — never keyword-stuffed — and complete every field: services, hours, accessibility, photos. This is the compliant foundation; shortcuts here are what get health listings suspended.",
  },
  {
    n: "02",
    title: "NAP Consistency Sweep Across Health Directories",
    body: "Your clinic&apos;s name, address and phone number must match character-for-character across your website footer, your Google profile, and health directories like HealthEngine, Whitecoat and HotDoc. Even small mismatches (&quot;St&quot; vs &quot;Street&quot;) weaken Google&apos;s trust and quietly drag your Maps rankings down.",
  },
  {
    n: "03",
    title: "AHPRA-Safe Review Engine",
    body: "We set up SMS and WhatsApp review requests sent after positive visits, asking only about non-clinical experience — booking ease, wait times, staff friendliness — and we answer every review within 48 hours. Steady, genuine review velocity is one of the strongest prominence signals Google measures.",
  },
  {
    n: "04",
    title: "Suburb-Level Local Authority Content",
    body: "We build suburb-specific service pages (&quot;NDIS physiotherapy Robina 4226&quot;), add LocalBusiness schema markup declaring your hours, location and services, and reference real local landmarks — Gold Coast University Hospital, Robina Town Centre — so Google connects your clinic to the places patients search from.",
  },
  {
    n: "05",
    title: "AI Search Readiness (GEO)",
    body: "Patients now ask AI assistants conversational questions (&quot;Which physio near Robina is open Saturday?&quot;). We structure your content with clear definitions and entity-rich facts so Google AI Overviews, Gemini and Perplexity can cite your clinic as a verified local provider. That is Generative Engine Optimisation (GEO).",
  },
];

const faqs = [
  {
    q: "Is SEO for our physio clinic actually AHPRA-compliant?",
    a: "Yes. We market the practice, never clinical outcomes. Everything we publish is factual: services, locations, hours, qualifications. We never use patient testimonials about treatment results, never promise health outcomes, and never use restricted terms like \u201cspecialist\u201d unless formally registered. Educational, evidence-based content is the safest and strongest play under AHPRA\u2019s advertising guidelines.",
  },
  {
    q: "How do NDIS participants find allied health providers on the Gold Coast?",
    a: "Most start with Google searches like \u201cNDIS physio near me\u201d or \u201coccupational therapist Robina\u201d. Google shows the Maps 3-Pack first, so the clinics visible there get the enquiry. We optimise your profile and suburb pages for NDIS-intent searches across 4226, 4215, 4218 and surrounding postcodes \u2014 factually, without claiming NDIS registration you don\u2019t hold.",
  },
  {
    q: "Why did our Google Business Profile get suspended?",
    a: "The most common triggers we see for health practices: keywords added to the business name, a virtual office or PO box as the address, duplicate listings for practitioners and the clinic, or rapid bulk edits. Most legitimate practices can be reinstated by fixing the trigger and filing an appeal. We diagnose the cause first, then fix it properly.",
  },
  {
    q: "Should each practitioner have their own Google listing, or just the clinic?",
    a: "One listing per real-world entity is the safe rule. The clinic gets the main listing; individual practitioners can have their own only if they genuinely see patients under their own name at that address. Duplicate or overlapping listings confuse Google and risk suspension. We audit your setup and consolidate where needed.",
  },
  {
    q: "How long before our clinic sees movement in the Google Maps 3-Pack?",
    a: "Most clinics see early movement within 30 to 45 days as we fix categories, NAP inconsistencies and review flow. Consolidated 3-Pack presence across your core suburb searches typically builds over months 2 to 4, depending on competition density \u2014 Broadbeach 4218 moves slower than a quieter pocket like Mudgeeraba 4213.",
  },
  {
    q: "Can you work with our clinic if a nearby allied health practice already uses you?",
    a: "We take on one practice per allied-health category per territory. If we run local SEO for your physiotherapy clinic in Robina 4226, we won\u2019t take on a competing physio in the same territory. Your competitive advantage stays protected. Check availability via the audit form above.",
  },
];

export default function AlliedHealthClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    suburbs: "Gold Coast Practice Precincts",
  });

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm font-bold text-blue-300">
                <Stethoscope className="w-4 h-4 text-blue-400" />
                <span>Allied Health & Medical Practice SEO • Gold Coast</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                #1 Local SEO & Patient Bookings for <span className="gradient-text">Allied Health Clinics</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                AHPRA-compliant local search engine architecture for Physiotherapists, Chiropractors, Podiatrists, and Medical Clinics across Gold Coast postcodes.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#health-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Practice Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="health-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white">Check Your Practice Territory</h3>
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
                          body: JSON.stringify({ ...formData, tradeType: "Allied Health & Medical", source: "Allied Health Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request on Vortic Growth for Allied Health SEO:\n\n• Practice: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Territory Target: ${formData.suburbs}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                      setFormSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Clinic Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gold Coast Physio & Rehab"
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
                        placeholder="e.g. Dr. Sarah Jenkins"
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
                      <span>Check Practice Territory Availability</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain points: why good clinics stay invisible */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Visibility Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Do Good Gold Coast Clinics Stay Invisible on Google?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every month we audit allied health clinics from Southport to Tugun, and the pattern barely changes: excellent clinicians, a professional fit-out, and a booking calendar with quiet days they&apos;d rather not talk about. Meanwhile a competitor down the road — not a better clinic — sits in the Google Maps 3-Pack soaking up the suburb&apos;s new-patient searches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-indigo-500/50 transition-all">
              <h3 className="text-base font-extrabold text-white leading-snug">
                Why does the physio clinic down the road outrank us when our team is more experienced?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google doesn&apos;t rank clinical experience — it ranks relevance, distance and prominence. Your competitor&apos;s Google Business Profile probably has the exact primary category (&quot;Physiotherapist&quot;), complete services, fresh photos and a steady stream of recent reviews. Your profile likely has a generic category, outdated hours and reviews from two years ago. Fix the profile signals and the gap closes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-indigo-500/50 transition-all">
              <h3 className="text-base font-extrabold text-white leading-snug">
                Can we ask patients for Google reviews without breaching AHPRA rules?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yes — with one hard line you must never cross. AHPRA&apos;s National Law (section 133) bans testimonials about clinical aspects of care, like &quot;my back pain is gone&quot;. You can request reviews about non-clinical experience: booking ease, wait times, staff friendliness. We build compliant review-request systems that stay on the safe side of that line.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-indigo-500/50 transition-all">
              <h3 className="text-base font-extrabold text-white leading-snug">
                We added &quot;Physio Robina&quot; to our Google business name and our listing vanished. What happened?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You triggered a suspension. Google treats keyword-stuffed business names as misleading, and health listings are watched closely. The listing can usually be reinstated by restoring your real registered name and filing an appeal. We handle reinstatements by the book — real name, real address, compliant categories — so it stays live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definition box: Google Maps 3-Pack */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 border border-indigo-500/40 rounded-3xl p-8 sm:p-10 space-y-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30">
                <Search className="w-5 h-5 text-indigo-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">What Is the Google Maps 3-Pack?</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The Google Maps 3-Pack is the block of three business listings Google shows at the top of local search results, above organic listings. For searches like &quot;physio near me&quot;, it captures the majority of clicks and calls. Ranking there depends on three factors: <strong className="text-white">relevance</strong> (does your profile match the search?), <strong className="text-white">distance</strong> (how close are you to the searcher?) and <strong className="text-white">prominence</strong> (how well-known and trusted is your clinic online?).
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Here is the part most Gold Coast clinics miss: distance you cannot change, but relevance and prominence are entirely winnable. The clinics dominating the 3-Pack in Broadbeach, Robina and Bundall are not there by accident — they run a system for all three factors, month after month.
            </p>
          </div>
        </div>
      </section>

      {/* 5-step AHPRA-compliant methodology */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AHPRA-Compliant Method</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our 5-Step Ranking Method for Allied Health Clinics
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We have run Google Maps campaigns across 57 Gold Coast suburbs, and health practices need a stricter playbook than tradies. No tricks, no fake reviews, no outcome promises — health marketing has rules, and we work inside them. Here is exactly what we do, step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300">
                    {step.n}
                  </span>
                  <FileCheck className="w-4 h-4 text-indigo-400" />
                </div>
                <h3 className="text-base font-extrabold text-white leading-snug">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.body}</p>
              </div>
            ))}

            <div className="bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/40 rounded-2xl p-6 space-y-4 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h3 className="text-base font-extrabold text-white">Built for Health, Not Generic SEO</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Standard SEO agencies apply the same playbook to plumbers and physios. Health practices face AHPRA advertising rules, practitioner-vs-clinic listing traps and NDIS-intent searches — a different game entirely. Our method is built around those constraints from day one.
              </p>
              <a href="#health-audit" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300">
                <span>See what this looks like for your clinic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Health precincts grid */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gold Coast Health Precincts</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Gold Coast Health Precincts We Rank Clinics In
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Google rewards proximity. Each medical precinct has its own search behaviour — hospital catchments, commuter corridors and referral networks. We build local entity signals for the precincts your patients actually search from.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {precincts.map((sub, idx) => (
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

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Allied Health Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Gold Coast allied health practice owners ask us about Google Maps rankings, AHPRA compliance and local patient acquisition.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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
            Find Out Where Your Clinic Really Ranks in 2026
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Request a free Google Maps audit and we will show you exactly where your practice appears across your suburb — which searches you win, which you lose, and what is holding the listing back. No obligation, no pushy sales call.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#health-audit"
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Request Free Maps Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
