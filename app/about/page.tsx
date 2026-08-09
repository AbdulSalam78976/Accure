'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const coreValues = [
  {
    title: 'Integrity',
    description:
      'Embody dependability, strict regulatory compliance, and complete operational transparency in every engagement.',
  },
  {
    title: 'Innovation',
    description:
      'Act courageously, pioneer real-time telemetry architectures, and implement bold technology solutions.',
  },
  {
    title: 'Dedication',
    description:
      'Commit to 99.99% operational uptime, continuous support, and precision engineering throughout the project lifecycle.',
  },
];

const systemsWay = [
  {
    title: 'Optimize',
    description:
      'We leverage customer-centric talent, advanced telemetry, and cloud technology to streamline operations for higher enterprise efficiency.',
  },
  {
    title: 'Transform',
    description:
      'We reimagine monolithic systems and legacy workflows by engineering modular, API-first solutions for superior operational value.',
  },
  {
    title: 'Scale',
    description:
      'We empower future-ready public and private institutions with long-term growth, automated observability, and perpetual innovation.',
  },
];

const locations = [
  { region: 'USA', image: '/images/USA.png' },
  { region: 'UK',  image: '/images/UK.png'  },
  { region: 'UAE', image: '/images/UAE.png' },
  { region: 'PAK', image: '/images/PAK.png' },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !barsAnimated) {
          if (bar1Ref.current) bar1Ref.current.style.height = '100%';
          if (bar2Ref.current) bar2Ref.current.style.height = '100%';
          if (bar3Ref.current) bar3Ref.current.style.height = '100%';
          setBarsAnimated(true);
        } else if (!entry.isIntersecting) {
          [bar1Ref, bar2Ref, bar3Ref].forEach(r => { if (r.current) r.current.style.height = '0%'; });
          setBarsAnimated(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { if (sectionRef.current) obs.unobserve(sectionRef.current); };
  }, [barsAnimated]);

  return (
    <>
      <div className="min-h-screen bg-[#F3F6EE] font-manrope">
        <Navbar />

        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section
          ref={sectionRef}
          className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-24 px-6 md:px-12 lg:px-20"
        >
          {/* Animated bars */}
          <div className="block absolute right-0 sm:right-2 lg:right-8 xl:right-12 top-0 h-full pointer-events-none">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 h-full">
              {[
                { ref: bar1Ref, bg: 'linear-gradient(180deg,#E0EAD2 0%,#C0D2AC 100%)' },
                { ref: bar2Ref, bg: 'linear-gradient(180deg,#9DB89A 0%,#7B9E73 100%)' },
                { ref: bar3Ref, bg: 'linear-gradient(180deg,#4C6E4F 0%,#2E4B30 100%)' },
              ].map(({ ref, bg }, i) => (
                <div
                  key={i}
                  ref={ref}
                  className="w-14 transition-all duration-1000 ease-out"
                  style={{ height: '0%', background: bg, transform: 'skewX(-15deg)', transformOrigin: 'top' }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-6 md:pt-10">
            <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
              About Accure
            </p>
            <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 max-w-3xl leading-[1.08]">
              Two decades of engineering critical digital infrastructure
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Accure is a global system integration leader specialising in digital governance, enterprise IT, smart energy, hydromet, and environmental management — helping public and private institutions modernise, connect, and scale with confidence.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CORE VALUES — dark, 3-col divide
        ══════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#0B120E] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-full mx-auto">
            <div className="mb-14">
              <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
                Our Core Values
              </h4>
              <h2 className="text-white text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins">
                Guided by three principles that shape every system we build.
              </h2>
            </div>

            {/* Divide pattern — stacks on mobile, 3-col on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {coreValues.map(({ title, description }, i) => (
                <div
                  key={title}
                  className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
                >
                  <h3 className="text-[#95c168] text-xl sm:text-2xl font-semibold mb-4 font-poppins">
                    {title}
                  </h3>
                  <p className="text-[#C6CCC1] text-base leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            THE ACCURE WAY — bg image + overlay
        ══════════════════════════════════════════════════════ */}
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-1.jpg"
              alt="Accure team"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0B120E]/88" />
          </div>

          <div className="relative z-10 max-w-full mx-auto">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
                The Accure Way
              </h4>
              <h2 className="text-white text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-snug font-medium font-poppins">
                As a premier system integration partner, we are uniquely equipped to modernise, connect, and scale mission-critical infrastructure.
              </h2>
            </div>

            {/* 3-col grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {systemsWay.map(({ title, description }) => (
                <div
                  key={title}
                  className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 text-center md:text-left"
                >
                  <h3 className="text-[#95c168] text-[22px] sm:text-2xl md:text-3xl font-medium mb-4 font-poppins">
                    {title}
                  </h3>
                  <p className="text-[#C6CCC1] text-sm md:text-base leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATIVE INNOVATION MASONRY SECTION */}
        <section className="w-full bg-white py-10 md:py-14 px-2 sm:px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-[1500px] mx-auto">
            {/* CENTER TOP HEADING */}
            <div className="text-center max-w-2xl mx-auto px-4">
              <h2 className="text-[#395A3A] text-[22px] sm:text-3xl lg:text-4xl leading-snug font-medium">
                Achieving sustainable progress through collaborative innovation and shared expertise
              </h2>
            </div>

            {/* MASONRY GRID - 5 COLUMNS */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-4 md:gap-5 items-end">
              {/* COLUMN 1 */}
              <div className="flex flex-col gap-1.5 sm:gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[16/10] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                    alt="Team pointing at whiteboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                    alt="Professional woman with laptop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-8 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="flex flex-col gap-1.5 sm:gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[3/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                    alt="Team workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* COLUMN 3 */}
              <div className="flex flex-col gap-1.5 sm:gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
                    alt="Woman writing on glass"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-6 sm:h-16 bg-gradient-to-b from-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-6 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>

              {/* COLUMN 4 */}
              <div className="flex flex-col gap-1.5 sm:gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[3/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
                    alt="Colleagues discussing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-6 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>

              {/* COLUMN 5 */}
              <div className="flex flex-col gap-1.5 sm:gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                    alt="Woman at laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl aspect-[16/10] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                    alt="Team collaborating"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-6 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GLOBAL PRESENCE — original map images grid
        ══════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#F3F6EE] pt-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-full mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium font-poppins text-[#141c0d] mb-12">
              Our Global Presence
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {locations.map((region, index) => (
                <Image
                  key={index}
                  src={region.image}
                  alt={region.region}
                  width={220}
                  height={220}
                  className="w-full h-auto object-contain border-[2px] border-gray-200"
                />
              ))}
            </div>
          </div>
        </section>

       
      </div>

      <Footer showConsultationSection={false} />
    </>
  );
}
