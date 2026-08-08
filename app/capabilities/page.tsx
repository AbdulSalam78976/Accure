'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Antenna,
  BarChart3,
  CheckCircle,
  CloudCog,
  Database,
  Globe2,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const capabilityCards = [
  {
    id: 'integration',
    title: 'System Integration',
    description:
      'We modernize service delivery, processes, and employee experiences with practical roadmaps and measurable outcomes.',
    icon: Waypoints,
    bullets: ['Process redesign', 'Service experience mapping', 'Transition planning'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description:
      'Reliable platforms for hybrid environments, modernization initiatives, and always-on operations.',
    icon: CloudCog,
    bullets: ['Hybrid cloud strategy', 'Platform engineering', 'Infrastructure modernization'],
  },
  {
    id: 'analytics',
    title: 'Data and Analytics',
    description:
      'Turn information into insight with governed data platforms, analytics, and automation.',
    icon: Database,
    bullets: ['Data architecture', 'BI & analytics', 'Automation workflows'],
  },
  {
    id: 'iot',
    title: 'IoT & Telemetry',
    description:
      'Connected field devices, sensor networks, and edge telemetry integrated into one secure operational picture.',
    icon: Antenna,
    bullets: ['Sensor networks & telemetry', 'SCADA & edge integration', 'Real-time operational insights'],
  },
  {
    id: 'security',
    title: 'Compliance & Security',
    description:
      'Protect critical operations with secure-by-design systems, controls, and enterprise resilience practices.',
    icon: ShieldCheck,
    bullets: ['Security architecture', 'Compliance readiness', 'Business continuity'],
  },
  {
    id: 'support',
    title: '24/7 Managed Support',
    description:
      'Keep systems performing with proactive support, observability, continuous improvement, and service management.',
    icon: LifeBuoy,
    bullets: ['24/7 monitoring', 'Service operations', 'Continuous optimization'],
  },
];

const implementationAreas = [
  {
    step: '01',
    title: 'Outcome-led delivery',
    description: 'Every engagement is shaped around business goals, adoption, and long-term value.',
    icon: BarChart3,
  },
  {
    step: '02',
    title: 'Cross-sector expertise',
    description: 'We bring proven experience across government, enterprise, utilities, and sustainability programs.',
    icon: Globe2,
  },
  {
    step: '03',
    title: 'Secure by design',
    description: 'Governance, compliance, and resilience are built into solutions from the start.',
    icon: ShieldCheck,
  },
];

export default function CapabilitiesPage() {
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
    <main className="min-h-screen bg-white text-[#141c0d] font-manrope">
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-24 px-6 md:px-12"
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
            Capabilities
          </p>
          <h1 className="text-white font-poppins text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.1]">
            Capabilities that turn ambition into practical results
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            We combine strategy, technology, and delivery to help organizations modernize with confidence and scale with clarity.
          </p>

          {/* Quick nav chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {capabilityCards.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 border border-white/20 bg-white/5 hover:bg-white/15 hover:text-[#C6D6B4] transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITY CARDS ===== */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="group rounded-[24px] border border-[#141c0d]/10 bg-white p-8 shadow-sm scroll-mt-32 transition-all duration-300 hover:-translate-y-1 hover:border-[#7B9E73]/40 hover:shadow-[0_16px_40px_-16px_rgba(57,90,58,0.25)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9F0E4] text-[#395A3A] transition-colors duration-300 group-hover:bg-[#395A3A] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-poppins text-xl font-bold tracking-tight">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#4f564b]">{item.description}</p>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-[#333333]">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7B9E73]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#395A3A] transition-colors hover:text-[#7B9E73]"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="mx-auto max-w-full rounded-[32px] bg-[#2E4B30] p-8 text-white md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C6D6B4]">
                How we work
              </p>
              <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
                A practical approach rooted in delivery and trust
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                We help teams move from strategy to execution with clear ownership, transparent collaboration, and solutions built for real-world operations.
              </p>
            </div>

            <div className="space-y-5">
              {implementationAreas.map((area) => {
                const AreaIcon = area.icon;
                return (
                  <div
                    key={area.step}
                    className="group flex items-start gap-5 rounded-[20px] bg-white/5 p-6 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#395A3A] text-[#C6D6B4] transition-colors duration-300 group-hover:bg-[#C6D6B4] group-hover:text-[#395A3A]">
                      <AreaIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6D6B4]/70">
                        {area.step}
                      </p>
                      <h3 className="mt-1 font-poppins text-lg font-semibold">{area.title}</h3>
                      <p className="mt-1.5 text-sm leading-7 text-white/75">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#141c0d]/10 bg-white p-8 shadow-[0_1px_3px_rgba(20,28,13,0.06)] md:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7B9E73]">Ready to explore</p>
              <h2 className="mt-3 text-3xl font-semibold">Let’s shape the right solution for your goals</h2>
              <p className="mt-3 text-lg leading-8 text-[#4f564b]">
                Whether you need a transformation roadmap, a secure platform, or a new digital service, we can help you move forward with confidence.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#395A3A] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2E4B30]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer showConsultationSection={true} />
    </main>
  );
}