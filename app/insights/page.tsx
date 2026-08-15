'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBrandBars from '@/components/HeroBrandBars';
import { insights, news } from '@/lib/insights-data';

// All insights shown in the grid
const restInsights = insights;

export default function InsightsPage() {
  /* ── Brand-bar hero animation ─────────────────────────────────────────── */
  const heroRef  = useRef<HTMLElement>(null);

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
        <HeroBrandBars containerRef={heroRef} />

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
              className="group relative flex flex-col bg-white border border-[#141c0d]/10 hover:shadow-[0_16px_40px_-16px_rgba(57,90,58,0.2)] hover:border-[#7B9E73]/40 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={insight.imageSrc}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                  style={{ background: insight.accent }}
                >
                  {insight.tag}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-poppins font-medium text-[#141c0d] text-lg leading-snug mb-3 group-hover:text-[#395A3A] transition-colors duration-300 flex-1">
                  {insight.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#4f564b] mb-5">
                  {insight.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#395A3A] group-hover:gap-2.5 transition-all duration-200">
                  Read report <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
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
                <h3 className="font-poppins font-medium text-[#141c0d] text-lg md:text-xl leading-snug mb-2 group-hover:text-[#395A3A] transition-colors duration-300">
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

