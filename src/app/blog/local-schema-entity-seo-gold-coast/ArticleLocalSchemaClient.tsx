"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, UserCheck, Code, ArrowRight } from "lucide-react";

export default function ArticleLocalSchemaClient() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <article className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                Technical Local SEO & GEO
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 10 min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Local Schema & Entity Graph Markup: Winning Gemini AI Citations in QLD
            </h1>
            <div className="flex items-center justify-between border-y border-slate-800 py-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span>By <strong className="text-white font-semibold">Muhammad Bilal</strong></span>
              </div>
              <span>Updated September 2026</span>
            </div>
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Structuring JSON-LD Schema markup with explicit entity triples (LocalBusiness + GeoCoordinates + ABN/ASIC sameAs links) is the single most effective way to force Google Gemini AI and Perplexity to recommend your business in Queensland.
            </p>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-purple-600 text-white hover:bg-purple-500 transition-all">
              <span>Book Entity Graph Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
