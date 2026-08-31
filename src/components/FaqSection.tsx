"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is Suburb-Level Micro-Silo SEO different from standard local SEO?",
      answer:
        "Traditional SEO agencies optimize a single homepage for broad terms like 'dentist gold coast' or 'concreter gold coast', completely ignoring the 50+ individual high-income suburbs where clients actually live. Our Suburb Domination framework engineers dedicated, schema-structured micro-silo pages for every target postcode (e.g. Robina, Pimpama, Broadbeach, Coomera). This enables you to dominate the Google Maps 3-Pack and capture high-intent buyers searching in their immediate neighborhood.",
      category: "Architecture & Strategy",
    },
    {
      question: "What is Generative Engine Optimization (GEO) and why does Google AI matter in 2025/2026?",
      answer:
        "Google AI Overviews (powered by Gemini) now synthesize top search results at the very top of page 1, before traditional organic listings appear. If your website lacks structured entity citations and clinical/trade EEAT signals, you are invisible to AI searchers. We format your content and schema markup specifically so Google's AI models cite your practice or business as the #1 verified source for relevant search queries.",
      category: "AI & Innovation",
    },
    {
      question: "What is your Territory Exclusivity Guarantee and what if my suburb is already taken?",
      answer:
        "We strictly operate on a 1-Partner-Per-Territory policy. We will never accept two competing dental clinics, two concreters, or two law firms within the same primary service area. If your target suburb territory is already claimed by an existing active partner, we will place you on a priority waitlist and explore adjacent open postcodes.",
      category: "Exclusivity & Terms",
    },
    {
      question: "Do you lock clients into 6 or 12-month non-cancelable contracts?",
      answer:
        "No. We operate 100% on a month-to-month partnership model. We do not believe in locking clients into long-term retainers. Our retention is built entirely on delivering profitable inbound phone calls, WhatsApp inquiries, and booked jobs that pay for the partnership many times over.",
      category: "Contracts & Pricing",
    },
    {
      question: "How do you ensure clinical AHPRA compliance for dental and medical practices?",
      answer:
        "All healthcare and dental SEO assets are strictly engineered in compliance with Medical Board of Australia and AHPRA advertising guidelines. We avoid prohibited comparative claims or non-compliant testimonial formats, focusing instead on objective clinical authority, procedure education (Implants, All-on-4, Invisalign), structured clinician credentials, and transparent treatment pricing frameworks.",
      category: "Healthcare & Compliance",
    },
    {
      question: "How quickly do we start receiving inbound phone calls and quote inquiries?",
      answer:
        "If you opt for our Exclusive Asset Lease (Turnkey Rank & Rent), call and form forwarding is configured within 24 to 48 hours to start capturing existing search traffic immediately. For custom Foundation and Market Dominator campaigns, initial Google Maps 3-Pack movement and suburb ranking improvements typically manifest between 30 and 60 days as new micro-silos are indexed.",
      category: "Lead Timeline",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Everything You Need To Know About <span className="gradient-text">Our Search Engine</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Clear answers regarding territory exclusivity, Google AI Overviews, contracts, and lead turnaround times.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-clean rounded-2xl overflow-hidden transition-all duration-200 border border-slate-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-indigo-600">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-indigo-50 text-indigo-600" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h4 className="text-sm font-extrabold text-slate-900">
            Have a specific question about your trade or clinic?
          </h4>
          <p className="text-xs text-slate-500">
            Speak directly with our Lead Search Architect on WhatsApp for immediate answers without sales pressure.
          </p>
          <a
            href="https://wa.me/61401164987?text=Hi%20Bilal,%20I%20have%20a%20question%20about%20your%20Local%20SEO%20framework."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md hover:bg-emerald-700 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Bilal on WhatsApp (+61 401 164 987)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
