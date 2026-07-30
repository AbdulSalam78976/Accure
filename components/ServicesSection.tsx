'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HorizontalScrollPin from './HorizontalScrollPin';

const services = [
  {
    title: 'System Integration',
    description: 'Connect legacy mainframes, modern SaaS tools, and public-sector platforms through a single, governed API layer.',
    image: '/images/hero-bg.png',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Hybrid and multi-cloud operations for mission-critical workloads, with zero-downtime migrations and 24/7 monitoring.',
    image: '/images/datacenter-photo.png',
  },
  {
    title: 'Data and Analytics',
    description: 'Turn raw telemetry and operational data into real-time dashboards, forecasts, and regulatory reporting.',
    image: '/images/hero-bg.png',
  },
  {
    title: 'IoT & Telemetry',
    description: 'Sensor networks, SCADA bridges, and edge devices integrated into a single, secure operational picture.',
    image: '/images/legacymeter-photo.png',
  },
  {
    title: 'Compliance & Security',
    description: 'Zero-trust access control, encryption, and audit trails built to meet ISO 27001, SOC 2, and public-sector standards.',
    image: '/images/city-photo.png',
  },
  {
    title: '24/7 Managed Support',
    description: 'Dedicated integration specialists on call around the clock for mission-critical public infrastructure.',
    image: '/images/datacenter-photo.png',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-4 bg-[#F6EFDD]/92 text-[#141c0d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl leading-tight">
            Our Services
          </h2>
          <Link
            href="/capabilities"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141c0d] hover:text-[#3e7220] transition-colors shrink-0 pb-1"
          >
            Discover our full capabilities
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-[#3e7220]/40 via-[#95c168]/40 to-transparent my-10" />
      </div>

      {/* Pinned Horizontal Scroll Row */}
      <HorizontalScrollPin trackClassName="gap-6 px-4 sm:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="shrink-0 relative w-[260px] sm:w-[300px] h-[420px] rounded-[28px] p-8 flex flex-col justify-end overflow-hidden text-white"
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E]/95 via-[#0B120E]/65 to-[#0B120E]/25 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-poppins font-bold text-2xl sm:text-[28px] leading-tight">
                {service.title}
              </h3>
              <p className="mt-4 font-manrope text-sm leading-relaxed text-white/80">
                {service.description}
              </p>

              <Link
                href="/capabilities"
                className="group mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white w-fit"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </HorizontalScrollPin>

    </section>
  );
}