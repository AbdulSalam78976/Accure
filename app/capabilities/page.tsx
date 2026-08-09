'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  // Capability icons — chosen for precision and visual quality
  Workflow,          // System Integration  — nodes connected in a flow
  Server,            // Cloud & Infrastructure — rack/server
  LineChart,         // Data & Analytics — clean line graph
  Radio,             // IoT & Telemetry — broadcast/signal waves
  ShieldHalf,        // Compliance & Security — half-shield, distinct look
  LayoutPanelLeft,   // Digital Experience & Portals — panel/layout grid
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Capability = {
  id: string;
  title: string;
  Icon: LucideIcon;
  summary: string;
  description: string;
  tags: string[];
  deliverables: string[];
  accent: string;
};

// ─── CAPABILITY DATA ──────────────────────────────────────────────────────────
const capabilities: Capability[] = [
  {
    id: 'integration',
    title: 'System Integration',
    Icon: Workflow,
    summary: 'API-first architectures for secure, high-throughput ecosystem interoperability.',
    description:
      'We connect agencies, enterprise platforms, and operational tools into governed, API-first ecosystems that work reliably at scale without breaking legacy stability.',
    tags: ['API-first architecture', 'Middleware & ESB', 'Legacy modernisation', 'Real-time flows'],
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
    summary: 'Resilient hybrid and sovereign cloud foundations built for compliance.',
    description:
      'We design secure, resilient hybrid and sovereign cloud environments with the platform foundations necessary to support long-term operational scale and strict regulatory needs.',
    tags: ['Hybrid cloud strategy', 'Platform engineering', 'Infrastructure-as-code', 'Disaster recovery'],
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
    summary: 'Governed data pipelines and operational BI that drive real-time decisioning.',
    description:
      'We build governed data platforms and analytics frameworks that translate complex, dispersed operational data into clear, actionable intelligence.',
    tags: ['Data architecture', 'BI & dashboards', 'AI/ML pipelines', 'Governance'],
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
    summary: 'Edge device orchestration and real-time operational monitoring.',
    description:
      'We connect sensors, edge devices, SCADA systems, and remote field assets into unified telemetry systems that provide instant visibility across critical assets.',
    tags: ['Sensor networks', 'SCADA integration', 'Edge computing', 'Live telemetry'],
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
    summary: 'Embedded Zero-Trust framework designed directly into system architecture.',
    description:
      'We embed zero-trust frameworks, strict governance, and operational resilience directly into solutions from the initial blueprint step.',
    tags: ['Zero-trust architecture', 'OT/IT security', 'Compliance frameworks', 'Identity & access'],
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
    summary: 'Accessible, mission-ready web applications integrated directly into backend platforms.',
    description:
      'We design and build modern public portals and digital platforms that are fast, fully accessible (WCAG compliant), and natively hooked into enterprise core systems.',
    tags: ['Website design', 'Portal development', 'Accessibility', 'Content-driven experiences'],
    deliverables: [
      'WCAG 2.1 AA accessibility compliance',
      'Headless CMS integration',
      'Secure citizen & partner portals',
    ],
    accent: '#7B9E73',
  },
];

// ─── DELIVERY METHODOLOGY ─────────────────────────────────────────────────────
const delivery: { number: string; title: string; description: string }[] = [
  {
    number: '01',
    title: 'Outcome-led from day one',
    description:
      'We define success in measurable terms before code is written, ensuring technical decisions directly support business and operational outcomes.',
  },
  {
    number: '02',
    title: 'Cross-sector pattern recognition',
    description:
      'Our deep experience across government, utilities, and infrastructure gives us a field-tested playbook for high-stakes digital execution.',
  },
  {
    number: '03',
    title: 'Secure and compliant by design',
    description:
      'Security controls, data sovereignty, and auditability are baked into the core architecture rather than patched on at deployment.',
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CapabilitiesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
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

      {/* ══════════════════════════════════════════════════════
          HERO — untouched
      ══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-24 px-6 md:px-12 lg:px-20"
      >
        <div className="block absolute right-0 sm:right-2 lg:right-8 xl:right-12 top-0 h-full pointer-events-none opacity-100">
          <div className="flex gap-2 sm:gap-3 lg:gap-4 h-full">
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

        <div className="relative z-10 pt-6 md:pt-10">
          <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            Capabilities
          </p>
          <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-2 max-w-3xl leading-[1.08]">
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
            <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
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
                <h3 className="text-[#95c168] text-xl sm:text-2xl font-semibold mb-4 font-poppins">
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
            <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
              Capabilities Ecosystem
            </h4>
            <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins">
              Built for mission-critical digital infrastructure
            </h2>
          </div>

          {/* 3-col card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141c0d]/10">
            {capabilities.map((cap, idx) => (
              <div
                key={cap.id}
                className="bg-white group flex flex-col p-8 md:p-10 transition-colors duration-300 hover:bg-[#0B120E]"
              >
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
                <h3 className="font-poppins font-semibold text-xl text-[#141c0d] group-hover:text-white leading-snug mb-3 transition-colors duration-300">
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

                {/* Tags */}
                <div className="pt-6 border-t border-[#141c0d]/8 group-hover:border-white/10 transition-colors duration-300">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#2f342d] group-hover:text-white/60 bg-[#F3F6EE] group-hover:bg-white/5 border border-[#141c0d]/10 group-hover:border-white/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
            <h4 className="text-[#95c168] font-semibold tracking-widest text-xl uppercase mb-4">
              Delivery Methodology
            </h4>
            <h2 className="text-[#141c0d] text-[24px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-3xl font-poppins">
              Execution rooted in clarity, strict compliance, and reliability
            </h2>
          </div>

          {/* 3-column divide — same pattern as Core Values / About */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#141c0d]/10">
            {delivery.map(({ number, title, description }) => (
              <div key={number} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <p className="font-poppins font-bold text-6xl leading-none text-[#141c0d]/8 mb-6 select-none">
                  {number}
                </p>
                <h3 className="text-[#395A3A] text-xl sm:text-2xl font-semibold mb-4 font-poppins">
                  {title}
                </h3>
                <p className="text-[#4f564b] text-base leading-relaxed font-light max-w-xs">
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

