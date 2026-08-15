
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sectors } from '@/lib/sectors-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBrandBars from '@/components/HeroBrandBars';

export default function IndustriesPage() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-[#F3F6EE] font-manrope text-[#141c0d]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-24 px-6 md:px-12 lg:px-20"
      >
        <HeroBrandBars containerRef={heroRef} />

        <div className="relative z-10 pt-10 md:pt-16">
          <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            Sectors
          </p>
          <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-5 max-w-3xl leading-[1.08]">
            Industries we serve
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            Accure works with government agencies, utilities, and private enterprise across
            five critical sectors — wherever systems need to connect, we deliver.
          </p>

         
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTOR BLOCKS
      ═══════════════════════════════════════════════════════ */}
      <main className="bg-[#F3F6EE]">
        {sectors.map((sector, idx) => {
          const imageLeft = idx % 2 === 0;

          const imagePanel = (
            <div className="relative min-h-[360px] lg:min-h-[560px] overflow-hidden">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                priority={idx < 2}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* subtle gradient at bottom only */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B120E]/50 to-transparent pointer-events-none" />
              {/* accent stripe at top */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: sector.accent }} />
            </div>
          );

          const contentPanel = (
            <div className="flex flex-col justify-center bg-white px-8 py-14 md:px-12 lg:px-16 xl:px-20">
              <div className="max-w-lg">
                {/* Index number */}
                <p
                  className="font-poppins font-bold text-6xl leading-none mb-6 select-none"
                  style={{ color: sector.accent + '28' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </p>

                <h2 className="font-poppins font-medium text-[22px] sm:text-2xl md:text-3xl text-[#141c0d] tracking-tight leading-snug mb-4">
                  {sector.title}
                </h2>

                <p className="text-[#4f564b] text-[15px] leading-7 mb-8">
                  {sector.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-2.5 mb-10">
                  {sector.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#333]">
                      <span
                        className="mt-[6px] shrink-0 w-1.5 h-1.5"
                        style={{ background: sector.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={sector.href}
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-[15px] font-semibold uppercase tracking-[0.1em] text-white bg-[#2E4B30] hover:bg-[#a6d278] transition-all duration-300 shadow-lg hover:shadow-[#95c168]/30 font-bold"
                >
                  Explore sector
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );

          return (
            <section
              key={sector.id}
              id={sector.id}
              className="group grid lg:grid-cols-2 border-b border-[#141c0d]/8"
            >
              {imageLeft ? (
                <>{imagePanel}{contentPanel}</>
              ) : (
                <>{contentPanel}{imagePanel}</>
              )}
            </section>
          );
        })}
      </main>

      <Footer showConsultationSection={false} />
    </div>
  );
}

