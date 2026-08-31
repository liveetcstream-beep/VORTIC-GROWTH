import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, UserCheck, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";

export default function ArticleGoogleAiOverviews() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights Hub</span>
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Generative Engine Optimization (GEO)
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Why Gold Coast Local Businesses are Losing Leads to Google AI Overviews in 2026
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium py-3 border-y border-slate-100">
              <span className="flex items-center gap-1">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                Muhammad Bilal • Lead Search Architect
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                6 min read
              </span>
              <span>•</span>
              <span>August 2026</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none pt-8 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              If you operate a dental practice, trade business, or professional firm on the Gold Coast, your prospective patients and customers are no longer searching Google the way they did three years ago.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-950 pt-4">The Shift: From Keyword Queries to Conversational Answers</h2>
            <p>
              Rather than searching simple keyword strings like <em>&quot;dentist gold coast&quot;</em> or <em>&quot;concreters near me&quot;</em>, users are asking complex questions:
            </p>
            <blockquote className="p-4 rounded-2xl bg-indigo-50 border-l-4 border-indigo-600 text-indigo-950 font-medium italic">
              &ldquo;Who is the best emergency dentist near Southport that offers Afterpay and same-day toothache relief?&rdquo;
            </blockquote>

            <p>
              Google&apos;s Gemini-powered <strong>AI Overviews (GEO)</strong> synthesize an immediate answer right at the top of the search engine results page—above Google Maps and traditional organic listings.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-950 pt-4">Why Traditional Local SEO Fails in AI Overviews</h2>
            <p>
              Traditional SEO agencies rely on basic keyword stuffing and generic blog posts. But Google AI algorithms don&apos;t look for keywords; they look for <strong>Entities, Semantic Authority, and Clinical/Trade EEAT Signals</strong>.
            </p>
            <p>
              To get cited as the #1 recommended business in Google AI Overviews, your website must implement:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Deep Local Schema Markup:</strong> Explicitly defining your medical clinic or trade business entity, licensed practitioners, and geo-coordinates.</li>
              <li><strong>Direct-Answer Content Modules (AEO):</strong> Structuring FAQ answers so AI bots can extract factual snippets instantly.</li>
              <li><strong>Verified Citation Graph:</strong> Ensuring 100% NAP consistency across tier-1 Australian directories (YellowPages, TrueLocal, LocalDirectories).</li>
            </ul>

            <div className="my-8 p-6 rounded-3xl bg-slate-900 text-white space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                Want to check if your business appears in Google AI Overviews?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Claim our free Gold Coast Suburb Grid & AI Overview Audit. We’ll analyze your exact postcodes and show you where search traffic is leaking.
              </p>
              <a
                href="https://wa.me/61401164987?text=Hi%20Bilal,%20I%20read%20your%20Google%20AI%20Overview%20article%20and%20want%20to%20audit%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Direct on WhatsApp (+61 401 164 987)</span>
              </a>
            </div>

          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
