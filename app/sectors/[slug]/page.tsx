import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectorDetailHero from '@/components/SectorDetailHero';
import SectorAccordion from '@/components/SectorAccordion';
import { sectors, getSectorById } from '@/lib/sectors-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorById(slug);
  if (!sector) return { title: 'Sector not found | Accure' };
  return {
    title: `${sector.title} | Accure`,
    description: sector.description,
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorById(slug);
  if (!sector) notFound();

  return (
    <div className="min-h-screen bg-[#F3F6EE] font-manrope text-[#141c0d]">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO — full-bleed image
      ══════════════════════════════════════════════════════════════════ */}
      <SectorDetailHero
        id={sector.id}
        title={sector.title}
        description={sector.description}
        accent={sector.accent}
        image={sector.image}
      />

      {/* ══════════════════════════════════════════════════════════════════
          2. INTRO SPLIT — image left / editorial text right
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* Image panel */}
          <div className="relative min-h-[420px] lg:min-h-[540px] overflow-hidden">
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              className="object-cover"
            />
            {/* bottom accent stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: sector.accent }} />
          </div>

          {/* Text panel */}
          <div className="flex flex-col justify-center px-0 lg:pl-16 pt-12 lg:pt-0">
            <p
              className="text-xs font-bold uppercase tracking-[0.22em] mb-4"
              style={{ color: sector.accent }}
            >
              Pioneering ideas for the intelligent use of {sector.title.toLowerCase()}
            </p>

            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#141c0d] tracking-tight leading-[1.15] mb-6 max-w-lg">
              Delivering outcomes that matter for {sector.title}
            </h2>

            <p className="text-[#4f564b] text-[15px] leading-7 mb-4 max-w-lg">
              {sector.description} Our team brings 20+ years of cross-sector integration experience to every engagement — combining deep domain knowledge with proven delivery methodology.
            </p>

            <p className="text-[#4f564b] text-[15px] leading-7 mb-10 max-w-lg">
              We work alongside government agencies, utilities, and enterprise clients to design systems that are secure, scalable, and built to last — from initial scoping through to go-live and managed support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:opacity-90"
                style={{ background: sector.accent }}
              >
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. OUR EXPERTISE — accordion
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#F3F6EE] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-[0.22em] mb-3"
            style={{ color: sector.accent }}
          >
            Our expertise
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#141c0d] tracking-tight mb-12 max-w-xl">
            Our expertise in the {sector.title.toLowerCase().split('&')[0].trim()} sector
          </h2>

          <SectorAccordion items={sector.checklist} accent={sector.accent} descriptions={sector.checklistDescriptions} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. PRODUCTS & SERVICES CARDS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-[0.22em] mb-3"
            style={{ color: sector.accent }}
          >
            Products &amp; services
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#141c0d] tracking-tight mb-12">
            What we offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sector.services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col bg-[#F3F6EE] border border-[#141c0d]/8 p-8 hover:shadow-[0_16px_40px_-16px_rgba(57,90,58,0.18)] hover:border-[#7B9E73]/40 transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: sector.accent }}
                />
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 text-2xl"
                  style={{ background: sector.accent + '18' }}
                >
                  <span style={{ color: sector.accent }}>{service.icon}</span>
                </div>
                <h3 className="font-poppins font-bold text-[#141c0d] text-xl mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4f564b]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. IMAGE GALLERY STRIP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B120E]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {sector.galleryImages.map((img, i) => (
            <div key={i} className="relative h-64 md:h-80 overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0B120E]/40 group-hover:bg-[#0B120E]/20 transition-colors duration-500" />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
                  <p className="text-white/80 text-xs font-medium uppercase tracking-[0.15em]">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer showConsultationSection={false} />
    </div>
  );
}
