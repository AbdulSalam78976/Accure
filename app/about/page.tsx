'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Globe,
  MapPin,
  Phone,
  Mail,
  Shield,
  Lightbulb,
  Heart,
  Target,
  Zap,
  TrendingUp,
  Award,
  Leaf,
  Users,
  Building2,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Stats data
  const stats = [
    { number: '16+', label: 'Countries Served' },
    { number: '24/25', label: 'Global Recognition' },
    { number: '4x', label: 'Top Technology Partner' },
  ];

  // Core values data
  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'Embody dependability, strict regulatory compliance, and complete operational transparency.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Act courageously, pioneer real-time telemetry architectures, and implement bold technology solutions.',
    },
    {
      icon: Heart,
      title: 'Dedication',
      description:
        'Commit to 99.99% operational uptime, continuous support, and precision engineering.',
    },
  ];

  // Systems Way data
  const systemsWay = [
    {
      icon: Target,
      title: 'Optimize',
      description:
        'We leverage customer-centric talent, advanced telemetry, and cloud technology to streamline operations for higher enterprise efficiency.',
    },
    {
      icon: Zap,
      title: 'Transform',
      description:
        'We reimagine monolithic systems and legacy workflows by engineering modular, API-first solutions for superior operational value.',
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description:
        'We empower future-ready public and private institutions with long-term growth, automated observability, and perpetual innovation.',
    },
  ];

  // Awards data
  const awards = [
    {
      icon: Award,
      title: 'Everest Group',
      subtitle: 'Matrix 2025',
      description: 'Among top global technology partners',
    },
    {
      icon: Award,
      title: 'BankTech',
      subtitle: 'Awards 2024',
      description: 'Winner: Infrastructure Technology-IT Services',
    },
    {
      icon: Award,
      title: 'Digital Banking',
      subtitle: 'Implementation Excellence',
      description: '2024 Implementation Excellence Award',
    },
  ];

  // Locations data
  const locations = [
    {
      region: 'USA',
      image: '/images/USA.png',
      countries: [
        { name: 'Saudi Arabia', address: '404, Dubai Hills Business Park' },
        { name: 'United Arab Emirates', address: '3, Emaar Hills Estate, P.O. box: 500497' },
        { name: 'Egypt', address: 'Building B 2116, the Smart Village, 28 Kms, Cairo-Alexandria Desert Road, Giza' },
      ],
    },
    {
      region: 'UK',
      image: '/images/UK.png',
      countries: [
        { name: 'Qatar', address: 'Palm Towers, Floor 41, Westbay, Doha' },
      ],
    },
    {
      region: 'UAE',
      image: '/images/UAE.png',
      countries: [
        { name: 'Qatar', address: 'Palm Towers, Floor 41, Westbay, Doha' },
      ],
    },
    {
      region: 'PAK',
      image: '/images/PAK.png',
      countries: [
        { name: 'South Africa', address: 'Central Office Park No.4, 257 Jean Avenue, Centurion, 0157, PO Box 7750, 0046, Centurion' },
        { name: 'Kenya', address: 'Vision Towers, Muthithi Road, Westlands Nairobi County, Nairobi' },
      ],
    },
  ];

 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Refs for animated bars
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [barsAnimated]);

  return (
    <>
      <div className="min-h-screen bg-[#F3F6EE] font-manrope">
        {/* HERO SECTION */}
        <section
          ref={sectionRef}
          className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] pb-24 pt-4 px-6 md:px-12"
        >
          <Navbar />

          {/* ACCURE BRAND BARS - ANIMATED FROM TOP TO BOTTOM */}
          <div className="hidden lg:block absolute right-35 top-0 h-full">
            <div className="flex gap-4 h-full">
              {/* Bar 1 */}
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

              {/* Bar 2 */}
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

              {/* Bar 3 */}
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

          <div className="relative z-10 max-w-full mx-auto pt-12">
            <h2 className="text-[#95c168] uppercase  text-xl  font-medium tracking-tight mb-6 md:mb-8 max-w-3xl">
              about accure
            </h2>

            <p className="text-white/80 text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
              Accure is a global system integration leader specializing in unifying digital governance, enterprise IT, smart energy grids, hydromet weather monitoring, and environmental management systems. We empower public sector institutions and forward-thinking enterprises to modernize critical infrastructure, automate complex workflows, and achieve operational resilience.
            </p>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="w-full bg-[#0B120E] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-full mx-auto">
            {/* --- HEADER SECTION --- */}
            <div className="mb-16">
              <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
                Our Core Values
              </h4>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight font-light max-w-3xl font-poppins">
                We master the power of technology to engineer bespoke system integration solutions for our clients, guided by three core values:
              </h2>
            </div>

            {/* --- VALUES GRID SECTION (ORIGINAL DIVIDED LAYOUT WITH BRAND COLORS) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-x md:divide-y-0 md:divide-x divide-white  border-t border-white/10 md:border-t-0">
              {/* Value 1: Integrity */}
              <div className="py-8 md:py-0 md:pr-10 md:pl-0 pl-0 first:pt-0 last:pb-0">
                <h3 className="text-[#95c168] text-2xl font-semibold mb-4 font-poppins">Integrity</h3>
                <p className="text-[#C6CCC1] text-base leading-relaxed font-light max-w-xs">
                  Embody dependability, strict regulatory compliance, and complete operational transparency.
                </p>
              </div>

              {/* Value 2: Innovation */}
              <div className="py-8 md:py-0 md:px-10 pl-0 first:pt-0 last:pb-0">
                <h3 className="text-[#95c168] text-2xl font-semibold mb-4 font-poppins">Innovation</h3>
                <p className="text-[#C6CCC1] text-base leading-relaxed font-light max-w-xs">
                  Act courageously, pioneer real-time telemetry architectures, and implement bold technology solutions.
                </p>
              </div>

              {/* Value 3: Dedication */}
              <div className="py-8 md:py-0 md:pl-10 pl-0 first:pt-0 last:pb-0">
                <h3 className="text-[#95c168] text-2xl font-semibold mb-4 font-poppins">Dedication</h3>
                <p className="text-[#C6CCC1] text-base leading-relaxed font-light max-w-xs">
                  Commit to 99.99% operational uptime, continuous support, and precision engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE SYSTEMS WAY SECTION */}
        <section className="relative w-full bg-[#0B2036] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-gradient-to-b from-[#122b45] to-[#0a1c2e] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/about-1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-[#0B2036]/85 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
            {/* --- 1. TOP HEADER --- */}
            <div className="text-center mb-12 md:mb-16 max-w-4xl">
              <h4 className="text-[#95c168] font-semibold tracking-wider text-xl uppercase mb-4">
                The Accure's Way
              </h4>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-snug font-light font-poppins">
                As a premier system integration partner, we are uniquely equipped to modernize, connect, and scale mission-critical public and enterprise infrastructure.
              </h2>
            </div>

         

            {/* --- 3. BOTTOM 3-COLUMN GRID (ORIGINAL SIMPLE COLUMNS WITH BRAND ACCENT HEADINGS) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-5xl text-center">
              {/* Column 1: Optimize */}
              <div className="flex flex-col items-center">
                <h3 className="text-[#95c168] text-3xl md:text-4xl font-light mb-4 font-poppins">Optimize</h3>
                <p className="text-[#C6CCC1] text-sm md:text-base leading-relaxed max-w-xs">
                  We leverage customer-centric talent, advanced telemetry, and cloud technology to streamline operations for higher enterprise efficiency.
                </p>
              </div>

              {/* Column 2: Transform */}
              <div className="flex flex-col items-center">
                <h3 className="text-[#95c168] text-3xl md:text-4xl font-light mb-4 font-poppins">Transform</h3>
                <p className="text-[#C6CCC1] text-sm md:text-base leading-relaxed max-w-xs">
                  We reimagine monolithic systems and legacy workflows by engineering modular, API-first solutions for superior operational value.
                </p>
              </div>

              {/* Column 3: Scale */}
              <div className="flex flex-col items-center">
                <h3 className="text-[#95c168] text-3xl md:text-4xl font-light mb-4 font-poppins">Scale</h3>
                <p className="text-[#C6CCC1] text-sm md:text-base leading-relaxed max-w-xs">
                  We empower future-ready public and private institutions with long-term growth, automated observability, and perpetual innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATIVE INNOVATION MASONRY SECTION */}
        <section className="w-full bg-white py-10 md:py-14 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-[1500px] mx-auto">
            {/* CENTER TOP HEADING */}
            <div className="text-center  max-w-2xl mx-auto px-4">
              <h2 className="text-[#395A3A]  text-2xl sm:text-3xl lg:text-4xl leading-snug font-normal">
                Achieving sustainable progress through collaborative innovation and shared expertise
              </h2>
            </div>

            {/* MASONRY GRID - 5 COLUMNS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 items-end">
              {/* COLUMN 1 */}
              <div className="flex flex-col gap-4 md:gap-5">
                {/* Top Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                    alt="Team pointing at whiteboard"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                    alt="Professional woman with laptop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                    alt="Team workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* COLUMN 3 */}
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
                    alt="Woman writing on glass"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>

              {/* COLUMN 4 */}
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
                    alt="Colleagues discussing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>

              {/* COLUMN 5 */}
              <div className="flex flex-col gap-4 md:gap-5">
                {/* Top Right Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                    alt="Woman at laptop"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Right Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                    alt="Team collaborating"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATIONS SECTION */}
        <section className="pt-20  px-6 md:px-12 bg-[#F3F6EE]">
          <div className="max-w-full mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium font-poppins text-[#141c0d] mb-12">
              Our Global Presence
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {locations.map((region, index) => (
                <Image key={index} src={region.image} alt={region.region} width={220} height={220} className="w-full h-auto object-contain border-[2px] border-gray-200" />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer showConsultationSection={false} />
    </>
  );
}