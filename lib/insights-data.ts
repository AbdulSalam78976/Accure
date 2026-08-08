export interface InsightData {
  id: string;
  title: string;
  description: string;
  externalHref: string;
  iconSrc: string;
  accent: string;
}

export const insights: InsightData[] = [
  {
    id: 'digital-gov',
    title: 'Modernizing government, one service at a time',
    description: "OECD's 2026 outlook on moving governments from digital foundations to measurable citizen impact.",
    externalHref: 'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en.html',
    iconSrc: '/images/government.png',
    accent: '#B7D69A',
  },
  {
    id: 'it-infra',
    title: 'Migrating mission-critical systems without downtime',
    description: "AWS's Well-Architected Migration Lens — the practices that keep critical workloads live during a cloud move.",
    externalHref: 'https://docs.aws.amazon.com/wellarchitected/latest/migration-lens/migration-lens.html',
    iconSrc: '/images/data-migration.png',
    accent: '#84B85C',
  },
  {
    id: 'smart-energy',
    title: 'Smart grids of the future',
    description: 'IT solutions to integrate large amounts of low voltage consumers.',
    externalHref: 'https://www.iea.org/articles/managing-large-amounts-of-distributed-energy-resources-on-electricity-grids',
    iconSrc: '/images/power.png',
    accent: '#4C7A38',
  },
  {
    id: 'water-systems',
    title: 'HyQuant Non-contact radar sensors',
    description: 'Discover our series of small yet mighty sensors.',
    externalHref: 'https://pubs.usgs.gov/publication/70192079',
    iconSrc: '/images/water-level.png',
    accent: '#2F6F63',
  },
  {
    id: 'environment',
    title: 'The real costs of climate change',
    description: 'A report for preparing against natural disasters.',
    externalHref: 'https://wmo.int/media/news/economic-costs-of-weather-related-disasters-soars-early-warnings-save-lives',
    iconSrc: '/images/natural-disaster.png',
    accent: '#6EA24A',
  },
];
