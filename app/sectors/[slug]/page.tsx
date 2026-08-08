import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectorDetailHero from '@/components/SectorDetailHero';
import { sectors, getSectorById } from '@/lib/sectors-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorById(slug);
  if (!sector) {
    return { title: 'Sector not found | accure' };
  }
  return {
    title: `${sector.title} | accure`,
    description: sector.description,
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorById(slug);
  if (!sector) notFound();

  const related = sectors.filter((s) => s.id !== sector.id);

  return (
    <div className="min-h-screen bg-white font-manrope text-[#141c0d]">
      <Navbar />
      <SectorDetailHero id={sector.id} title={sector.title} description={sector.description} accent={sector.accent} image={sector.image} />

      {/* ===== WHAT WE DELIVER ===== */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative min-h-[420px] overflow-hidden group">
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-1.5 w-full" style={{ background: sector.accent }} />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: sector.accent }}>
              What we deliver
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-poppins font-bold tracking-tight text-[#141c0d] leading-tight">
              Solutions built for {sector.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4f564b]">
              {sector.description}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {sector.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6">
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: sector.accent }}
                    strokeWidth={2}
                  />
                  <span className="text-[#333333]">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 px-6 py-3.5 bg-[#395A3A] hover:bg-[#2E4B30] text-white font-semibold transition-colors duration-300"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RELATED SECTORS ===== */}
      <section className="w-full bg-[#141c0d] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          <h2 className="text-white font-poppins text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Explore other sectors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group relative overflow-hidden bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-[3px] w-full opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{ background: s.accent }} />
                <s.icon className="w-8 h-8 mb-6 text-[#C6D6B4]" strokeWidth={1.5} />
                <h3 className="text-white font-poppins font-bold text-lg leading-snug">
                  {s.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7B9E73]">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer showConsultationSection={false} />
    </div>
  );
}
