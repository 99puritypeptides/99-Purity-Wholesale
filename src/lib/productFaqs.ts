export interface FAQParams {
  productName: string;
  productSlug: string;
  isEs: boolean;
  physicalForm_En?: string;
  physicalForm_Es?: string;
  storage_En?: string;
  storage_Es?: string;
}

export function generateProductFaqs({
  productName,
  productSlug,
  isEs,
  physicalForm_En = 'Lyophilized powder',
  physicalForm_Es = 'Polvo liofilizado',
  storage_En = 'Store refrigerated at 2°C to 8°C.',
  storage_Es = 'Almacenar refrigerado a 2°C a 8°C.',
}: FAQParams): { q: string; a: string }[] {
  
  if (isEs) {
    return [
      {
        q: `¿Cuál es el estándar de pureza de ${productName} al por mayor?`,
        a: `Todos los lotes de ${productName} se verifican rigurosamente mediante HPLC (cromatografía líquida de alta resolución) y espectrometría de masas para garantizar un nivel de pureza superior al ≥99.0%. Cada envío de distribución incluye informes analíticos específicos del lote para respaldar sus protocolos de investigación de laboratorio.`
      },
      {
        q: `¿Está destinado ${productName} para uso terapéutico o consumo humano?`,
        a: `Absolutamente no. Todos los compuestos, incluyendo ${productName}, se suministran estrictamente para fines de investigación de laboratorio y pruebas científicas in-vitro. Bajo ninguna circunstancia este material debe ser utilizado para el consumo humano, diagnóstico médico o intervención terapéutica directa.`
      },
      {
        q: `¿Cuál es la cantidad mínima de pedido (MOQ) para ${productName} al por mayor?`,
        a: `La cantidad mínima de pedido para ${productName} al por mayor es de 10 viales (lo que equivale a 1 kit estándar). Nos especializamos en la adquisición y suministro comercial a granel para instituciones de investigación, laboratorios y marcas de distribución, por lo que no realizamos ventas de viales individuales.`
      },
      {
        q: `¿Cuál es la forma física de ${productName} al por mayor?`,
        a: physicalForm_Es
      },
      {
        q: `¿Cuáles son las temperaturas de almacenamiento recomendadas y los límites de estabilidad para ${productName}?`,
        a: storage_Es
      },
      {
        q: `¿Ofrece 99 Purity Wholesale servicios de marca blanca (White Label) para ${productName}?`,
        a: `Sí. Ofrecemos servicios completos de fabricación sin marca (White Label) para ${productName}. Los envíos comerciales pueden enviarse con viales y empaques sin etiquetas, lo que permite a las instalaciones de investigación clínica y marcas de distribución aplicar su propia marca a la llegada.`
      },
      {
        q: `¿Proporcionan servicios de etiqueta privada (Private Label) para pedidos a granel de ${productName}?`,
        a: `Sí. A través de nuestro programa para socios corporativos, ofrecemos servicios integrales de etiqueta privada. Nuestro equipo de diseño puede imprimir y aplicar etiquetas personalizadas a sus viales de ${productName} antes del envío. Se requiere una cantidad mínima de pedido mayor para el etiquetado personalizado continuo.`
      },
      {
        q: `¿Puedo ver el informe de HPLC y LC-MS para el lote actual de ${productName} antes de realizar un pedido?`,
        a: `Sí. La transparencia analítica es el núcleo de nuestro negocio. Los directores de laboratorio y socios comerciales acreditados pueden solicitar el informe de HPLC y espectrometría de masas (LC-MS) del lote de producción actual haciendo clic en el botón 'Solicitar COA' en esta página antes de la confirmación del pedido.`
      },
      {
        q: `¿Cuál es la diferencia entre el análisis HPLC y LC-MS para ${productName}?`,
        a: `HPLC (cromatografía líquida de alta resolución) confirma la concentración y pureza de ${productName} mediante la separación de los componentes químicos (asegurando un ≥99.0%). LC-MS (espectrometría de masas) verifica la masa molecular exacta y la secuencia de aminoácidos, lo que confirma la identidad y garantiza que el compuesto sea estructuralmente idéntico a su perfil de referencia.`
      },
      {
        q: `¿Cuál es el tiempo de preparación (Lead Time) esperado para pedidos al por mayor de ${productName}?`,
        a: `Para kits en inventario, el tiempo de preparación suele ser de 1 a 3 días hábiles. Para pedidos comerciales de alto volumen (más de 500 viales) o solicitudes de etiqueta privada, el tiempo de preparación puede variar de 7 a 14 días. Consulte a su representante de cuenta para obtener proyecciones logísticas exactas.`
      },
      {
        q: `¿A qué países realizan envíos de ${productName} y está garantizado el paso por aduanas?`,
        a: `Realizamos envíos globales a más de 50 países en América del Norte, Europa y Asia a través de canales de mensajería seguros y discretos. Nuestro equipo logístico utiliza embalaje avanzado y declaraciones de importación/exportación conformes para garantizar el paso seguro por la aduana hacia instalaciones de investigación autorizadas.`
      },
      {
        q: `¿Qué métodos de pago son aceptados para pedidos a granel de ${productName}?`,
        a: `Para transacciones al por mayor seguras e internacionales, aceptamos transferencias bancarias (T/T, ACH), criptomonedas (USDC, USDT, Bitcoin) por su velocidad y liquidez B2B, y plataformas de pago corporativas seleccionadas (como Wise o Payoneer).`
      },
      {
        q: `¿Ofrecen descuentos por volumen para pedidos a granel muy grandes de ${productName}?`,
        a: `Sí. Nuestro modelo de precios por niveles reduce automáticamente el costo por vial en función del volumen de su pedido. Los laboratorios de gran escala o revendedores que deseen adquirir varios miles de viales deben ponerse en contacto con nuestro servicio de atención corporativa para negociar contratos de fabricación exclusivos.`
      },
      {
        q: `¿Proporciona 99 Purity Wholesale servicios de Dropshipping B2B para ${productName}?`,
        a: `Sí. Aceptamos asociaciones de dropshipping B2B para marcas de investigación aprobadas. Podemos realizar envíos directos de kits sin marca o con etiqueta privada a las instalaciones de sus clientes utilizando embalaje ciego, protegiendo su lista de clientes y la identidad de su cadena de suministro.`
      },
      {
        q: `¿Ofrecen servicios de desarrollo de sitios web de comercio electrónico para nuevas marcas de péptidos?`,
        a: `A través de nuestra empresa matriz (Belk Digital), ofrecemos servicios de desarrollo y diseño de sitios web de nivel empresarial. Si está iniciando una nueva marca de investigación y necesita infraestructura minorista o B2B de primer nivel (como integración de WooCommerce/Shopify y diseño web moderno de alto rendimiento), pregunte por nuestra experiencia en diseño digital corporativo.`
      },
      {
        q: `¿Proporciona 99 Purity pautas de reconstitución o instrucciones de dosificación para ${productName}?`,
        a: `Como proveedor industrial de materias primas puras, no proporcionamos instrucciones de reconstitución, pautas de dilución o pautas de dosificación. Todos nuestros productos, incluido ${productName}, se suministran estrictamente para fines de investigación científica y deben ser manejados por investigadores y profesionales capacitados con sus propios protocolos.`
      },
      {
        q: `¿Cómo está empaquetado ${productName} durante el envío para garantizar su estabilidad?`,
        a: `Los viales de ${productName} se sellan al vacío y se envían en embalajes con control térmico o alta protección física. El liofilizado sólido protege la molécula de la degradación térmica a corto plazo durante el tránsito expreso. Para volúmenes extremadamente sensibles o grandes, se puede organizar el envío de cadena de frío.`
      },
      {
        q: `¿Cuáles son sus políticas de devolución y reemplazo para ${productName} al por mayor?`,
        a: `Debido a la naturaleza sensible a la temperatura de los compuestos de investigación y los riesgos de contaminación, no aceptamos devoluciones estándar una vez que el producto ha salido de nuestras instalaciones. Sin embargo, si un pedido resulta dañado en tránsito o incautado permanentemente (sujeto a la garantía de entrega aplicable), organizaremos un reenvío o crédito sin costo adicional.`
      },
      {
        q: `¿Puedo solicitar concentraciones personalizadas o tamaños de vial para ${productName}?`,
        a: `Sí. Los socios comerciales calificados que requieran especificaciones de investigación particulares pueden coordinar tamaños de viales personalizados, variaciones de concentración (por ejemplo, escalar de 5 mg a 15 mg por vial) o formulaciones liofilizadas a medida. Se aplican requisitos mínimos de pedido.`
      },
      {
        q: `¿Existen metales pesados u otras impurezas en sus lotes de ${productName}?`,
        a: `Nuestros procesos de liofilización y síntesis farmacéuticamente estandarizados garantizan que todos los reactivos de purificación, los iones de metales pesados y el TFA (ácido trifluoroacético) excesivo se reduzcan por debajo de los umbrales de referencia clínica estrictos, lo que da como resultado un polvo liofilizado ultrapuro para sus investigaciones.`
      }
    ];
  }

  // English
  return [
    {
      q: `What is the purity standard of 99 Purity's wholesale ${productName}?`,
      a: `All batches of ${productName} are rigorously verified via HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry to guarantee a purity level exceeding ≥99.0%. Each wholesale shipment is accompanied by batch-specific analytical reports to support your laboratory research protocols.`
    },
    {
      q: `Is ${productName} intended for therapeutic use or human consumption?`,
      a: `Absolutely not. All products, including ${productName}, are supplied strictly for laboratory research purposes and in-vitro scientific testing. Under no circumstances is this material to be utilized for human consumption, diagnostic procedures, or therapeutic intervention.`
    },
    {
      q: `What is the minimum order quantity (MOQ) for wholesale ${productName}?`,
      a: `The minimum order quantity for wholesale ${productName} is 10 vials (which constitutes 1 standard kit). We specialize in commercial bulk supply for research institutions, laboratories, and distribution brands, and do not fulfill retail or single-vial inquiries.`
    },
    {
      q: `What is the physical form of wholesale ${productName}?`,
      a: physicalForm_En
    },
    {
      q: `What are the recommended storage temperatures and stability limits for ${productName}?`,
      a: storage_En
    },
    {
      q: `Does 99 Purity Wholesale offer White Label services for ${productName}?`,
      a: `Yes. We provide comprehensive unbranded (White Label) manufacturing for ${productName}. Commercial shipments can be sent with unlabelled vials and blank packaging, allowing clinical research facilities and distribution brands to apply their own branding upon arrival.`
    },
    {
      q: `Do you provide Private Labeling services for bulk ${productName} orders?`,
      a: `Yes. Through our corporate partner program, we offer end-to-end Private Label services. Our design team can print and apply premium custom labels to your ${productName} vials prior to shipment. Higher MOQ thresholds apply for continuous custom labeling.`
    },
    {
      q: `Can I view the HPLC and LC-MS report for the current batch of ${productName} before placing an order?`,
      a: `Yes. Analytical transparency is the core of our business. Qualified laboratory directors and commercial buyers can request the HPLC and Mass Spectrometry (LC-MS) report for the current manufacturing batch by clicking the 'Request COA' button on this page prior to order confirmation.`
    },
    {
      q: `What is the difference between HPLC and LC-MS testing for ${productName}?`,
      a: `HPLC (High-Performance Liquid Chromatography) confirms the concentration and purity of ${productName} by separating chemical components (ensuring ≥99.0% purity). LC-MS (Mass Spectrometry) verifies the exact molecular mass and amino acid sequence, confirming identity and ensuring the compound is structurally identical to its reference profile.`
    },
    {
      q: `What is the expected Lead Time for wholesale ${productName} orders?`,
      a: `For in-stock kits, lead time is typically 1 to 3 business days. For high-volume commercial orders (500+ vials) or custom Private Label requests, lead time can range from 7 to 14 days. Please consult your account representative for exact logistical projections.`
    },
    {
      q: `Which countries do you ship ${productName} to, and is customs clearance guaranteed?`,
      a: `We ship globally to over 50 countries across North America, Europe, and Asia via secure, discrete courier channels. Our logistics team utilizes advanced packaging and compliant import/export declarations to ensure safe customs passage to authorized research facilities.`
    },
    {
      q: `What payment methods are accepted for bulk ${productName} purchases?`,
      a: `For secure international wholesale transactions, we accept direct wire transfers (T/T, ACH), Cryptocurrency (USDC, USDT, Bitcoin) for its B2B speed and liquidity, and select corporate payment platforms (like Wise or Payoneer).`
    },
    {
      q: `Do you offer bulk discounts for very large orders of ${productName}?`,
      a: `Yes. Our tiered pricing model automatically reduces the per-vial cost based on your order volume. Large-scale laboratories or resellers looking to procure several thousand vials should contact our corporate desk to negotiate exclusive manufacturing contracts.`
    },
    {
      q: `Does 99 Purity Wholesale provide B2B Dropshipping for ${productName}?`,
      a: `Yes. We entertain B2B dropshipping partnerships for approved research brands. We can directly ship unbranded or private-labeled kits to your client's facilities using blind packaging, protecting your customer list and supply chain identity.`
    },
    {
      q: `Do you offer e-commerce Website Development services for new peptide brands?`,
      a: `Through our parent network (Belk Digital), we offer enterprise-grade web development and design services. If you are starting a new research brand and require top-tier B2B or retail infrastructure (like WooCommerce/Shopify integration and modern, high-performance web design), please inquire about our corporate digital design expertise.`
    },
    {
      q: `Does 99 Purity provide reconstitution instructions or dilution guidelines for ${productName}?`,
      a: `As an industrial raw chemical manufacturer, we do not provide reconstitution guides, dilution instructions, or scientific experimental assistance. All materials, including ${productName}, are supplied strictly for research purposes and must be handled by certified professionals operating under established laboratory protocols.`
    },
    {
      q: `How is ${productName} packaged during shipping to ensure stability?`,
      a: `Vials of ${productName} are vacuum-sealed and shipped in highly protective, temperature-buffered packaging. The solid lyophilized cake protects the molecule from short-term thermal degradation during express transit. Cold-chain shipping can be arranged for extremely sensitive or high-volume procurements.`
    },
    {
      q: `What are your return and replacement policies for wholesale ${productName}?`,
      a: `Due to the temperature-sensitive nature of research compounds and contamination risks, we do not accept standard returns once product has left our facility. However, if an order is verifiably damaged in transit or permanently seized (subject to applicable delivery guarantees), we will arrange a reshipment or credit at no additional cost.`
    },
    {
      q: `Can I request custom spec concentrations or vial sizes for wholesale ${productName}?`,
      a: `Yes. Qualified procurement partners requiring specific experimental profiles can request custom concentration sizes, alternative vial counts (e.g., scaling from 5mg to 15mg per vial), or custom lyophilized compound blending. Custom manufacturing MOQs apply.`
    },
    {
      q: `Are there heavy metals or other impurities in your ${productName} batches?`,
      a: `Our stringent, pharmaceutically-modeled synthesis and lyophilization processes ensure that all purification reagents, heavy metal ions, and excessive TFA (Trifluoroacetic acid) are scrubbed well below strict clinical reference thresholds, resulting in ultra-pure lyophilized powder for your assays.`
    }
  ];
}
