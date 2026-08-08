'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface HotTopic {
  id: string;
  title: string;
  description: string;
  externalHref: string;
  iconSrc: string;
}

// Standalone curated topics for the homepage carousel — independent of the full insights library
const topics: HotTopic[] = [
  {
    id: 'digital-gov',
    title: 'Modernising government, one service at a time',
    description: "OECD's 2026 outlook on moving governments from digital foundations to measurable citizen impact.",
    externalHref: 'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en.html',
    iconSrc: '/images/government.png',
  },
  {
    id: 'it-infra',
    title: 'Migrating mission-critical systems without downtime',
    description: "AWS's Well-Architected Migration Lens — the practices that keep critical workloads live during a cloud move.",
    externalHref: 'https://docs.aws.amazon.com/wellarchitected/latest/migration-lens/migration-lens.html',
    iconSrc: '/images/data-migration.png',
  },
  {
    id: 'smart-energy',
    title: 'Managing distributed energy resources on the grid',
    description: 'IEA guidance on integrating large amounts of low-voltage solar, wind, and storage into existing grid infrastructure.',
    externalHref: 'https://www.iea.org/articles/managing-large-amounts-of-distributed-energy-resources-on-electricity-grids',
    iconSrc: '/images/power.png',
  },
  {
    id: 'water-systems',
    title: 'Non-contact radar sensors for streamflow',
    description: 'USGS research on emerging non-contact measurement technologies transforming hydromet monitoring networks.',
    externalHref: 'https://pubs.usgs.gov/publication/70192079',
    iconSrc: '/images/water-level.png',
  },
  {
    id: 'environment',
    title: 'The economic costs of climate-driven disasters',
    description: 'WMO data on how early-warning systems and integrated environmental monitoring save lives and reduce economic loss.',
    externalHref: 'https://wmo.int/media/news/economic-costs-of-weather-related-disasters-soars-early-warnings-save-lives',
    iconSrc: '/images/natural-disaster.png',
  },
];

const CTA_LABEL = 'Learn more';

export default function HotTopicsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>('[data-topic-card]');
    const amount = card ? card.offsetWidth + 64 : 380;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white text-[#141c0d] py-16 md:py-20 overflow-hidden">
      <div className="max-w-full mx-auto px-6 lg:px-16 xl:px-24">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold tracking-tight mb-12 md:mb-16 text-[#141c0d]">
          Hot Topics
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-12 lg:gap-16 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {topics.map((topic) => (
            <div key={topic.id} data-topic-card className="shrink-0 snap-start w-[260px] sm:w-[300px] flex flex-col">
              <img src={topic.iconSrc} alt="" aria-hidden="true" className="w-18 h-18 mb-8 object-contain" />
              <h3 className="font-poppins font-bold text-xl md:text-2xl leading-snug mb-3 text-[#141c0d]">
                {topic.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-[#4f564b] mb-6">
                {topic.description}
              </p>
              <a
                href={topic.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#395A3A] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7B9E73] hover:shadow-xl hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6D6B4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E4B30] self-start mt-auto"
              >
                {CTA_LABEL}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-6 mt-14 md:mt-16">
          <button
            type="button"
            aria-label="Previous topic"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full transition-all duration-200 ${canScrollLeft ? 'text-[#141c0d] hover:text-[#395A3A] hover:bg-[#f0f4eb]' : 'text-[#141c0d]/20 cursor-not-allowed'}`}
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next topic"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded-full transition-all duration-200 ${canScrollRight ? 'text-[#141c0d] hover:text-[#395A3A] hover:bg-[#f0f4eb]' : 'text-[#141c0d]/20 cursor-not-allowed'}`}
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}