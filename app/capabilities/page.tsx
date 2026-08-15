'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  // Capability icons — chosen for precision and visual quality
  Workflow,          // System Integration  — nodes connected in a flow
  Server,            // Cloud & Infrastructure — rack/server
  LineChart,         // Data & Analytics — clean line graph
  Radio,             // IoT & Telemetry — broadcast/signal waves
  ShieldHalf,        // Compliance & Security — half-shield, distinct look
  LayoutPanelLeft,   // Digital Experience & Portals — panel/layout grid
  Target,            // Delivery: outcome-led
  Layers,            // Delivery: cross-sector pattern recognition
  ShieldCheck,        // Delivery: secure & compliant by design
  Search,            // Engagement: discover
  Compass,           // Engagement: design
  Code2,             // Engagement: build
  LifeBuoy,          // Engagement: operate
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroBrandBars from '@/components/HeroBrandBars';
import { sectors, getSectorById } from '@/lib/sectors-data';

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Capability = {
  id: string;
  title: string;
  Icon: LucideIcon;
  image: string;
  summary: string;
  description: string;
  relatedSectorIds: string[];
  deliverables: string[];
  accent: string;
};

// ─── CAPABILITY DATA ──────────────────────────────────────────────────────────
const capabilities: Capability[] = [
  {
    id: 'integration',
    title: 'System Integration',
    Icon: Workflow,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    summary: 'API-first architectures for secure, high-throughput ecosystem interoperability.',
    description:
      'We connect agencies, enterprise platforms, and operational tools into governed, API-first ecosystems that work reliably at scale without breaking legacy stability.',
    relatedSectorIds: ['digital-gov', 'it-infra'],
    deliverables: [
      'Event-driven architecture design',
      'API gateway setup & governance',
      'Data mapping & protocol conversion',
    ],
    accent: '#95c168',
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    Icon: Server,
    image: 'https://images.unsplash.com/photo-1573164713712-03790a178651?auto=format&fit=crop&q=80&w=800',
    summary: 'Resilient hybrid and sovereign cloud foundations built for compliance.',
    description:
      'We design secure, resilient hybrid and sovereign cloud environments with the platform foundations necessary to support long-term operational scale and strict regulatory needs.',
    relatedSectorIds: ['it-infra', 'digital-gov'],
    deliverables: [
      'Automated IaC deployments',
      'Multi-region failover design',
      'Sovereignty & compliance mapping',
    ],
    accent: '#7B9E73',
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    Icon: LineChart,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    summary: 'Governed data pipelines and operational BI that drive real-time decisioning.',
    description:
      'We build governed data platforms and analytics frameworks that translate complex, dispersed operational data into clear, actionable intelligence.',
    relatedSectorIds: ['smart-energy', 'environment'],
    deliverables: [
      'Centralised data warehouse engineering',
      'Real-time streaming pipelines',
      'Executive performance dashboards',
    ],
    accent: '#95c168',
  },
  {
    id: 'iot',
    title: 'IoT & Telemetry',
    Icon: Radio,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=800',
    summary: 'Edge device orchestration and real-time operational monitoring.',
    description:
      'We connect sensors, edge devices, SCADA systems, and remote field assets into unified telemetry systems that provide instant visibility across critical assets.',
    relatedSectorIds: ['smart-energy', 'water-systems'],
    deliverables: [
      'Low-latency edge processing',
      'Telemetry data normalization',
      'Remote device management systems',
    ],
    accent: '#7B9E73',
  },
  {
    id: 'security',
    title: 'Compliance & Security',
    Icon: ShieldHalf,
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800',
    summary: 'Embedded Zero-Trust framework designed directly into system architecture.',
    description:
      'We embed zero-trust frameworks, strict governance, and operational resilience directly into solutions from the initial blueprint step.',
    relatedSectorIds: ['digital-gov', 'it-infra'],
    deliverables: [
      'Zero-Trust policy enforcement',
      'OT/IT security segmenting',
      'Continuous audit trail logging',
    ],
    accent: '#95c168',
  },
  {
    id: 'portals',
    title: 'Digital Experience & Portals',
    Icon: LayoutPanelLeft,
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&q=80&w=800',
    summary: 'Accessible, mission-ready web applications integrated directly into backend platforms.',
    description:
      'We design and build modern public portals and digital platforms that are fast, fully accessible (WCAG compliant), and natively hooked into enterprise core systems.',
    relatedSectorIds: ['digital-gov', 'water-systems'],
    deliverables: [
      'WCAG 2.1 AA accessibility compliance',
      'Headless CMS integration',
      'Secure citizen & partner portals',
    ],
    accent: '#7B9E73',
  },
];

// ─── DELIVERY METHODOLOGY ─────────────────────────────────────────────────────
const delivery: { number: string; title: string; description: string; Icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Outcome-led from day one',
    description:
      'We define success in measurable terms before code is written, ensuring technical decisions directly support business and operational outcomes.',
    Icon: Target,
  },
  {
    number: '02',
    title: 'Cross-sector pattern recognition',
    description:
      'Our deep experience across government, utilities, and infrastructure gives us a field-tested playbook for high-stakes digital execution.',
    Icon: Layers,
  },
  {
    number: '03',
    title: 'Secure and compliant by design',
    description:
      'Security controls, data sovereignty, and auditability are baked into the core architecture rather than patched on at deployment.',
    Icon: ShieldCheck,
  },
];

// ─── ENGAGEMENT PHASES ────────────────────────────────────────────────────────
const engagementPhases: { number: string; title: string; description: string; Icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Map current systems, stakeholders, and constraints before writing a line of code.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Architect the integration, security model, and rollout plan against measurable outcomes.',
    Icon: Compass,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Implement in governed increments, with continuous testing against the original blueprint.',
    Icon: Code2,
  },
  {
    number: '04',
    title: 'Operate',
    description: 'Hand over with full runbooks, or stay on as long-term managed support.',
    Icon: LifeBuoy,
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CapabilitiesPage() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen bg-[#F3F6EE] text-[#141c0d] font-manrope">
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO — untouched
      ══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-24 px-6 md:px-12 lg:px-20"
      >
        <HeroBrandBars containerRef={heroRef} />

        <div className="relative z-10 pt-6 md:pt-10">
          <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            Capabilities
          </p>
          <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 mt-2 max-w-3xl leading-[1.08]">
            Engineering the systems behind modern digital services
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            From secure integrations to polished digital experiences, we help organisations connect people, data, and operations in a way that is resilient, future-ready, and measurable.
          </p>
        </div>
      </section>

    
      {/* ══════════════════════════════════════════════════════
          ENGINEERING PHILOSOPHY — matches About "Core Values" dark section
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B120E] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h4 className="text-[#95c168] font-medium tracking-widest text-xl uppercase mb-4">
              Our Engineering Philosophy
            </h4>
            <h2 className="text-white text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins">
              Integration is an engineering discipline, not a product add-on.
            </h2>
          </div>

          {/* 3-column divide — same pattern as Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              {
                title: 'Outcome-Driven',
                body: 'Designed for measurable performance metrics and long-term system longevity from the first line of architecture.',
              },
              {
                title: 'Embedded Governance',
                body: 'Security, compliance, and auditing mechanisms integrated into day-one code — not bolted on post-deployment.',
              },
              {
                title: 'Scalable Support',
                body: 'Practices structured to ease adoption, internal maintenance, and perpetual operational scaling.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <h3 className="text-[#95c168] text-xl sm:text-2xl font-medium mb-4 font-poppins">
                  {title}
                </h3>
                <p className="text-[#C6CCC1] text-base leading-relaxed font-light max-w-xs">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAPABILITY EXPLORER — 6-card grid
      ══════════════════════════════════════════════════════ */}
      <section id="capability-grid" className="bg-[#F3F6EE] px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h4 className="text-[#95c168] font-medium tracking-widest text-xl uppercase mb-4">
              Capabilities Ecosystem
            </h4>
            <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins mb-5">
              Built for mission-critical digital infrastructure
            </h2>
            <p className="text-[#4f564b] text-base md:text-lg max-w-2xl leading-relaxed">
              Six disciplines, one integrated delivery model — each capability below is a practice
              area we staff, govern, and deliver against, not a checklist of buzzwords.
            </p>
          </div>

          {/* 3-col card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141c0d]/10">
            {capabilities.map((cap, idx) => (
              <div
                key={cap.id}
                className="bg-white group flex flex-col transition-colors duration-300 hover:bg-[#0B120E]"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B120E]/10 group-hover:bg-[#0B120E]/30 transition-colors duration-300" />
                </div>

                <div className="flex flex-col p-8 md:p-10">
                  {/* Index + icon row */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-poppins font-bold text-5xl leading-none text-[#141c0d]/8 group-hover:text-white/10 transition-colors duration-300 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-11 h-11 flex items-center justify-center bg-[#F3F6EE] group-hover:bg-[#2E4B30] transition-colors duration-300">
                      <cap.Icon className="w-5 h-5 text-[#2E4B30] group-hover:text-[#95c168] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-medium text-xl text-[#141c0d] group-hover:text-white leading-snug mb-3 transition-colors duration-300">
                    {cap.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-[#4f564b] group-hover:text-[#C6CCC1] text-[15px] leading-7 mb-8 flex-1 transition-colors duration-300">
                    {cap.summary}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-2 mb-8">
                    {cap.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#333] group-hover:text-white/70 transition-colors duration-300">
                        <span
                          className="mt-[7px] shrink-0 w-1.5 h-1.5"
                          style={{ background: cap.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Where we apply this — cross-links into Sectors */}
                  <div className="pt-6 border-t border-[#141c0d]/8 group-hover:border-white/10 transition-colors duration-300">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#4f564b] group-hover:text-white/40 mb-3 transition-colors duration-300">
                      Where we apply this
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {cap.relatedSectorIds.map((sectorId) => {
                        const sector = getSectorById(sectorId);
                        if (!sector) return null;
                        return (
                          <Link
                            key={sectorId}
                            href={sector.href}
                            className="group/link inline-flex items-center gap-1 text-sm font-semibold text-[#2E4B30] group-hover:text-[#95c168] transition-colors duration-300"
                          >
                            {sector.title.split('&')[0].trim()}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW WE WORK — engagement phases, same hairline+icon-tile language
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-[#141c0d]/8">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h4 className="text-[#95c168] font-medium tracking-widest text-xl uppercase mb-4">
              How We Work
            </h4>
            <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins mb-5">
              Four phases, one accountable team from first call to go-live
            </h2>
            <p className="text-[#4f564b] text-base md:text-lg max-w-2xl leading-relaxed">
              No handoffs between a sales team and a delivery team — the specialists who scope
              your engagement are the ones who build and support it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#141c0d]/8">
            {engagementPhases.map(({ number, title, description, Icon }) => (
              <div
                key={number}
                className="group flex flex-col border-r border-b border-[#141c0d]/8 p-8 hover:bg-[#F3F6EE] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 flex items-center justify-center bg-[#2E4B30]/10">
                    <Icon className="w-5 h-5 text-[#2E4B30]" />
                  </div>
                  <span className="font-poppins font-bold text-xs text-[#2E4B30]/60">
                    {number}
                  </span>
                </div>
                <h3 className="text-[#141c0d] text-lg font-medium mb-3 font-poppins">
                  {title}
                </h3>
                <p className="text-[#4f564b] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DELIVERY METHODOLOGY — white bg, no icons
      ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-[#141c0d]/8">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h4 className="text-[#95c168] font-medium tracking-widest text-xl uppercase mb-4">
              Delivery Methodology
            </h4>
            <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins mb-5">
              Execution rooted in clarity, strict compliance, and reliability
            </h2>
            <p className="text-[#4f564b] text-base md:text-lg max-w-2xl leading-relaxed">
              The same three principles govern every engagement, regardless of sector or scale.
            </p>
          </div>

          {/* Hairline grid with icon tiles — same visual language as sector-detail cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#141c0d]/8">
            {delivery.map(({ number, title, description, Icon }) => (
              <div
                key={number}
                className="group flex flex-col border-r border-b border-[#141c0d]/8 p-8 md:p-10 hover:bg-[#F3F6EE] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 flex items-center justify-center bg-[#395A3A]/10">
                    <Icon className="w-5 h-5 text-[#395A3A]" />
                  </div>
                  <span className="font-poppins font-bold text-xs text-[#395A3A]/60">
                    {number}
                  </span>
                </div>
                <h3 className="text-[#395A3A] text-xl sm:text-2xl font-medium mb-4 font-poppins">
                  {title}
                </h3>
                <p className="text-[#4f564b] text-base leading-relaxed font-light">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <Footer showConsultationSection={false} />
    </main>
  );
}

