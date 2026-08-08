'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Antenna,
  BarChart3,
  CloudCog,
  Database,
  Globe2,
  LifeBuoy,
  ShieldCheck,
  Waypoints,
  ArrowUpRight,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// ─── Capability data ──────────────────────────────────────────────────────────
const capabilities = [
  {
    id: 'integration',
    title: 'System Integration',
    description:
      'We connect disparate platforms, agencies, and data sources into unified systems — replacing fragmented point-to-point connections with governed, API-first integration architectures built for scale.',
    icon: Waypoints,
    tags: ['API-first architecture', 'Middleware & ESB', 'Legacy modernisation', 'Real-time data flows'],
    accent: '#243A1E',
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description:
      'We design and migrate enterprise and government workloads to hybrid, multi-cloud, and sovereign cloud environments — with the networking, security, and operational tooling to keep them running reliably.',
    icon: CloudCog,
    tags: ['Hybrid cloud strategy', 'Platform engineering', 'Infrastructure-as-code', 'Disaster recovery'],
    accent: '#2E4B30',
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    description:
      'We build governed data platforms, analytics pipelines, and dashboards that turn raw operational data into decisions — across government statistics, energy telemetry, water quality, and environmental indicators.',
    icon: Database,
    tags: ['Data architecture', 'BI & dashboards', 'AI/ML pipelines', 'Data governance'],
    accent: '#395A3A',
  },
  {
    id: 'iot',
    title: 'IoT & Telemetry',
    description:
      'We deploy and integrate sensor networks, SCADA systems, and edge devices — from river gauges and weather stations to smart meters and substation RTUs — into unified operational platforms.',
    icon: Antenna,
    tags: ['Sensor networks', 'SCADA integration', 'Edge computing', 'Real-time telemetry'],
    accent: '#4C7A38',
  },
  {
    id: 'security',
    title: 'Compliance & Security',
    description:
      'We architect security into every layer — from zero-trust network segmentation and identity management to compliance frameworks and OT/IT convergence security for critical national infrastructure.',
    icon: ShieldCheck,
    tags: ['Zero-trust architecture', 'OT/IT security', 'Compliance frameworks', 'Identity & access'],
    accent: '#2F6F63',
  },

];

// ─── How we deliver ───────────────────────────────────────────────────────────
const delivery = [
  {
    number: '01',
    title: 'Outcome-led from day one',
    description:
      'We start every engagement by agreeing what success looks like in measurable terms — not just technical deliverables, but the operational and policy outcomes that matter to your organisation. Every architecture decision flows from that definition.',
    icon: BarChart3,
  },
  {
    number: '02',
    title: 'Cross-sector pattern recognition',
    description:
      'Over 20 years, working across digital government, energy grids, water utilities, and environmental agencies, we have built a deep library of what works in regulated, mission-critical environments — and what does not.',
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Secure and compliant by design',
    description:
      'In the sectors we operate in, security and compliance are not afterthoughts. We embed governance frameworks, access controls, and auditability into solutions from the architecture phase — not the testing phase.',
    icon: ShieldCheck,
  },
];

export default function CapabilitiesPage() {
  /* ── Brand-bar hero animation ──────────────────────────────────────────── */
  const heroRef  = useRef<HTMLElement>(null);
  const bar1Ref  = useRef<HTMLDivElement>(null);
  const bar2Ref  = useRef<HTMLDivElement>(null);
  const bar3Ref  = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !barsAnimated) {
            bar1Ref.current && (bar1Ref.current.style.height = '100%');
            bar2Ref.current && (bar2Ref.current.style.height = '100%');
            bar3Ref.current && (bar3Ref.current.style.height = '100%');
            setBarsAnimated(true);
          } else if (!e.isIntersecting) {
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
    <main className="min-h-screen bg-[#F3F6EE] text-[#141c0d] font-manrope">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-24 px-6 md:px-12 lg:px-20"
      >
        {/* Brand bars */}
        <div className="hidden lg:block absolute right-35 top-0 h-full pointer-events-none">
          <div className="flex gap-4 h-full">
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

        <div className="relative z-10 pt-10 md:pt-16">
          <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            Capabilities
          </p>
          <h1 className="text-white font-poppins text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.08]">
            What we do — and how we do it
          </h1>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed">
            Six technical disciplines. One delivery philosophy. Built for the complexity of
            government, energy, water, and environmental systems.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INTRO STATEMENT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-20 border-b border-[#141c0d]/8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          <div>
            <p className="text-[#7B9E73] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Our approach
            </p>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#141c0d] leading-snug tracking-tight">
              Integration is not a product.<br />It is an engineering discipline.
            </h2>
          </div>
          <div className="space-y-4 text-[#4f564b] text-base md:text-[17px] leading-relaxed">
            <p>
              Accure has spent over two decades solving the problems that emerge when organisations
              try to modernise critical systems without disrupting the operations that depend on
              them. The challenge is never the technology alone — it is the governance, the legacy
              data, the organisational change, and the regulatory constraints that surround it.
            </p>
            <p>
              Our six capability areas cover the full technical stack that mission-critical
              integration demands: from the architectural layer that connects systems, through the
              cloud and data infrastructure that sustains them, to the IoT and telemetry networks
              that feed them with real-world data — secured, monitored, and supported around the clock.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CAPABILITY CARDS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                id={cap.id}
                className="group relative flex flex-col bg-white border border-[#141c0d]/10 p-8 scroll-mt-32 hover:shadow-[0_16px_48px_-16px_rgba(57,90,58,0.18)] hover:border-[#7B9E73]/35 transition-all duration-300"
              >
                {/* Left accent border that fills on hover */}
                <div
                  className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full transition-all duration-500 ease-out"
                  style={{ background: cap.accent }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 shrink-0 transition-colors duration-300"
                  style={{ background: cap.accent + '18' }}
                >
                  <Icon className="w-5 h-5" style={{ color: cap.accent }} />
                </div>

                {/* Title */}
                <h2 className="font-poppins font-bold text-xl text-[#141c0d] mb-3 tracking-tight">
                  {cap.title}
                </h2>

                {/* Description */}
                <p className="text-sm md:text-[15px] leading-relaxed text-[#4f564b] mb-7 flex-1">
                  {cap.description}
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4f564b] bg-[#F3F6EE] border border-[#141c0d]/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW WE DELIVER — 3-column numbered blocks on dark background
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B120E] px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="mb-14">
          <p className="text-[#95c168] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            How we deliver
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white tracking-tight max-w-xl leading-snug">
            A practical approach rooted in delivery and trust
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/8">
          {delivery.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.number} className="bg-[#0B120E] p-8 md:p-10 group">
                {/* Number */}
                <p className="font-poppins font-bold text-5xl text-white/8 mb-6 leading-none select-none">
                  {item.number}
                </p>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#2E4B30] mb-6">
                  <Icon className="w-5 h-5 text-[#95c168]" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-white text-xl mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTORS BRIDGE — links to the sectors page
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F6EE] px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-[#141c0d]/8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-[#7B9E73] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Where we apply these capabilities
            </p>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#141c0d] leading-snug tracking-tight mb-4">
              Five sectors. Each one with its own complexity.
            </h2>
            <p className="text-[#4f564b] text-base leading-relaxed">
              Digital governance, enterprise IT, smart energy, water &amp; hydromet, and
              environmental management — see how these capabilities are applied sector by sector.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:shrink-0">
            <Link
              href="/sectors"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#395A3A] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#2E4B30] hover:shadow-xl hover:shadow-black/20"
            >
              Explore sectors
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#141c0d]/20 text-[#141c0d] font-semibold text-sm transition-all duration-300 hover:border-[#395A3A] hover:text-[#395A3A]"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <Footer showConsultationSection={true} />
    </main>
  );
}
