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
  entity: 'Kora Costa Rica S.A., San José, Costa Rica',
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
