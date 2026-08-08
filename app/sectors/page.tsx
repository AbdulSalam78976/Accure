'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { sectors } from '@/lib/sectors-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IndustriesPage() {
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

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-20 px-6 md:px-12"
      >
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
          <h1 className="text-white font-poppins text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.1]">
            Industries we serve
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Our clients come from government agencies, utilities, and private enterprise across
            five sectors. Wherever your systems need to connect, we can help.
          </p>
        </div>
      </section>

      {/* ===== ALTERNATING SECTOR BLOCKS ===== */}
      <main>
        {sectors.map((sector, idx) => {
          const Icon = sector.icon;
          const dark = idx % 2 === 1;
          const imageFirst = idx % 2 === 0;

          const imagePanel = (
            <div className="group relative min-h-[320px] lg:min-h-[520px] flex items-end overflow-hidden">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                priority={idx < 2}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E]/80 via-[#0B120E]/20 to-transparent pointer-events-none" />

              <div className="relative z-10 p-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B120E]/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#95c168]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-poppins font-bold text-xl drop-shadow-md">
                    {sector.title}
                  </h3>
                </div>
              </div>
            </div>
          );

          const contentPanel = (
            <div
              className={`flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 ${
                dark ? 'bg-[#141c0d] text-white' : 'bg-white text-[#141c0d]'
              }`}
            >
              <div className="mx-auto w-full max-w-xl">
                <h2 className="text-2xl md:text-3xl font-poppins font-bold tracking-tight">
                  {sector.title}
                </h2>
                <p className={`mt-4 text-base leading-7 ${dark ? 'text-white/70' : 'text-[#4f564b]'}`}>
                  {sector.description}
                </p>
                <Link
                  href={sector.href}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors"
                  style={{ background: sector.accent, color: '#FFFFFF' }}
                >
                  Learn more
                </Link>

                <div className={`mt-8 border-t pt-6 ${dark ? 'border-white/15' : 'border-[#D8E4CC]'}`}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.15em] ${dark ? 'text-white/50' : 'text-[#7B9E73]'}`}>
                    What we deliver…
                  </p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {sector.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-6">
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: sector.accent }}
                          strokeWidth={2}
                        />
                        <span className={dark ? 'text-white/85' : 'text-[#333333]'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );

          return (
            <section key={sector.id} id={sector.id}>
              {/* accent stripe */}
              <div className="h-1.5 w-full" style={{ background: sector.accent }} />
              <div className="grid lg:grid-cols-2">
                {imageFirst ? (
                  <>
                    {imagePanel}
                    {contentPanel}
                  </>
                ) : (
                  <>
                    {contentPanel}
                    {imagePanel}
                  </>
                )}
              </div>
            </section>
          );
        })}
      </main>

      <Footer showConsultationSection={false} />
    </div>
  );
}