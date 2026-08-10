export interface LocalFaqItem {
  q: string;
  a: string;
  qEs?: string;
  aEs?: string;
}

export interface LocalizedLocationData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  bodyP1: string;
  bodyP2: string;
  bodyP3: string;
  bodyP4?: string;
  bodyP5?: string;
  whyUs: string[];
  institutionsServed?: string;
  logisticsDetails?: string;
  researchInstitutions?: string;
  universities?: string;
  biotechOverview?: string;
  industriesWeSupply?: string;
  localFaqs?: { q: string; a: string }[];
}

export function getLocalizedLocation(location: any, locale: string, isCity: boolean): LocalizedLocationData {
  const isEs = locale === 'es';

  if (!isEs) {
    return {
      h1: location.h1,
      metaTitle: location.metaTitle,
      metaDesc: location.metaDesc,
      intro: location.intro,
      bodyP1: location.bodyP1,
      bodyP2: location.bodyP2,
      bodyP3: location.bodyP3,
      bodyP4: location.bodyP4,
      bodyP5: location.bodyP5,
      whyUs: location.whyUs || [],
      institutionsServed: location.institutionsServed,
      logisticsDetails: location.logisticsDetails,
      researchInstitutions: location.researchInstitutions,
      universities: location.universities,
      biotechOverview: location.biotechOverview,
      industriesWeSupply: location.industriesWeSupply,
      localFaqs: location.localFaqs,
    };
  }

  // --- SPANISH TRANSLATIONS ---

  // H1
  let h1 = location.h1Es;
  if (!h1) {
    if (isCity) {
      h1 = `Péptidos de Grado de Investigación al Por Mayor en ${location.city}`;
    } else if (location.slug === 'united-states') {
      h1 = 'Proveedor Nacional de Péptidos al Por Mayor en EE. UU. — Grado de Investigación';
    } else {
      h1 = `Proveedor Mayorista de Péptidos en ${location.city} — Suministro a Granel Grado de Investigación`;
    }
  }

  // Meta Title
  let metaTitle = location.metaTitleEs;
  if (!metaTitle) {
    if (isCity) {
      metaTitle = `Péptidos de Investigación al Por Mayor en ${location.city}, ${location.state} | 99 Purity Wholesale`;
    } else if (location.slug === 'united-states') {
      metaTitle = 'Péptidos al Por Mayor Estados Unidos | Suministro Grado de Investigación a Granel';
    } else {
      metaTitle = `Péptidos al Por Mayor ${location.city} | Suministro Grado de Investigación a Granel`;
    }
  }

  // Meta Desc
  let metaDesc = location.metaDescEs;
  if (!metaDesc) {
    if (isCity) {
      metaDesc = `El principal proveedor mayorista B2B de péptidos de grado de investigación en ${location.city}. Suministramos Semaglutide, BPC-157 y Tirzepatide a granel con pureza ≥99% y COA verificado.`;
    } else {
      metaDesc = `99 Purity Wholesale suministra péptidos de grado de investigación a granel a profesionales autorizados en ${location.city}. Pureza ≥99%, verificación COA por lote y envío nacional rápido.`;
    }
  }

  // Intro
  let intro = location.introEs;
  if (!intro) {
    if (isCity) {
      intro = `El principal proveedor B2B de ${location.city} de péptidos de investigación puros ≥99% y verificados por COA. Suministramos Semaglutide, BPC-157 y Tirzepatide a granel con entrega nacional rápida de 2 a 4 días hábiles para laboratorios en ${location.city}, ${location.state}.`;
    } else {
      intro = `El principal proveedor de ${location.city} para la compra mayorista de péptidos, ofreciendo compuestos de grado de investigación de primer nivel para farmacias de formulación magistral, laboratorios de investigación médica y clínicas autorizadas. Pureza garantizada ≥99% con entrega nacional prioritaria en ${location.city}.`;
    }
  }

  // Body paragraphs
  const bodyP1 = location.bodyP1Es || (isCity
    ? `${location.city} es un centro neurálgico para la investigación médica y biotecnológica en ${location.state}. Las instituciones de investigación y las farmacias de formulación magistral reguladas de esta zona requieren un suministro constante y fiable de péptidos de alta pureza para llevar a cabo sus estudios metabólicos y fisiológicos. 99 Purity Wholesale cubre esta necesidad proporcionando a los laboratorios de ${location.city} compuestos bioquímicos sintetizados en EE. UU. y probados por terceros para investigación in vitro.`
    : `99 Purity Wholesale es un proveedor B2B de confianza de péptidos de grado de investigación fabricados en EE. UU. para farmacias de formulación magistral, laboratorios de investigación médica y centros biomédicos autorizados en ${location.city}. Nuestra red de distribución nacional está diseñada para atender la demanda regional directamente: sin intermediarios internacionales, sin retrasos aduaneros y con trazabilidad 100% verificable.`);

  const bodyP2 = location.bodyP2Es || (isCity
    ? `Cada compuesto que suministramos a entidades en ${location.city} se somete a rigurosos análisis de control de calidad, incluidos ensayos por HPLC y espectrometría de masas (MS). Proporcionamos Certificados de Análisis (COA) transparentes y específicos de cada lote con cada envío, garantizando una pureza mínima del 99%. Ya sea que su equipo esté investigando agonistas GLP-1 para modulación metabólica o péptidos de reparación tisular como BPC-157, nuestros compuestos cumplen con los más altos estándares científicos.`
    : `Cada compuesto que enviamos a cuentas en ${location.city} se sintetiza a nivel nacional bajo un estricto umbral de pureza ≥99% y es verificado de forma independiente por laboratorios analíticos estadounidenses mediante HPLC y espectrometría de masas. El Certificado de Análisis (COA) específico del lote se proporciona junto con cada envío para que los compradores puedan confirmar con total certeza la calidad antes de iniciar sus experimentos.`);

  const bodyP3 = location.bodyP3Es || (isCity
    ? `Los pedidos al por mayor con destino a ${location.city} se despachan con máxima prioridad utilizando embalajes con control de temperatura para proteger la integridad del péptido durante el transporte. Ofrecemos precios escalonados por volumen competitivos para compradores institucionales en ${location.state}, facilitando la adquisición recurrente y la escalabilidad de sus proyectos científicos.`
    : `Los pedidos para ${location.city} se procesan desde nuestras instalaciones de distribución nacional mediante transportistas prioritarios, con un tránsito estándar de 2 a 4 días hábiles. Nuestra estructura de precios al por mayor escala en función del volumen del pedido, y las cuentas institucionales consolidadas pueden optar a condiciones de pago a 30 días (Net-30). Nuestros socios en ${location.city} reciben la misma garantía de máxima pureza, el mismo estándar de documentación y el cumplimiento nacional más rápido.`);

  const bodyP4 = location.bodyP4
    ? (location.bodyP4Es || `Para respaldar la investigación de vanguardia en ${location.city}, mantenemos un inventario permanente de los compuestos más demandados, incluidos Semaglutide, Tirzepatide, Retatrutide, Cagrilintide y TB-500. Todos los viales se liofilizan y sellan al vacío para garantizar su estabilidad molecular prolongada.`)
    : undefined;

  const bodyP5 = location.bodyP5
    ? (location.bodyP5Es || `Comuníquese con nuestro equipo especializado de atención mayorista para ${location.city} para solicitar una cotización personalizada por volumen, consultar especificaciones técnicas de lote o programar entregas periódicas adaptadas a sus cronogramas de investigación.`)
    : undefined;

  // Why Us
  const whyUs = location.whyUsEs || [
    'Fabricado en EE. UU. — sintetizado a nivel nacional, nunca importado de intermediarios sin verificar',
    `Pureza garantizada ≥99% en cada lote individual de péptidos, verificada por laboratorios independientes de EE. UU.`,
    `Documentación COA vinculada al lote incluida con cada envío a ${location.city}`,
    `Logística nacional rápida con entrega de 2 a 4 días hábiles en ${location.city}`,
    'Precios mayoristas B2B escalonados para compras al por mayor y contratos institucionales',
  ];

  // Who We Serve sections
  const researchInstitutions = location.researchInstitutions
    ? (location.researchInstitutionsEs || `Suministramos péptidos liofilizados de alta pureza con COA verificado a instituciones de investigación autorizadas y laboratorios biomédicos en ${location.city}.`)
    : undefined;

  const universities = location.universities
    ? (location.universitiesEs || `Apoyamos estudios académicos y proyectos de investigación en los principales departamentos de bioquímica y ciencias biológicas de ${location.city}.`)
    : undefined;

  const biotechOverview = location.biotechOverview
    ? (location.biotechOverviewEs || `Proporcionamos a las empresas de biotecnología e innovación celular en ${location.city} un suministro a granel escalable con estricta consistencia entre lotes.`)
    : undefined;

  const industriesWeSupply = location.industriesWeSupply
    ? (location.industriesWeSupplyEs || `Proveemos a farmacias de formulación magistral reguladas, laboratorios de cribado analítico y organizaciones de investigación por contrato (CRO) en ${location.city}.`)
    : undefined;

  const institutionsServed = location.institutionsServed
    ? (location.institutionsServedEs || `Atendemos a una amplia red de instituciones académicas, centros de investigación médica y farmacias especializadas en ${location.city}.`)
    : undefined;

  const logisticsDetails = location.logisticsDetails
    ? (location.logisticsDetailsEs || `Los envíos hacia ${location.city} se gestionan mediante rutas de transporte nacional urgente con embalaje isotérmico protector, asegurando entregas en 2 a 4 días hábiles sin interrupciones en la cadena de custodia.`)
    : undefined;

  // Local FAQs
  const localFaqs = (location.localFaqs || []).map((faq: any) => {
    if (faq.qEs && faq.aEs) {
      return { q: faq.qEs, a: faq.aEs };
    }
    const qLower = faq.q.toLowerCase();

    if (qLower.includes('delivery time') || qLower.includes('how long') || qLower.includes('shipping take')) {
      return {
        q: `¿Cuál es el plazo de entrega habitual para pedidos mayoristas de péptidos en ${location.city}?`,
        a: `Los pedidos enviados a ${location.city} suelen llegar en un plazo de 2 a 4 días hábiles mediante transporte nacional prioritario con seguimiento y protección térmica.`
      };
    }

    if (qLower.includes('independent') || qLower.includes('verified') || qLower.includes('third-party') || qLower.includes('coa')) {
      return {
        q: `¿Los compuestos de investigación están verificados por laboratorios independientes de EE. UU.?`,
        a: `Sí, cada lote suministrado incluye un Certificado de Análisis (COA) emitido por un laboratorio analítico externo independiente en EE. UU., verificando una pureza ≥99% mediante HPLC y espectrometría de masas.`
      };
    }

    if (qLower.includes('legal') || qLower.includes('permit') || qLower.includes('possession') || qLower.includes('law')) {
      return {
        q: `¿Es legal adquirir péptidos de investigación al por mayor en ${location.city}?`,
        a: `Sí, siempre que el comprador sea una entidad o profesional autorizado que adquiera los compuestos estrictamente para investigación in vitro de laboratorio y pruebas analíticas, quedando expresamente excluido el consumo humano.`
      };
    }

    if (qLower.includes('stability') || qLower.includes('temperature') || qLower.includes('transit') || qLower.includes('cold-chain')) {
      return {
        q: `¿Cómo garantizan la estabilidad molecular de los péptidos durante el envío a ${location.city}?`,
        a: `Todos nuestros compuestos se liofilizan (desecación por congelación al vacío) para prevenir la hidrólisis. Para los envíos a ${location.city}, empleamos embalajes isotérmicos reforzados que conservan una temperatura interior estable durante todo el trayecto.`
      };
    }

    if (qLower.includes('supply') || qLower.includes('pharmacies') || qLower.includes('institutions') || qLower.includes('u-med')) {
      return {
        q: `¿Suministran a farmacias de formulación e instituciones de investigación en ${location.city}?`,
        a: `Sí, somos un proveedor principal para laboratorios acreditados, universidades y farmacias de formulación reguladas en ${location.city}. Ofrecemos tarifas mayoristas escalonadas adaptadas a compradores de gran volumen.`
      };
    }

    // Default translation fallback
    return {
      q: `Información de adquisición mayorista en ${location.city}`,
      a: `Ofrecemos péptidos de grado de investigación con pureza ≥99%, trazabilidad por lote y entrega en 2 a 4 días hábiles para compradores acreditados en ${location.city}.`
    };
  });

  return {
    h1,
    metaTitle,
    metaDesc,
    intro,
    bodyP1,
    bodyP2,
    bodyP3,
    bodyP4,
    bodyP5,
    whyUs,
    institutionsServed,
    logisticsDetails,
    researchInstitutions,
    universities,
    biotechOverview,
    industriesWeSupply,
    localFaqs: localFaqs.length > 0 ? localFaqs : undefined,
  };
}
