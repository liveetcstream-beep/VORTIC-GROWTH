"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Clock,
  UserCheck,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Scale,
  HelpCircle,
  Zap,
  Wallet,
} from "lucide-react";

export default function ArticleSeoVsPpcClient() {
  const faqs = [
    {
      q: "How long until SEO replaces my Google Ads leads?",
      a: "For most Gold Coast trade businesses, expect the first meaningful organic enquiry movement within 60 to 90 days, with SEO covering a serious share of your lead flow somewhere between months four and eight. That is why the hybrid approach works: Ads carry the phones while the organic asset builds underneath them.",
    },
    {
      q: "Is Google Ads worth it for a one-man Gold Coast trade business?",
      a: "It can be, but only with tight controls: exact-match keywords, a small service area, call-only ads, and a daily budget cap you can afford to lose while you learn. Broad campaigns with no negative keywords will burn a solo operator's budget in days. If you cannot watch it weekly, do not run it.",
    },
    {
      q: "Why are my Ads clicks not turning into jobs?",
      a: "Usually one of three things: the wrong keywords (broad match catching researchers, not buyers), a slow or generic landing page with no clear call button, or no after-hours answer when emergency searchers call. Fix the keyword intent and the landing page before you increase the budget — more spend on a leaky funnel just buys more expensive leaks.",
    },
    {
      q: "Can I do SEO myself and just run Ads in the meantime?",
      a: "The DIY parts of SEO are genuinely doable: claim and complete your Google Business Profile, ask every happy customer for a review, and keep your name, address and phone consistent everywhere. What usually needs a specialist is the competitive layer — citation cleanup, suburb page architecture, and schema. Many tradies do the basics themselves and hand us the rest.",
    },
    {
      q: "Which gives better ROI for emergency trades — SEO or Google Ads?",
      a: "Emergency keywords like burst pipes or power outages are where Ads earn their keep, because the searcher needs someone now and the Maps 3-Pack may already be saturated. Long-term, though, a 3-Pack position for 'emergency plumber Coomera' delivers those same after-hours calls with zero cost per click — which is why emergency tradies benefit most from running both.",
    },
    {
      q: "Will pausing my Google Ads hurt my organic rankings?",
      a: "No. Google's ads system and organic ranking system are separate — pausing Ads does not drop your Maps or organic positions. What you lose is the paid traffic itself, instantly. The real risk is not a penalty; it is discovering your business has no other lead source the morning after you switch the campaign off.",
    },
  ];

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
                <Clock className="w-3.5 h-3.5" /> 8 min read
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
            <p>
              Ask any Gold Coast tradie doing more than a million in revenue how they get their work, and you will hear the same debate: keep feeding Google Ads, or invest in local SEO and own the map? Both channels put your business in front of someone searching &quot;roof restoration near me&quot; at 9pm. They just do it on completely different economics — one is rent, the other is ownership. This guide breaks down the real costs, the real timelines, and the hybrid strategy most successful Coast trade businesses actually run.
            </p>
            <p>
              Short version: Google Ads buys you speed, local SEO buys you leverage. Ads can have the phone ringing this week. SEO takes months, then keeps ringing without a per-click meter running. The tradies who win the northern corridor and the beachside suburbs long-term almost always end up running both — but in a very specific sequence.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              What Does Google Ads Actually Cost a Gold Coast Tradie in 2026?
            </h2>
            <p>
              For high-intent trade keywords on the Gold Coast — &quot;emergency plumber Gold Coast&quot;, &quot;roof restoration near me&quot;, &quot;electrician Coomera&quot; — it is common to see individual clicks landing anywhere from the mid-twenties into the eighty-dollar range, with the most competitive emergency terms pushing higher. Your exact cost per click depends on your Quality Score, how many competitors are bidding in your service area, and how well your landing page converts.
            </p>
            <p>
              Emergency keywords sit at the expensive end for a simple reason: intent. Someone searching &quot;burst pipe Helensvale&quot; at 11pm is not comparison shopping — they are choosing whoever answers first. Every plumber on the Coast knows this, so they all bid on it, and the auction price reflects that. General keywords like &quot;hot water system replacement&quot; cost less per click but convert at a lower rate, because half the searchers are still researching.
            </p>

            <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 space-y-3 my-6">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <span>Definition: Cost-Per-Click (CPC) &amp; Quality Score</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Cost-per-click (CPC)</strong> is what Google charges you each time someone clicks your ad — you pay for the click whether or not it becomes a job. <strong className="text-white">Quality Score</strong> is Google&apos;s 1–10 rating of your ad&apos;s relevance, built from expected click-through rate, ad relevance, and landing page experience. Higher Quality Scores earn cheaper clicks and better positions — relevance literally costs less.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Why is my competitor paying less per click than I am for the same keyword?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Almost always Quality Score. A competitor with tighter ad copy, a faster mobile landing page, and a clear &quot;Call Now&quot; path earns a higher relevance rating — so Google charges them less for the same position. A sloppy DIY campaign on broad match, sending traffic to a generic homepage, pays the maximum. Relevance is the discount most tradies never claim.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              Why Does the Phone Go Quiet the Day You Pause Your Ads?
            </h2>
            <p>
              Because Google Ads is rented visibility. The moment your budget hits zero or you pause the campaign, your ads vanish from the results page — and so does the entire lead flow they were producing. You own nothing from the spend: no rankings, no review momentum, no content that keeps working. It is a tap, not a well.
            </p>
            <p>
              This is the cash-flow trap we see constantly across the Coast. A concreter in Yatala or an electrician in Ormeau builds their whole pipeline on $4,000–$6,000 a month in Ads, then hits a quiet quarter, trims the budget to survive — and discovers the business has no other lead source. The expensive month was not the problem; the dependency was. Every dollar went to Google, and none of it built an asset.
            </p>
            <p>
              There is also the creep. As more competitors enter the auction for &quot;plumber Gold Coast&quot; each year, the cost per click drifts upward while your conversion rate stays flat. Your cost per acquired job rises year after year. With SEO the curve runs the other way: the monthly investment stays roughly stable while the enquiry volume compounds — which is exactly why the two channels behave so differently over a three-year horizon.
            </p>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Can&apos;t I just run Google Ads forever instead of doing SEO?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You can, but the maths works against you over time. Ad auctions get more competitive every year, so your cost per lead tends to rise while SEO&apos;s cost per lead falls as rankings compound. Most tradies we analyse end up paying more per job in year three of Ads-only than they did in year one — the opposite of an investment.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              How Does Local SEO Turn Into an Asset That Compounds?
            </h2>
            <p>
              Local SEO builds equity. Every Google review you earn, every citation that confirms your business details, every suburb page answering a real customer question — all of it adds permanent ranking power that keeps working after the invoice is paid. A Maps 3-Pack position for &quot;electrician Coomera&quot; delivers calls month after month with zero cost per click, and each new review makes that position harder for competitors to take.
            </p>
            <p>
              Think of it in three layers. Your <strong className="text-white">Google Business Profile</strong> is the storefront — complete services, real photos, accurate hours, and a steady flow of reviews mentioning your trade and suburbs. Your <strong className="text-white">citations</strong> (NAP listings across directories) are the corroboration — dozens of independent sources confirming you are a real business at a real location. Your <strong className="text-white">suburb pages</strong> are the net — dedicated content for Pimpama, Ormeau, Helensvale and the rest, each one a new chance to rank. None of these charge you per visitor.
            </p>
            <p>
              The honest caveat: this takes months, not days. Google needs time to trust new signals, and competitive trade keywords on the Coast have incumbents with years of review history. Anyone promising page-one Maps rankings in two weeks is selling something. What SEO gives you in exchange for patience is a lead source that survives budget cuts, quiet quarters, and algorithm shuffles.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              SEO vs Google Ads: The Side-by-Side for Tradies
            </h2>
            <div className="overflow-x-auto my-6 rounded-2xl border border-slate-800">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold">Factor</th>
                    <th className="p-4 font-bold text-emerald-300">Local SEO</th>
                    <th className="p-4 font-bold text-amber-300">Google Ads</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 divide-y divide-slate-800">
                  <tr className="bg-slate-950/60">
                    <td className="p-4 font-semibold text-white">Cost model</td>
                    <td className="p-4">Fixed monthly investment; zero cost per click</td>
                    <td className="p-4">Pay per click — every visitor has a price tag</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">When leads start</td>
                    <td className="p-4">60–90 days for movement; 4–8 months for momentum</td>
                    <td className="p-4">Same day the campaign goes live</td>
                  </tr>
                  <tr className="bg-slate-950/60">
                    <td className="p-4 font-semibold text-white">If you stop paying</td>
                    <td className="p-4">Rankings and reviews keep producing leads</td>
                    <td className="p-4">Traffic stops instantly — nothing remains</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Cost per lead over time</td>
                    <td className="p-4">Falls as rankings compound</td>
                    <td className="p-4">Rises as auction competition grows</td>
                  </tr>
                  <tr className="bg-slate-950/60">
                    <td className="p-4 font-semibold text-white">Trust factor</td>
                    <td className="p-4">High — reviews and organic presence signal reputation</td>
                    <td className="p-4">Lower — many searchers scroll past the &quot;Sponsored&quot; label</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Best for</td>
                    <td className="p-4">Long-term pipeline, high-value jobs, defensible territory</td>
                    <td className="p-4">Immediate leads, emergencies, new services, testing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              When Do Google Ads Actually Make Sense for a Tradie?
            </h2>
            <p>
              This is not an anti-Ads article — Ads are the right tool in several situations we see weekly. A brand-new business with no reviews, no website authority, and an empty Google Business Profile cannot wait six months for SEO; Ads buy the first jobs, which become the first reviews, which become the SEO foundation. That sequence matters.
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">After-hours emergency keywords.</strong> When someone&apos;s ceiling is leaking at midnight, they call the first ad they see. The 3-Pack may already be owned by incumbents — Ads jump that queue.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Storm and surge demand.</strong> Gold Coast storm season creates sudden spikes — roof damage, flooding, power issues. SEO cannot react in a week; a switched-on Ads campaign can.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Testing new suburbs or services.</strong> Before investing months of SEO into &quot;solar battery installation Upper Coomera&quot;, run Ads for a fortnight and see if the enquiries convert. Cheap market research.</span>
              </li>
              <li className="flex items-start gap-3">
                <Wallet className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Filling an immediate gap.</strong> Apprentice idle next week? A short, tightly-targeted campaign beats a quiet diary — just keep the keywords exact-match and the radius tight.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              What&apos;s the Smartest Way to Combine Both?
            </h2>
            <p>
              The hybrid strategy most successful Coast trade businesses settle on looks like this: run a lean, tightly-controlled Ads campaign for immediate cash flow — exact-match keywords only, call ads, scheduled for your real working hours — while a fixed SEO investment builds the organic asset underneath. As the 3-Pack positions arrive, shift budget from Ads to SEO or into new service lines.
            </p>
            <p>
              The two channels also feed each other. Your Ads search-term report shows exactly which queries convert into paying jobs — that is free keyword research for your SEO suburb pages. And every job won through Ads is a review request opportunity, which strengthens the Maps rankings that will eventually replace the ad spend. Run well, each dollar does double duty.
            </p>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white">
                How do I know when SEO is ready to take over from Ads?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Watch your enquiry sources for a month. When organic and Maps enquiries consistently cover your baseline workload — the jobs that keep the crew busy — start trimming the Ads budget on the keywords you now rank for organically. Keep Ads only for emergencies, new suburbs, and overflow. Most businesses reach that crossover somewhere in months six to twelve.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-white pt-4 border-t border-slate-800">
              The Bottom Line for Gold Coast Tradies
            </h2>
            <p>
              Google Ads is the fastest way to buy a lead and the most expensive way to keep buying them. Local SEO is the slowest way to earn a lead and the cheapest way to keep earning them. If your business depends entirely on paid clicks, you do not have a marketing strategy — you have a subscription to Google. Build the asset, use Ads as the accelerant, and measure everything by cost per booked job, not cost per click.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <HelpCircle className="w-5 h-5 text-emerald-400" />
                <span>SEO vs Google Ads — Frequently Asked Questions</span>
              </div>
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
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
