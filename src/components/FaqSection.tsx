"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "How long until my business starts receiving real phone calls and quote requests?",
      a: "Most trade and contractor clients begin seeing initial Google Maps proximity movement within 30 to 45 days. High-intent Page 1 visibility and a steady flow of 30–45+ inbound quote calls typically reach full velocity within 60 to 90 days as suburb micro-silos compound.",
    },
    {
      q: "Do you guarantee a #1 ranking on Google Maps?",
      a: "No ethical SEO specialist can guarantee an exact algorithm position because Google's ranking weights update regularly. What we guarantee is 100% rigorous execution of our proven Suburb Domination system, verified by live assets like Gold Coast Concreters QLD. Furthermore, we operate strictly on a month-to-month basis with zero lock-in contracts.",
    },
    {
      q: "What does '100% Territory Exclusivity' mean?",
      a: "It means we partner with only ONE business per trade category in your target geographic region (e.g. one concreter in Gold Coast, one roofer in Northern Sydney). We will never accept your direct competitors as clients while working with you.",
    },
    {
      q: "How does the Exclusive Digital Asset Lease (Rank & Rent) work?",
      a: "If we already operate a live, Page 1-ranked digital asset in your niche (like goldcoastconcretersqld.com.au), you can lease the platform. We forward 100% of all phone calls, WhatsApp messages, and quote forms directly to your mobile within 10 minutes. You get immediate leads from day one without waiting for SEO to build.",
    },
    {
      q: "Do I need a brand-new website or can you optimize my existing one?",
      a: "If your current website is fast, clean, and mobile-friendly, we plug our suburb silo architecture and Google Business Profile engine directly into your existing domain. If your site is slow, outdated, or built on clunky platforms, we can deploy a sub-second high-converting custom build.",
    },
    {
      q: "What is Google AI Overview (GEO) and why is it critical in 2026/2027?",
      a: "Google now shows AI-generated answers (powered by Gemini) above standard search results for high-intent queries (e.g. 'architectural concrete pimpama'). We structure your schema and authoritative EEAT signals so AI models cite your business as the #1 verified recommendation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Everything you need to know about our suburb domination process, timeline, pricing, and territory exclusivity.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-indigo-50/40 border-indigo-300 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-base sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed pt-1 border-t border-indigo-100/60 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
