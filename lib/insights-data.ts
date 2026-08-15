export interface InsightData {
  id: string;
  title: string;
  description: string;
  externalHref: string;
  iconSrc: string;
  imageSrc: string;
  accent: string;
  tag: string;
}

export interface NewsItem {
  id: string;
  source: string;
  date: string;
  headline: string;
  summary: string;
  href: string;
  tag: string;
  accent: string;
}

// ─── Curated reports & research ──────────────────────────────────────────────
export const insights: InsightData[] = [
  {
    id: 'digital-gov-oecd',
    title: 'Modernising government, one service at a time',
    description:
      "OECD's Digital Government Outlook 2026 tracks how governments are moving beyond digital foundations toward measurable citizen impact — from open APIs to whole-of-government data strategies.",
    externalHref: 'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en.html',
    iconSrc: '/images/government.png',
    imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    accent: '#243A1E',
    tag: 'Digital Governance',
  },
  {
    id: 'digital-gov-gartner',
    title: 'The composable government enterprise',
    description:
      "Gartner's research on how public-sector CIOs are shifting to modular, API-first architectures that allow agencies to assemble capabilities rather than build monolithic systems from scratch.",
    externalHref: 'https://www.gartner.com/en/government/insights/digital-government',
    iconSrc: '/images/gov.jpg',
    imageSrc: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&q=80&w=800',
    accent: '#243A1E',
    tag: 'Digital Governance',
  },
  {
    id: 'it-infra-migration',
    title: 'Migrating mission-critical systems without downtime',
    description:
      "AWS's Well-Architected Migration Lens lays out the practices that keep critical government and enterprise workloads live during a cloud transition — from wave planning to cutover strategies.",
    externalHref: 'https://docs.aws.amazon.com/wellarchitected/latest/migration-lens/migration-lens.html',
    iconSrc: '/images/data-migration.png',
    imageSrc: 'https://images.unsplash.com/photo-1573164713712-03790a178651?auto=format&fit=crop&q=80&w=800',
    accent: '#395A3A',
    tag: 'IT Infrastructure',
  },
  {
    id: 'it-infra-zero-trust',
    title: 'Zero-trust architecture for critical infrastructure',
    description:
      "NIST's guidelines on implementing zero-trust principles in IT environments supporting operational technology — essential reading for any organisation integrating OT and IT networks.",
    externalHref: 'https://www.nist.gov/publications/zero-trust-architecture',
    iconSrc: '/images/it.png',
    imageSrc: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800',
    accent: '#395A3A',
    tag: 'IT Infrastructure',
  },
  {
    id: 'smart-energy-iea',
    title: 'Managing distributed energy resources on the grid',
    description:
      "The IEA examines how grid operators can integrate large volumes of low-voltage solar, wind, and storage assets — the defining integration challenge for smart energy systems in the next decade.",
    externalHref: 'https://www.iea.org/articles/managing-large-amounts-of-distributed-energy-resources-on-electricity-grids',
    iconSrc: '/images/power.png',
    imageSrc: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
    accent: '#4C7A38',
    tag: 'Smart Energy',
  },
  {
    id: 'smart-energy-irena',
    title: 'Smart grids and the energy transition',
    description:
      "IRENA's analysis of how grid modernisation, digital infrastructure, and system integration underpin every credible net-zero pathway — with practical guidance on where to invest first.",
    externalHref: 'https://www.irena.org/Energy-Transition/Technology/Smart-grids',
    iconSrc: '/images/smart-grid.png',
    imageSrc: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800',
    accent: '#4C7A38',
    tag: 'Smart Energy',
  },
  {
    id: 'water-usgs',
    title: 'Non-contact radar sensors for streamflow measurement',
    description:
      "USGS research on emerging non-contact radar and acoustic Doppler technologies that allow continuous, real-time discharge measurement without in-stream infrastructure — transforming hydromet networks.",
    externalHref: 'https://pubs.usgs.gov/publication/70192079',
    iconSrc: '/images/water-level.png',
    imageSrc: 'https://images.unsplash.com/photo-1503683791152-ab9a5fd6edf6?auto=format&fit=crop&q=80&w=800',
    accent: '#2F6F63',
    tag: 'Water & Hydromet',
  },
  {
    id: 'water-wmo',
    title: 'Strengthening hydrological monitoring networks',
    description:
      "WMO's guidance on building resilient national hydrological observation networks — covering sensor placement, data transmission, quality control, and integration with early-warning systems.",
    externalHref: 'https://library.wmo.int/records/item/68773-guidelines-on-the-role-of-national-meteorological-and-hydrological-services',
    iconSrc: '/images/hydromet.jpg',
    imageSrc: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800',
    accent: '#2F6F63',
    tag: 'Water & Hydromet',
  },
  {
    id: 'environment-wmo-costs',
    title: 'The economic costs of climate-driven disasters',
    description:
      "WMO data shows weather-related disaster costs have soared over five decades — but early-warning systems and integrated environmental monitoring demonstrably save lives and reduce economic loss.",
    externalHref: 'https://wmo.int/media/news/economic-costs-of-weather-related-disasters-soars-early-warnings-save-lives',
    iconSrc: '/images/natural-disaster.png',
    imageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    accent: '#6EA24A',
    tag: 'Environment',
  },
  {
    id: 'environment-unep',
    title: 'Digital tools for environmental monitoring',
    description:
      "UNEP's overview of how satellite imagery, IoT sensor networks, and AI-driven analytics are being deployed by governments to track deforestation, air quality, water stress, and biodiversity in near-real-time.",
    externalHref: 'https://www.unep.org/explore-topics/digital-transformations/what-we-do/environmental-data',
    iconSrc: '/images/envoir.webp',
    imageSrc: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    accent: '#6EA24A',
    tag: 'Environment',
  },
];

// ─── Industry news feed ───────────────────────────────────────────────────────
export const news: NewsItem[] = [
  {
    id: 'news-1',
    source: 'Reuters',
    date: 'Jul 2025',
    headline: 'Gulf states accelerate digital government overhaul ahead of Vision 2030 targets',
    summary:
      'Saudi Arabia, UAE, and Qatar are fast-tracking e-government integration projects as regional administrations race to meet ambitious digital transformation milestones set under national development plans.',
    href: 'https://www.reuters.com/world/middle-east/',
    tag: 'Digital Governance',
    accent: '#243A1E',
  },
  {
    id: 'news-2',
    source: 'BBC News',
    date: 'Jul 2025',
    headline: 'UK government announces £2.5bn investment in public sector cloud infrastructure',
    summary:
      'The UK Cabinet Office has confirmed a major multi-year cloud migration programme covering HMRC, the NHS, and the Home Office — the largest public-sector IT modernisation effort in a decade.',
    href: 'https://www.bbc.com/news/technology',
    tag: 'IT Infrastructure',
    accent: '#395A3A',
  },
  {
    id: 'news-3',
    source: 'IEA',
    date: 'Jun 2025',
    headline: 'Global electricity demand from data centres expected to double by 2030',
    summary:
      'IEA projects that AI workloads, crypto mining, and edge computing will push data-centre electricity consumption to over 1,000 TWh annually by 2030 — putting grid capacity planning under intense pressure.',
    href: 'https://www.iea.org/news',
    tag: 'Smart Energy',
    accent: '#4C7A38',
  },
  {
    id: 'news-4',
    source: 'Al Jazeera',
    date: 'Jun 2025',
    headline: 'Pakistan launches national flood early-warning network upgrade after 2024 losses',
    summary:
      'The Pakistan Meteorological Department has begun deploying next-generation hydromet sensor stations across 14 river basins following the catastrophic flood losses of 2024, backed by World Bank funding.',
    href: 'https://www.aljazeera.com/news/',
    tag: 'Water & Hydromet',
    accent: '#2F6F63',
  },
  {
    id: 'news-5',
    source: 'The Guardian',
    date: 'Jun 2025',
    headline: 'Africa faces $50bn annual climate adaptation gap as extreme weather intensifies',
    summary:
      'A joint UNEP and African Development Bank report finds that Sub-Saharan governments are spending less than a third of what is needed to build climate resilience — with environmental monitoring infrastructure cited as a critical gap.',
    href: 'https://www.theguardian.com/environment',
    tag: 'Environment',
    accent: '#6EA24A',
  },
  {
    id: 'news-6',
    source: 'MIT Technology Review',
    date: 'May 2025',
    headline: 'Sovereign AI clouds: why governments are building their own data infrastructure',
    summary:
      'A wave of national AI strategies is driving governments in the Middle East, Europe, and Asia to build sovereign cloud and data-centre infrastructure rather than rely solely on hyperscaler public clouds.',
    href: 'https://www.technologyreview.com/',
    tag: 'Digital Governance',
    accent: '#243A1E',
  },
  {
    id: 'news-7',
    source: 'Bloomberg',
    date: 'May 2025',
    headline: 'Smart grid investment hits record $90bn globally in 2025',
    summary:
      'Bloomberg NEF data shows utilities and governments committed a record $90 billion to grid modernisation in 2025, with the Middle East and Africa representing the fastest-growing region for smart-grid deployment.',
    href: 'https://www.bloomberg.com/energy',
    tag: 'Smart Energy',
    accent: '#4C7A38',
  },
  {
    id: 'news-8',
    source: 'WIRED',
    date: 'Apr 2025',
    headline: 'The cybersecurity crisis hiding inside critical infrastructure OT networks',
    summary:
      'As operational technology converges with IT across power grids, water utilities, and transport systems, security researchers are finding that legacy OT networks remain deeply vulnerable — with patching timelines measured in years, not weeks.',
    href: 'https://www.wired.com/category/security/',
    tag: 'IT Infrastructure',
    accent: '#395A3A',
  },
];
