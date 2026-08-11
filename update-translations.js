const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'messages', 'en.json');
const esPath = path.join(__dirname, 'messages', 'es.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));

const newEn = {
  Meta: {
    homeTitle: "99 Purity Wholesale | America's Trusted Peptide Supplier",
    homeDesc: "Premium US-made research peptides for licensed professionals. Guaranteed 99%+ purity with independent batch COAs.",
    productsTitle: "Wholesale Peptide Catalog | 99 Purity Wholesale",
    productsDesc: "Premium quality research compounds for qualified institutions and independent researchers. View our wholesale catalog.",
    servicesTitle: "B2B Growth & Wholesale Services | 99 Purity Wholesale",
    servicesDesc: "Comprehensive infrastructure and consulting services to help you scale your research compound operations.",
    aboutTitle: "About Us | US-Made Research Peptides",
    aboutDesc: "Learn about 99 Purity Wholesale. Domestic synthesis, rigorous testing, and trusted B2B partnership.",
    contactTitle: "Contact Us | Wholesale Peptides Inquiry",
    contactDesc: "Contact our US-based team for pricing tiers, volume orders, and dropshipping programs.",
    locationsTitle: "Primary Delivery Markets | 99 Purity Wholesale",
    locationsDesc: "Fast, secure domestic fulfillment to research institutions across the United States."
  },
  ProductsIndex: {
    banner: "ALL PRODUCTS ARE FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.",
    title: "Wholesale Catalog",
    subtitle: "Premium quality research compounds for qualified institutions and independent researchers.",
    moqTitle: "Wholesale Requirements",
    moqText: "Minimum Order Quantity (MOQ): 10 units per product.",
    cta: "Contact for Pricing",
    categories: {
      "glp1-metabolic-peptides": { name: "GLP-1 / Metabolic", desc: "Advanced metabolic research peptides including Semaglutide, Tirzepatide, and Retatrutide." },
      "growth-hormone": { name: "Growth Hormone", desc: "GHRP and GHRH peptides for research applications." },
      "healing-recovery-peptides": { name: "Healing & Recovery", desc: "Tissue repair and recovery compounds including BPC-157 and TB-500." },
      "cognitive-nootropic": { name: "Cognitive / Nootropic", desc: "Neurological research compounds and cognitive enhancers." },
      "anti-aging-longevity": { name: "Anti-Aging & Longevity", desc: "Cellular senescence and longevity research peptides." },
      "cosmetic-aesthetic": { name: "Cosmetic & Aesthetic", desc: "Dermatological and cosmetic research compounds." },
      "ancillaries": { name: "Ancillaries", desc: "Reconstitution solutions, supplies, and research ancillaries." }
    },
    viewCategory: "View Category"
  },
  ProductDetail: {
    breadcrumbs: { products: "Products" },
    purity: "≥99% Purity Guaranteed",
    cas: "CAS:",
    specsTitle: "Product Specifications",
    availableSizes: "Available Sizes",
    storageDetails: "Storage Details",
    moqHeading: "Wholesale MOQ: 10 Units",
    moqSubtext: "Minimum order quantity applies to all specifications.",
    pricingHeading: "Contact for Tiered Pricing",
    pricingTiers: "Starter · Tier 1 · Tier 2 · Tier 3",
    contextTitle: "Research Context",
    contextP1: "This compound is supplied exclusively for in vitro laboratory research and academic modeling. It is not intended for diagnostic, therapeutic, or clinical applications in humans or animals. Researchers utilizing {name} should adhere to standard laboratory safety protocols and ensure their institution has the appropriate ethical clearances for experimental use.",
    contextP2: "As an advanced molecular tool, {name} allows investigators to probe specific cellular pathways, receptor affinities, and biochemical cascades. All batches undergo rigorous analytical testing to confirm sequence accuracy and structural integrity, ensuring that baseline data is not compromised by impurities. Storage conditions must be strictly maintained to prevent peptide degradation or loss of biological activity prior to assay implementation.",
    coaTitle: "Certificate of Analysis (COA)",
    coaDesc: "Batch-matched HPLC and Mass Spectrometry reports.",
    requestCoa: "Request COA",
    requestPricingTitle: "Request Pricing",
    requestPricingDesc: "Get current wholesale rates for {name}. Our team responds within 2-4 hours during business days.",
    whatsappCta: "WhatsApp Sales",
    or: "or",
    emailCta: "Email Inquiry",
    confidential: "All inquiries are strictly confidential. For B2B / Institution orders only.",
    relatedTitle: "Related Research Compounds",
    viewDetails: "View Details",
    whatsappMsg: "Hi, I am inquiring about wholesale pricing for {name}."
  },
  Services: {
    badge: "B2B Growth Solutions",
    title: "Wholesale Services",
    subtitle: "Beyond supplying premium research compounds, we offer comprehensive infrastructure and consulting services to help you scale your operations, build your brand, and dominate the market.",
    items: {
      "dropshipping": {
        title: "Dropshipping Program",
        desc: "Scale your business without the overhead of inventory or fulfillment. We handle the storage, packing, and discreet shipping directly to your clients under your branding. Focus entirely on sales and marketing while we manage the logistics.",
        msg: "Hi, I'm interested in the Dropshipping Program."
      },
      "launch-support": {
        title: "New Business Launch Support",
        desc: "Start your research peptide brand with a solid foundation. We provide end-to-end guidance on product selection, pricing strategies, and initial inventory acquisition. Avoid costly beginner mistakes and launch with confidence.",
        msg: "Hi, I'd like more info on New Business Launch Support."
      },
      "website-development": {
        title: "Website Development",
        desc: "Establish a premium digital presence that converts visitors into buyers. Our team builds high-performance, secure, and fully customized e-commerce platforms tailored for the research compound industry. We ensure your site is optimized for speed, SEO, and seamless transactions.",
        msg: "Hi, I'm interested in Website Development services."
      },
      "sales-distribution": {
        title: "Sales & Distribution Development",
        desc: "Expand your market reach and accelerate your revenue growth. We consult on B2B acquisition strategies, affiliate network building, and high-volume distribution pipelines. Leverage our industry expertise to dominate your sector.",
        msg: "Hi, I'd like to discuss Sales & Distribution Development."
      },
      "private-label": {
        title: "Private Label / White Label",
        desc: "Build brand equity with your own custom-labeled products. We supply premium >99% purity compounds meticulously packaged with your unique branding and design. Differentiate yourself in the market with professional, retail-ready presentations.",
        msg: "Hi, I'm interested in Private Label / White Label services."
      },
      "fulfillment-consulting": {
        title: "Order Fulfillment Consulting",
        desc: "Optimize your internal shipping operations for maximum efficiency. We help you implement scalable packing protocols, cold-chain management solutions, and cost-effective shipping strategies. Reduce errors and ensure your products arrive safely every time.",
        msg: "Hi, I need Order Fulfillment Consulting."
      }
    },
    inquireBtn: "Inquire on WhatsApp",
    stepsTitle: "How to Get Started",
    stepsSubtitle: "Partnering with us is straightforward. We evaluate your needs and execute a strategy tailored to your growth.",
    step1Title: "Initial Consultation",
    step1Desc: "Reach out via WhatsApp or Email. We'll discuss your current operations, long-term goals, and identify which services align best with your objectives.",
    step2Title: "Strategic Proposal",
    step2Desc: "Our team will draft a customized execution plan outlining pricing, timelines, and exactly how we will integrate our infrastructure with your brand.",
    step3Title: "Onboarding & Execution",
    step3Desc: "Once approved, we immediately begin the onboarding process. Launch your new infrastructure and start scaling your revenue with total confidence.",
    scheduleCta: "Schedule Consultation",
    scheduleMsg: "Hi, I would like to schedule an initial consultation for B2B services."
  },
  LocationsIndex: {
    badge: "Nationwide Reach",
    title: "Our Primary Markets",
    subtitle: "99 Purity Wholesale provides fast, secure domestic fulfillment to research institutions, laboratories, and B2B wellness clinics across the United States. Explore our dedicated regional hubs below.",
    viewHub: "View Local Hub"
  },
  LocationDetail: {
    hub: "{city}, {state} Hub",
    trendingTitle: "Trending Research Compounds in {city}",
    trendingDesc: "The following compounds are frequently requested for research and laboratory evaluation in the {city} area:",
    fastShippingTitle: "Fast Domestic Fulfillment to {state}",
    fastShippingDesc: "Because we ship from within the United States, laboratories in {city} do not face international customs delays, package seizures, or cold-chain integrity loss. Orders are processed immediately upon payment confirmation.",
    shippingPoints: {
      priority: "Priority Domestic Shipping",
      discreet: "Discreet, Temperature-Stable Packaging",
      noCustoms: "Zero International Customs Risk"
    },
    complianceTitle: "Research Compliance Notice",
    complianceDesc: "All compounds supplied to {city}, {state} are exclusively for in vitro laboratory research and academic use. They are strictly not for human consumption, diagnostic, or therapeutic use. Buyers are responsible for ensuring compliance with all local and state regulations regarding the handling of research chemicals.",
    contactTitle: "Contact {city} Sales",
    contactDesc: "Connect with our dedicated B2B sales team serving the {state} region to request our current wholesale price list or discuss a bulk order.",
    whatsappCta: "WhatsApp Sales",
    or: "or",
    emailCta: "Email Inquiry",
    viewCatalog: "View Full Catalog",
    whatsappMsg: "Hi, I am a researcher located in {city}, {state} looking for wholesale pricing.",
    emailSubject: "Wholesale Inquiry - {city}, {state}"
  }
};

const newEs = {
  Meta: {
    homeTitle: "Péptidos al por Mayor Estados Unidos | 99 Purity Wholesale",
    homeDesc: "Proveedor mayorista de péptidos fabricados en América. Péptidos de investigación premium para profesionales autorizados con pureza garantizada del 99%+.",
    productsTitle: "Catálogo Mayorista de Péptidos | 99 Purity Wholesale",
    productsDesc: "Péptidos fabricados en América de alta calidad para instituciones calificadas e investigadores. Vea nuestro catálogo mayorista.",
    servicesTitle: "Servicios B2B y Crecimiento | Proveedor Mayorista de Péptidos",
    servicesDesc: "Servicios integrales de infraestructura y consultoría para ayudarlo a escalar sus operaciones con péptidos al por mayor Estados Unidos.",
    aboutTitle: "Nosotros | Péptidos Fabricados en América",
    aboutDesc: "Conozca 99 Purity Wholesale. Síntesis nacional, pruebas rigurosas y asociación B2B de confianza.",
    contactTitle: "Contacto | Consultas sobre Péptidos al por Mayor",
    contactDesc: "Comuníquese con nuestro equipo en EE. UU. para precios, pedidos por volumen y programas de envío directo.",
    locationsTitle: "Mercados de Entrega | Proveedor Mayorista de Péptidos",
    locationsDesc: "Cumplimiento nacional rápido y seguro a instituciones de investigación en todo Estados Unidos."
  },
  ProductsIndex: {
    banner: "TODOS LOS PRODUCTOS SON EXCLUSIVAMENTE PARA USO EN INVESTIGACIÓN DE LABORATORIO. NO APTOS PARA CONSUMO HUMANO.",
    title: "Catálogo Mayorista",
    subtitle: "Compuestos de investigación de primera calidad para instituciones calificadas e investigadores independientes.",
    moqTitle: "Requisitos para Mayoristas",
    moqText: "Cantidad Mínima de Pedido (MOQ): 10 unidades por producto.",
    cta: "Contactar para Precios",
    categories: {
      "glp1-metabolic-peptides": { name: "GLP-1 / Metabólicos", desc: "Péptidos de investigación metabólica avanzados que incluyen Semaglutida, Tirzepatida y Retatrutida." },
      "growth-hormone": { name: "Hormona de Crecimiento", desc: "Péptidos GHRP y GHRH para aplicaciones de investigación." },
      "healing-recovery-peptides": { name: "Curación y Recuperación", desc: "Compuestos de reparación y recuperación de tejidos que incluyen BPC-157 y TB-500." },
      "cognitive-nootropic": { name: "Cognitivos / Nootrópicos", desc: "Compuestos de investigación neurológica y potenciadores cognitivos." },
      "anti-aging-longevity": { name: "Antienvejecimiento y Longevidad", desc: "Senescencia celular y péptidos de investigación de longevidad." },
      "cosmetic-aesthetic": { name: "Cosméticos y Estéticos", desc: "Compuestos de investigación dermatológica y cosmética." },
      "ancillaries": { name: "Auxiliares", desc: "Soluciones de reconstitución, suministros y auxiliares de investigación." }
    },
    viewCategory: "Ver Categoría"
  },
  ProductDetail: {
    breadcrumbs: { products: "Productos" },
    purity: "≥99% de Pureza Garantizada",
    cas: "CAS:",
    specsTitle: "Especificaciones del Producto",
    availableSizes: "Tamaños Disponibles",
    storageDetails: "Detalles de Almacenamiento",
    moqHeading: "MOQ Mayorista: 10 Unidades",
    moqSubtext: "La cantidad mínima de pedido se aplica a todas las especificaciones.",
    pricingHeading: "Contactar para Precios por Niveles",
    pricingTiers: "Inicial · Nivel 1 · Nivel 2 · Nivel 3",
    contextTitle: "Contexto de Investigación",
    contextP1: "Este compuesto se suministra exclusivamente para investigación de laboratorio in vitro y modelado académico. No está destinado a aplicaciones diagnósticas, terapéuticas o clínicas en humanos o animales. Los investigadores que utilizan {name} deben adherirse a los protocolos de seguridad de laboratorio estándar y asegurarse de que su institución cuente con las autorizaciones éticas adecuadas para uso experimental.",
    contextP2: "Como herramienta molecular avanzada, {name} permite a los investigadores sondear vías celulares específicas, afinidades de receptores y cascadas bioquímicas. Todos los lotes se someten a rigurosas pruebas analíticas para confirmar la precisión de la secuencia y la integridad estructural, asegurando que los datos de referencia no se vean comprometidos por impurezas. Las condiciones de almacenamiento deben mantenerse estrictamente para evitar la degradación de los péptidos o la pérdida de actividad biológica antes de la implementación del ensayo.",
    coaTitle: "Certificado de Análisis (COA)",
    coaDesc: "Informes de HPLC y espectrometría de masas emparejados por lote.",
    requestCoa: "Solicitar COA",
    requestPricingTitle: "Solicitar Precios",
    requestPricingDesc: "Obtenga las tarifas mayoristas actuales para {name}. Nuestro equipo responde dentro de 2-4 horas en días hábiles.",
    whatsappCta: "Ventas por WhatsApp",
    or: "o",
    emailCta: "Consulta por Email",
    confidential: "Todas las consultas son estrictamente confidenciales. Solo para pedidos B2B / Instituciones.",
    relatedTitle: "Compuestos de Investigación Relacionados",
    viewDetails: "Ver Detalles",
    whatsappMsg: "Hola, solicito información sobre precios mayoristas para {name}."
  },
  Services: {
    badge: "Soluciones de Crecimiento B2B",
    title: "Servicios Mayoristas",
    subtitle: "Más allá de suministrar compuestos de investigación premium, ofrecemos servicios integrales de infraestructura y consultoría para ayudarlo a escalar sus operaciones, construir su marca y dominar el mercado.",
    items: {
      "dropshipping": {
        title: "Programa de Envío Directo (Dropshipping)",
        desc: "Escale su negocio sin los gastos generales de inventario o cumplimiento. Nos encargamos del almacenamiento, embalaje y envío discreto directamente a sus clientes bajo su marca. Concéntrese completamente en ventas y marketing mientras gestionamos la logística.",
        msg: "Hola, estoy interesado en el Programa de Envío Directo."
      },
      "launch-support": {
        title: "Apoyo al Lanzamiento de Nuevos Negocios",
        desc: "Inicie su marca de péptidos de investigación con una base sólida. Brindamos orientación integral sobre selección de productos, estrategias de precios y adquisición de inventario inicial. Evite errores costosos de principiantes y lance con confianza.",
        msg: "Hola, me gustaría más información sobre el Apoyo al Lanzamiento."
      },
      "website-development": {
        title: "Desarrollo de Sitios Web",
        desc: "Establezca una presencia digital premium que convierta visitantes en compradores. Nuestro equipo construye plataformas de comercio electrónico de alto rendimiento, seguras y totalmente personalizadas adaptadas a la industria de compuestos de investigación. Aseguramos que su sitio esté optimizado para velocidad, SEO y transacciones perfectas.",
        msg: "Hola, estoy interesado en los servicios de Desarrollo Web."
      },
      "sales-distribution": {
        title: "Desarrollo de Ventas y Distribución",
        desc: "Expanda su alcance en el mercado y acelere el crecimiento de sus ingresos. Asesoramos en estrategias de adquisición B2B, creación de redes de afiliados y canales de distribución de alto volumen. Aproveche nuestra experiencia en la industria para dominar su sector.",
        msg: "Hola, me gustaría discutir sobre Desarrollo de Ventas y Distribución."
      },
      "private-label": {
        title: "Marca Privada / Marca Blanca",
        desc: "Construya el valor de su marca con sus propios productos etiquetados de forma personalizada. Suministramos compuestos premium de >99% de pureza meticulosamente empaquetados con su marca y diseño únicos. Diferénciese en el mercado con presentaciones profesionales y listas para la venta.",
        msg: "Hola, estoy interesado en servicios de Marca Privada / Blanca."
      },
      "fulfillment-consulting": {
        title: "Consultoría de Cumplimiento de Pedidos",
        desc: "Optimice sus operaciones de envío interno para lograr la máxima eficiencia. Lo ayudamos a implementar protocolos de empaque escalables, soluciones de gestión de cadena de frío y estrategias de envío rentables. Reduzca errores y asegure que sus productos lleguen de manera segura.",
        msg: "Hola, necesito Consultoría de Cumplimiento de Pedidos."
      }
    },
    inquireBtn: "Consultar por WhatsApp",
    stepsTitle: "Cómo Empezar",
    stepsSubtitle: "Asociarse con nosotros es sencillo. Evaluamos sus necesidades y ejecutamos una estrategia adaptada a su crecimiento.",
    step1Title: "Consulta Inicial",
    step1Desc: "Comuníquese a través de WhatsApp o correo electrónico. Discutiremos sus operaciones actuales, objetivos a largo plazo e identificaremos qué servicios se alinean mejor con sus metas.",
    step2Title: "Propuesta Estratégica",
    step2Desc: "Nuestro equipo redactará un plan de ejecución personalizado que detallará los precios, los plazos y exactamente cómo integraremos nuestra infraestructura con su marca.",
    step3Title: "Incorporación y Ejecución",
    step3Desc: "Una vez aprobados, comenzamos inmediatamente el proceso de incorporación. Lance su nueva infraestructura y comience a escalar sus ingresos con total confianza.",
    scheduleCta: "Programar Consulta",
    scheduleMsg: "Hola, me gustaría programar una consulta inicial para servicios B2B."
  },
  LocationsIndex: {
    badge: "Alcance Nacional",
    title: "Nuestros Mercados Principales",
    subtitle: "99 Purity Wholesale proporciona un cumplimiento nacional rápido y seguro a instituciones de investigación, laboratorios y clínicas de bienestar B2B en todo Estados Unidos. Explore nuestros centros regionales dedicados a continuación.",
    viewHub: "Ver Centro Local"
  },
  LocationDetail: {
    hub: "Centro en {city}, {state}",
    trendingTitle: "Compuestos de Investigación Tendencia en {city}",
    trendingDesc: "Según los datos recientes de adquisiciones mayoristas de laboratorios y clínicas de bienestar en el área de {city}, estos son actualmente los compuestos más investigados en su región:",
    fastShippingTitle: "Cumplimiento Nacional Rápido a {state}",
    fastShippingDesc: "Debido a que enviamos desde dentro de los Estados Unidos, los laboratorios en {city} no enfrentan retrasos en aduanas internacionales, incautaciones de paquetes ni pérdida de integridad de la cadena de frío. Los pedidos se procesan inmediatamente después de la confirmación del pago.",
    shippingPoints: {
      priority: "Envío Nacional Prioritario",
      discreet: "Embalaje Discreto y Térmicamente Estable",
      noCustoms: "Cero Riesgo Aduanero Internacional"
    },
    complianceTitle: "Aviso de Cumplimiento de Investigación",
    complianceDesc: "Todos los compuestos suministrados a {city}, {state} son exclusivamente para investigación de laboratorio in vitro y uso académico. Estrictamente no son para consumo humano, ni uso diagnóstico o terapéutico. Los compradores son responsables de asegurar el cumplimiento de todas las regulaciones locales y estatales sobre el manejo de químicos de investigación.",
    contactTitle: "Contactar a Ventas en {city}",
    contactDesc: "Conéctese con nuestro equipo de ventas B2B dedicado al área de {state} para solicitar nuestra lista de precios mayorista actual o discutir un pedido a granel.",
    whatsappCta: "Ventas por WhatsApp",
    or: "o",
    emailCta: "Consulta por Email",
    viewCatalog: "Ver Catálogo Completo",
    whatsappMsg: "Hola, soy un investigador ubicado en {city}, {state} en busca de precios mayoristas.",
    emailSubject: "Consulta Mayorista - {city}, {state}"
  }
};

Object.assign(en, newEn);
Object.assign(es, newEs);

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
console.log('Translations updated.');
