import { Landmark, Server, Zap, Droplets, Leaf, type LucideIcon } from 'lucide-react';

export interface SectorData {
  id: string;
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent: string;
  checklist: string[];
}

export const sectors: SectorData[] = [
  {
    id: 'digital-gov',
    title: 'Digital Governance & Government',
    href: '/sectors/digital-gov',
    description:
      'We design secure, policy-ready digital services for government and public institutions — from citizen identity to compliant, governed data platforms.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200',
    accent: '#243A1E',
    checklist: [
      'Secure citizen portals & service journeys',
      'Digital identity & authentication',
      'Data governance & compliance frameworks',
      'Smart city data platforms',
      'Workflow automation for public agencies',
      'Government cloud solutions',
    ],
  },
  {
    id: 'it-infra',
    title: 'Enterprise IT Infrastructure & Cloud',
    href: '/sectors/it-infra',
    description:
      'We simplify complex technology estates with resilient cloud, networking, and operations strategies that keep business-critical services running.',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    accent: '#395A3A',
    checklist: [
      'Hybrid & multi-cloud architecture',
      'DevOps & CI/CD pipelines',
      'Network infrastructure design',
      'Disaster recovery & continuity planning',
      'Managed support & observability',
      'Operations automation',
    ],
  },
  {
    id: 'smart-energy',
    title: 'Smart Energy & Smart Grid',
    href: '/sectors/smart-energy',
    description:
      'We help utilities and energy operators gain visibility and resilience through analytics, control systems, and connected field devices.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1200',
    accent: '#4C7A38',
    checklist: [
      'AI-driven demand forecasting',
      'IoT sensor networks & telemetry',
      'Micro-grid management',
      'Distribution network / smart grid ops',
      'Energy trading & procurement systems',
      'Customer engagement platforms',
    ],
  },
  {
    id: 'water-systems',
    title: 'Hydromet for Water & Weather',
    href: '/sectors/water-systems',
    description:
      'We combine sensing, analytics, and decision support so water and weather organizations can respond faster and operate with confidence.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200',
    accent: '#2F6F63',
    checklist: [
      'Real-time sensor integration',
      'Predictive hydrological modeling',
      'Water quality monitoring',
      'Flood & weather alerting systems',
      'Water utilities & wastewater ops',
      'Operational reporting dashboards',
    ],
  },
  {
    id: 'environment',
    title: 'Environmental Management',
    href: '/sectors/environment',
    description:
      'We turn monitoring, reporting, and compliance data into practical sustainability programs and informed decisions.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200',
    accent: '#6EA24A',
    checklist: [
      'Environmental monitoring & reporting',
      'ESG & sustainability data workflows',
      'GIS-based environmental insight',
      'Carbon footprint analytics',
      'Biodiversity mapping',
      'Regulatory compliance support',
    ],
  },
];

export function getSectorById(id: string): SectorData | undefined {
  return sectors.find((sector) => sector.id === id);
}
