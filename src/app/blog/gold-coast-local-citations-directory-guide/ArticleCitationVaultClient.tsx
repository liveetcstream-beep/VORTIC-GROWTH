"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, UserCheck, BookOpen, ArrowRight } from "lucide-react";

export default function ArticleCitationVaultClient() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <article className="py-20 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                Directory & Citation Vault
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 11 min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Top 50 Gold Coast Local Citation Directories for Google Maps & AI Indexing
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
              Consistent NAP (Name, Address, Phone) citation consistency across trusted Australian business directories like True Local, Yellow Pages, LocalSearch, Hotfrog, and Gold Coast Chamber of Commerce validates your entity graph for Google Gemini AI.
            </p>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <Link href="/local-seo-pimpama#pimpama-audit" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-indigo-600 text-white hover:bg-indigo-500 transition-all">
              <span>Get Full 50-Citation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
