export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WalletCurrency {
  code: string;
  amount: string;
  status: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  periodLabel: string;
  ctaLabel: string;
  recommended?: boolean;
  recommendedLabel?: string;
  features: string[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Use cases', href: '#stats' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integrations', href: '#integrations' },
];

export const HERO_CONTENT = {
  brand: 'Kora',
  line1: 'A softer way to hold',
  line2Highlight: 'Colones',
  line2End: 'Onchain.',
  subtitle:
    'Kora CRC is a stable digital colón crafted in Costa Rica for seamless DeFi access, transparent yield, and calm long-term growth.',
  ctaLabel: 'Start holding CRC',
  ctaHref: '#pricing',
};

export const STATS_ITEMS: StatItem[] = [
  { value: '500+', label: 'Companies Optimizing' },
  { value: '80%', label: 'Faster Financial Reporting' },
  { value: '$20B+', label: 'Financial Data Processed' },
];

export const FEATURES_CONTENT = {
  badge: 'OUR FEATURES',
  titleStart: 'Essential',
  titleMuted1: 'Tools For',
  titleMuted2: 'Finance',
  titleEnd: 'Managers',
  subtitle: 'Optimize finances with better insights and forecasting.',
};

export const WALLET_DATA = {
  title: 'Multi-Currency Wallet',
  description:
    'Manage multiple currencies from a single dashboard. Monitor balances, track account activity, and gain full visibility.',
  balanceLabel: 'Total Balance',
  currencySelector: 'USD',
  balanceValue: '$263,724.32',
  trendText: '5% Than last month',
  walletsHeading: 'Wallets',
  seeAllLabel: 'See all',
  currencies: [
    { code: 'USD', amount: '$263,724.32', status: 'Active' },
    { code: 'CRC', amount: '₡ 963,164.98', status: 'Active' },
    { code: 'EUR', amount: '€ 63,275.45', status: 'Active' },
    { code: 'KRW', amount: '₩ 3,253.12', status: 'Active' },
  ] as WalletCurrency[],
};

export const PROFIT_LOSS_DATA = {
  title: 'Profit & Loss Tracking',
  description:
    'Visualize profits and losses with clear charts and reports. Track financial trends and make informed decisions.',
  overviewLabel: 'Spending Overview',
  timeframeLabel: 'Yearly',
  spentValue: '$33,624.32',
  budgetValue: 'of $50,000.00',
  legendLow: '<$500',
  legendHigh: '>$500',
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export const INTEGRATIONS_CONTENT = {
  badge: 'INTEGRATIONS',
  titleStart: 'Seamless',
  titleMuted1: 'Financial',
  titleMuted2: 'Ecosystem',
  titleEnd: 'Integration',
  subtitle: 'Connect Kora with your accounting, ERP, banking, and BI systems.',
};

export const PRICING_CONTENT = {
  badge: 'Pricing',
  titleStart: 'Plans',
  titleMuted1: 'Built For',
  titleMuted2: 'Finance',
  titleEnd: 'Teams',
  subtitle: 'From growing businesses to enterprise finance departments.',
  tiers: [
    {
      id: 'starter',
      name: 'Starter Plan',
      description:
        'Perfect for small finance teams getting started with AI-powered financial analysis.',
      monthlyPrice: '$29',
      annualPrice: '$24',
      periodLabel: '/ month',
      ctaLabel: 'Get Started',
      features: [
        'AI-powered financial insights',
        'Basic reporting dashboards',
        'Cash flow monitoring',
        'Up to 3 team members',
        'Email support',
      ],
    },
    {
      id: 'professional',
      name: 'Professional Plan',
      description:
        'Built for growing organizations that need deeper financial visibility and forecasting capabilities.',
      monthlyPrice: '$99',
      annualPrice: '$79',
      periodLabel: '/ month',
      ctaLabel: 'Start Free Trial',
      recommended: true,
      recommendedLabel: 'Recommended for Finance Managers',
      features: [
        'Everything in Starter',
        'Advanced forecasting & scenario planning',
        'Automated management reports',
        'Custom KPI dashboards',
        'Up to 20 team members',
        'Priority support',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      description:
        'Designed for large organizations requiring advanced controls, integrations, and scalability.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      periodLabel: '',
      ctaLabel: 'Contact Sales',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'ERP & accounting integrations',
        'Custom AI models and workflows',
        'Enterprise-grade security & compliance',
        'Dedicated success manager',
      ],
    },
  ] as PricingTier[],
};

export const FOOTER_CONTENT = {
  brand: 'kora.',
  tagline:
    'Empower finance teams with AI-driven insights, automated reporting, and smarter decision-making.',
  newsletterTitle: 'Stay Ahead in Finance',
  newsletterPlaceholder: 'Enter your email',
  newsletterHelper:
    'Get the latest finance insights, AI trends, and product updates delivered to your inbox.',
  copyright: '© 2026 Kora Costa Rica S.A. All rights reserved.',
  legalLinks: [
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ],
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Platform', href: '#features' },
        { label: 'About', href: '#stats' },
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Careers', href: '#footer' },
        { label: 'Help', href: '#footer' },
      ],
    },
    {
      heading: 'Solutions',
      links: [
        { label: 'Financial Planning', href: '#features' },
        { label: 'Budget Management', href: '#features' },
        { label: 'Cash Flow Forecasting', href: '#features' },
        { label: 'Financial Reporting', href: '#features' },
        { label: 'Variance Analysis', href: '#features' },
        { label: 'Executive Dashboards', href: '#features' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '#footer' },
        { label: 'AI for Finance Guide', href: '#footer' },
        { label: 'Case Studies', href: '#footer' },
        { label: 'Knowledge Base', href: '#footer' },
        { label: 'API Documentation', href: '#integrations' },
        { label: 'Product Updates', href: '#footer' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { label: 'hello@kora.cr', href: 'mailto:hello@kora.cr' },
        { label: '+506 2255 8888', href: 'tel:+50622558888' },
        { label: 'San José, Costa Rica', href: '#footer' },
      ],
    },
  ] as FooterColumn[],
};
