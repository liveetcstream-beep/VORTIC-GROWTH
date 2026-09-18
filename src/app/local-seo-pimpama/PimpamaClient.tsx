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
  Star,
  Search,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  PhoneCall,
  ChevronDown,
  Building,
  Hammer,
  Truck,
  Flame,
  Check,
  Send,
  HelpCircle,
  FileCheck,
  Award as AwardIcon,
} from "lucide-react";

export default function PimpamaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    tradeType: "Building & Construction",
    phone: "",
    website: "",
  });

  const pimpamaSuburbs = [
    { name: "Gainsborough Greens", postcode: "4209", highlight: "High-Growth Masterplanned Estate" },
    { name: "Pimpama Village", postcode: "4209", highlight: "Commercial & Retail Precinct" },
    { name: "Pacific Estate", postcode: "4209", highlight: "Residential & Tradie Hub" },
    { name: "Pimpama Junction", postcode: "4209", highlight: "High Traffic Local Hub" },
    { name: "Coomera Waters", postcode: "4209", highlight: "Adjacent High-LTV Residential" },
    { name: "Ormeau Corridor", postcode: "4208", highlight: "Northern Industrial Gateway" },
  ];

  const pimpamaFaqs = [
    {
      q: "Why is Pimpama (Postcode 4209) the most competitive local search market on the Gold Coast?",
      a: "Pimpama has been Queensland's fastest-growing residential corridor for several consecutive years. With over 25,000 new residents and massive masterplanned developments like Gainsborough Greens, homeowners generate thousands of urgent searches daily for local tradies, dentists, plumbers, concreters, and builders. Businesses that don't rank in the Google Maps 3-Pack for 4209 lose high-margin local jobs to competitors listed above them.",
    },
    {
      q: "How does Vortic Growth help Pimpama businesses rank in Google AI Overviews & Gemini?",
      a: "Google AI Overviews (GEO) extract verified local entity data, customer reviews, and structured local schemas rather than just indexing keywords. We structure your website's Knowledge Graph, register location entity triples (Pimpama + M1 Motorway + City of Gold Coast compliance), and publish hyper-targeted local content that forces Gemini and Perplexity to recommend your business as the #1 verified service provider in Pimpama.",
    },
    {
      q: "Can you help Pimpama tradies expand their service radius to Coomera, Ormeau & Helensvale?",
      a: "Yes. Our Suburb Domination Engine builds localized authority clusters for surrounding Northern Gold Coast postcodes (4209, 4208, 4212). By establishing individual location silos without duplicating content, your Google Business Profile gains proximity authority across the entire M1 Northern Growth Corridor.",
    },
    {
      q: "What is your 1-Partner-Per-Territory Exclusivity Guarantee?",
      a: "We strictly enforce exclusivity. We only represent ONE business per industry category in Pimpama (4209). If we handle local SEO for your concreting, plumbing, or dental practice in Pimpama, we will never work with your direct local competitor. Your organic competitive advantage is 100% protected.",
    },
    {
      q: "How long does it take for a Pimpama business to reach #1 on Google Maps?",
      a: "Most Pimpama clients see initial Google Maps 3-Pack movements within 30 to 45 days as we fix citation inconsistencies, build local entity links, and inject geo-tagged schema. Dominant #1 rankings across high-intent keywords typically consolidate between Months 2 and 4.",
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
                <span>Pimpama Postcode 4209 • Northern Gold Coast SEO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Dominate Google Maps & AI Search in <span className="gradient-text">Pimpama (4209)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Pimpama is Queensland&apos;s fastest-growing residential corridor. We build custom Search & AI Architectures that position your business as the <strong className="text-white font-semibold">#1 cited local entity in Gainsborough Greens, Pimpama City, and the M1 Growth Corridor</strong>.
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
                  href="#pimpama-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Pimpama Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20business%20owner%20in%20Pimpama%20looking%20for%20Local%20SEO."
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
              <div id="pimpama-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Free Pimpama Grid Audit ($500 Value)</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your 4209 Map Rankings</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Enter your Pimpama business details below. We&apos;ll send you a custom 4209 geo-grid analysis showing where you rank in Gainsborough Greens & Pimpama Junction.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received & Sent to WhatsApp!</h4>
                    <p className="text-xs text-slate-300">
                      Our Lead Search Architect has received your Pimpama business details and will analyze your profile shortly.
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
                          body: JSON.stringify({ ...formData, suburb: "Pimpama 4209", source: "Pimpama Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request on Vortic Growth for Pimpama (4209):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Industry: ${formData.tradeType}\n• Suburb: Pimpama (4209)`
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
                        placeholder="e.g. Pimpama Plumbing Solutions"
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
                        placeholder="e.g. Dave Mitchell"
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
                          <option>Building & Construction</option>
                          <option>Concreting & Landscaping</option>
                          <option>Plumbing & Electrical</option>
                          <option>Dental & Healthcare</option>
                          <option>Professional Services</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free Pimpama Geo-Grid Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Local Suburb Entities & Postcode Grid */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Hyper-Local Postcode 4209 Suburb Coverage
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Generic Gold Coast SEO fails because Google matches proximity to micro-neighbourhoods. We build localized schema nodes for every key pocket in Pimpama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pimpamaSuburbs.map((sub, idx) => (
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

      {/* Hyper-Local Content & E-E-A-T Signal Breakdown */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pimpama Search Architecture</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Standard Gold Coast SEO Fails in Pimpama
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Most agencies create a generic &quot;Gold Coast SEO&quot; page and hope to rank in Pimpama. But Pimpama has specific localized search dynamics: reactive clay soil challenges for concreters and slab builders, City of Gold Coast building approval bottlenecks along Old Coach Road, and intense M1 commuter traffic patterns.
              </p>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-sm mb-1">Local Landmark & Infrastructure Schema</strong>
                    We tie your business entity to verified Gold Coast Knowledge Graph objects like Pimpama City Shopping Centre, Gainsborough Greens Golf Course, and the Pimpama Train Station construction precinct.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-sm mb-1">GEO & Gemini AI Overview Triggers</strong>
                    When Pimpama residents ask Gemini or Perplexity &quot;Who is the best concreter for slab extensions in Gainsborough Greens?&quot;, our structured local content forces the AI to cite your business as the verified answer.
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Hammer className="w-5 h-5 text-indigo-400" />
                <span>Pimpama High-Intent Trade Categories</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-semibold text-white">Concreting & Driveways (Pimpama 4209)</span>
                  <span className="text-emerald-400 font-bold">$12k - $35k Job Value</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-semibold text-white">Emergency Plumbing & Blocked Drains</span>
                  <span className="text-emerald-400 font-bold">High Urgency Calls</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-semibold text-white">Residential Building & Renovations</span>
                  <span className="text-emerald-400 font-bold">High LTV Retainers</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-semibold text-white">Solar & Electrical Upgrades</span>
                  <span className="text-emerald-400 font-bold">New Build Installations</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#pimpama-audit"
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300"
                >
                  <span>Lock in your Pimpama Industry Exclusivity</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pimpama Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything Pimpama business owners need to know about Google Maps, AI search, and ranking in Postcode 4209.
            </p>
          </div>

          <div className="space-y-4">
            {pimpamaFaqs.map((faq, idx) => (
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
            Ready to Dominate Pimpama Local Search in 2026?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We only take ONE business per industry category in Pimpama (4209). Secure your territory before your primary local competitor locks you out.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#pimpama-audit"
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
