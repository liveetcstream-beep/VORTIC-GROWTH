import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, UserCheck, Hammer, CheckCircle2, MessageSquare } from "lucide-react";

export default function ArticleTradieDomination() {
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
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Tradie & Contractor SEO Case Study
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              How Northern Gold Coast Concreters & Tradies Dominate Google Maps 3-Packs (57 Suburb Case Study)
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium py-3 border-y border-slate-100">
              <span className="flex items-center gap-1">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                Muhammad Bilal • Lead Search Architect
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
              <span>•</span>
              <span>August 2026</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none pt-8 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              When Dave Harrison, director of Gold Coast Concreters QLD, approached us, his business was burning thousands on Google Ads clicks without consistent residential driveway or commercial slab leads.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-950 pt-4">The Problem: Single Homepage vs 57 Northern Suburbs</h2>
            <p>
              Most contractors build a simple 5-page website and optimize solely for &quot;concreter gold coast&quot;. But homeowners in Pimpama, Coomera, Ormeau, and Helensvale don&apos;t search that way—they search for contractors in their immediate suburb.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-950 pt-4">The Suburb Domination Engineering Plan</h2>
            <p>
              We rolled out a 57-page hyper-local topical authority engine:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Dedicated Suburb Micro-Silos:</strong> Separate, uniquely structured pages for every postcode across Northern Gold Coast.</li>
              <li><strong>QBCC & Trade Schema Graph:</strong> Embedding contractor license credentials directly into Google&apos;s knowledge graph.</li>
              <li><strong>Google Maps Proximity Expansion:</strong> Geo-tagging proof, project photos, and local citations across each growth corridor.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-slate-950 pt-4">The Results (Audited in Live Search Console)</h2>
            <p>
              Within 6 weeks, the platform was ranking #1 in Google AI Overviews for high-margin queries like <em>&quot;architectural concrete pimpama&quot;</em> and holding top 3 in Google Maps across 20+ postcodes, generating <strong>45+ inbound quote calls monthly</strong> with zero ad spend.
            </p>

            <div className="my-8 p-6 rounded-3xl bg-slate-900 text-white space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Hammer className="w-5 h-5 text-indigo-400" />
                Ready to dominate your trade across Gold Coast suburbs?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                We maintain a strict 1-Contractor-Per-Territory rule. Check if your trade and suburb are currently available.
              </p>
              <a
                href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20tradie/contractor%20on%20the%20Gold%20Coast.%20Is%20my%20territory%20available?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Check Territory Availability on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
