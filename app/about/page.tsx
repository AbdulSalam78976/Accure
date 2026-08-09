'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

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
  {
    region: 'Middle East',
    image: '/images/UAE.png',
    offices: [
      { city: 'Dubai, UAE', address: 'Dubai Hills Business Park, Building 4' },
      { city: 'Doha, Qatar', address: 'Palm Towers, Floor 41, Westbay' },
      { city: 'Riyadh, KSA', address: 'King Fahd Road, Olaya District' },
    ],
  },
  {
    region: 'South Asia',
    image: '/images/PAK.png',
    offices: [
      { city: 'Islamabad, Pakistan', address: 'Blue Area, Jinnah Avenue' },
      { city: 'Karachi, Pakistan', address: 'Clifton Block 5, Sea View' },
    ],
  },
  {
    region: 'Europe',
    image: '/images/UK.png',
    offices: [
      { city: 'London, UK', address: '30 St Mary Axe, EC3A 8BF' },
    ],
  },
  {
    region: 'Americas',
    image: '/images/USA.png',
    offices: [
      { city: 'Washington D.C., USA', address: '1701 Pennsylvania Ave NW' },
    ],
  },
];

const masonryImages = [
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    alt: 'Team at whiteboard',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    alt: 'Professional with laptop',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    alt: 'Team workshop',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    alt: 'Woman at glass wall',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    alt: 'Colleagues in discussion',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    alt: 'Team collaborating',
    aspect: 'aspect-[4/3]',
  },
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

        {/* ══════════════════════════════════════════════════════
            COLLABORATIVE — masonry photo grid
        ══════════════════════════════════════════════════════ */}
        <section className="w-full bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-full mx-auto">
            {/* Heading */}
            <div className="mb-12">
              <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
                Our People
              </h4>
              <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins">
                Achieving sustainable progress through collaborative innovation and shared expertise
              </h2>
            </div>

            {/* Photo grid — 2 cols on mobile, 3 on md */}
            <div className="columns-2 md:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
              {masonryImages.map(({ src, alt, aspect }) => (
                <div key={src} className={`relative overflow-hidden break-inside-avoid rounded-lg ${aspect} w-full`}>
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GLOBAL PRESENCE — location cards
        ══════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#F3F6EE] py-16 md:py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-full mx-auto">
            {/* Heading */}
            <div className="mb-12">
              <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
                Global Presence
              </h4>
              <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-2xl font-poppins">
                Delivering across four continents
              </h2>
            </div>

            {/* 4-col on lg, 2-col on sm, 1-col on xs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map(({ region, image, offices }) => (
                <div
                  key={region}
                  className="bg-white border border-[#141c0d]/8 flex flex-col overflow-hidden group hover:border-[#2E4B30]/30 transition-colors duration-200"
                >
                  {/* Map image */}
                  <div className="relative w-full aspect-[4/3] bg-[#F3F6EE] overflow-hidden">
                    <Image
                      src={image}
                      alt={region}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Office list */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="font-poppins font-semibold text-sm uppercase tracking-widest text-[#95c168]">
                      {region}
                    </h3>
                    {offices.map(({ city, address }) => (
                      <div key={city} className="flex items-start gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-[#2E4B30] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[#141c0d] text-sm font-semibold leading-snug">{city}</p>
                          <p className="text-[#4f564b] text-xs leading-relaxed mt-0.5">{address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════════════ */}
        <section className="bg-[#0B120E] px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-full mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
                Work With Us
              </h4>
              <h2 className="text-white font-poppins font-medium text-[24px] sm:text-3xl md:text-4xl leading-snug mb-3">
                Ready to engineer resilience into your operations?
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Let's explore how Accure's integration expertise can accelerate your digital transformation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2E4B30] hover:bg-[#a6d278] hover:text-[#141c0d] text-white font-poppins font-semibold text-sm uppercase tracking-wider transition-all duration-300"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/capabilities"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 hover:border-white text-white font-poppins font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/5"
              >
                Our capabilities
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer showConsultationSection={false} />
    </>
  );
}
