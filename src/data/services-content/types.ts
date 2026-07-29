export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  businessType: string;
  suitable: boolean;
  reason: string;
}

export interface PricingTier {
  name: string;
  volume: string;
  description: string;
  highlight?: boolean;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceTableRow {
  label: string;
  value: string;
}

export interface ServiceContent {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    ctaText: string;
    ctaMsg: string;
  };
  intro: {
    heading: string;
    body: string[];
  };
  benefits: ServiceBenefit[];
  howItWorks: ServiceStep[];
  comparisonTable: {
    heading: string;
    rows: ComparisonRow[];
  };
  pricingSection?: {
    heading: string;
    subheading: string;
    tiers: PricingTier[];
    footer: string;
  };
  technicalDeepDive: {
    heading: string;
    subheading: string;
    body: string[];
    statsTable?: ServiceTableRow[];
  };
  trustSection: {
    heading: string;
    points: string[];
  };
  faqs: ServiceFAQ[];
  relatedServices: {
    slug: string;
    title: string;
    description: string;
  }[];
}
