'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { insights } from '@/lib/insights-data';

export default function InsightsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated) {
            if (bar1Ref.current) bar1Ref.current.style.height = '100%';
            if (bar2Ref.current) bar2Ref.current.style.height = '100%';
            if (bar3Ref.current) bar3Ref.current.style.height = '100%';
            setBarsAnimated(true);
          } else if (!entry.isIntersecting) {
            if (bar1Ref.current) bar1Ref.current.style.height = '0%';
            if (bar2Ref.current) bar2Ref.current.style.height = '0%';
            if (bar3Ref.current) bar3Ref.current.style.height = '0%';
            setBarsAnimated(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [barsAnimated]);

  return (
    <div className="min-h-screen bg-white font-manrope text-[#141c0d]">
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-20 px-6 md:px-12"
      >
        {/* ACCURE BRAND BARS */}
        <div className="hidden lg:block absolute right-35 top-0 h-full">
          <div className="flex gap-4 h-full">
            <div
              ref={bar1Ref}
              className="w-14 transition-all duration-1000 ease-out"
              style={{
                height: '0%',
                background: 'linear-gradient(180deg,#E0EAD2 0%,#C0D2AC 100%)',
                transform: 'skewX(-15deg)',
                transformOrigin: 'top',
                minHeight: '0%',
              }}
            />
            <div
              ref={bar2Ref}
              className="w-14 transition-all duration-1000 ease-out"
              style={{
                height: '0%',
                background: 'linear-gradient(180deg,#9DB89A 0%,#7B9E73 100%)',
                transform: 'skewX(-15deg)',
                transformOrigin: 'top',
                minHeight: '0%',
              }}
            />
            <div
              ref={bar3Ref}
              className="w-14 transition-all duration-1000 ease-out"
              style={{
                height: '0%',
                background: 'linear-gradient(180deg,#4C6E4F 0%,#2E4B30 100%)',
                transform: 'skewX(-15deg)',
                transformOrigin: 'top',
                minHeight: '0%',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-full mx-auto pt-16 md:pt-24">
          <p className="text-[#C6D6B4] text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            Insights
          </p>
          <h1 className="text-white font-poppins text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.1]">
            Perspectives on the systems we build
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Thought leadership and industry research across digital government, IT infrastructure,
            smart energy, hydromet, and environmental management.
          </p>
        </div>
      </section>

      {/* ===== INSIGHT CARDS ===== */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <h2 className="text-[#141c0d] font-poppins text-3xl md:text-4xl font-bold tracking-tight">
              Hot Topics
            </h2>
            <p className="text-sm md:text-base text-[#4f564b] max-w-md">
              Curated reading from standards bodies and research organizations shaping our sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <article
                key={insight.id}
                className="group relative flex flex-col border border-[#141c0d]/10 bg-white p-8 hover:shadow-[0_12px_30px_-12px_rgba(57,90,58,0.15)] hover:border-[#7B9E73]/35 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-[3px] w-full opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{ background: insight.accent }} />

                <img
                  src={insight.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="w-14 h-14 mb-6 object-contain"
                />

                <h3 className="font-poppins font-bold text-xl leading-snug mb-3 text-[#141c0d]">
                  {insight.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-[#4f564b] mb-6">
                  {insight.description}
                </p>

                <a
                  href={insight.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/link mt-auto inline-flex items-center gap-2 self-start
                    px-6 py-3 bg-[#395A3A] text-white text-sm font-semibold
                    transition-all duration-300 hover:bg-[#7B9E73]
                  "
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </article>
            ))}

            {/* CTA card filling the grid */}
            <article className="relative flex flex-col justify-between bg-[#2E4B30] p-8 text-white">
              <div>
                <h3 className="font-poppins font-bold text-2xl leading-snug mb-3">
                  Want to discuss how this applies to your organization?
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-white/75">
                  Our team works across these sectors every day. Tell us about your challenge.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#395A3A] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7B9E73] hover:text-white hover:shadow-xl hover:shadow-black/30"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <Footer showConsultationSection={false} />
    </div>
  );
}
