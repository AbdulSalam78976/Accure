import { Landmark, Server, Zap, Droplets, Leaf, type LucideIcon } from 'lucide-react';

export interface SectorService {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface SectorData {
  id: string;
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent: string;
  checklist: string[];
  checklistDescriptions: string[];
  services: SectorService[];
  galleryImages: GalleryImage[];
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
    checklistDescriptions: [
      'We design end-to-end citizen-facing digital services that are accessible, secure, and aligned with government service standards — reducing friction for residents and back-office cost for agencies.',
      'We implement federated identity, multi-factor authentication, and PKI-based credential frameworks that meet national and international public-sector security requirements.',
      'We establish the policies, metadata standards, data lineage tools, and governance structures that allow government agencies to trust, share, and act on their data safely.',
      'We integrate IoT sensors, open data feeds, and departmental systems into unified urban intelligence platforms — enabling evidence-based decisions across transport, utilities, and public safety.',
      'We automate document-heavy and approval-driven processes for licensing, procurement, HR, and finance — cutting processing times from weeks to hours.',
      'We architect and migrate government workloads to sovereign or hybrid cloud environments that comply with local data residency and security classification requirements.',
    ],
    services: [
      {
        title: 'Digital Service Delivery',
        description: 'End-to-end design and delivery of citizen-facing digital services, including portals, mobile apps, and API integrations with back-office systems.',
        icon: '🖥',
      },
      {
        title: 'Identity & Access Management',
        description: 'Federated identity platforms, national digital ID integration, MFA, and role-based access control for government agencies and their users.',
        icon: '🔐',
      },
      {
        title: 'Government Cloud & Data',
        description: 'Sovereign and hybrid cloud architecture, data platform implementation, and governance frameworks tailored to public-sector compliance requirements.',
        icon: '☁',
      },
    ],
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&q=80&w=800',
        alt: 'Government digital services',
        caption: 'Citizen service delivery',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
        alt: 'Government operations centre',
        caption: 'Operations & oversight',
      },
      {
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        alt: 'Data and analytics',
        caption: 'Data-driven governance',
      },
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
    checklistDescriptions: [
      'We design cloud architectures that distribute workloads across on-premise, private, and public cloud environments — giving organisations flexibility, cost control, and resilience without vendor lock-in.',
      'We implement automated build, test, and deployment pipelines that accelerate release cycles, reduce human error, and maintain consistent quality across complex multi-service environments.',
      'We design and deliver enterprise networks — including SD-WAN, zero-trust segmentation, and data centre interconnects — that are secure, high-performance, and operationally manageable at scale.',
      'We architect and test business continuity plans, failover systems, and backup strategies that guarantee recovery time objectives for mission-critical services.',
      'We provide 24/7 managed support backed by observability stacks that give operations teams full visibility of infrastructure health, application performance, and security posture.',
      'We replace manual operational tasks — provisioning, patching, compliance reporting — with infrastructure-as-code and runbook automation, freeing teams to focus on higher-value work.',
    ],
    services: [
      {
        title: 'Cloud Architecture & Migration',
        description: 'Hybrid and multi-cloud design, workload migration planning, cost optimisation, and cloud-native refactoring for enterprise and government estates.',
        icon: '☁',
      },
      {
        title: 'Network & Security Infrastructure',
        description: 'Enterprise network design, SD-WAN, zero-trust architecture, and security operations centre integration for complex, distributed environments.',
        icon: '🔒',
      },
      {
        title: '24/7 Managed Support',
        description: 'Round-the-clock monitoring, incident response, and managed operations backed by SLAs — ensuring uptime and performance for business-critical systems.',
        icon: '⚙',
      },
    ],
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1573164713712-03790a178651?auto=format&fit=crop&q=80&w=800',
        alt: 'Data centre operations',
        caption: 'Infrastructure at scale',
      },
      {
        src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
        alt: 'Cloud and networking',
        caption: 'Cloud & connectivity',
      },
      {
        src: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800',
        alt: 'IT operations centre',
        caption: 'Managed operations',
      },
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
    checklistDescriptions: [
      'We build machine-learning models that forecast electricity demand at granular time horizons — enabling utilities to optimise generation dispatch, reduce balancing costs, and improve grid stability.',
      'We deploy and integrate IoT sensor networks across substations, feeders, and generation assets — providing real-time telemetry that feeds into SCADA, EMS, and analytics platforms.',
      'We design and implement micro-grid control systems that manage local generation, storage, and load — ensuring continuity of supply in islanded and grid-connected configurations.',
      'We integrate SCADA, DMS, and advanced metering infrastructure to give operators real-time visibility of distribution network state and the tools to respond to faults faster.',
      'We build systems that support energy procurement, scheduling, and bilateral and exchange-based trading — integrated with settlement and risk management workflows.',
      'We develop customer-facing platforms — portals, apps, and chatbots — that help utilities deliver usage insights, demand response programmes, and self-service account management.',
    ],
    services: [
      {
        title: 'Grid Analytics & Forecasting',
        description: 'AI-powered demand forecasting, grid state estimation, and fault detection systems that give operators the intelligence to act faster and more efficiently.',
        icon: '⚡',
      },
      {
        title: 'IoT & SCADA Integration',
        description: 'End-to-end IoT sensor deployment, SCADA integration, and real-time telemetry platforms connecting field assets to operational decision systems.',
        icon: '📡',
      },
      {
        title: 'Smart Grid Operations',
        description: 'Distribution management, advanced metering infrastructure, and micro-grid control systems that modernise how utilities operate and serve their customers.',
        icon: '🔋',
      },
    ],
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
        alt: 'Renewable energy field',
        caption: 'Renewable integration',
      },
      {
        src: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800',
        alt: 'Power transmission lines',
        caption: 'Grid infrastructure',
      },
      {
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        alt: 'Energy control room',
        caption: 'Control & monitoring',
      },
    ],
  },

  {
    id: 'water-systems',
    title: 'Hydromet for Water & Weather',
    href: '/sectors/water-systems',
    description:
      'We combine sensing, analytics, and decision support so water and weather organisations can respond faster and operate with confidence.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200',
    accent: '#2F6F63',
    checklist: [
      'Real-time sensor integration',
      'Predictive hydrological modelling',
      'Water quality monitoring',
      'Flood & weather alerting systems',
      'Water utilities & wastewater ops',
      'Operational reporting dashboards',
    ],
    checklistDescriptions: [
      'We integrate radar, acoustic Doppler, pressure transducer, and ultrasonic sensors into unified data acquisition platforms — delivering continuous, quality-controlled real-time data streams from across river basins and reservoirs.',
      'We build hydrological models that combine rainfall, soil moisture, and river level data to forecast flow conditions hours or days ahead — giving operators time to act before thresholds are breached.',
      'We deploy multi-parameter sensor networks and laboratory information management integrations that provide continuous water quality monitoring for drinking water, irrigation, and environmental compliance purposes.',
      'We design and implement early warning systems that combine sensor thresholds, weather forecast data, and hydrological model outputs to trigger timely, targeted alerts for communities and emergency responders.',
      'We integrate SCADA, asset management, and billing systems for water utilities — streamlining the operational data flows that underpin network management, leakage detection, and customer service.',
      'We build operational dashboards and automated reporting tools that give water managers, regulators, and emergency coordinators the real-time and historical views they need to make confident decisions.',
    ],
    services: [
      {
        title: 'Hydromet Sensor Networks',
        description: 'Design, deployment, and integration of hydrological and meteorological sensor networks — from river gauges and rain radars to weather stations and remote telemetry units.',
        icon: '🌊',
      },
      {
        title: 'Flood Early Warning Systems',
        description: 'End-to-end early warning systems combining sensor data, hydrological modelling, and multi-channel alerting — delivering actionable warnings to communities and emergency services.',
        icon: '⚠',
      },
      {
        title: 'Water Utility Operations',
        description: 'SCADA and operational technology integration for water treatment, distribution, and wastewater systems — improving visibility, efficiency, and regulatory compliance.',
        icon: '💧',
      },
    ],
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1503683791152-ab9a5fd6edf6?auto=format&fit=crop&q=80&w=800',
        alt: 'River monitoring station',
        caption: 'River basin monitoring',
      },
      {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800',
        alt: 'Water reservoir',
        caption: 'Reservoir management',
      },
      {
        src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=800',
        alt: 'Weather monitoring equipment',
        caption: 'Meteorological systems',
      },
    ],
  },

  {
    id: 'environment',
    title: 'Environmental Management',
    href: '/sectors/environment',
    description:
      'We turn monitoring, reporting, and compliance data into practical sustainability programmes and informed decisions.',
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
    checklistDescriptions: [
      'We deploy IoT sensor networks and integrate satellite imagery feeds to provide governments and industry clients with continuous monitoring of air quality, noise, soil, and water environmental parameters.',
      'We design data pipelines and reporting platforms that collect, validate, and present ESG metrics — enabling organisations to meet disclosure requirements and track progress against sustainability commitments.',
      'We build GIS-integrated environmental intelligence platforms that layer sensor data, land-use maps, and regulatory boundaries — giving environmental managers spatial context for every decision.',
      'We implement carbon accounting systems that aggregate emissions data across Scope 1, 2, and 3 — providing the auditability and granularity needed for credible net-zero reporting.',
      'We integrate remote sensing, camera trap, and species occurrence datasets into biodiversity monitoring platforms that help governments and conservation organisations track ecosystem health over time.',
      'We build compliance management systems that map regulatory obligations to operational data, automate deadline tracking, and generate the evidence packs needed for regulator submissions.',
    ],
    services: [
      {
        title: 'Environmental Monitoring Platforms',
        description: 'Integrated platforms combining IoT sensors, satellite data, and analytics to provide continuous environmental monitoring across air, water, soil, and biodiversity indicators.',
        icon: '🌿',
      },
      {
        title: 'ESG Data & Reporting',
        description: 'Data pipelines, dashboards, and reporting tools that automate the collection and disclosure of ESG metrics — built for transparency and audit readiness.',
        icon: '📊',
      },
      {
        title: 'GIS & Spatial Analytics',
        description: 'GIS-based environmental intelligence platforms that integrate sensor feeds, land-use data, and regulatory mapping to support spatial decision-making.',
        icon: '🗺',
      },
    ],
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
        alt: 'Forest environment monitoring',
        caption: 'Ecosystem monitoring',
      },
      {
        src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
        alt: 'Environmental data centre',
        caption: 'Environmental analytics',
      },
      {
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=800',
        alt: 'Clean water and nature',
        caption: 'Sustainability outcomes',
      },
    ],
  },
];

export function getSectorById(id: string): SectorData | undefined {
  return sectors.find((s) => s.id === id);
}
