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

          {/* Image panel — uses introImage, distinct from hero */}
          <div className="relative min-h-[420px] lg:min-h-[540px] overflow-hidden">
            <Image
              src={sector.introImage}
              alt={sector.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* bottom accent stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: sector.accent }} />
          </div>

          {/* Text panel — sector-specific heading + copy */}
          <div className="flex flex-col justify-center px-0 lg:pl-16 pt-12 lg:pt-0">
            <h2 className="font-poppins font-medium text-[24px] sm:text-3xl md:text-4xl text-[#141c0d] tracking-tight leading-[1.15] mb-6 max-w-lg">
              {sector.introHeading}
            </h2>

            {sector.introBody.map((para, i) => (
              <p key={i} className="text-[#4f564b] text-[15px] leading-7 mb-6 max-w-lg last:mb-10">
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-[15px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:opacity-90"
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
          <h2 className="font-poppins font-medium text-[24px] sm:text-3xl md:text-4xl text-[#141c0d] tracking-tight mb-12 max-w-xl">
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
          <h2 className="font-poppins font-medium text-[24px] sm:text-3xl md:text-4xl text-[#141c0d] tracking-tight mb-12">
            What we offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#141c0d]/8">
            {sector.services.map((service, i) => (
              <div
                key={service.title}
                className="group relative flex flex-col border-r border-b border-[#141c0d]/8 p-8 hover:bg-[#F3F6EE] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 flex items-center justify-center border"
                    style={{ borderColor: sector.accent + '40' }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: sector.accent }} />
                  </div>
                  <span
                    className="font-poppins font-bold text-xs"
                    style={{ color: sector.accent + '60' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-poppins font-medium text-[#141c0d] text-xl mb-3 leading-snug">
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
                sizes="(max-width: 768px) 100vw, 33vw"
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
