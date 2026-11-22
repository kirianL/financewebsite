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
    'Kora conecta tus cuentas del BAC, BCR, BN y SINPE Empresarial con tipo de cambio MONEX en tiempo real, conciliación automática y liquidez en colones y dólares.',
  ctaLabel: 'Conectar banca CR',
  ctaHref: '#pricing',
};

export const STATS_ITEMS: StatItem[] = [
  { value: '500+', label: 'Empresas en Costa Rica' },
  { value: '80%', label: 'Cierre Contable Más Rápido' },
  { value: '₡120B+', label: 'Procesados vía SINPE e IBAN' },
];

export const FEATURES_CONTENT = {
  badge: 'PLATAFORMA',
  titleStart: 'Control',
  titleMuted1: 'Total Para',
  titleMuted2: 'Finanzas',
  titleEnd: 'En Costa Rica',
  subtitle: 'Centraliza cuentas en colones y dólares con tipo de cambio MONEX y flujo de caja al día.',
};

export const WALLET_DATA = {
  title: 'Tesorería Multi-Moneda y SINPE',
  description:
    'Consolida saldos en colones, dólares y euros de BAC, BCR, BN y Banco Popular en un solo panel con tipo de cambio BCCR.',
  balanceLabel: 'Liquidez Total',
  currencySelector: 'CRC',
  balanceValue: '₡138,450,200',
  trendText: '6.4% vs. mes anterior',
  walletsHeading: 'Cuentas y Divisas',
  seeAllLabel: 'Ver todas',
  currencies: [
    { code: 'CRC', amount: '₡138,450,200', status: 'SINPE Activo' },
    { code: 'USD', amount: '$263,724.32', status: 'MONEX Activo' },
    { code: 'EUR', amount: '€ 63,275.45', status: 'IBAN Activo' },
    { code: 'USDC', amount: '$ 48,920.00', status: 'Onchain CR' },
  ] as WalletCurrency[],
};

export const PROFIT_LOSS_DATA = {
  title: 'Flujo de Caja y Hacienda',
  description:
    'Visualiza ingresos, gastos deducibles y ejecución presupuestaria con reportes listos para cierre fiscal y Hacienda.',
  overviewLabel: 'Ejecución de Gastos',
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
  titleMuted1: 'Directa Con',
  titleMuted2: 'La Banca',
  titleEnd: 'Costarricense',
  subtitle: 'Integra Kora con BAC, Banco Nacional, BCR, Banco Popular, BCCR, cooperativas, SINPE y tu ERP.',
};

export const PRICING_CONTENT = {
  badge: 'Planes',
  titleStart: 'Planes',
  titleMuted1: 'Creados Para',
  titleMuted2: 'Equipos',
  titleEnd: 'Financieros',
  subtitle: 'Desde pymes en crecimiento hasta corporativos multi-banco y zonas francas en Costa Rica.',
  tiers: [
    {
      id: 'starter',
      name: 'Plan Pyme CR',
      description:
        'Ideal para pymes costarricenses que buscan automatizar su conciliación en colones y dólares.',
      monthlyPrice: '$29',
      annualPrice: '$24',
      periodLabel: '/ mes',
      ctaLabel: 'Comenzar Ahora',
      features: [
        'Conciliación con 2 bancos de Costa Rica',
        'Control de transferencias SINPE e IBAN',
        'Validación de Factura Electrónica Hacienda',
        'Hasta 3 miembros del equipo',
        'Soporte local en horario CR',
      ],
    },
    {
      id: 'professional',
      name: 'Plan Empresarial',
      description:
        'Para empresas en crecimiento con cuentas en múltiples bancos, cooperativas y divisas.',
      monthlyPrice: '$99',
      annualPrice: '$79',
      periodLabel: '/ mes',
      ctaLabel: 'Probar 14 Días Gratis',
      recommended: true,
      recommendedLabel: 'Recomendado para Gerentes Financieros',
      features: [
        'Todo lo incluido en Plan Pyme CR',
        'Conexión ilimitada a bancos y cooperativas CR',
        'Tipo de cambio MONEX (BCCR) en tiempo real',
        'Reportes ejecutivos y flujo multi-moneda',
        'Hasta 20 miembros del equipo',
        'Soporte prioritario en Costa Rica',
      ],
    },
    {
      id: 'enterprise',
      name: 'Plan Corporativo',
      description:
        'Para grupos empresariales y zonas francas que requieren dispersión masiva, controles y ERP.',
      monthlyPrice: 'A medida',
      annualPrice: 'A medida',
      periodLabel: '',
      ctaLabel: 'Hablar con Ventas',
      features: [
        'Todo lo incluido en Plan Empresarial',
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
    'Impulsa tu equipo financiero en Costa Rica con conciliación multi-banco, control de SINPE y liquidez en colones y dólares.',
  newsletterTitle: 'Actualidad Financiera CR',
  newsletterPlaceholder: 'Ingresa tu correo corporativo',
  newsletterHelper:
    'Recibe análisis del tipo de cambio MONEX, actualizaciones del BCCR y novedades de producto.',
  copyright: '© 2026 Kora Costa Rica S.A. Todos los derechos reservados.',
  legalLinks: [
    { label: 'Términos y Condiciones', href: '#terms' },
    { label: 'Política de Privacidad', href: '#privacy' },
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
        { label: 'Tesorería en Colones', href: '#features' },
        { label: 'Conciliación Bancaria', href: '#features' },
        { label: 'Tipo de Cambio MONEX', href: '#features' },
        { label: 'Pagos SINPE e IBAN', href: '#features' },
        { label: 'Reportes Hacienda', href: '#features' },
        { label: 'Flujo de Caja', href: '#features' },
      ],
    },
    {
      heading: 'Recursos',
      links: [
        { label: 'Blog Financiero CR', href: '#footer' },
        { label: 'Guía MONEX y BCCR', href: '#footer' },
        { label: 'Casos de Éxito', href: '#footer' },
        { label: 'Centro de Ayuda', href: '#footer' },
        { label: 'Documentación API', href: '#integrations' },
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
