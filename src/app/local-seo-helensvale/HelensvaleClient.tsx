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
      a: "We structure your business entity in Google's Knowledge Graph using local schema triples (Helensvale 4212 + Westfield Precinct + City of Gold Coast compliance). When residents ask Gemini or Perplexity for the top-rated service provider in Helensvale, your business gets cited as the #1 verified entity.",
    },
    {
      q: "Do you offer territory exclusivity for Helensvale businesses?",
      a: "Yes. We enforce a strict 1-Partner-Per-Territory rule. We only represent ONE business per industry category in Helensvale (4212). Your competitive advantage is 100% locked in.",
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

      {/* Suburb Nodes */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Helensvale 4212 Geographic Nodes</h2>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Helensvale Local SEO FAQs</h2>
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

      <Footer />
    </main>
  );
}
