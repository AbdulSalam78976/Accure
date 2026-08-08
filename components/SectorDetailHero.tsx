'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Landmark, Server, Zap, Droplets, Leaf, type LucideIcon } from 'lucide-react';

const sectorIcons: Record<string, LucideIcon> = {
  'digital-gov': Landmark,
  'it-infra': Server,
  'smart-energy': Zap,
  'water-systems': Droplets,
  environment: Leaf,
};

interface SectorDetailHeroProps {
  id: string;
  title: string;
  description: string;
  accent: string;
  image: string;
}

export default function SectorDetailHero({ id, title, description, accent, image }: SectorDetailHeroProps) {
  const Icon = sectorIcons[id] ?? Landmark;

  return (
    <section
      className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-20 px-6 md:px-12"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-80 pointer-events-none"
      />

      {/* Sharp Dark Gradient Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B120E]/95 via-[#0B120E]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E]/80 via-transparent to-[#0B120E]/40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-full mx-auto pt-16 md:pt-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-[#0B120E]/60 backdrop-blur-md border border-white/20 flex items-center justify-center" style={{ color: '#C6D6B4' }}>
            <Icon className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <p className="text-white/60 text-sm font-semibold uppercase tracking-[0.25em]">
            Sector
          </p>
        </div>

        <h1 className="text-white font-poppins text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.1]">
          {title}
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#395A3A] hover:bg-[#2E4B30] text-white font-semibold text-sm sm:text-base transition-all duration-300"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/sectors"
            className="px-8 py-3.5 font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-md"
          >
            All sectors
          </Link>
        </div>
      </div>
    </section>
  );
}
