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
  { label: 'Funciones', href: '#features' },
  { label: 'Impacto', href: '#stats' },
  { label: 'Planes', href: '#pricing' },
  { label: 'Bancos CR', href: '#integrations' },
];

export const HERO_CONTENT = {
  brand: 'Kora',
  line1: 'Tesorería moderna en',
  line2Highlight: 'Colones',
  line2End: 'y SINPE.',
  subtitle:
    'Kora conecta tus cuentas del BAC, BCR, BN y SINPE empresarial con tipo de cambio MONEX en tiempo real, conciliación automática y liquidez en colones y dólares.',
  ctaLabel: 'Conectar banca CR',
  ctaHref: '#pricing',
};

export const STATS_ITEMS: StatItem[] = [
  { value: '500+', label: 'Empresas en Costa Rica' },
  { value: '80%', label: 'Cierre contable más rápido' },
  { value: '₡120B+', label: 'Procesados vía SINPE e IBAN' },
];

export const FEATURES_CONTENT = {
  badge: 'PLATAFORMA',
  titleStart: 'Control',
  titleMuted1: 'total para',
  titleMuted2: 'finanzas',
  titleEnd: 'en Costa Rica',
  subtitle: 'Centraliza cuentas en colones y dólares con tipo de cambio MONEX y flujo de caja al día.',
};

export const WALLET_DATA = {
  title: 'Tesorería multimoneda y SINPE',
  description:
    'Consolida saldos en colones, dólares y euros de BAC, BCR, BN y Banco Popular en un solo panel con tipo de cambio del BCCR.',
  balanceLabel: 'Liquidez total',
  currencySelector: 'CRC',
  balanceValue: '₡138,450,200',
  trendText: '6.4% vs. mes anterior',
  walletsHeading: 'Cuentas y divisas',
  seeAllLabel: 'Ver todas',
  currencies: [
    { code: 'CRC', amount: '₡138,450,200', status: 'Activa' },
    { code: 'USD', amount: '$263,724.32', status: 'Activa' },
    { code: 'EUR', amount: '€ 63,275.45', status: 'Activa' },
    { code: 'USDC', amount: '$ 48,920.00', status: 'Activa' },
  ] as WalletCurrency[],
};

export const PROFIT_LOSS_DATA = {
  title: 'Flujo de caja y Hacienda',
  description:
    'Visualiza ingresos, gastos deducibles y ejecución presupuestaria con reportes listos para cierre fiscal y Hacienda.',
  overviewLabel: 'Ejecución de gastos',
  timeframeLabel: 'Anual',
  spentValue: '₡18,420,000',
  budgetValue: 'de ₡25,000,000',
  legendLow: '<₡250k',
  legendHigh: '>₡250k',
  months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
};

export const INTEGRATIONS_CONTENT = {
  badge: 'ECOSISTEMA CR',
  titleStart: 'Conexión',
  titleMuted1: 'directa con',
  titleMuted2: 'la banca',
  titleEnd: 'costarricense',
  subtitle: 'Integra Kora con BAC, Banco Nacional, BCR, Banco Popular, BCCR, cooperativas, SINPE y tu ERP.',
};

export const PRICING_CONTENT = {
  badge: 'Planes',
  titleStart: 'Planes',
  titleMuted1: 'creados para',
  titleMuted2: 'equipos',
  titleEnd: 'financieros',
  subtitle: 'Desde pymes en crecimiento hasta corporativos multibanco y zonas francas en Costa Rica.',
  tiers: [
    {
      id: 'starter',
      name: 'Plan pyme CR',
      description:
        'Ideal para pymes costarricenses que buscan automatizar su conciliación en colones y dólares.',
      monthlyPrice: '$29',
      annualPrice: '$24',
      periodLabel: '/ mes',
      ctaLabel: 'Comenzar ahora',
      features: [
        'Conciliación con 2 bancos de Costa Rica',
        'Control de transferencias SINPE e IBAN',
        'Validación de factura electrónica de Hacienda',
        'Hasta 3 miembros del equipo',
        'Soporte local en horario CR',
      ],
    },
    {
      id: 'professional',
      name: 'Plan empresarial',
      description:
        'Para empresas en crecimiento con cuentas en múltiples bancos, cooperativas y divisas.',
      monthlyPrice: '$99',
      annualPrice: '$79',
      periodLabel: '/ mes',
      ctaLabel: 'Probar 14 días gratis',
      recommended: true,
      recommendedLabel: 'Recomendado para gerentes financieros',
      features: [
        'Todo lo incluido en el plan pyme CR',
        'Conexión ilimitada a bancos y cooperativas CR',
        'Tipo de cambio MONEX (BCCR) en tiempo real',
        'Reportes ejecutivos y flujo multimoneda',
        'Hasta 20 miembros del equipo',
        'Soporte prioritario en Costa Rica',
      ],
    },
    {
      id: 'enterprise',
      name: 'Plan corporativo',
      description:
        'Para grupos empresariales y zonas francas que requieren dispersión masiva, controles y ERP.',
      monthlyPrice: 'A medida',
      annualPrice: 'A medida',
      periodLabel: '',
      ctaLabel: 'Hablar con ventas',
      features: [
        'Todo lo incluido en el plan empresarial',
        'Usuarios y cédulas jurídicas ilimitadas',
        'Integración ERP (SAP, Softland CR, Exactus)',
        'Dispersión masiva de planillas e IBAN',
        'Seguridad y trazabilidad estándar SUGEF',
        'Gerente de cuenta dedicado en San José',
      ],
    },
  ] as PricingTier[],
};

export const FOOTER_CONTENT = {
  brand: 'kora.',
  tagline:
    'Impulsa tu equipo financiero en Costa Rica con conciliación multibanco, control de SINPE y liquidez en colones y dólares.',
  newsletterTitle: 'Actualidad financiera CR',
  newsletterPlaceholder: 'Ingresa tu correo corporativo',
  newsletterHelper:
    'Recibe análisis del tipo de cambio MONEX, actualizaciones del BCCR y novedades de producto.',
  copyright: '© 2026 Kora Costa Rica S.A. Todos los derechos reservados.',
  legalLinks: [
    { label: 'Términos y condiciones', href: '#terms' },
    { label: 'Política de privacidad', href: '#privacy' },
  ],
  columns: [
    {
      heading: 'Empresa',
      links: [
        { label: 'Plataforma', href: '#features' },
        { label: 'Nosotros', href: '#stats' },
        { label: 'Funciones', href: '#features' },
        { label: 'Planes', href: '#pricing' },
        { label: 'Carreras', href: '#footer' },
        { label: 'Ayuda', href: '#footer' },
      ],
    },
    {
      heading: 'Soluciones',
      links: [
        { label: 'Tesorería en colones', href: '#features' },
        { label: 'Conciliación bancaria', href: '#features' },
        { label: 'Tipo de cambio MONEX', href: '#features' },
        { label: 'Pagos SINPE e IBAN', href: '#features' },
        { label: 'Reportes para Hacienda', href: '#features' },
        { label: 'Flujo de caja', href: '#features' },
      ],
    },
    {
      heading: 'Recursos',
      links: [
        { label: 'Blog financiero CR', href: '#footer' },
        { label: 'Guía MONEX y BCCR', href: '#footer' },
        { label: 'Casos de éxito', href: '#footer' },
        { label: 'Centro de ayuda', href: '#footer' },
        { label: 'Documentación de API', href: '#integrations' },
        { label: 'Novedades', href: '#footer' },
      ],
    },
    {
      heading: 'Contacto',
      links: [
        { label: 'hola@kora.cr', href: 'mailto:hola@kora.cr' },
        { label: '+506 2255 8888', href: 'tel:+50622558888' },
        { label: 'San José, Costa Rica', href: '#footer' },
      ],
    },
  ] as FooterColumn[],
};
