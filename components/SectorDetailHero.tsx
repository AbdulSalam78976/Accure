'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface SectorDetailHeroProps {
  id: string;
  title: string;
  description: string;
  accent: string;
  image: string;
}

export default function SectorDetailHero({ title, description, accent, image }: SectorDetailHeroProps) {
  return (
    <section className="w-full relative overflow-hidden -mt-24 min-h-[88vh] flex flex-col justify-end">
      {/* Full-bleed background image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Layered gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E] via-[#0B120E]/60 to-[#0B120E]/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B120E]/80 via-[#0B120E]/30 to-transparent pointer-events-none" />

      {/* Accent stripe at very bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20" style={{ background: accent }} />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-40 pb-16 md:pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-[0.18em]">
          <Link href="/sectors" className="text-white/40 hover:text-white/80 transition-colors duration-200">
            Sectors
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/25" />
          <span className="text-white/70">{title}</span>
        </nav>

        <h1 className="text-white font-poppins text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-3xl leading-[1.05]">
          {title}
        </h1>

        <p className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          {description}
        </p>

    
      </div>
    </section>
  );
}
