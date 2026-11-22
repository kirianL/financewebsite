export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  badge: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  entity: string;
  sections: LegalSection[];
}

export const TERMS_CONTENT: LegalPageContent = {
  badge: 'Legal',
  title: 'Términos y condiciones',
  subtitle: 'Condiciones generales de acceso y uso de la plataforma de tesorería Kora en Costa Rica.',
  updatedAt: 'Última actualización: noviembre de 2026',
  entity: 'Kora Costa Rica S.A. · San José, Costa Rica',
  sections: [
    {
      id: 'objeto',
      heading: 'Objeto del servicio',
      paragraphs: [
        'Kora Costa Rica S.A. pone a disposición de pymes, grupos empresariales y departamentos financieros una plataforma web de tesorería multibanco para centralizar saldos, conciliar movimientos SINPE e IBAN, consultar el tipo de cambio MONEX del BCCR y preparar reportes contables para Hacienda.',
        'Al crear una cuenta, acceder al panel o utilizar cualquiera de nuestras integraciones bancarias y contables, el usuario y la entidad jurídica que representa aceptan quedar vinculados por estos términos.',
      ],
    },
    {
      id: 'alcance-regulatorio',
      heading: 'Alcance operativo y entidades conectadas',
      paragraphs: [
        'Kora opera como herramienta de visibilidad, conciliación y automatización financiera. Kora no es un banco, entidad financiera intermediaria ni custodio de fondos bajo la supervisión directa de la SUGEF; las cuentas y movimientos permanecen en las entidades bancarias del cliente (tales como BAC, BCR, Banco Nacional, Banco Popular y cooperativas autorizadas).',
      ],
      bullets: [
        'Los saldos y movimientos se muestran según la información recibida de los canales autorizados por el titular.',
        'Los tipos de cambio de referencia provienen de las publicaciones oficiales del BCCR y el mercado MONEX.',
        'Los reportes generados facilitan el cumplimiento ante Hacienda, sin sustituir el criterio del contador o asesor tributario de la empresa.',
      ],
    },
    {
      id: 'cuenta-acceso',
      heading: 'Cuenta, credenciales y usuarios autorizados',
      paragraphs: [
        'El representante o administrador de la empresa es responsable de asignar roles, custodiar las credenciales de acceso y revocar permisos cuando un colaborador deje de pertenecer a la organización.',
        'Toda actividad ejecutada desde una sesión autenticada se presume autorizada por la empresa titular. Ante cualquier sospecha de acceso no autorizado, el cliente deberá notificar de inmediato a hola@kora.cr.',
      ],
    },
    {
      id: 'uso-permitido',
      heading: 'Uso permitido y restricciones',
      paragraphs: [
        'La plataforma debe utilizarse exclusivamente para la gestión financiera legítima de la empresa suscrita. Queda prohibido intentar eludir controles de acceso, realizar ingeniería inversa sobre el software, automatizar consultas abusivas o emplear Kora para operaciones contrarias a la legislación costarricense.',
      ],
    },
    {
      id: 'planes-facturacion',
      heading: 'Planes, facturación y cancelación',
      paragraphs: [
        'Las suscripciones se facturan de forma mensual o anual según el plan seleccionado (Plan pyme CR, Plan empresarial o Plan corporativo). Los precios se expresan en dólares estadounidenses e incluyen los impuestos aplicables conforme a la normativa vigente en Costa Rica.',
        'El cliente puede cambiar de plan o solicitar la cancelación antes de la siguiente fecha de renovación desde su panel o escribiendo a soporte.',
      ],
    },
    {
      id: 'propiedad-intelectual',
      heading: 'Propiedad intelectual',
      paragraphs: [
        'La marca Kora, su código, interfaces, ilustraciones y documentación pertenecen a Kora Costa Rica S.A. Los datos financieros, comprobantes XML y reportes exportados pertenecen en todo momento al cliente.',
      ],
    },
    {
      id: 'ley-aplicable',
      heading: 'Legislación aplicable y contacto',
      paragraphs: [
        'Estos términos se rigen por las leyes de la República de Costa Rica. Cualquier consulta legal o contractual puede dirigirse a hola@kora.cr o al teléfono +506 2255 8888 en San José, Costa Rica.',
      ],
    },
  ],
};

export const PRIVACY_CONTENT: LegalPageContent = {
  badge: 'Privacidad',
  title: 'Política de privacidad',
  subtitle: 'Cómo recopilamos, protegemos y tratamos la información corporativa y financiera conforme a la Ley N.º 8968 de Costa Rica.',
  updatedAt: 'Última actualización: noviembre de 2026',
  entity: 'Responsable del tratamiento: Kora Costa Rica S.A.',
  sections: [
    {
      id: 'marco-legal',
      heading: 'Compromiso bajo la Ley N.º 8968',
      paragraphs: [
        'En Kora Costa Rica S.A. tratamos los datos personales y corporativos de acuerdo con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley N.º 8968) y los lineamientos de la Prodhab.',
        'Solo recopilamos la información estrictamente necesaria para operar el servicio de conciliación bancaria, emitir facturación electrónica y brindar soporte técnico en Costa Rica.',
      ],
    },
    {
      id: 'datos-recopilados',
      heading: 'Datos que recopilamos',
      paragraphs: [
        'Dependiendo del plan y las integraciones activadas por la empresa, podemos procesar las siguientes categorías de información:',
      ],
      bullets: [
        'Datos de identificación y contacto corporativo: nombre completo, correo empresarial, teléfono y cargo.',
        'Información bancaria autorizada: saldos, extractos, referencias SINPE, cuentas IBAN y comprobantes XML v4.4 de Hacienda.',
        'Registros técnicos de seguridad: dirección IP, marca temporal de inicio de sesión y bitácora de auditoría para trazabilidad estándar SUGEF.',
      ],
    },
    {
      id: 'finalidad',
      heading: 'Finalidad del tratamiento',
      paragraphs: [
        'Utilizamos la información exclusivamente para prestar el servicio contratado: conciliar movimientos bancarios, calcular flujos de caja en colones y dólares con tipo de cambio MONEX del BCCR, generar reportes para cierres contables y prevenir accesos no autorizados.',
        'Kora nunca vende, alquila ni comercializa datos financieros o personales con terceros para fines publicitarios.',
      ],
    },
    {
      id: 'seguridad',
      heading: 'Seguridad y cifrado',
      paragraphs: [
        'Todas las comunicaciones entre el navegador, nuestras APIs y los conectores bancarios viajan cifradas mediante TLS 1.3. Los datos en reposo se almacenan cifrados bajo estándares bancarios con aislamiento lógico por organización y controles de acceso basados en roles.',
      ],
    },
    {
      id: 'derechos-arco',
      heading: 'Derechos de acceso, rectificación y supresión',
      paragraphs: [
        'Como titular de los datos, puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación u oposición enviando una solicitud a hola@kora.cr. Atenderemos tu gestión dentro de los plazos establecidos por la legislación costarricense.',
      ],
    },
    {
      id: 'retencion',
      heading: 'Conservación de la información',
      paragraphs: [
        'Conservamos los registros mientras la cuenta permanezca activa y durante los plazos mínimos exigidos por la normativa tributaria y comercial de Costa Rica para comprobantes y trazabilidad financiera.',
      ],
    },
  ],
};

export type BlogCategory = 'Todos' | 'Tesorería' | 'Regulación CR' | 'MONEX y BCCR';

export interface BlogArticle {
  id: string;
  category: Exclude<BlogCategory, 'Todos'>;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readingMinutes: number;
  featured?: boolean;
  accent: 'sage' | 'espresso' | 'sand';
  body: {
    type: 'p' | 'h2' | 'ul';
    text?: string;
    items?: string[];
  }[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Todos',
  'Tesorería',
  'Regulación CR',
  'MONEX y BCCR',
];

export const BLOG_CONTENT = {
  badge: 'Blog financiero CR',
  titleStart: 'Guías prácticas para',
  titleEnd: 'finanzas en Costa Rica',
  subtitle:
    'Análisis sobre conciliación bancaria, tipo de cambio MONEX, SINPE empresarial y cierres contables para equipos financieros costarricenses.',
  articles: [
    {
      id: 'conciliacion-sinpe-multibanco',
      category: 'Tesorería',
      title: 'Cómo automatizar la conciliación SINPE e IBAN entre BAC, BCR y Banco Nacional',
      excerpt:
        'Un flujo práctico para dejar atrás las hojas de cálculo semanales y cruzar pagos entrantes en colones y dólares en tiempo real.',
      author: 'Sofía Vargas',
      authorRole: 'Especialista en tesorería CR',
      date: '14 de noviembre de 2026',
      readingMinutes: 5,
      featured: true,
      accent: 'sage',
      body: [
        {
          type: 'p',
          text: 'En la mayoría de pymes y medianas empresas en Costa Rica, el equipo financiero inicia cada mañana descargando estados de cuenta en Excel o PDF desde BAC, BCR y Banco Nacional para cruzarlos manualmente contra transferencias SINPE y facturas emitidas.',
        },
        {
          type: 'h2',
          text: 'El costo oculto de conciliar a mano',
        },
        {
          type: 'p',
          text: 'Cuando un cliente paga por SINPE Móvil o transferencia IBAN sin incluir el número de factura en el detalle, el equipo contable invierte horas rastreando montos y fechas. Ese desfase retrasa el cierre mensual y oculta la liquidez real disponible.',
        },
        {
          type: 'ul',
          items: [
            'Centraliza saldos de colones y dólares en un único panel con actualización automática.',
            'Cruza referencias numéricas, cédula jurídica y tolerancias de centavos sin intervención manual.',
            'Genera bitácoras auditables listas para revisión interna y estándares SUGEF.',
          ],
        },
        {
          type: 'h2',
          text: 'De cierre mensual a visibilidad diaria',
        },
        {
          type: 'p',
          text: 'Al conectar las cuentas mediante canales seguros, la gerencia financiera conoce su posición de caja antes de las 9:00 a. m. y reduce hasta en un 52% el tiempo invertido en el cierre ante Hacienda.',
        },
      ],
    },
    {
      id: 'monex-bccr-pagos-dolares',
      category: 'MONEX y BCCR',
      title: 'Diferencial cambiario y tipo de cambio MONEX: guía para pagos a proveedores',
      excerpt:
        'Cómo evitar pérdidas silenciosas por diferencias entre el tipo de cambio de ventanilla y la referencia oficial del BCCR al liquidar facturas en dólares.',
      author: 'Diego Solano',
      authorRole: 'Analista cambiario',
      date: '9 de noviembre de 2026',
      readingMinutes: 4,
      accent: 'espresso',
      body: [
        {
          type: 'p',
          text: 'Las empresas costarricenses que compran inventario o software en dólares enfrentan variaciones diarias entre la referencia MONEX del BCCR y el tipo de cambio aplicado al momento del pago.',
        },
        {
          type: 'h2',
          text: 'Registrar el diferencial en automático',
        },
        {
          type: 'p',
          text: 'Vincular cada factura electrónica con el tipo de cambio oficial del BCCR del día de emisión y el día de cancelación permite calcular el diferencial cambiario exacto sin ajustes manuales de fin de mes.',
        },
      ],
    },
    {
      id: 'factura-electronica-v44-hacienda',
      category: 'Regulación CR',
      title: 'Comprobantes XML v4.4 de Hacienda: qué revisar antes del cierre fiscal',
      excerpt:
        'Checklist esencial para validar aceptación de comprobantes, notas de crédito y respaldo bancario antes de presentar declaraciones.',
      author: 'Valeria Mora',
      authorRole: 'Consultora tributaria',
      date: '3 de noviembre de 2026',
      readingMinutes: 6,
      accent: 'sand',
      body: [
        {
          type: 'p',
          text: 'La transición hacia la versión v4.4 de comprobantes electrónicos exige que los departamentos financieros mantengan sincronizados los archivos XML con los movimientos bancarios reales.',
        },
        {
          type: 'ul',
          items: [
            'Verifica que cada XML aceptado por Hacienda tenga su comprobante de pago o cuenta por cobrar asociada.',
            'Controla las notas de crédito emitidas dentro del mismo período fiscal.',
            'Respalda cada transferencia IBAN o SINPE con su clave numérica de comprobante.',
          ],
        },
      ],
    },
    {
      id: 'flujo-caja-multimoneda-pymes',
      category: 'Tesorería',
      title: 'Flujo de caja proyectado en colones y dólares sin hojas de cálculo frágiles',
      excerpt:
        'Estructura tu presupuesto de ingresos y gastos fijos por banco para anticipar necesidades de liquidez en quincenas y pagos de planilla.',
      author: 'Sofía Vargas',
      authorRole: 'Especialista en tesorería CR',
      date: '26 de octubre de 2026',
      readingMinutes: 5,
      accent: 'sage',
      body: [
        {
          type: 'p',
          text: 'Separar la operación en colones (planilla, CCSS, servicios públicos) de los compromisos en dólares (importaciones, licencias, arrendamientos) evita sorpresas de caja en semanas de alta carga operativa.',
        },
        {
          type: 'p',
          text: 'Con Kora puedes visualizar ambas monedas consolidadas al tipo de cambio MONEX del día o desglosadas por entidad bancaria.',
        },
      ],
    },
    {
      id: 'trazabilidad-sugef-auditoria',
      category: 'Regulación CR',
      title: 'Trazabilidad estándar SUGEF: cómo preparar la documentación bancaria para auditoría',
      excerpt:
        'Buenas prácticas para mantener bitácoras inmutables de aprobaciones, transferencias y conciliaciones listas ante cualquier revisión externa.',
      author: 'Carlos Jiménez',
      authorRole: 'Director financiero invitado',
      date: '19 de octubre de 2026',
      readingMinutes: 4,
      accent: 'espresso',
      body: [
        {
          type: 'p',
          text: 'Una auditoría externa o solicitud de línea de crédito bancaria suele requerir reconstruir quién aprobó cada pago, qué factura respaldaba el movimiento y en qué fecha quedó conciliado.',
        },
        {
          type: 'p',
          text: 'Contar con trazabilidad automática elimina búsquedas en correos antiguos y reduce los tiempos de respuesta de días a minutos.',
        },
      ],
    },
  ] as BlogArticle[],
};
