"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, UserCheck, DollarSign, ArrowRight } from "lucide-react";

export default function ArticleSeoVsPpcClient() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <article className="py-20 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                Financial ROI & Strategy
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 7 min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Local SEO vs Google Ads for Gold Coast Tradies (2026 Financial Benchmarks)
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
              With Google Ads cost-per-click (CPC) rates reaching $35–$65 per click for terms like &quot;plumber Pimpama&quot; or &quot;concreter Gold Coast&quot;, trade businesses lose thousands monthly on wasted clicks. Organic Google Maps 3-Pack placement builds long-term asset equity without paying per click.
            </p>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <Link href="/tradie-seo-gold-coast#tradie-audit" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all">
              <span>Calculate Your Tradie Organic ROI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
