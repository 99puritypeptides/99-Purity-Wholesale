import { notFound } from 'next/navigation';
import { ShieldCheck, Mail, Zap, CheckCircle2, FileText, Beaker, ChevronRight, Box, FlaskConical } from 'lucide-react';
import { Link } from '@/i18n/routing';
import productsData from '@/data/products.json';
import { getTranslations } from 'next-intl/server';
import SpecSelector from '@/components/products/SpecSelector';
import ShareProduct from '@/components/products/ShareProduct';
import FaqSection from '@/components/shared/FaqSection';
import { FadeIn } from '@/components/shared/Motion';
import ProductGallery from '@/components/products/ProductGallery';
import AddToInquiryButton from '@/components/products/AddToInquiryButton';


export async function generateMetadata({ params }: { params: { locale: string; category: string; slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Meta' });
  const product = productsData.find(p => p.slug === params.slug && p.category === params.category);
  if (!product) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const url = `${baseUrl}/${params.locale}/products/${params.category}/${params.slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title: t('productTitle', { name: product.name }),
    description: t('productDesc', { name: product.name }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: t('productOgTitle', { name: product.name }),
      description: t('productOgDesc', { name: product.name }),
      url: url,
      siteName: '99 Purity Wholesale',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
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
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

const productSpecImagesMap: Record<string, Record<string, string>> = {
  "5-amino-1mq": {
    "10mg": "5-Amino-1MQ 10mg.jpg"
  },
  "bpc-157": {
    "5mg": "BPC-157 5mg.jpg",
    "10mg": "BPC-157 10mg.jpg"
  },
  "bpc-5mg-tb-5mg": {
    "10mg": "BPC-157.TB-500 5.5mg.jpg"
  },
  "bpc-10mg-tb-10mg": {
    "20mg": "BPC-157.TB-500 10.10mg.jpg"
  },
  "cjc-1295-ipam": {
    "10mg": "CJC-1295.Ipamorelin 10.10mg.jpg"
  },
  "cagrilintide": {
    "10mg": "Cagrilintide.jpg"
  },
  "epithalon": {
    "10mg": "Epithalon 10mg.jpg"
  },
  "foxo4": {
    "10mg": "FOX04 10mg.jpg"
  },
  "ghk-cu": {
    "50mg": "GHK-CU 50mg.jpg",
    "100mg": "GHK-CU 100mg.jpg"
  },
  "glow-blend": {
    "70mg": "GLOW.jpg"
  },
  "klow-blend": {
    "80mg": "KLOW.jpg"
  },
  "ipamorelin": {
    "5mg": "Ipamorelin 5mg.jpg",
    "10mg": "Ipamorelin 10mg.jpg"
  },
  "kpv": {
    "10mg": "KPV 10mg.jpg"
  },
  "ll37": {
    "5mg": "LL37 5mg.jpg"
  },
  "mots-c": {
    "10mg": "Mots-c 10mg.jpg",
    "40mg": "Mots-c 40mg.jpg"
  },
  "nad": {
    "100mg": "NAD 100mg.jpg",
    "500mg": "NAD+ 500mg.jpg",
    "1000mg": "NAD 1000mg.jpg"
  },
  "retatrutide": {
    "10mg": "Retatrutide 10mg.jpg",
    "20mg": "Retatrutide 20mg.jpg",
    "30mg": "Retatrutide 30mg.jpg"
  },
  "selank": {
    "5mg": "SELANK 5mg.png",
    "10mg": "Selank 10mg.jpg"
  },
  "semaglutide": {
    "10mg": "Semaglutide 10mg.jpg",
    "20mg": "Semaglutide 20mg.jpg"
  },
  "semax": {
    "5mg": "SEMAX 5mg.png",
    "10mg": "Semax 10mg.jpg"
  },
  "sermorelin-acetate": {
    "10mg": "Sermorelin 10mg.jpg"
  },
  "snap-8": {
    "10mg": "Snap 8 10mg.jpg"
  },
  "ss-31": {
    "50mg": "SS-31 50mg.jpg"
  },
  "tb-500": {
    "5mg": "TB-500 5mg - 3ml.jpg",
    "10mg": "TB-500 10mg.jpg"
  },
  "tesamorelin": {
    "5mg": "Tesamorelin 5mg.jpg",
    "10mg": "Tesamorelin 10mg.jpg",
    "20mg": "Tesamorelin 20mg.jpg"
  },
  "tirzepatide": {
    "10mg": "Tirzepatide 10mg.jpg",
    "20mg": "Tirzepatide 20mg.jpg",
    "30mg": "Tirzepatide 30mg.jpg",
    "60mg": "Tirzepatide 60mg.jpg"
  },
  "vip": {
    "10mg": "VIP 10mg.jpg"
  },
  "mic-blend": {
    "10mg": "MIC BLEND.png"
  }
};

export default async function ProductPage({ params }: { params: { locale: string, category: string, slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'ProductDetail' });
  const pt = await getTranslations({ locale: params.locale, namespace: 'ProductsIndex' });
  const product = productsData.find(p => p.slug === params.slug && p.category === params.category);

  if (!product) {
    notFound();
  }

  // Get localized category name from ProductsIndex namespace
  const localizedCategoryName = pt(`categories.${product.category}.name`);

  // Dynamically enrich descriptions and define 8 comprehensive localized FAQs at runtime
  const isEs = params.locale === 'es';
  
  const descExtension = isEs 
    ? ` Este compuesto liofilizado se sintetiza y purifica con el único propósito de investigación científica. Este material se proporciona estrictamente para fines de investigación de laboratorio e investigación in-vitro en entornos académicos y de desarrollo controlados. No está diseñado, aprobado ni destinado bajo ninguna circunstancia para el consumo humano, uso clínico, diagnóstico médico o administración terapéutica directa.`
    : ` This lyophilized compound is synthesized and purified for the sole purpose of scientific investigation. This material is supplied strictly for laboratory research purposes and in-vitro scientific testing in controlled developmental or academic settings. It is not designed, approved, or intended under any circumstances for human consumption, clinical application, medical diagnostics, or direct therapeutic administration.`;

  const originalDesc = t.has(`descriptions.${product.slug}`) 
    ? t(`descriptions.${product.slug}`) 
    : product.description;
    
  const enrichedDescription = `${originalDesc}${descExtension}`;

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
      q: `¿Cuáles son las condiciones de almacenamiento recomendadas para ${product.name} liofilizado?`,
      a: `El ${product.name} liofilizado debe mantenerse almacenado a largo plazo a una temperatura constante de -20°C para mantener su estabilidad óptima. Para uso experimental activo a corto plazo, el compuesto liofilizado se puede almacenar refrigerado de +2°C a +8°C por hasta 24 meses.`
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
      q: `What are the recommended storage conditions for wholesale lyophilized ${product.name}?`,
      a: `Lyophilized ${product.name} should be stored at a stable -20°C for long-term molecular preservation. For active short-term laboratory use, the lyophilized compound can be kept refrigerated at +2°C to +8°C, remaining stable for up to 24 months.`
    },
    {
      q: `Does 99 Purity provide reconstitution instructions or laboratory dilution guidelines for ${product.name}?`,
      a: `As an industrial raw chemical manufacturer, we do not provide reconstitution guides, dilution instructions, or scientific experimental assistance. All materials are supplied strictly for research purposes and must be handled by certified professionals.`
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // Find related products (same category, different slug, max 3)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  // Get product spec images map
  const specImagesMap = productSpecImagesMap[product.slug as keyof typeof productSpecImagesMap] || {};
  const images = Object.values(specImagesMap);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
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

        <div className="container mx-auto px-6 max-w-7xl relative z-20">
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
                      <span className="font-absans text-[10px] font-bold uppercase tracking-wider text-black/80">Compound Specification Passport</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm leading-tight">
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">Compound Name</span>
                        <span className="font-bold text-black text-sm uppercase">{product.name}</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">CAS Registry</span>
                        <span className="font-dm-mono font-bold text-black/80 text-sm">{product.cas !== 'N/A' ? product.cas : 'N/A (Peptide)'}</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">Purity Grade</span>
                        <span className="font-bold text-emerald-600 text-sm">≥99.0% (HPLC Verified)</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">Physical Form</span>
                        <span className="font-bold text-black/70 text-sm">Lyophilized Solid Powder</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">Recommended Storage</span>
                        <span className="font-bold text-black/70 text-sm">-20°C to +4°C</span>
                      </div>
                      <div>
                        <span className="text-black/45 block mb-1.5 uppercase tracking-wider font-bold text-[9px]">Procurement Limit</span>
                        <span className="font-bold text-black/70 text-sm">10 Vials (1 Kit MOQ)</span>
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
                <h1 className="font-absans text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black mb-6 leading-none">
                  {product.name}
                </h1>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p className="font-archia text-sm md:text-base text-black/60 leading-relaxed font-medium mb-8 max-w-2xl">
                  {enrichedDescription}
                </p>
              </FadeIn>

              {/* Symmetrical white card for Selector controls */}
              <FadeIn delay={0.3} className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] w-full">
                <SpecSelector
                  productId={product.slug}
                  productName={product.name}
                  category={localizedCategoryName}
                  categoryPage={`/products/${product.category}`}
                  specs={Array.from(new Set(product.specs.map(s => s.split('×')[0])))}
                  kitSizes={Array.from(new Set(product.specs.map(s => parseInt(s.split('×')[1]))))}
                />
              </FadeIn>

              {/* Share Product component renders beautifully in light mode beneath selector card */}
              <FadeIn delay={0.35}>
                <ShareProduct 
                  title={product.name} 
                  url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale}/products/${product.category}/${product.slug}`}
                />
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* Details & Specs body fold */}
      <section className="bg-[#F8F8F6] text-black pb-16 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Specs */}
            <div className="lg:col-span-8">
              
              {/* Technical Specifications Card */}
              <FadeIn className="bg-white border border-black/5 rounded-[2.2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
                <h3 className="font-absans text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-8 flex items-center gap-3 border-b border-black/5 pb-4">
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
                    <h4 className="text-black font-bold font-absans text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
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
                <h3 className="font-absans text-3xl font-bold uppercase tracking-tight text-black mb-3">{t('requestPricingTitle')}</h3>
                <p className="text-black/50 font-archia text-sm font-medium mb-8 leading-relaxed">
                  {t('requestPricingDesc', { name: product.name })}
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} 
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
            <h3 className="font-absans text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-2">
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
              <h4 className="font-absans font-bold text-sm uppercase tracking-wider text-black mb-3">
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
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
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
                    
                    <Link href={`/products/${rp.category}/${rp.slug}`} className="flex flex-col h-full relative z-10">
                      {/* Luxury Product Thumbnail Showcase */}
                      <div className="relative aspect-square w-full rounded-2xl bg-white overflow-hidden flex items-center justify-center mb-5 transition-all duration-500">
                        {productImage ? (
                          <img 
                            src={encodeURI(`/Product images/${productImage}`)}
                            alt={rp.name}
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
                          href={`/products/${rp.category}/${rp.slug}`} 
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

      {/* Mobile Sticky CTA Footer (only visible on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-black/10 z-50 lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <a 
          href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} 
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
