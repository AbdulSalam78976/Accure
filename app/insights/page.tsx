'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { insights, news } from '@/lib/insights-data';

// All insights shown in the grid
const restInsights = insights;

export default function InsightsPage() {
  /* ── Brand-bar hero animation ─────────────────────────────────────────── */
  const heroRef  = useRef<HTMLElement>(null);
  const bar1Ref  = useRef<HTMLDivElement>(null);
  const bar2Ref  = useRef<HTMLDivElement>(null);
  const bar3Ref  = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const animate = e.isIntersecting && !barsAnimated;
          const reset   = !e.isIntersecting;
          if (animate) {
            bar1Ref.current && (bar1Ref.current.style.height = '100%');
            bar2Ref.current && (bar2Ref.current.style.height = '100%');
            bar3Ref.current && (bar3Ref.current.style.height = '100%');
            setBarsAnimated(true);
          }
          if (reset) {
            bar1Ref.current && (bar1Ref.current.style.height = '0%');
            bar2Ref.current && (bar2Ref.current.style.height = '0%');
            bar3Ref.current && (bar3Ref.current.style.height = '0%');
            setBarsAnimated(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => { if (heroRef.current) obs.unobserve(heroRef.current); };
  }, [barsAnimated]);

  return (
    <div className="min-h-screen bg-[#F3F6EE] font-manrope text-[#141c0d]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="w-full relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-20 px-6 md:px-12 lg:px-20"
      >
        {/* Brand bars */}
        <div className="block absolute right-0 sm:right-2 lg:right-8 xl:right-12 top-0 h-full pointer-events-none opacity-100">
          <div className="flex gap-2 sm:gap-3 lg:gap-4 h-full">
            {[
              'linear-gradient(180deg,#E0EAD2 0%,#C0D2AC 100%)',
              'linear-gradient(180deg,#9DB89A 0%,#7B9E73 100%)',
              'linear-gradient(180deg,#4C6E4F 0%,#2E4B30 100%)',
            ].map((bg, i) => (
              <div
                key={i}
                ref={[bar1Ref, bar2Ref, bar3Ref][i]}
                className="w-14 transition-all duration-1000 ease-out"
                style={{ height: '0%', background: bg, transform: 'skewX(-15deg)', transformOrigin: 'top' }}
              />
            ))}
          </div>
        </div>

        {/* Copy */}
        <div className="relative z-10 pt-10 md:pt-16 pb-16">
          <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            Insights
          </p>
          <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-5 max-w-3xl leading-[1.08]">
            Perspectives on the<br className="hidden md:block" /> systems we build
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            Research, reports, and industry news across digital government, energy
            infrastructure, water systems, and environmental management.
          </p>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          REPORTS & RESEARCH GRID
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#F3F6EE] pt-16 pb-20 px-6 md:px-12 lg:px-20">

        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[#95c168] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Reports & Research
            </p>
            <h2 className="font-poppins font-medium text-3xl md:text-4xl text-[#141c0d] tracking-tight">
              From the knowledge base
            </h2>
          </div>
          <p className="hidden md:block text-sm text-[#4f564b] max-w-xs text-right leading-relaxed">
            Curated from OECD, IEA, IRENA, NIST, WMO, USGS, UNEP, and AWS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {restInsights.map((insight) => (
            <a
              key={insight.id}
              href={insight.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white border border-[#141c0d]/10 p-7 hover:shadow-[0_16px_40px_-16px_rgba(57,90,58,0.2)] hover:border-[#7B9E73]/40 transition-all duration-300"
            >
              {/* top accent */}
              <div
                className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: insight.accent }}
              />

              {/* tag + icon row */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                  style={{ background: insight.accent }}
                >
                  {insight.tag}
                </span>
              
              </div>

              <h3 className="font-poppins font-bold text-[#141c0d] text-lg leading-snug mb-3 group-hover:text-[#395A3A] transition-colors duration-300 flex-1">
                {insight.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#4f564b] mb-5">
                {insight.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#395A3A] group-hover:gap-2.5 transition-all duration-200">
                Read report <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INDUSTRY NEWS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[#95c168] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Industry News
            </p>
            <h2 className="font-poppins font-medium text-3xl md:text-4xl text-[#141c0d] tracking-tight">
              What&apos;s happening in the sectors
            </h2>
          </div>
          <Newspaper className="hidden md:block w-8 h-8 text-[#C6D6B4] shrink-0" />
        </div>

        {/* News list — editorial list layout, not a card grid */}
        <div className="divide-y divide-[#141c0d]/8">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 py-7 hover:bg-[#F3F6EE] -mx-4 px-4 transition-colors duration-200"
            >
              {/* Left meta column */}
              <div className="shrink-0 sm:w-44">
                <span
                  className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white mb-2"
                  style={{ background: item.accent }}
                >
                  {item.tag}
                </span>
                <p className="text-xs text-[#4f564b]/60 font-medium">{item.source}</p>
                <p className="text-xs text-[#4f564b]/40">{item.date}</p>
              </div>

              {/* Right content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-poppins font-bold text-[#141c0d] text-lg md:text-xl leading-snug mb-2 group-hover:text-[#395A3A] transition-colors duration-300">
                  {item.headline}
                </h3>
                <p className="text-sm leading-relaxed text-[#4f564b]">
                  {item.summary}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex shrink-0 self-center">
                <ArrowUpRight className="w-5 h-5 text-[#141c0d]/20 group-hover:text-[#395A3A] transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer showConsultationSection={true} />
    </div>
  );
}

