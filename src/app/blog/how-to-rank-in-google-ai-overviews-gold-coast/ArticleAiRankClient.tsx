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
  HelpCircle,
  ShieldCheck,
  FileText,
  Star,
  RefreshCw,
} from "lucide-react";

export default function ArticleAiRankClient() {
  const faqs = [
    {
      q: "How long before my business starts appearing in AI Overviews?",
      a: "There is no fixed timeline — AI citations follow the same trust signals as organic rankings, so expect a similar curve. Businesses that fix their entity fundamentals (complete GBP, consistent NAP, schema, review velocity) typically see AI visibility improve over three to six months. Anyone promising a date is guessing; the models and their citation behaviour change constantly.",
    },
    {
      q: "Do I need a blog for GEO, or is my Google Business Profile enough?",
      a: "Your GBP is the single most important asset, but it is rarely enough on its own. AI engines cite pages that answer specific questions in clear, quotable language — which is exactly what FAQ-style content does. A handful of genuinely useful articles answering your customers' real questions gives the models something to lift. Ten thin AI-generated posts give them nothing.",
    },
    {
      q: "Can AI Overviews hurt my business by answering without a click?",
      a: "Zero-click answers are real: if the AI fully answers 'what are your opening hours', nobody clicks through. The defence is being the cited source — cited businesses get brand exposure and follow-up searches even without the click, while uncited competitors get nothing at all. Visibility inside the answer beats invisibility below it.",
    },
    {
      q: "What is the difference between SEO and GEO?",
      a: "SEO earns you a position in the ranked list of links; GEO earns you a citation inside the AI-generated answer above them. The foundations overlap heavily — entity clarity, reviews, schema, quality content — but GEO adds emphasis on quotable definitions, direct question-answering, and corroboration across multiple trusted sources so the model trusts its answer.",
    },
    {
      q: "Do Google reviews really influence AI citations?",
      a: "Yes — review volume, recency, and content all feed the model's confidence. Reviews that mention your specific service and suburb ('great roof restoration in Pimpama') are far more useful than generic five-star ratings, because they corroborate exactly what the AI is trying to verify. Systematic, honest review capture is one of the highest-leverage GEO activities.",
    },
    {
      q: "Should I still invest in traditional organic rankings?",
      a: "Absolutely. AI Overviews cite from the same pool of trusted pages that rank organically — strong organic visibility and AI visibility rise together. Businesses that abandoned SEO to 'focus on AI' discovered the models had nothing authoritative to cite. Traditional rankings remain the foundation; GEO is the new floor built on top of them.",
    },
  ];

  const steps = [
    {
      title: "Complete every field in your Google Business Profile",
      body: "Services with descriptions, products, accurate hours including public holidays, attributes, and real photos of your work, team, and vehicles. An AI model deciding between two plumbers will cite the one whose profile answers the searcher's question completely — the bare listing gives it nothing to quote.",
    },
    {
      title: "Lock your NAP and ABN consistency across the web",
      body: "Your business name, address, and phone number must match character-for-character on your website, your GBP, and every directory citation. Where relevant, your ABN-listed business name should align too. Inconsistencies are the fastest way to make a model uncertain about which entity is really you.",
    },
    {
      title: "Publish FAQ content that answers real customer questions",
      body: "Write the questions your customers actually ask — 'how much does roof restoration cost in Ormeau?' — and answer each directly in 40 to 60 words before expanding. AI engines lift direct answers; they skip vague marketing copy. Every answer is a potential citation.",
    },
    {
      title: "Add LocalBusiness schema to your website",
      body: "Structured data in JSON-LD format tells machines exactly what your page means: your business type, geo-coordinates, opening hours, service area, and sameAs links to your GBP and social profiles. It is the machine-readable version of your entity — the thing models parse before they ever read your prose.",
    },
    {
      title: "Build reviews that mention service and suburb",
      body: "After each job, ask happy customers to mention what you did and where: 'fantastic hot water install in Coomera'. Never script reviews or offer incentives — that violates policy and destroys trust. A simple post-job text message with your review link, sent consistently, outperforms every shortcut.",
    },
    {
      title: "Keep your information fresh",
      body: "Post GBP updates, keep holiday hours current, and refresh your content when services or service areas change. Stale entities lose citations to fresher ones — a model will not recommend a business whose hours it cannot trust.",
    },
  ];

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
            <p>
              For a Gold Coast tradie, dentist, or clinic, this changes the game in one crucial way: the AI answer only names a handful of businesses, and everyone else becomes invisible. Ranking #6 organically used to mean a trickle of clicks. Now, if you are not one of the two or three entities the model cites, you barely exist for that search. This guide explains — honestly, with no guaranteed-inclusion nonsense — what actually makes a local business citable, and the practical steps to get there.
            </p>
            <p>
              The good news first: most of what makes you citable is the same work that wins the Maps 3-Pack. AI engines are not looking for magic. They are looking for businesses they can verify with confidence.
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
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Complete Google Business Profile:</strong> Every service, attribute, photo, and hour filled in — the primary entity record AI models check first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>NAP + ABN Consistency:</strong> Identical name, address, and phone data across your site, GBP, and citations, aligned with your registered business name.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Corroborated Reviews:</strong> A steady flow of genuine reviews mentioning your service and suburb, confirming what your website claims.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              How Gemini Extracts Local Citations
            </h2>
            <p>
              When a user asks Gemini a hyper-local question, the AI queries Google&apos;s Knowledge Vault for verified entities near the searcher. It validates ABN data, Google Maps review sentiment, and local schema markup before recommending a single top provider.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              How Do AI Overviews Decide Which Local Business Gets Cited?
            </h2>
            <p>
              AI Overviews cite the businesses the model can verify with the highest confidence: a complete, verified Google Business Profile, consistent name-address-phone data across the web, reviews that mention the service and suburb, and clear schema markup the model can parse. Faced with two similar businesses, the model cites the one it can cross-check in multiple trusted places — corroboration beats assertion every time.
            </p>
            <p>
              This is the mental model to hold onto. An AI engine is not &quot;ranking&quot; you the way Google&apos;s classic algorithm does — it is deciding whether it trusts its answer enough to put your name in it. Everything that increases verifiable certainty (consistent data, real reviews, structured markup, specific suburb content) increases your citation odds. Everything vague, contradictory, or thin decreases them.
            </p>

            <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-6 space-y-3 my-6">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-400" />
                <span>Definition: Query Fan-Out</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Query fan-out</strong> is how AI search handles your question: instead of running one search, the model breaks it into many sub-queries — your service, your suburb, review sentiment, hours, service area — and runs them in parallel. Each sub-query is a separate chance to be found or missed. Businesses with complete, consistent data pass more of these sub-checks, which is why &quot;fill in everything&quot; is genuinely the strategy.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Can I pay Google to get my business into AI Overviews?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No — there is no &quot;pay to be cited&quot; button. AI Overview citations are selected by the model from verifiable trust signals: your Google Business Profile, reviews, schema, and corroborating content. Anyone selling guaranteed AI Overview placement is selling fiction. What you can buy is the work that earns citations — complete profiles, proper markup, and content worth quoting.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                My Google Business Profile is verified — isn&apos;t that enough for AI search?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Verification is the starting line, not the finish. A verified-but-bare profile — no services listed, six photos, eleven reviews from 2023 — gives the model almost nothing to cite. The businesses getting named in AI answers are the ones with complete services, recent reviews mentioning specific suburbs, and content that directly answers the searcher&apos;s question. Depth is what gets quoted.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              What Are the Practical Steps to Become Citable?
            </h2>
            <p>
              Forget exotic tactics. For a Gold Coast tradie or clinic, citability comes from six unglamorous fundamentals, done properly and kept current:
            </p>
            <div className="space-y-4 my-6">
              {steps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-extrabold shrink-0">
                      {idx + 1}
                    </span>
                    <strong className="text-white text-sm sm:text-base font-bold">{step.title}</strong>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-10">{step.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              How Should You Write Content That AI Engines Can Lift and Cite?
            </h2>
            <p>
              AI engines quote content that is already shaped like an answer. The most citable pages we see share a pattern: a clear question heading, a direct 40-to-60-word answer immediately underneath, then the detail. Define every term the first time you use it, in one quotable sentence. Write entity-rich sentences — &quot;a licensed Gold Coast plumber serving Pimpama (4209)&quot; — instead of vague ones like &quot;we service the local area.&quot;
            </p>
            <p>
              Specificity is the whole game. &quot;Roof restoration in Ormeau typically takes two to three days for an average tile roof&quot; is citable; &quot;we deliver quality roofing solutions&quot; is invisible. Name your suburbs and postcodes. State your process in steps. Put numbers where you genuinely know them and stay silent where you do not — models penalise confident-sounding fluff by simply choosing a competitor&apos;s clearer page instead.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              The Honest Limits: What Nobody Can Promise You
            </h2>
            <p>
              Let&apos;s be straight about what GEO cannot do. Nobody — not us, not any agency — can guarantee your business appears in AI Overviews. Citation behaviour changes as Google retrains and tweaks its models; the businesses named for &quot;best dentist Southport&quot; this month may rotate next month. Brand-new businesses with no review history and no corroborating citations are rarely cited no matter how good their content is, because the model has nothing to verify them against.
            </p>
            <p>
              What you can control is your citability: the completeness of your entity, the consistency of your data, and the quotability of your content. That is the entire honest pitch. The businesses winning AI citations on the Gold Coast right now are not using secret tricks — they are simply the most verifiable answer to the question being asked.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                <span>AI Overviews & GEO — Frequently Asked Questions</span>
              </div>
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

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
