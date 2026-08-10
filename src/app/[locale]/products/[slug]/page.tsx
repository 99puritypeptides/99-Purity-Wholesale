import { notFound } from 'next/navigation';
import { ShieldCheck, Mail, Zap, CheckCircle2, FileText, Beaker, ChevronRight, Box, FlaskConical, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import productsData from '@/data/products.json';
import locationsData from '@/data/locations.json';
import citiesData from '@/data/cities.json';
import { getTranslations } from 'next-intl/server';
import SpecSelector from '@/components/products/SpecSelector';
import ShareProduct from '@/components/products/ShareProduct';
import FaqSection from '@/components/shared/FaqSection';
import { FadeIn } from '@/components/shared/Motion';
import ProductGallery from '@/components/products/ProductGallery';
import AddToInquiryButton from '@/components/products/AddToInquiryButton';


export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale: params.locale, namespace: 'Meta' });
  const product = productsData.find(p => p.slug === params.slug);
  if (!product) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const path = `/products/${params.slug}`;
  const url = params.locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${params.locale}${path}`;

  const ogTitle = t('productOgTitle', { name: product.name });
  const ogDesc = t('productOgDesc', { name: product.name });
  const ogUrlImage = `${baseUrl}/api/og?title=${encodeURIComponent(product.name)}&desc=${encodeURIComponent(ogDesc)}&category=Research%20Compound`;

  return {
    metadataBase: new URL(baseUrl),
    title: t('productTitle', { name: product.name }),
    description: t('productDesc', { name: product.name }),
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${baseUrl}${path}`,
        es: `${baseUrl}/es${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: url,
      siteName: '99 Purity Wholesale',
      images: [
        {
          url: ogUrlImage,
          width: 1200,
          height: 630,
          alt: `${product.name} Wholesale Peptides`,
        },
      ],
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('productTitle', { name: product.name }),
      description: t('productDesc', { name: product.name }),
      images: [ogUrlImage],
    },
  };
}

const productSpecImagesMap = {
  "5-amino-1mq": {
    "10mg": "5-AMINO-1MQ 50mg.webp",
  },
  "adamax": {
    "5mg": "adamax-5mg.webp",
    "10mg": "adamax-10mg.webp",
  },
  "adipotide-fttp": {
    "2mg": "adipotide-fttp-2mg.webp",
    "5mg": "adipotide-fttp-5mg.webp",
    "10mg": "adipotide-fttp-10mg.webp",
  },
  "aod9604": {
    "5mg": "aod9604-5mg.webp",
    "10mg": "aod9604-10mg.webp",
  },
  "b12": {
    "10mg": "b12-10mg.webp",
  },
  "b7-33": {
    "2mg": "b7-33-2mg.webp",
    "10mg": "b7-33-10mg.webp",
  },
  "bac-water": {
    "10mg": "BAC WATER 3ML.webp",
  },
  "bpc-157": {
    "10mg": "BPC-157 5mg-5.webp",
  },
  "bpc-5mg-tb-5mg": {
    "10mg": "BPC-157 TB-500 MIX 5mg 5mg-2.webp",
  },
  "bpc-10mg-tb-10mg": {
    "20mg": "bpc-157-tb-500-10-10mg.jpg",
  },
  "cagrilintide": {
    "10mg": "CAGRILINTIDE 10mg.webp",
  },
  "cagrisema": {
    "5mg": "cagrisema-2.5+2.5-5mg.webp",
  },
  "cjc-1295-dac": {
    "5mg": "cjc-1295-dac5mg.webp",
  },
  "cjc-1295-no-dac": {
    "5mg": "cjc-1295-no-dac-5mg.webp",
    "10mg": "cjc-1295-no-dac-10mg.webp",
  },
  "cjc-1295-ipam": {
    "10mg": "cjc-1295-ipamorelin-10-10mg.jpg",
  },
  "dihexa": {
    "10mg": "dihexa-10mg.webp",
  },
  "dsip": {
    "5mg": "dsip-5mg.webp",
  },
  "dulaglutide": {
    "5mg": "dulaglutide-5mg.webp",
    "10mg": "dulaglutide-10mg.webp",
  },
  "epithalon": {
    "10mg": "EPITHALON 10mg.webp",
  },
  "foxo4": {
    "2mg": "foxo4-2mg.webp",
    "10mg": "fox04-10mg.jpg",
  },
  "foxo4-dri": {
    "10mg": "foxo4-dri-10mg.webp",
  },
  "ghk-cu": {
    "10mg": "GHK-CU 50mg-1.webp",
  },
  "glow-blend": {
    "70mg": "glow-hair-skin-nail-blend.jpg",
  },
  "klow-blend": {
    "80mg": "klow-custom-peptide-kit.jpg",
  },
  "glutathione": {
    "600mg": "glutathione-600mg.webp",
    "1500mg": "glutathione-1500mg.webp",
  },
  "ipamorelin": {
    "10mg": "IPAMORELIN 5mg-2.webp",
  },
  "kpv": {
    "10mg": "KPV 10mg.webp",
  },
  "l-carnitine": {
    "1200mg": "l-carnitine-1200mg.webp",
  },
  "lipo-c": {
    "10mg": "LIPO-C.webp",
  },
  "ll37": {
    "5mg": "ll37-5mg.jpg",
  },
  "mic-blend": {
    "10mg": "mic-lipo-c+b12-10mg.webp",
  },
  "mots-c": {
    "10mg": "MOTS-C 10mg-1.webp",
  },
  "nad": {
    "10mg": "NAD+ 500mg-1.webp",
  },
  "retatrutide": {
    "10mg": "RETATRUTIDE 10mg-6.webp",
  },
  "selank": {
    "10mg": "SELANK 10mg.webp",
  },
  "semaglutide": {
    "10mg": "SEMAGLUTIDE 5mg-2.webp",
  },
  "semax": {
    "10mg": "SEMAX 10mg.webp",
  },
  "sermorelin-acetate": {
    "5mg": "semorelin-acetate-5mg.webp",
    "10mg": "sermorelin-10mg.jpg",
  },
  "snap-8": {
    "10mg": "SNAP 8  10mg.webp",
  },
  "ss-31": {
    "10mg": "ss-31-10mg.webp",
    "50mg": "ss-31-50mg.jpg",
  },
  "tb-500": {
    "10mg": "TB-500  5mg-2.webp",
  },
  "tesamorelin": {
    "10mg": "TESAMORELIN 10mg-1.webp",
  },
  "thymalin-thymulin": {
    "10mg": "thymalin-thymylin-10mg.webp",
  },
  "thymosin-alpha-1": {
    "10mg": "Thymosin Alpha 1mg.webp",
  },
  "tirzepatide": {
    "10mg": "TIRZEPATIDE 10mg-3.webp",
  },
  "vip": {
    "5mg": "vip-5mg.webp",
    "10mg": "vip-10mg.jpg",
  },
  "glutathione-600-1500": {
    "10mg": "GLUTATHIONE  200mg ml.webp",
  },
  "epitalon-spray": {
    "10mg": "EPITALON spray 10mg.webp",
  },
  "aod-9604-5mg-10mg": {
    "10mg": "AOD9604  5mg-2.webp",
  },
  "cjc-1295-ipamorelin": {
    "10mg": "CJC 1295 IPAMORELIN 5mg 5mg-2.webp",
  },
  "10-needles": {
    "10mg": "10 Needles-1.webp",
  },
  "l-carnitine-600mg": {
    "10mg": "L-CARNATINE 600mg 20mg.webp",
  },
  "h-frag": {
    "10mg": "H FRAG.webp",
  },
  "ghrp-2-10mg": {
    "10mg": "GHRP-2  10mg.webp",
  },
  "ss-31-elamipretide": {
    "10mg": "SS-31 10mg-1.webp",
  },
  "ahk-cu-50mg-100mg": {
    "10mg": "AHK-CU 50mg-1.webp",
  },
  "pt-141-bremelanotide": {
    "10mg": "PT-141 10mg.webp",
  },
  "kisspeptin": {
    "10mg": "KISSPEPTIN  10mg.webp",
  },
  "mt-1-10mg": {
    "10mg": "MT-1 10mg.webp",
  },
  "semax-spray": {
    "10mg": "SEMAX spray 5mg.webp",
  },
  "selank-spray": {
    "10mg": "SELANK spray 100mcg.webp",
  },
  "semax-selank-spray": {
    "10mg": "SEMAX + SELANK  spray 300mcg.webp",
  },
  "l-carnitine-400mg": {
    "10mg": "L-CARNATINE 400mg 20mg.webp",
  },
  "l-carnitine-200mg": {
    "10mg": "L-CARNATINE 200mg 20ml.webp",
  },
  "oxytocin-spray": {
    "10mg": "OXYTOCIN spray10mg.webp",
  },
  "pt-141-spray": {
    "10mg": "PT-141  spray 10mg.webp",
  },
  "dsip-spray": {
    "10mg": "DSIP spray 10mg.webp",
  },
  "kpv-spray": {
    "10mg": "KPV spray 5mg.webp",
  },
  "nad-spray": {
    "10mg": "NAD+ spray 50mg.webp",
  },
  "glow": {
    "10mg": "GLOW 70mg.webp",
  },
  "klow": {
    "10mg": "KLOW.webp",
  },
  "ara-290-10mg": {
    "10mg": "ARA-290  10mg.webp",
  },
  "ghrp-6-10mg": {
    "10mg": "GHRP-6  10mg.webp",
  },
  "sermorelin": {
    "10mg": "SERMORELIN 10mg.webp",
  },
  "igf-1-lr3": {
    "10mg": "IGF1 LR31mg-2.webp",
  },
  "dhea-10mg": {
    "10mg": "DHEA 10mg.webp",
  },
  "hcg-5000-iu": {
    "10mg": "HCG  5000 IU.webp",
  },
  "mt-2-melanotan-ii": {
    "10mg": "MT-2 10mg.webp",
  },
  "vip-vasoactive-intestinal-peptide": {
    "10mg": "VIP 10mg.webp",
  },
  "vip-spray": {
    "10mg": "VIP spray 10mg.webp",
  },
  "mt-2-spray": {
    "10mg": "MT-2 spray 10mg.webp",
  },
  "ghk-cu-spray": {
    "10mg": "GHK-CU spray 50mg.webp",
  },
  "bpc-157-spray": {
    "10mg": "BPC-157 spray 5mg.webp",
  },
  "dsip-delta-sleep-inducing-peptide": {
    "10mg": "DSIP 10mg.webp",
  },
  "cjc-1295-no-dac-10mg": {
    "10mg": "CJC-1295 No DAC  10mg.webp",
  },
  "cjc-1295-dac-5mg": {
    "10mg": "CJC W DAC  5mg.webp",
  },
  "semax-selank-blend": {
    "10mg": "SEMAX SELANK 10 10.webp",
  },
  "hcg-10000-iu": {
    "10mg": "HCG  10000 IU.webp",
  },
  "tesamorelin-ipamorelin-research-peptide": {
    "10mg": "TESA IPA 6mg 3mg.webp",
  },
};

export default async function ProductPage({ params }: { params: { locale: string, slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'ProductDetail' });
  const pt = await getTranslations({ locale: params.locale, namespace: 'ProductsIndex' });
  const tr = await getTranslations({ locale: params.locale, namespace: 'Research' });
  const product = productsData.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Get localized category name from ProductsIndex namespace
  const localizedCategoryName = pt(`categories.${product.category}.name`);

  // Dynamically enrich descriptions and define 8 comprehensive localized FAQs at runtime
  const isEs = params.locale === 'es';
  const isLiquid = product.slug === 'bac-water' || product.slug === 'lipo-c';

  let physicalForm = t('physicalForms.lyophilized');
  let recommendedStorage = t('storageValues.standard');

  if (product.slug === 'bac-water') {
    physicalForm = t('physicalForms.solvent');
    recommendedStorage = t('storageValues.bacWater');
  } else if (product.slug === 'lipo-c') {
    physicalForm = t('physicalForms.solution');
    recommendedStorage = t('storageValues.liquid');
  }
  
  const descExtension = isEs 
    ? ` Este compuesto ${isLiquid ? 'líquido' : 'liofilizado'} se sintetiza y purifica con el único propósito de investigación científica. Este material se proporciona estrictamente para fines de investigación de laboratorio e investigación in-vitro en entornos académicos y de desarrollo controlados. No está diseñado, aprobado ni destinado bajo ninguna circunstancia para el consumo humano, uso clínico, diagnóstico médico o administración terapéutica directa.`
    : ` This ${isLiquid ? 'liquid' : 'lyophilized'} compound is synthesized and purified for the sole purpose of scientific investigation. This material is supplied strictly for laboratory research purposes and in-vitro scientific testing in controlled developmental or academic settings. It is not designed, approved, or intended under any circumstances for human consumption, clinical application, medical diagnostics, or direct therapeutic administration.`;

  const originalDesc = t.has(`descriptions.${product.slug}`) 
    ? t(`descriptions.${product.slug}`) 
    : product.description;
    
  const enrichedDescription = `${originalDesc}${descExtension}`;

  // Dynamic FAQ values for physical form and storage to optimize for SEO/AEO/GEO/search engines
  const formQ_En = product.slug === 'bac-water'
    ? `What is the physical form of wholesale Bacteriostatic Water?`
    : (product.slug === 'lipo-c'
      ? `What is the physical form of wholesale Lipo-C?`
      : `What is the physical form of wholesale ${product.name}?`);

  const formA_En = product.slug === 'bac-water'
    ? `Bacteriostatic Water is supplied as a sterile, clear, colorless liquid solvent containing 0.9% benzyl alcohol, which serves as a preservative to prevent bacterial growth. It is shipped in premium glass vials, ready for research use in reconstituting lyophilized compounds.`
    : (product.slug === 'lipo-c'
      ? `Lipo-C is supplied as a sterile liquid solution. It contains a specialized compounded mixture of lipotropic agents (Methionine, Inositol, Choline) and other essential compounds pre-dissolved in a sterile liquid carrier, optimized for in-vitro research testing.`
      : `${product.name} is supplied in the form of a lyophilized (freeze-dried) solid powder or cake in vacuum-sealed glass vials. This solid state is designed to protect the molecular stability of the peptide during transit and storage. It must be reconstituted with a sterile solvent prior to starting in-vitro laboratory assays.`);

  const storageQ_En = `What are the recommended storage temperatures and stability limits for ${product.name}?`;

  const storageA_En = product.slug === 'bac-water'
    ? `Bacteriostatic Water should be stored at controlled room temperature between 15°C and 30°C (59°F to 86°F). Do not freeze, as freezing compromises the vial's integrity and degrades the benzyl alcohol preservative. Keep in a dry place protected from light. Once opened/punctured, the vial remains stable for up to 28 days before it must be discarded.`
    : (product.slug === 'lipo-c'
      ? `Lipo-C liquid solution must be stored refrigerated between 2°C and 8°C (36°F to 46°F). Do not freeze, as sub-zero temperatures can cause active lipotropic ingredients to precipitate out of the liquid solution. Keep the vial upright, away from direct heat and light.`
      : `Lyophilized (Dry Powder) ${product.name} must be stored at -20°C for long-term preservation (up to 36 months) or refrigerated at 2°C to 8°C for short-term active study (up to 24 months). Protect from direct light. Important: Prior to opening, allow the dry vial to reach room temperature to prevent condensation and moisture absorption. Once reconstituted into liquid form, the solution must be refrigerated at 2°C to 8°C and analyzed or used within 8 to 30 days. Do not freeze the reconstituted liquid solution, as repeated freeze-thaw cycles cause rapid chemical degradation.`);

  const formQ_Es = product.slug === 'bac-water'
    ? `¿Cuál es la forma física del agua bacteriostática al por mayor?`
    : (product.slug === 'lipo-c'
      ? `¿Cuál es la forma física de Lipo-C al por mayor?`
      : `¿Cuál es la forma física de ${product.name} al por mayor?`);

  const formA_Es = product.slug === 'bac-water'
    ? `El agua bacteriostática se suministra como un solvente líquido estéril, claro e incoloro que contiene alcohol bencílico al 0.9%, el cual actúa como conservante para prevenir el crecimiento bacteriano. Se envía en viales de vidrio de alta calidad, listo para su uso en la reconstitución de compuestos liofilizados.`
    : (product.slug === 'lipo-c'
      ? `Lipo-C se suministra como una solución líquida estéril. Contiene una mezcla compuesta especializada de agentes lipotrópicos (metionina, inositol, colina) y otros compuestos esenciales predisueltos en un vehículo líquido estéril, optimizado para pruebas de investigación in vitro.`
      : `${product.name} se suministra en forma de polvo sólido liofilizado (secado por congelación) en viales de vidrio sellados al vacío. Este estado sólido está diseñado para proteger la estabilidad molecular del péptido durante el tránsito y almacenamiento. Debe reconstituirse con un solvente estéril antes de iniciar los ensayos de laboratorio in-vitro.`);

  const storageQ_Es = `¿Cuáles son las temperaturas de almacenamiento recomendadas y los límites de estabilidad para ${product.name}?`;

  const storageA_Es = product.slug === 'bac-water'
    ? `El agua bacteriostática debe almacenarse a temperatura ambiente controlada entre 15°C y 30°C (59°F a 86°F). No congelar, ya que la congelación compromete la integridad del vial y degrada el conservante de alcohol bencílico. Manténgase en un lugar seco y protegido de la luz. Una vez abierto o perforado, el vial permanece estable por hasta 28 días antes de que deba desecharse.`
    : (product.slug === 'lipo-c'
      ? `La solución líquida Lipo-C debe almacenarse refrigerada entre 2°C y 8°C (36°F a 46°F). No congelar, ya que las temperaturas bajo cero pueden hacer que los ingredientes lipotrópicos activos se precipiten fuera de la solución líquida. Mantenga el vial en posición vertical, lejos de la luz directa y del calor.`
      : `El ${product.name} liofilizado (polvo seco) debe almacenarse a -20°C para conservación a largo plazo (hasta 36 meses) o refrigerado a 2°C a 8°C para estudios activos a corto plazo (hasta 24 meses). Proteger de la luz directa. Importante: Antes de abrir, permita que el vial seco alcance la temperatura ambiente para evitar la condensación y la absorción de humedad. Una vez reconstituido en forma líquida, la solución debe refrigerarse a 2°C a 8°C y analizarse o usarse dentro de 8 a 30 días. No congele la solución líquida reconstituida, ya que los ciclos repetidos de congelación y descongelación causan una degradación química rápida.`);

  const faqs = isEs ? [
    {
      q: `¿Cuál es el estándar de pureza de ${product.name} al por mayor?`,
      a: `Todos los lotes de ${product.name} se verifican rigurosamente mediante HPLC (cromatografía líquida de alta resolución) y espectrometría de masas para garantizar un nivel de pureza superior al ≥99.0%. Cada envío de distribución incluye informes analíticos específicos del lote para respaldar sus protocolos de investigación de laboratorio.`
    },
    {
      q: `¿Está destinado ${product.name} para uso terapéutico o consumo humano?`,
      a: `Absolutamente no. Todos los compuestos, incluyendo ${product.name}, se suministran estrictamente para fines de investigación de laboratorio y pruebas científicas in-vitro. Bajo ninguna circunstancia este material debe ser utilizado para el consumo humano, diagnóstico médico o intervención terapéutica directa.`
    },
    {
      q: `¿Cuál es la cantidad mínima de pedido (MOQ) para ${product.name} al por mayor?`,
      a: `La cantidad mínima de pedido para ${product.name} al por mayor es de 10 viales (lo que equivale a 1 kit estándar). Nos especializamos en la adquisición y suministro comercial a granel para instituciones de investigación, laboratorios y marcas de distribución, por lo que no realizamos ventas de viales individuales.`
    },
    {
      q: formQ_Es,
      a: formA_Es
    },
    {
      q: storageQ_Es,
      a: storageA_Es
    },
    {
      q: `¿Puedo solicitar concentraciones personalizadas o tamaños de vial para ${product.name}?`,
      a: `Sí. Los socios comerciales calificados que requieran especificaciones de investigación particulares pueden coordinar tamaños de viales personalizados, variaciones de concentración o formulaciones liofilizadas a medida. Póngase en contacto con nuestro equipo de ventas a granel para definir sus requisitos.`
    },
    {
      q: `¿Cómo se envía ${product.name} al por mayor y está garantizada la entrega?`,
      a: `Todos los pedidos se sellan al vacío en envases de alta resistencia térmica para preservar la integridad molecular de los péptidos. Realizamos envíos express y discretos con seguimiento global y despacho optimizado, asegurando una entrega 100% segura a sus instalaciones.`
    },
    {
      q: `¿Puedo ver el informe de HPLC para el lote actual de ${product.name} antes de realizar un pedido?`,
      a: `Sí. Los directores de laboratorio y socios comerciales acreditados pueden solicitar el informe de HPLC y espectrometría de masas del lote de producción actual haciendo clic en el botón 'Solicitar COA' en esta página antes de confirmar su pedido.`
    },
    {
      q: `¿Proporciona 99 Purity pautas de reconstitución o instrucciones de dosificación para ${product.name}?`,
      a: `Como proveedor industrial de materias primas puras, no proporcionamos instrucciones de reconstitución, pautas de dilución o pautas de dosificación. Todos nuestros productos se suministran estrictamente para fines de investigación científica y deben ser manejados por investigadores y profesionales capacitados.`
    }
  ] : [
    {
      q: `What is the purity standard of 99 Purity's wholesale ${product.name}?`,
      a: `All batches of ${product.name} are rigorously verified via HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry to guarantee a purity level exceeding ≥99.0%. Each wholesale shipment is accompanied by batch-specific analytical reports to support your laboratory research protocols.`
    },
    {
      q: `Is ${product.name} intended for therapeutic use or human consumption?`,
      a: `Absolutely not. All products, including ${product.name}, are supplied strictly for laboratory research purposes and in-vitro scientific testing. Under no circumstances is this material to be utilized for human consumption, diagnostic procedures, or therapeutic intervention.`
    },
    {
      q: `What is the minimum order quantity (MOQ) for wholesale ${product.name}?`,
      a: `The minimum order quantity for wholesale ${product.name} is 10 vials (which constitutes 1 standard kit). We specialize in commercial bulk supply for research institutions, laboratories, and distribution brands, and do not fulfill retail or single-vial inquiries.`
    },
    {
      q: formQ_En,
      a: formA_En
    },
    {
      q: storageQ_En,
      a: storageA_En
    },
    {
      q: `Can I request custom spec concentrations or vial sizes for wholesale ${product.name}?`,
      a: `Yes. Qualified procurement partners requiring specific experimental profiles can request custom concentration sizes, alternative vial counts, or custom lyophilized compound blending. Please contact our corporate sales desk to define your parameters.`
    },
    {
      q: `How is wholesale ${product.name} shipped, and is bulk delivery guaranteed?`,
      a: `We ship all bulk orders in high-grade, vacuum-sealed packaging with temperature stability buffers to preserve molecular integrity. Transit is managed via premium express couriers with discrete border-optimized clearance, ensuring 100% delivery safety.`
    },
    {
      q: `Can I view the HPLC report for the current batch of ${product.name} before placing an order?`,
      a: `Yes. Qualified laboratory directors and commercial buyers can request the HPLC and Mass Spectrometry report for the current manufacturing batch by clicking the 'Request COA' button on this page prior to order confirmation.`
    },
    {
      q: `Does 99 Purity provide reconstitution instructions or laboratory dilution guidelines for ${product.name}?`,
      a: `As an industrial raw chemical manufacturer, we do not provide reconstitution guides, dilution instructions, or scientific experimental assistance. All materials are supplied strictly for research purposes and must be handled by certified professionals.`
    }
  ];

  // FAQ JSON-LD is emitted by the <FaqSection> below (which renders this same `faqs` array) — no separate script here.

  // Get product spec images map
  const specImagesMap = productSpecImagesMap[product.slug as keyof typeof productSpecImagesMap] || {};
  const images = Object.values(specImagesMap);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';

  // No aggregateRating: there is no real review system to source it from — fabricated values
  // would violate Google's structured-data policy on reviews/ratings.
  const productPath = `/products/${params.slug}`;
  const productUrl = params.locale === 'en' ? `${baseUrl}${productPath}` : `${baseUrl}/${params.locale}${productPath}`;
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: enrichedDescription,
    image: images.length ? `${baseUrl}/product-images/${encodeURI(images[0] as string)}` : `${baseUrl}/og-image.png`,
    sku: product.slug,
    brand: {
      '@type': 'Brand',
      name: '99 Purity Wholesale'
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'USD',
      price: '199',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  // Find related products (same category, different slug, max 3)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  // Cross-link to city/state location pages that actually list this compound as a popular product
  const matchedCities = citiesData
    .filter(c => c.popularProducts.some(p => p.toLowerCase() === product.name.toLowerCase()))
    .map(c => ({
      label: c.city,
      href: `/locations/${c.region.toLowerCase().replace(/ /g, '-')}/${c.stateSlug}/${c.slug}`,
    }));
  const matchedStates = locationsData
    .filter(l => l.slug !== 'united-states' && (l.popularProducts || []).some((p: string) => p.toLowerCase() === product.name.toLowerCase()))
    .map(l => ({
      label: l.city,
      href: `/locations/${l.region.toLowerCase().replace(/ /g, '-')}/${l.slug}`,
    }));
  const matchedLocations = [...matchedCities, ...matchedStates].slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      
      {/* Breadcrumbs Fold */}
      <div className="border-b border-black/5 bg-[#F8F8F6] relative z-20 pt-28 md:pt-36">
        <div className="container mx-auto px-6 py-4 flex items-center gap-2 text-xs font-dm-mono text-black/40 overflow-x-auto whitespace-nowrap">
          <Link href="/products" className="hover:text-black transition-colors">{t('breadcrumbs.products')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/products/${product.category}`} className="hover:text-black transition-colors uppercase">
            {localizedCategoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-black font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Light Showcase Section */}
      <section className="relative z-10 bg-[#F8F8F6] py-16 md:py-24 overflow-hidden">
        {/* Subtle Light Grain Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="container mx-auto px-6 max-w-[1600px] relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Combined Product Showcase & Technical Passport Card (Symmetrical & Dense!) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <FadeIn className="w-full">
                <div className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col w-full">
                  {/* Dynamic Interactive Image Gallery */}
                  <ProductGallery 
                    images={images}
                    productName={product.name}
                    categoryName={localizedCategoryName}
                    specImagesMap={specImagesMap}
                  />

                  {/* Elegant Divider line inside card */}
                  <div className="border-t border-black/5 my-8" />

                  {/* Dense Specification Passport Grid inside combined card - Generous Row Spacing! */}
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <Beaker className="w-3.5 h-3.5 text-black/30" />
                      <span className="font-absans text-[10px] font-bold uppercase tracking-wider text-black/80">{t('passportTitle')}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm leading-tight">
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">{t('compoundNameLabel')}</span>
                        <span className="font-bold text-black text-sm uppercase">{product.name}</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">{t('casRegistryLabel')}</span>
                        <span className="font-dm-mono font-bold text-black/80 text-sm">{product.cas !== 'N/A' && product.cas !== 'Blend' ? product.cas : (product.cas === 'Blend' ? (isEs ? 'Mezcla' : 'Blend') : (isEs ? 'N/A (Peptide)' : 'N/A (Peptide)'))}</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">{t('purityGradeLabel')}</span>
                        <span className="font-bold text-emerald-600 text-sm">≥99.0% ({isEs ? 'Verificado por HPLC' : 'HPLC Verified'})</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">{t('physicalFormLabel')}</span>
                        <span className="font-bold text-black/70 text-sm">{physicalForm}</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">{t('recommendedStorageLabel')}</span>
                        <span className="font-bold text-black/70 text-sm">{recommendedStorage}</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">{t('procurementLimitLabel')}</span>
                        <span className="font-bold text-black/70 text-sm">{t('moqValue')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Symmetrical Meta Info & Symmetrical Selector Card */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn delay={0.15}>
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-black/5 border border-black/5 text-black px-3.5 py-1.5 rounded-full text-[10px] font-dm-sans font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-black/40" />
                    {t('purity')}
                  </span>
                  {product.cas !== 'N/A' && (
                    <span className="inline-flex items-center gap-1.5 bg-black/5 border border-black/5 text-black/60 px-3.5 py-1.5 rounded-full text-[10px] font-dm-mono uppercase tracking-wider">
                      {t('cas')} {product.cas}
                    </span>
                  )}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="reveal-text font-absans text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black mb-6 leading-none">
                  {product.name}
                </h1>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p className="font-archia text-sm md:text-base text-black/60 leading-relaxed font-medium mb-8 max-w-2xl">
                  {enrichedDescription}
                </p>
              </FadeIn>

              {/* Symmetrical white card for Selector controls */}
              <FadeIn delay={0.3} className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] w-full mb-6">
                <SpecSelector
                  productId={product.slug}
                  productName={product.name}
                  category={localizedCategoryName}
                  categoryPage={`/products/${product.category}`}
                  specs={Array.from(new Set(product.specs.map(s => s.split('×')[0])))}
                  kitSizes={Array.from(new Set(product.specs.map(s => parseInt(s.split('×')[1]))))}
                />
              </FadeIn>

              {/* Dynamic Research Paper Card */}
              <FadeIn delay={0.32}>
                <div className="bg-gradient-to-r from-black via-zinc-900 to-zinc-950 text-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-full mb-6 relative overflow-hidden group border border-white/5">
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FlaskConical className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-dm-mono uppercase tracking-widest text-emerald-400 font-bold">
                          {tr('academicTitle')}
                        </span>
                      </div>
                      <h3 className="reveal-text font-absans text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2 leading-none">
                        {product.name}
                      </h3>
                      <p className="text-xs text-white/60 font-archia max-w-md">
                        {isEs 
                          ? "Acceda a datos científicos detallados, mecanismos celulares y resultados de pureza del lote para este compuesto de investigación."
                          : "Access in-depth scientific literature, cellular signaling pathways, and HPLC batch verification for this compound."}
                      </p>
                    </div>
                    
                    <Link
                      href={`/products/${product.slug}/research`}
                      className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-dm-sans font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20 whitespace-nowrap self-start md:self-auto"
                    >
                      <span>{tr('readPaper')}</span>
                      <ChevronRight className="w-4 h-4 text-black" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Share Product component renders beautifully in light mode beneath selector card */}
              <FadeIn delay={0.35}>
                <ShareProduct 
                  title={product.name} 
                  url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale}/products/${product.slug}`}
                />
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* Details & Specs body fold */}
      <section className="bg-[#F8F8F6] text-black pb-16 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1600px] relative z-10 space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Specs */}
            <div className="lg:col-span-8">
              
              {/* Technical Specifications Card */}
              <FadeIn className="bg-white border border-black/5 rounded-[2.2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
                <h3 className="reveal-text font-absans text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-8 flex items-center gap-3 border-b border-black/5 pb-4">
                  <Beaker className="w-6 h-6 text-black/40" />
                  {t('specsTitle')}
                </h3>
                
                <div className="mb-10">
                  <h4 className="text-[10px] font-dm-mono font-bold text-black/40 mb-4 uppercase tracking-widest">{t('availableSizes')}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {product.specs.map(spec => (
                      <div key={spec} className="flex items-center gap-3 text-black/90 font-dm-sans text-sm bg-black/5 px-6 py-4 rounded-full border border-black/5 font-semibold hover:bg-black/10 transition-colors">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOQ & Tier Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 border-t border-black/5">
                  <div className="md:col-span-4 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2 text-emerald-800">
                      <Box className="w-5 h-5" />
                      <h4 className="font-bold font-dm-sans text-xs uppercase tracking-wider">{t('moqHeading')}</h4>
                    </div>
                    <p className="text-xs text-emerald-800/70 font-archia leading-relaxed font-medium">{t('moqSubtext')}</p>
                  </div>
                  
                  <div className="md:col-span-8 bg-black/[0.01] border border-black/5 rounded-2xl p-6">
                    <h4 className="reveal-text text-black font-bold font-absans text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-black/40" />
                      {t('pricingHeading')}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { key: 'starter', range: '1-9' },
                        { key: 'tier1', range: '10-19' },
                        { key: 'tier2', range: '20-39' },
                        { key: 'tier3', range: '40+' }
                      ].map((tier) => (
                        <div key={tier.key} className="bg-white border border-black/5 rounded-xl p-3 flex flex-col items-center text-center transition-all hover:border-black/20 shadow-sm">
                          <span className="text-[9px] text-black/40 font-bold uppercase mb-1 tracking-wider leading-none">
                            {tier.key === 'starter' 
                              ? t('pricing.starter') 
                              : `${t('pricing.tier')} ${tier.key.replace('tier', '')}`
                            }
                          </span>
                          <span className="text-xs text-black font-bold font-dm-mono tracking-tight">{tier.range} {t('pricing.kits')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* Right Column: Sticky Sidebar pricing block */}
            <div className="lg:col-span-4 relative">
              <FadeIn className="sticky top-24 bg-white border border-black/10 rounded-[2.2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.04)]">
                <h3 className="reveal-text font-absans text-3xl font-bold uppercase tracking-tight text-black mb-3">{t('requestPricingTitle')}</h3>
                <p className="text-black/50 font-archia text-sm font-medium mb-8 leading-relaxed">
                  {t('requestPricingDesc', { name: product.name })}
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18433307365').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-black border border-black hover:bg-transparent hover:text-black hover:border-black text-white font-bold py-4 rounded-full transition-all font-dm-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2.5"
                  >
                    <Zap className="w-4 h-4" /> {t('whatsappCta')}
                  </a>
                  
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-black/5"></div>
                    <span className="flex-shrink-0 mx-4 text-black/30 font-dm-mono text-[9px] uppercase tracking-widest">{t('or')}</span>
                    <div className="flex-grow border-t border-black/5"></div>
                  </div>

                  <a 
                    href={`mailto:sales@99purity.com?subject=Wholesale Inquiry: ${product.name}`} 
                    className="w-full bg-transparent border border-black/10 hover:border-black/30 hover:bg-black/5 text-black/70 hover:text-black font-bold py-4 rounded-full transition-all font-dm-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2.5"
                  >
                    <Mail className="w-4 h-4" /> {t('emailCta')}
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-black/5">
                  <div className="flex items-start gap-3 text-xs text-black/50 font-archia font-medium leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-black/40 flex-shrink-0 mt-0.5" />
                    <p>{t('confidential')}</p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Expanded AEO & SEO Scientific Dossier Card - Now Full Width! */}
          <FadeIn className="bg-white border border-black/5 rounded-[2.2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] w-full">
            <h3 className="reveal-text font-absans text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-2">
              {isEs ? "Dossier Clínico e Índice Técnico" : "Clinical Dossier & Technical Digest"}
            </h3>
            <p className="text-xs font-dm-sans font-bold text-black/40 uppercase tracking-widest mb-6">
              {isEs ? "Perfil de referencia de datos químicos y especificaciones de laboratorio." : "Factual reference profile and clinical data specifications."}
            </p>
            
            <div className="space-y-6 text-sm text-black/60 font-archia leading-relaxed font-medium">
              <p>
                {isEs 
                  ? `Como reactivo de referencia química de primer nivel, ${product.name} sirve como una sonda molecular de alta fidelidad indispensable para el cribado experimental, los ensayos celulares de alta resolución y el análisis estructural in-vitro. En los campos de la síntesis avanzada de péptidos y el desarrollo biotecnológico, los investigadores de laboratorio utilizan ${product.name} para examinar detalladamente la afinidad de unión a receptores, el acoplamiento celular y las cascadas metabólicas secundarias.`
                  : `As a premier chemical reference reagent, ${product.name} serves as an indispensable, high-fidelity molecular probe for experimental screening, high-resolution cellular assays, and in-vitro structural analysis. In the fields of advanced peptide synthesis and biotechnological development, laboratory researchers utilize ${product.name} to closely examine receptor binding affinity, cell signaling pathways, and secondary metabolic cascades.`
                }
              </p>
              <p>
                {isEs
                  ? `Nuestros protocolos de síntesis se ejecutan bajo los estándares industriales más estrictos para garantizar un producto libre de sales residuales o subproductos sintéticos. Con una pureza confirmada que supera el 99.0%, ${product.name} mitiga el riesgo de variables no deseadas en sus ensayos científicos, ofreciendo reproducibilidad de datos de referencia clínicos y de laboratorio.`
                  : `Our synthesis protocols are executed under the most stringent industrial standards to guarantee a product free of residual salts or synthetic byproducts. With a confirmed purity exceeding 99.0%, ${product.name} mitigates the risk of trace variables in your scientific assays, delivering pristine data reproducibility for peer-reviewed clinical and laboratory reference literature.`
                }
              </p>
            </div>

            {/* Structured Machine-Readable AEO Card */}
            <div className="bg-black/[0.015] border border-black/5 rounded-2xl p-6 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Beaker className="w-4.5 h-4.5 text-black/40 flex-shrink-0" />
                <h4 className="font-absans font-bold text-xs uppercase tracking-wider text-black">
                  {isEs ? "Perfil Estructurado de Adquisición y Referencia Científica" : "Structured Procurement Profile & Technical Reference"}
                </h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-black/60 font-dm-sans font-medium">
                <li><strong className="text-black/80 font-bold uppercase text-[9px] tracking-wider block mb-0.5">{isEs ? "Nombre del Compuesto" : "Compound Reference"}</strong> {product.name}</li>
                <li><strong className="text-black/80 font-bold uppercase text-[9px] tracking-wider block mb-0.5">{isEs ? "Registro CAS" : "CAS Registry"}</strong> {product.cas !== 'N/A' ? product.cas : 'Peptide Specific'}</li>
                <li><strong className="text-black/80 font-bold uppercase text-[9px] tracking-wider block mb-0.5">{isEs ? "Grado Analítico" : "Analytical Grade"}</strong> &ge;99.0% High-Purity Research Standard</li>
                <li><strong className="text-black/80 font-bold uppercase text-[9px] tracking-wider block mb-0.5">{isEs ? "Uso Autorizado" : "Authorized Intended Use"}</strong> Strictly for Laboratory Research Purposes Only</li>
                <li><strong className="text-black/80 font-bold uppercase text-[9px] tracking-wider block mb-0.5">{isEs ? "Distribución" : "Supply Availability"}</strong> Lyophilized Bulk Kits (10-vial standard)</li>
                <li><strong className="text-black/80 font-bold uppercase text-[9px] tracking-wider block mb-0.5">{isEs ? "Distribuidor Global" : "Global Authorized Distributor"}</strong> 99 Purity Wholesale</li>
              </ul>
            </div>

            {/* Analytical Quality Assurance Loops */}
            <div className="border-t border-black/5 pt-8 mt-8">
              <h4 className="reveal-text font-absans font-bold text-sm uppercase tracking-wider text-black mb-3">
                {isEs ? "Protocolo de Control de Calidad Analítica" : "Analytical Quality Assurance Loop"}
              </h4>
              <p className="text-xs text-black/55 font-archia leading-relaxed font-medium mb-6">
                {isEs
                  ? `Cada lote sintético de ${product.name} se somete a un riguroso proceso de control de calidad de dos fases. Confirmamos la masa molecular exacta y la alineación de la secuencia de aminoácidos mediante Cromatografía Líquida de Alta Resolución (HPLC) y Espectrometría de Masas (LC-MS). Las muestras terminadas se purgan con nitrógeno y se sellan herméticamente para garantizar la estabilidad molecular a largo plazo.`
                  : `Every synthetic lot of ${product.name} undergoes an exhaustive, double-pass chromatography and verification process. We confirm molecular mass and exact peptide sequence alignment using High-Performance Liquid Chromatography (HPLC) and Liquid Chromatography-Mass Spectrometry (LC-MS). Finished samples are nitrogen-purged and vacuum-sealed for long-term stability.`
                }
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-dm-sans font-bold uppercase tracking-wider text-black/75">
                <div className="bg-black/[0.03] px-6 py-4 rounded-xl border border-black/5 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> HPLC Purity Verified</div>
                <div className="bg-black/[0.03] px-6 py-4 rounded-xl border border-black/5 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> LC-MS Mass Checked</div>
                <div className="bg-black/[0.03] px-6 py-4 rounded-xl border border-black/5 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Nitrogen Purged Stability</div>
              </div>
            </div>
          </FadeIn>

          {/* COA Download Banner - Now Full Width! */}
          <FadeIn className="bg-white border border-black/5 rounded-[2.2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] w-full">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-black/40" />
              </div>
              <div>
                <h4 className="font-absans text-xl font-bold text-black uppercase tracking-tight">{t('coaTitle')}</h4>
                <p className="text-xs text-black/50 font-archia font-medium">{t('coaDesc')}</p>
              </div>
            </div>
            <button className="bg-black border border-black text-white hover:bg-transparent hover:text-black hover:border-black px-6 py-3 rounded-full font-dm-sans text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap">
              {t('requestCoa')}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Dynamic light-themed FAQ Section (Exactly 8 Localized B2B research FAQs for every single compound!) */}
      <FaqSection 
        id="product-faq"
        eyebrow={isEs ? "FAQ" : "FAQ"}
        title={isEs ? `${product.name} Preguntas Frecuentes` : `${product.name} Procurement FAQ`}
        subtitle={isEs ? `Orientación completa de adquisición institucional, verificación de calidad HPLC y detalles de entrega para ${product.name} al por mayor.` : `Complete institutional procurement guidance, quality verification protocols, and delivery details for bulk wholesale ${product.name}.`}
        items={faqs}
        theme="light"
      />

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#F8F8F6] border-t border-black/5 py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-[1600px] relative z-10">
            <h2 className="font-absans text-3xl md:text-4xl font-bold uppercase tracking-tight text-black mb-10">{t('relatedTitle')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(rp => {
                const rpSpecMap = productSpecImagesMap[rp.slug as keyof typeof productSpecImagesMap] || {};
                const rpImages = Object.values(rpSpecMap);
                const productImage = rpImages.length > 0 ? rpImages[0] : "";
                const firstSpec = rp.specs && rp.specs.length > 0 ? rp.specs[0] : "10mg×10 Vials";
                const [spec, kitSizeStr] = firstSpec.split('×');
                const kitSize = parseInt(kitSizeStr) || 10;

                return (
                  <div 
                    key={rp.slug} 
                    className="group relative bg-white border border-black/5 rounded-[2.2rem] p-6 hover:border-black/15 transition-all duration-500 flex flex-col hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] overflow-hidden"
                  >
                    {/* Grainy Noise Overlay for premium luxury depth */}
                    <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    
                    <Link href={`/products/${rp.slug}`} className="flex flex-col h-full relative z-10">
                      {/* Luxury Product Thumbnail Showcase */}
                      <div className="relative aspect-square w-full rounded-2xl bg-white overflow-hidden flex items-center justify-center mb-5 transition-all duration-500">
                        {productImage ? (
                          <img 
                            src={encodeURI(`/product-images/${productImage}`)}
                            alt={`${rp.name} High Purity Wholesale Research Peptide`}
                            className="w-[90%] h-[90%] object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center p-4 text-black/20 relative z-10">
                            <FlaskConical className="w-10 h-10 text-black/10 mb-2 group-hover:text-brand-accent/50 transition-colors" />
                            <span className="text-[9px] font-dm-mono uppercase tracking-[0.15em] text-black/20">Research Only</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-3.5">
                        <span className="text-[8px] font-dm-mono font-bold text-black/40 uppercase tracking-[0.2em] px-2.5 py-1 bg-black/5 rounded-full border border-black/5 group-hover:border-black/15 group-hover:text-black transition-all duration-300">
                          {rp.category.replace(/-/g, ' ')}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-absans font-bold text-black mb-2 leading-tight group-hover:text-black/80 transition-colors duration-300 uppercase tracking-tight">
                        {rp.name}
                      </h3>
                      
                      <p className="text-xs text-black/50 font-archia leading-relaxed font-medium line-clamp-2 mb-6 group-hover:text-black/70 transition-colors duration-300 flex-grow">
                        {t.has(`descriptions.${rp.slug}`) ? t(`descriptions.${rp.slug}`) : rp.description}
                      </p>
                    </Link>

                    <div className="flex flex-col gap-4 pt-5 border-t border-black/5 mt-auto relative z-10">
                      <AddToInquiryButton
                        productId={rp.slug}
                        productName={rp.name}
                        category={rp.category}
                        spec={spec}
                        kitSize={kitSize}
                        categoryPage={`/products/${rp.category}`}
                      />
                      
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-[9px] font-dm-mono font-bold text-black/30 uppercase tracking-widest">
                          {rp.specs.length} Specs
                        </div>
                        
                        <Link 
                          href={`/products/${rp.slug}`} 
                          className="flex items-center gap-1 text-black/50 text-[10px] font-dm-mono font-bold uppercase tracking-widest transition-colors hover:text-black"
                        >
                          Details <ChevronRight className="w-3.5 h-3.5 ml-0.5 transform transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Available For Wholesale In — Location Cross-Links */}
      <section className="bg-white border-t border-black/5 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1600px] relative z-10">
          <h2 className="font-absans text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-2">
            {isEs ? `${product.name} Al Por Mayor Disponible En` : `Wholesale ${product.name} Available In`}
          </h2>
          <p className="text-black/50 font-archia font-medium text-sm mb-8 max-w-2xl">
            {isEs
              ? 'Suministramos a instituciones y laboratorios autorizados en todo Estados Unidos. Explore nuestros centros regionales para conocer los plazos de entrega y la cobertura local.'
              : 'We supply licensed institutions and laboratories nationwide. Browse our regional hubs for local delivery timelines and coverage.'}
          </p>
          <div className="flex flex-wrap gap-3">
            {matchedLocations.length > 0 ? (
              matchedLocations.map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  className="inline-flex items-center gap-2 bg-[#F8F8F6] border border-black/5 hover:border-[#13a7b7]/30 hover:bg-white text-black/70 hover:text-[#13a7b7] px-5 py-2.5 rounded-full font-archia text-xs font-semibold transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#13a7b7]/60" />
                  {loc.label}
                </Link>
              ))
            ) : null}
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-black/80 px-5 py-2.5 rounded-full font-archia text-xs font-bold transition-all"
            >
              {isEs ? 'Ver Todas las Ubicaciones' : 'Browse All Locations'} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA Footer (only visible on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-black/10 z-50 lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <a 
          href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18433307365').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full bg-black border border-black text-white font-bold py-3.5 rounded-full transition-all font-dm-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
        >
          <Zap className="w-4 h-4" /> {t('requestPricingTitle')}
        </a>
      </div>
    </div>
  );
}
