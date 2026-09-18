"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Search,
} from "lucide-react";

export default function ArticleAiRankClient() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <article className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Article Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                GEO & AI Search Mastery
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                9 min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              How to Get Cited in Google AI Overviews & Perplexity: Gold Coast GEO Guide (2026)
            </h1>

            <div className="flex items-center justify-between border-y border-slate-800 py-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span>By <strong className="text-white font-semibold">Muhammad Bilal</strong> • Search & AI Architect</span>
              </div>
              <span>Updated September 2026</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-indigo max-w-none space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            
            <p className="text-lg font-medium text-slate-200">
              Google&apos;s rollout of Gemini-powered AI Overviews (GEO) has fundamentally reshaped how Gold Coast residents find local services. Rather than clicking traditional links, users receive direct AI recommendations for queries like <em>&quot;Who is the top-rated concreter in Pimpama for driveway replacement?&quot;</em>
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              What is Generative Engine Optimization (GEO)?
            </h2>
            <p>
              Generative Engine Optimization (GEO) is the process of structuring your business entity, website content, and digital Knowledge Graph so Large Language Models (LLMs) like Google Gemini, ChatGPT, and Perplexity recognize your business as the most authoritative, verified local provider.
            </p>

            <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-6 space-y-4 my-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span>Key GEO Ranking Factors for Gold Coast Entities</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Structured Entity Triples:</strong> JSON-LD schema linking Subject (Business) -&gt; Predicate (provides service in) -&gt; Object (Postcode 4209 Pimpama).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Semantic Suburb Landing Pages:</strong> Distinct power nodes like <Link href="/local-seo-pimpama" className="text-indigo-400 hover:underline">Local SEO Pimpama</Link> and <Link href="/local-seo-coomera" className="text-indigo-400 hover:underline">Local SEO Coomera</Link>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>High-Intent Trade Specialization:</strong> Targeted authority for <Link href="/tradie-seo-gold-coast" className="text-indigo-400 hover:underline">Gold Coast Tradies</Link> with clear pricing and service signals.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              How Gemini Extracts Local Citations
            </h2>
            <p>
              When a user asks Gemini a hyper-local question, the AI queries Google&apos;s Knowledge Vault for verified entities near the searcher. It validates ABN data, Google Maps review sentiment, and local schema markup before recommending a single top provider.
            </p>

          </div>

          {/* Call to Action */}
          <div className="pt-8 border-t border-slate-800 text-center space-y-4">
            <h3 className="text-2xl font-extrabold text-white">Get Your Gold Coast Business AI-Ready</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Schedule a direct consultation with our Search Architect to integrate GEO schema across your business infrastructure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
            >
              <span>Book Direct Search Architect Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
