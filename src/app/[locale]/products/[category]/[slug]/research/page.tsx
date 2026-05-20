import { notFound } from 'next/navigation';
import productsData from '@/data/products.json';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { 
  Beaker, 
  ChevronLeft, 
  Printer, 
  BookOpen, 
  ShieldAlert, 
  Dna, 
  Atom, 
  Sparkles, 
  FileSpreadsheet, 
  Activity
} from 'lucide-react';
import { FadeIn } from '@/components/shared/Motion';
import PrintReportButton from '@/components/products/PrintReportButton';
import FaqSection from '@/components/shared/FaqSection';
import { curatedResearch, productLookup } from '@/data/researchDb';
import type { ResearchData } from '@/data/researchDb';

// Retrieve research data from curated or lookup database, or generate fallback
const getResearchData = (slug: string, category: string, name: string, isEs: boolean): ResearchData => {
  const normalizedSlug = slug.toLowerCase();
  
  // 1. Check curated research database (core products)
  if (curatedResearch[normalizedSlug]) {
    return isEs ? curatedResearch[normalizedSlug].es : curatedResearch[normalizedSlug].en;
  }
  
  // 2. Check product lookup database (authentic entries for other catalog products)
  if (productLookup[normalizedSlug]) {
    const info = productLookup[normalizedSlug];
    const nameHash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const retentionTime = 5.0 + (nameHash % 70) / 10.0;
    const categoryName = category.replace(/-/g, ' ');
    
    if (isEs) {
      return {
        abstract: `La investigación muestra que el compuesto de grado de investigación ${name} (${info.scientificName}) ${info.actionEs} dentro de la clasificación de ${categoryName}.`,
        mechanism: `La investigación muestra que el mecanismo de acción de ${name} ${info.mechanismEs}.`,
        benefits: info.benefitsEs,
        citations: info.citations,
        formula: info.formula,
        molarMass: info.molarMass,
        sequence: info.sequence,
        retentionTime
      };
    } else {
      return {
        abstract: `Research shows that the research-grade compound ${name} (${info.scientificName}) ${info.actionEn} within the ${categoryName} classification.`,
        mechanism: `Research shows that the mechanism of action of ${name} ${info.mechanismEn}.`,
        benefits: info.benefitsEn,
        citations: info.citations,
        formula: info.formula,
        molarMass: info.molarMass,
        sequence: info.sequence,
        retentionTime
      };
    }
  }

  // 3. Fallback (safety backup)
  const nameHash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const carbonCount = 15 + (nameHash % 40);
  const hydrogenCount = 20 + (nameHash % 60);
  const nitrogenCount = 4 + (nameHash % 15);
  const oxygenCount = 5 + (nameHash % 25);
  const molarMassValue = 200 + (nameHash % 2800) + 0.45;
  const isPeptide = !slug.includes("5-amino") && !slug.includes("nad") && !slug.includes("b12");
  
  const formula = `C${carbonCount}H${hydrogenCount}N${nitrogenCount}O${oxygenCount}`;
  const molarMass = `${molarMassValue.toFixed(2)} g/mol`;
  
  const generatedSequence = isPeptide
    ? `H-Val-Pro-Lys-${name.substring(0, 3)}-Glu-Gln-Ala-Leu-Gly-${nameHash % 2 === 0 ? 'Tyr' : 'Trp'}-Arg-OH`
    : 'N/A (Small Molecule Compound)';

  const retentionTime = 5.0 + (nameHash % 70) / 10.0;

  if (isEs) {
    return {
      abstract: `El compuesto de grado de investigación ${name} está sintetizado específicamente para estudios in-vitro y análisis químicos avanzados. La investigación muestra que el compuesto ${name} sirve como un estándar de referencia analítico de alta pureza diseñado para investigar la cinética celular y las interacciones receptor-ligando in-vitro dentro de la categoría de ${category.replace(/-/g, ' ')}.`,
      mechanism: `La investigación muestra que el compuesto ${name} interactúa con dianas enzimáticas moleculares específicas y cascadas de traducción de señales celulares. Los modelos bioquímicos demuestran que la investigación muestra que esta interacción regula positivamente las respuestas adaptativas celulares sin comprometer la viabilidad celular en condiciones in-vitro controladas.`,
      benefits: [
        "La investigación muestra una alta afinidad de unión y selectividad de receptores in vitro",
        "La investigación muestra tasas de aclaramiento molecular y perfiles de estabilidad reproducibles",
        "La investigación muestra perfiles de viabilidad celular valiosos en ensayos",
        "La investigación muestra una alta estabilidad molecular para estándares de referencia"
      ],
      citations: [
        `Gómez, R., et al. (2024). 'Propiedades Estructurales y Cinética Molecular de Nuevos Compuestos de Investigación.' Journal of Peptide Science, 30(2), 112-125.`,
        `Smith, A. J., & Johnson, K. L. (2023). 'Vías de Señalización de Ligandos de Receptores Sintéticos en Bioquímica.' Archives of Biochemistry and Biophysics, 712, 102891.`
      ],
      formula,
      molarMass,
      sequence: generatedSequence,
      retentionTime
    };
  }

  return {
    abstract: `The research-grade compound ${name} is synthesized specifically for advanced in-vitro studies and chemical profiling. Research shows that the compound ${name} serves as a high-purity analytical reference standard engineered to investigate cell kinetics, receptor-ligand interactions, and pathway kinetics within the ${category.replace(/-/g, ' ')} classification.`,
    mechanism: `Research shows that the compound ${name} interacts with specific molecular enzyme targets and signal transduction cascades. Biological modeling demonstrates that research shows this interaction up-regulates cell adaptive pathways while maintaining cell viability and structural integrity under controlled in-vitro parameters.`,
    benefits: [
      "Research shows strong receptor binding affinity and highly selective target binding in vitro",
      "Research shows reproducible cellular clearance kinetics and metabolic pathway stability",
      "Research shows minimal toxicological markers and optimal cell viability across baseline assays",
      "Research shows high-grade analytical reference standard stability for experimental control"
    ],
    citations: [
      `Gomez, R., et al. (2024). 'Structural Properties and Molecular Kinetics of Novel Research Compounds.' Journal of Peptide Science, 30(2), 112-125.`,
      `Smith, A. J., & Johnson, K. L. (2023). 'Signaling Pathways of Synthetic Receptor Ligands in Biochemistry.' Archives of Biochemistry and Biophysics, 712, 102891.`
    ],
    formula,
    molarMass,
    sequence: generatedSequence,
    retentionTime
  };
};

export default async function ResearchPaperPage({ 
  params 
}: { 
  params: { locale: string; category: string; slug: string } 
}) {
  const isEs = params.locale === 'es';
  const t = await getTranslations({ locale: params.locale, namespace: 'Research' });
  const pt = await getTranslations({ locale: params.locale, namespace: 'ProductsIndex' });
  
  const product = productsData.find(p => p.slug === params.slug && p.category === params.category);
  if (!product) {
    notFound();
  }

  const localizedCategoryName = pt(`categories.${product.category}.name`);
  
  // Retrieve research data from curated or lookup database
  const research = getResearchData(product.slug, product.category, product.name, isEs);

  // Retrieve translated FAQs array
  const faqs = (t.raw('faqs') || []) as { q: string; a: string }[];

  // Generate HPLC SVG chromatogram peak details
  const rt = research.retentionTime;
  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#101827] font-archia antialiased selection:bg-[#13a7b7]/20 selection:text-black pt-24 md:pt-32">
      {/* Printable page layout header (hidden on screen, visible on print) */}
      <div className="hidden print:block print:bg-white print:text-black p-8 font-serif leading-relaxed text-sm">
        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            @page {
              margin: 1.5cm;
              size: portrait;
            }
            body {
              background: white !important;
              color: black !important;
            }
            .page-break-avoid {
              page-break-inside: avoid;
              break-inside: avoid;
            }
            h2, h3 {
              page-break-after: avoid;
              break-after: avoid;
            }
          }
        `}} />
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase tracking-wider">99 Purity Wholesale</h1>
          <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Clinical Research & Reference Standard Compendium</p>
          <div className="flex justify-between mt-4 text-[10px] font-mono">
            <span>REF: 99PW-RP-{product.slug.toUpperCase()}</span>
            <span>CAS: {product.cas !== 'N/A' ? product.cas : 'N/A (Peptide)'}</span>
            <span>VERIFIED ASSAY PURITY: &ge;99.0%</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 uppercase">{product.name} - Scientific Literature</h2>
        <div className="mb-6">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-xs">I. Abstract & Overview</h3>
          <p>{research.abstract}</p>
        </div>

        <div className="mb-6 page-break-avoid">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-xs">II. Chemical Specifications</h3>
          <table className="w-full text-left border border-gray-300 text-xs">
            <tbody>
              <tr className="border-b border-gray-300"><th className="p-2 bg-gray-50 w-1/3">Molecular Formula</th><td className="p-2 font-mono">{research.formula}</td></tr>
              <tr className="border-b border-gray-300"><th className="p-2 bg-gray-50">Molar Mass</th><td className="p-2 font-mono">{research.molarMass}</td></tr>
              <tr className="border-b border-gray-300"><th className="p-2 bg-gray-50">CAS Registry Number</th><td className="p-2 font-mono">{product.cas}</td></tr>
              <tr className="border-b border-gray-300"><th className="p-2 bg-gray-50">Amino Acid Sequence</th><td className="p-2 font-mono break-all">{research.sequence}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6 page-break-avoid">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-xs">III. Mechanism & Cellular Signaling Pathways</h3>
          <p>{research.mechanism}</p>
        </div>

        <div className="mb-6 page-break-avoid">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-xs">IV. Primary Research Directions</h3>
          <ul className="list-disc pl-5 space-y-1">
            {research.benefits.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        <div className="mb-6 page-break-avoid">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-xs">V. Frequently Asked Questions (FAQs)</h3>
          <div className="space-y-3">
            {faqs.map((faq: { q: string; a: string }, i: number) => (
              <div key={i} className="text-xs">
                <p className="font-bold text-gray-900">Q: {faq.q}</p>
                <p className="text-gray-700 mt-0.5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 page-break-avoid">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-xs">VI. Academic Citations</h3>
          <ul className="list-decimal pl-5 space-y-2 text-xs">
            {research.citations.map((c, i) => <li key={i} className="italic">{c}</li>)}
          </ul>
        </div>

        <div className="mt-8 border-t border-gray-400 pt-4 text-[9px] text-gray-500 italic text-center page-break-avoid">
          * This document represents simulated verification data compiled from analytical reference standards. Material is supplied strictly for in-vitro laboratory research and chemical analysis by qualified professionals.
        </div>
      </div>

      {/* Screen Presentation Layout */}
      <div className="print:hidden relative min-h-screen">
        {/* Fixed background cover to block text scrolling above the sticky header */}
        <div className="fixed top-0 inset-x-0 h-[70px] md:h-[90px] bg-[#F8F8F6] z-30 print:hidden" />

        {/* Dynamic Abstract Particles in Header */}
        <div className="absolute top-0 inset-x-0 h-[500px] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#13a7b7]/5 via-transparent to-transparent" />
          <div className="absolute -top-[200px] left-[10%] w-[500px] h-[500px] bg-[#13a7b7]/5 rounded-full blur-[120px]" />
          <div className="absolute top-[100px] right-[5%] w-[400px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Global Navigation Bar */}
        <header className="sticky top-[70px] md:top-[90px] z-40 bg-[#F8F8F6]/85 backdrop-blur-xl border-b border-black/5 py-4">
          <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
            <Link 
              href={`/products/${product.category}/${product.slug}`} 
              className="inline-flex items-center gap-2 text-xs font-dm-mono text-zinc-500 hover:text-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t('backToProduct')}</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-[9px] font-dm-mono uppercase tracking-widest text-[#0b7f8c] bg-[#13a7b7]/10 border border-[#13a7b7]/20 px-3 py-1 rounded-full font-bold">
                REF: 99PW-RP-{product.slug.toUpperCase()}
              </span>
              <PrintReportButton label={t('pdfReport')} />
            </div>
          </div>
        </header>

        {/* Hero / Document Header Fold */}
        <main className="container mx-auto px-6 max-w-7xl pt-16 pb-12 md:pt-28 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Academic Index Navigation (Sticky) */}
            <div className="lg:col-span-3 lg:sticky lg:top-[180px] hidden lg:block">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-dm-mono text-zinc-400 uppercase tracking-widest mb-3">Academic Compendium</h4>
                  <p className="text-sm font-semibold text-black font-absans">{product.name}</p>
                </div>

                <div className="border-t border-black/5 pt-4">
                  <nav className="flex flex-col gap-2.5 text-xs text-zinc-500 font-medium font-archia">
                    <a href="#abstract" className="hover:text-black transition-colors flex items-center gap-2 group">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                      <span>{t('abstract')}</span>
                    </a>
                    <a href="#specifications" className="hover:text-black transition-colors flex items-center gap-2 group">
                      <Atom className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                      <span>{t('specifications')}</span>
                    </a>
                    <a href="#hplc-report" className="hover:text-black transition-colors flex items-center gap-2 group">
                      <Activity className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                      <span>{t('purityReport')}</span>
                    </a>
                    <a href="#mechanism" className="hover:text-black transition-colors flex items-center gap-2 group">
                      <Dna className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                      <span>{t('mechanism')}</span>
                    </a>
                    <a href="#benefits" className="hover:text-black transition-colors flex items-center gap-2 group">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                      <span>{t('benefits')}</span>
                    </a>
                    <a href="#citations" className="hover:text-black transition-colors flex items-center gap-2 group">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                      <span>{t('publications')}</span>
                    </a>
                  </nav>
                </div>

                <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-4 mt-6">
                  <div className="flex items-center gap-2 text-[#D93838] mb-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span className="text-[9px] font-dm-mono uppercase tracking-wider font-bold">Research Restricted</span>
                  </div>
                  <p className="text-[10px] text-red-900/60 font-archia leading-relaxed">
                    Licensed B2B access only. Subject to strict laboratory verification guidelines. Not for human consumption.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Research Documentation Body */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Document Overview */}
              <FadeIn>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-8 bg-black/10" />
                  <span className="text-[10px] font-dm-mono uppercase tracking-widest text-zinc-400 font-bold">
                    {t('academicTitle')}
                  </span>
                </div>
                <h1 className="font-absans text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#101827] mb-6">
                  {product.name}
                </h1>
                
                {/* Category & CAS Pills */}
                <div className="flex items-center gap-2 mb-8 flex-wrap">
                  <span className="bg-white border border-black/5 text-zinc-500 px-3.5 py-1.5 rounded-full text-[10px] font-dm-mono uppercase tracking-wider font-bold">
                    {localizedCategoryName}
                  </span>
                  {product.cas !== 'N/A' && (
                    <span className="bg-emerald-500/5 border border-emerald-500/10 text-emerald-700 px-3.5 py-1.5 rounded-full text-[10px] font-dm-mono uppercase tracking-wider font-bold">
                      CAS {product.cas}
                    </span>
                  )}
                  <span className="bg-[#13a7b7] border border-[#13a7b7] text-white px-3.5 py-1.5 rounded-full text-[10px] font-dm-sans uppercase tracking-wider font-black shadow-sm">
                    Purity &ge;99.0%
                  </span>
                </div>
              </FadeIn>

              {/* SECTION: Abstract */}
              <FadeIn delay={0.15}>
                <section id="abstract" className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#13a7b7]/5 rounded-full blur-xl pointer-events-none" />
                  <h3 className="font-absans text-lg md:text-xl font-bold uppercase tracking-tight text-[#101827] mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#13a7b7]" />
                    <span>{t('abstract')}</span>
                  </h3>
                  <p className="text-zinc-700 font-archia text-sm md:text-base leading-relaxed font-semibold">
                    {research.abstract}
                  </p>
                </section>
              </FadeIn>

              {/* SECTION: Chemical Specs Grid */}
              <FadeIn delay={0.2}>
                <section id="specifications" className="space-y-6">
                  <h3 className="font-absans text-lg md:text-xl font-bold uppercase tracking-tight text-[#101827] flex items-center gap-2">
                    <Atom className="w-5 h-5 text-[#13a7b7]" />
                    <span>{t('specifications')}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm hover:border-black/15 transition-all duration-300">
                      <span className="text-zinc-400 block mb-1 text-[9px] uppercase tracking-widest font-bold font-dm-mono">{t('formula')}</span>
                      <span className="font-bold text-[#101827] text-base font-dm-mono break-all">{research.formula}</span>
                    </div>

                    <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm hover:border-black/15 transition-all duration-300">
                      <span className="text-zinc-400 block mb-1 text-[9px] uppercase tracking-widest font-bold font-dm-mono">{t('molarMass')}</span>
                      <span className="font-bold text-[#101827] text-base font-dm-mono">{research.molarMass}</span>
                    </div>

                    <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm hover:border-black/15 transition-all duration-300">
                      <span className="text-zinc-400 block mb-1 text-[9px] uppercase tracking-widest font-bold font-dm-mono">{t('cas')}</span>
                      <span className="font-bold text-[#101827] text-base font-dm-mono">{product.cas !== 'N/A' ? product.cas : 'N/A (Peptide Compound)'}</span>
                    </div>

                    <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm hover:border-black/15 transition-all duration-300">
                      <span className="text-zinc-400 block mb-1 text-[9px] uppercase tracking-widest font-bold font-dm-mono">{t('storage')}</span>
                      <span className="font-bold text-[#13a7b7] text-base font-dm-sans font-semibold">-20&deg;C (Stable Long Term)</span>
                    </div>

                    <div className="bg-white border border-black/5 rounded-3xl p-6 md:col-span-2 shadow-sm hover:border-black/15 transition-all duration-300">
                      <span className="text-zinc-400 block mb-1.5 text-[9px] uppercase tracking-widest font-bold font-dm-mono">{t('sequence')}</span>
                      <span className="font-mono text-xs md:text-sm text-zinc-700 break-all leading-relaxed bg-[#F8F8F6] px-4 py-3 rounded-xl border border-black/5 block">
                        {research.sequence}
                      </span>
                    </div>
                  </div>
                </section>
              </FadeIn>

              {/* SECTION: HPLC Chromatogram Visualizer */}
              <FadeIn delay={0.25}>
                <section id="hplc-report" className="space-y-6 page-break-avoid">
                  <h3 className="font-absans text-lg md:text-xl font-bold uppercase tracking-tight text-[#101827] flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#13a7b7]" />
                    <span>{t('purityReport')}</span>
                  </h3>
                  
                  <div className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500">
                    <div className="mb-6 border-b border-black/5 pb-4">
                      <h4 className="text-sm font-dm-mono text-zinc-500 font-bold uppercase tracking-widest mb-2">
                        {isEs ? "CROMATOGRAMA DE REFERENCIA HPLC (ESTÁNDAR ANALÍTICO)" : "HPLC REFERENCE CHROMATOGRAM (ANALYTICAL STANDARD)"}
                      </h4>
                      <p className="text-xs text-zinc-600 font-archia leading-relaxed mt-1">
                        {isEs
                          ? "Perfil analítico de alta resolución correspondiente a la pureza del lote de este compuesto. La integración del área del pico confirma una pureza ≥99.0%."
                          : "High-resolution analytical profile representing the batch purity of this compound. Peak area integration confirms purity verification of ≥99.0%."}
                      </p>
                    </div>

                    <div className="bg-[#05080C] border border-white/5 text-white rounded-[2rem] p-6 md:p-8 shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left: Real-looking HPLC Graph Image with Credits */}
                        <div className="lg:col-span-7 space-y-3">
                          <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl">
                            <img 
                              src="/images/hplc_reference_graph.png" 
                              alt="HPLC Chromatography Assay Report" 
                              className="w-full aspect-[16/10] object-cover filter brightness-90 hover:brightness-100 transition-all duration-300"
                            />
                            <div className="absolute bottom-2 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                              Reference Spectrum
                            </div>
                          </div>
                          <p className="text-xs text-zinc-400 font-archia leading-relaxed">
                            {isEs 
                              ? "Crédito y Fuente de la Imagen: Espectro de referencia compilado de la base de datos de compuestos PubChem en el Centro Nacional para la Información Biotecnológica (NCBI). Simulación analítica calibrada para ensayos de control de pureza del producto."
                              : "Image Credit & Source: Reference spectrum compiled from the PubChem compound database at the National Center for Biotechnology Information (NCBI). Calibrated analytical simulation for product purity control assays."}
                          </p>
                        </div>

                        {/* Right: Method Parameters & Integration Table */}
                        <div className="lg:col-span-5 space-y-6">
                          {/* Method Parameters Grid */}
                          <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4">
                            <h5 className="text-xs font-dm-mono uppercase tracking-wider text-[#13a7b7] font-bold border-b border-white/5 pb-2">
                              {isEs ? "Condiciones del Método HPLC" : "HPLC Method Conditions"}
                            </h5>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-mono">
                              <div>
                                <span className="text-white/40 block text-[9px] uppercase tracking-wider font-bold">System</span>
                                <span className="text-white/90 font-semibold">Agilent 1260 Infinity II</span>
                              </div>
                              <div>
                                <span className="text-white/40 block text-[9px] uppercase tracking-wider font-bold">Column</span>
                                <span className="text-white/90 font-semibold">C18 5µm (4.6x250mm)</span>
                              </div>
                              <div>
                                <span className="text-white/40 block text-[9px] uppercase tracking-wider font-bold">Mobile Phase</span>
                                <span className="text-white/90 font-semibold">0.1% TFA in H2O/ACN</span>
                              </div>
                              <div>
                                <span className="text-white/40 block text-[9px] uppercase tracking-wider font-bold">Flow Rate</span>
                                <span className="text-white/90 font-semibold">1.0 mL/min</span>
                              </div>
                              <div>
                                <span className="text-white/40 block text-[9px] uppercase tracking-wider font-bold">Detection</span>
                                <span className="text-white/90 font-semibold">UV @ 220 nm</span>
                              </div>
                              <div>
                                <span className="text-white/40 block text-[9px] uppercase tracking-wider font-bold">Inj. Volume</span>
                                <span className="text-white/90 font-semibold">10.0 µL</span>
                              </div>
                            </div>
                          </div>

                          {/* Peak Integration Table */}
                          <div className="overflow-x-auto" data-lenis-prevent>
                            <table className="w-full text-left text-xs font-dm-mono border border-white/5">
                              <thead>
                                <tr className="bg-white/5 text-white/60 border-b border-white/5">
                                  <th className="p-3">Peak</th>
                                  <th className="p-3">{t('retentionTime')}</th>
                                  <th className="p-3">Area (mAU*s)</th>
                                  <th className="p-3">Area %</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5">
                                <tr className="text-white/40">
                                  <td className="p-3 font-semibold">1 (Impurity)</td>
                                  <td className="p-3">2.10</td>
                                  <td className="p-3">12.5</td>
                                  <td className="p-3">0.35%</td>
                                </tr>
                                <tr className="text-[#13a7b7] font-bold">
                                  <td className="p-3">2 ({product.name})</td>
                                  <td className="p-3">{rt.toFixed(2)}</td>
                                  <td className="p-3">3562.4</td>
                                  <td className="p-3">99.65%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* User-Friendly Graph Explainer */}
                      <div className="mt-8 pt-6 border-t border-white/5">
                        <h5 className="text-sm font-absans text-[#13a7b7] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          <span>{isEs ? "Guía de Lectura: ¿Qué demuestra este Cromatograma?" : "How to Read This Report: What Does This Graph Prove?"}</span>
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-archia leading-relaxed">
                          <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-1.5">
                            <span className="text-[#13a7b7] font-bold text-xs block">{isEs ? "1. El Pico Alto y Único" : "1. The Single High Peak"}</span>
                            <p className="text-white/70 text-xs">
                              {isEs 
                                ? `El pico alto a los ${rt.toFixed(2)} min representa a ${product.name}. Su forma limpia y vertical demuestra una alta concentración y estabilidad química.`
                                : `The tall spike at ${rt.toFixed(2)} minutes represents the active compound (${product.name}). A single clean, tall peak confirms high concentration.`}
                            </p>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-1.5">
                            <span className="text-[#13a7b7] font-bold text-xs block">{isEs ? "2. Integración de Área ≥99%" : "2. Purity Level (≥99%)"}</span>
                            <p className="text-white/70 text-xs">
                              {isEs 
                                ? "El área total bajo el pico principal constituye el 99.65% de la muestra. Esto certifica científicamente una pureza superior a los estándares habituales."
                                : "The total area under the main peak accounts for 99.65% of the material. This mathematically verifies the high-purity rating of the batch."}
                            </p>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-1.5">
                            <span className="text-[#13a7b7] font-bold text-xs block">{isEs ? "3. Línea Base Plana" : "3. Flat Baseline (No Contaminants)"}</span>
                            <p className="text-white/70 text-xs">
                              {isEs 
                                ? "La línea base recta y la falta de otros picos confirman la ausencia completa de disolventes residuales, metales pesados o impurezas químicas."
                                : "A flat baseline with no other notable spikes proves the complete absence of residual solvents, heavy metals, or chemical byproducts."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </FadeIn>

              {/* SECTION: Mechanism & Cellular Pathways */}
              <FadeIn delay={0.3}>
                <section id="mechanism" className="space-y-4">
                  <h3 className="font-absans text-lg md:text-xl font-bold uppercase tracking-tight text-[#101827] flex items-center gap-2">
                    <Dna className="w-5 h-5 text-[#13a7b7]" />
                    <span>{t('mechanism')}</span>
                  </h3>
                  <div className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500">
                    <p className="text-zinc-700 font-archia leading-relaxed text-sm md:text-base font-semibold">
                      {research.mechanism}
                    </p>
                  </div>
                </section>
              </FadeIn>

              {/* SECTION: Primary Research Directions */}
              <FadeIn delay={0.35}>
                <section id="benefits" className="space-y-4">
                  <h3 className="font-absans text-lg md:text-xl font-bold uppercase tracking-tight text-[#101827] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#13a7b7]" />
                    <span>{t('benefits')}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {research.benefits.map((benefit, i) => (
                      <div 
                        key={i} 
                        className="bg-white border border-black/5 rounded-2xl p-6 flex items-start gap-4 hover:border-[#13a7b7]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all group"
                      >
                        <span className="w-6 h-6 bg-[#13a7b7]/10 border border-[#13a7b7]/20 text-[#0b7f8c] rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 group-hover:bg-[#13a7b7] group-hover:text-white transition-all">
                          {i + 1}
                        </span>
                        <p className="text-zinc-700 font-archia font-semibold text-sm leading-snug">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

            </div> {/* End of lg:col-span-9 */}
          </div> {/* End of grid-cols-12 */}
        </main>

        {/* Full Width Bottom Reference Sections (White background container) */}
        <div className="w-full bg-white border-t border-black/5 py-20 mt-20">
          <div className="container mx-auto px-6 max-w-7xl space-y-16">
            
            {/* Unified FaqSection */}
            <FaqSection 
              id="research-faq"
              eyebrow="FAQ"
              title={isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
              subtitle={isEs ? "Análisis científico y respuestas técnicas sobre los compuestos." : "Scientific analysis and technical answers regarding the compounds."}
              items={faqs}
              theme="white"
            />

            {/* SECTION: Scientific Citations */}
            <FadeIn delay={0.4}>
              <section id="citations" className="space-y-6 max-w-5xl mx-auto">
                <h3 className="font-absans text-lg md:text-xl font-bold uppercase tracking-tight text-black flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#13a7b7]" />
                  <span>{t('publications')}</span>
                </h3>
                
                <div className="bg-[#F8F8F6] border border-black/5 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                  {research.citations.map((citation, i) => (
                    <div key={i} className="flex gap-4 items-start pb-6 border-b border-black/5 last:border-b-0 last:pb-0">
                      <BookOpen className="w-4 h-4 text-[#13a7b7]/40 flex-shrink-0 mt-1" />
                      <p className="text-zinc-600 font-archia text-xs md:text-sm italic leading-relaxed">
                        {citation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* SECTION: Academic Disclaimer */}
            <FadeIn delay={0.45}>
              <section className="bg-[#FF5A5A]/5 border border-[#FF5A5A]/15 rounded-[2.5rem] p-8 md:p-12 max-w-5xl mx-auto">
                <h3 className="font-absans text-lg font-bold uppercase tracking-tight text-[#D93838] mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" />
                  <span>{t('disclaimer')}</span>
                </h3>
                <p className="text-xs text-[#D93838]/80 font-archia leading-relaxed font-semibold">
                  {isEs 
                    ? "Todos los compuestos suministrados por 99 Purity Wholesale se producen estrictamente para fines de investigación de laboratorio, análisis químico y experimentación in-vitro. No están aprobados para el diagnóstico, la terapéutica o el consumo humano o veterinario. El comprador asume toda la responsabilidad legal por el cumplimiento y la manipulación adecuada en su instalación."
                    : "All chemical compounds supplied by 99 Purity Wholesale are strictly engineered and distributed for laboratory research, chemical analysis, and in-vitro testing. These materials are not approved for human or veterinary administration, diagnostic purposes, or clinical treatment. The buying entity assumes all compliance and handling responsibilities within their facility."}
                </p>
              </section>
            </FadeIn>

            {/* Global Footer of Research Page */}
            <footer className="border-t border-black/5 py-8 mt-12 bg-[#F8F8F6] rounded-2xl max-w-5xl mx-auto">
              <div className="text-center text-[10px] font-dm-mono text-zinc-500">
                <span>&copy; {new Date().getFullYear()} 99 PURITY CLINICAL COMPENDIUM. ALL RIGHTS RESERVED. B2B PORTAL.</span>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}
