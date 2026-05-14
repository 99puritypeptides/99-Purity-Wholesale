import { notFound } from 'next/navigation';
import { AlertTriangle, Mail, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import productsData from '@/data/products.json';

const catData: Record<string, { title: string; badge: string; desc: string; seoP1: string; seoP2: string; faqs: { q: string; a: string }[] }> = {
  'glp1-metabolic-peptides': {
    title: 'GLP-1 & Metabolic Peptides', badge: 'Metabolic Research',
    desc: 'Premium-grade GLP-1 receptor agonist and metabolic research compounds — including Semaglutide, Tirzepatide, and Retatrutide — synthesized in the U.S. for maximum purity and stability. Wholesale bulk supply for compounding pharmacies, wellness clinics, and research institutions.',
    seoP1: 'Glucagon-like peptide-1 (GLP-1) receptor agonists represent the highest-demand category in the U.S. wholesale peptide market. These synthesized peptide compounds interact with GLP-1, GIP, and glucagon receptors, enabling researchers to study metabolic signaling, incretin pathways, and receptor binding kinetics in controlled laboratory environments. Our catalog includes single-agonists (Semaglutide), dual-agonists (Tirzepatide), and triple-agonists (Retatrutide) — giving research programs access to the full spectrum of metabolic research compounds at wholesale pricing.',
    seoP2: 'All GLP-1 and metabolic peptides are manufactured in our U.S. facility using solid-phase peptide synthesis (SPPS). Every batch is independently tested by accredited U.S. laboratories via HPLC and Mass Spectrometry, confirming ≥99% purity and correct sequence identity. Batch-matched COA documentation ships with every wholesale order. Lyophilized formulations ensure stability during domestic shipping without cold-chain requirements.',
    faqs: [
      { q: 'What GLP-1 peptides do you carry at wholesale?', a: 'Our GLP-1 catalog includes Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, and Cagrisema combination compounds at multiple specifications.' },
      { q: 'What purity level are your GLP-1 peptides?', a: 'All GLP-1 compounds meet our ≥99% purity standard, independently verified by HPLC and Mass Spectrometry at accredited U.S. laboratories.' },
      { q: 'What is the MOQ for wholesale GLP-1 peptides?', a: 'Minimum order is 10 units (1 kit) per product specification. Tiered volume discounts begin at 10 kits.' },
    ],
  },
  'growth-hormone': {
    title: 'Growth Hormone Peptides', badge: 'GH Research',
    desc: 'GHRP and GHRH research compounds including Ipamorelin, CJC-1295, Sermorelin, and Tesamorelin. U.S.-manufactured at ≥99% purity for wholesale B2B supply to licensed professionals and research institutions.',
    seoP1: 'Growth hormone releasing peptides (GHRPs) and growth hormone releasing hormones (GHRHs) are among the most consistently ordered research compound categories in the U.S. wholesale market. Ipamorelin, CJC-1295 (with and without DAC), Sermorelin Acetate, GHRP-2, GHRP-6, and Tesamorelin enable researchers to study growth hormone axis signaling, pituitary function, and somatotroph activity in controlled experimental models.',
    seoP2: 'Our growth hormone peptide catalog serves compounding pharmacies, wellness clinics, and research facilities conducting GH-axis studies. All compounds are U.S.-manufactured, independently tested to ≥99% purity, and available at tiered wholesale pricing with batch-matched COA documentation on every order.',
    faqs: [
      { q: 'What growth hormone peptides are available?', a: 'Ipamorelin, CJC-1295 (with DAC and without DAC), Sermorelin Acetate, GHRP-2, GHRP-6, Tesamorelin, Hexarelin, and MK-677.' },
      { q: 'Can I combine GH peptides with other categories?', a: 'Yes. Most wholesale accounts order across multiple categories. Your tier pricing applies to total order volume, not per-category.' },
    ],
  },
  'healing-recovery-peptides': {
    title: 'Healing & Recovery Peptides', badge: 'Recovery Research',
    desc: 'BPC-157, TB-500, KPV, LL37, and tissue repair research compounds. The most reorder-consistent category in our wholesale catalog — essential for musculoskeletal, gastrointestinal, and wound healing research programs.',
    seoP1: 'BPC-157 (Body Protection Compound-157) and TB-500 (Thymosin Beta-4) are two of the most extensively studied peptides in the tissue repair research space. Published studies span musculoskeletal, gastrointestinal, and neurological models, with decades of peer-reviewed literature establishing these compounds as fundamental tools in recovery and healing research.',
    seoP2: 'Our healing category includes standard BPC-157 (acetate salt), BPC-157 AR (arginine salt), TB-500, KPV, LL37, and B7-33. All compounds are U.S.-manufactured at ≥99% purity with independent COA verification. This category maintains the highest reorder frequency in our wholesale program — compounding pharmacies and wellness clinics typically establish standing monthly orders.',
    faqs: [
      { q: 'What forms of BPC-157 do you carry?', a: 'We offer BPC-157 standard (acetate salt) and BPC-157 AR (arginine salt) in multiple specifications including 5mg and 10mg vials.' },
      { q: 'Is the BPC-157 + TB-500 combination available?', a: 'Yes. We offer both individual compounds and pre-configured combination kits (BPC 10mg + TB 10mg) for wholesale buyers.' },
    ],
  },
  'cognitive-nootropic': {
    title: 'Cognitive & Nootropic Peptides', badge: 'Neuro Research',
    desc: 'Semax, Selank, Dihexa, DSIP, and cognitive research peptides for CNS and neuroscience studies. Growing wholesale demand from longevity clinics and functional medicine practices.',
    seoP1: 'Cognitive and nootropic peptides represent a growing segment of the U.S. wholesale research market, driven by expanding interest in neuroprotection, cognitive enhancement, and CNS signaling research. Semax and Selank (originally developed at the Institute of Molecular Genetics, Russian Academy of Sciences) have substantial published research in neurotrophin modulation, BDNF expression, and anxiolytic activity models.',
    seoP2: 'Our nootropic catalog includes Semax, Selank, Dihexa, DSIP (Delta Sleep-Inducing Peptide), Adamax, and Cortexin — all manufactured in the U.S. at ≥99% purity with independent analytical verification. This category is popular among longevity-focused practices and functional medicine clinics building comprehensive research programs.',
    faqs: [
      { q: 'What cognitive peptides are most popular?', a: 'Semax and Dihexa are our highest-volume nootropic compounds, followed by Selank and DSIP.' },
    ],
  },
  'anti-aging-longevity': {
    title: 'Anti-Aging & Longevity Peptides', badge: 'Longevity Research',
    desc: 'Epithalon, MOTS-c, NAD+, Thymalin, SS-31, and senescence research compounds. The fastest-growing category in the U.S. wholesale peptide market for longevity and cellular aging programs.',
    seoP1: 'Anti-aging and longevity peptides represent the fastest-growing category in the U.S. B2B peptide market. Epithalon (a synthetic tetrapeptide studied for telomere and pineal gland effects), MOTS-c (a mitochondrial-derived peptide studied in exercise and metabolic models), and NAD+ (the essential coenzyme for sirtuin-dependent cellular processes) are driving institutional demand from anti-aging practices, longevity clinics, and academic research facilities.',
    seoP2: 'Our longevity catalog also includes Thymalin, Thymosin Alpha-1, SS-31 (Elamipretide), FOXO4-DRI, and AOD9604. All compounds are U.S.-manufactured at ≥99% purity with batch-matched COA documentation. As research into cellular senescence, mitochondrial function, and NAD+ metabolism accelerates, wholesale demand for this category continues to grow significantly.',
    faqs: [
      { q: 'What longevity peptides are most in demand?', a: 'Epithalon, NAD+, and MOTS-c are our highest-volume longevity compounds. SS-31 and FOXO4-DRI are growing rapidly.' },
    ],
  },
  'cosmetic-aesthetic': {
    title: 'Cosmetic & Aesthetic Peptides', badge: 'Aesthetic Research',
    desc: 'GHK-Cu, Snap-8, AOD9604, and cosmetic research compounds for dermatological studies. High demand from medical spa and aesthetic clinic wholesale programs.',
    seoP1: 'GHK-Cu (copper peptide) is one of the most extensively studied compounds in dermatological research, with published studies examining its role in collagen synthesis, wound healing, and skin remodeling. Snap-8 (acetyl glutamyl heptapeptide-3) is studied in muscle contraction and wrinkle formation models. These cosmetic peptides serve medical spas and aesthetic practices conducting skin biology research.',
    seoP2: 'Our cosmetic catalog includes GHK-Cu, Snap-8, AOD9604, 5-AMINO-1MQ, and PT-141 — all at ≥99% purity with independent testing and batch-matched COA. The Miami, Los Angeles, and Scottsdale markets maintain particularly strong wholesale demand for this category.',
    faqs: [
      { q: 'What cosmetic peptides are available at wholesale?', a: 'GHK-Cu (Copper Peptide), Snap-8, AOD9604, 5-AMINO-1MQ, and PT-141 at multiple specifications.' },
    ],
  },
  'ancillaries': {
    title: 'Ancillaries & Support Compounds', badge: 'Research Support',
    desc: 'Bacteriostatic water, Glutathione, B12, and reconstitution supplies. Essential research support compounds available at wholesale pricing alongside your peptide orders.',
    seoP1: 'Ancillary compounds and reconstitution supplies are essential components of any complete research peptide operation. Bacteriostatic water (BAC Water) is required for peptide reconstitution in laboratory protocols. Glutathione, Vitamin B12, and other support compounds complement primary research programs.',
    seoP2: 'By sourcing ancillaries alongside your primary peptide orders from a single domestic supplier, you consolidate procurement, reduce shipping costs, and ensure consistent documentation quality across your entire research supply chain.',
    faqs: [
      { q: 'Can I order ancillaries with my peptide order?', a: 'Yes. Most wholesale accounts add BAC Water and ancillaries to their peptide orders. Same tiered pricing, same COA documentation, same shipment.' },
    ],
  },
};

export async function generateMetadata({ params }: { params: { locale: string; category: string } }) {
  const cat = catData[params.category];
  if (!cat) return {};
  return {
    title: `${cat.title} — Wholesale Bulk Supply | 99 Purity Peptides`,
    description: cat.desc,
  };
}

export default async function CategoryPage({ params }: { params: { locale: string; category: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'CategoryTemplate' });
  const cat = catData[params.category];
  if (!cat) notFound();

  const products = productsData.filter(p => p.category === params.category);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {t('banner')}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 mb-6 text-white/30 font-dm-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-brand-accent">Home</Link><span>/</span>
            <Link href="/products" className="hover:text-brand-accent">Products</Link><span>/</span>
            <span className="text-brand-accent">{cat.title}</span>
          </div>
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">{cat.badge}</div>
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">{cat.title}</h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl">{cat.desc}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['≥99% Purity', 'Batch COA', 'U.S. Made', `${products.length} Products`].map(b => (
              <span key={b} className="bg-white/5 border border-white/10 text-white/50 px-3 py-1 rounded-full font-dm-mono text-xs">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.name} className="bg-[#0e131b] border border-white/5 rounded-xl p-8 hover:border-brand-accent/30 transition-all flex flex-col">
                <h3 className="text-3xl font-rajdhani font-bold text-white mb-4 border-b border-white/10 pb-4">{product.name}</h3>
                {product.cas && <div className="text-gray-500 font-dm-mono text-xs mb-4">CAS: {product.cas}</div>}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-dm-mono text-gray-500 mb-3 uppercase tracking-wider">{t('availableSpecs')}</h4>
                  <ul className="space-y-2">
                    {product.specs.map(spec => (
                      <li key={spec} className="flex items-center gap-2 text-gray-300 font-dm-sans"><CheckCircle2 className="w-4 h-4 text-brand-accent" />{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/50 p-4 rounded-lg mb-6 border border-white/5">
                  <div className="flex justify-between mb-2"><span className="text-gray-400 text-sm">{t('moq')}</span><span className="text-white font-bold font-dm-mono">{t('units')}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">{t('pricing')}</span><span className="text-brand-accent font-bold font-dm-mono text-sm border border-brand-accent/30 px-2 py-1 rounded bg-brand-accent/10">{t('contact')}</span></div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href={`/products/${product.category}/${product.slug}`} className="w-full bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">{t('viewDetails')}</Link>
                  <a href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi, I need wholesale pricing for ${product.name}`)}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" /> {t('whatsappPricing')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-[#060B17] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-3xl font-rajdhani font-bold text-white">About {cat.title} — Wholesale Research Supply</h2>
              <p className="text-gray-300 font-dm-sans leading-relaxed text-lg">{cat.seoP1}</p>
              <p className="text-gray-400 font-dm-sans leading-relaxed">{cat.seoP2}</p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-[#0e131b] border border-brand-accent/20 rounded-2xl p-8 sticky top-24">
                <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
                <h3 className="text-xl font-rajdhani font-bold text-white mb-4">Quality Guarantee</h3>
                <ul className="space-y-3">
                  {['U.S. domestic manufacturing','≥99% purity — every compound','Independent HPLC & MS testing','Batch-matched COA documentation','Priority domestic shipping'].map(p => (
                    <li key={p} className="flex items-start gap-2 text-gray-400 font-dm-sans text-sm"><CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />{p}</li>
                  ))}
                </ul>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-brand-accent text-brand-bg font-bold py-3 rounded-xl flex items-center justify-center gap-2 font-rajdhani uppercase tracking-wider text-sm hover:bg-[#3EABC0] transition-colors">
                  <Zap className="w-4 h-4" /> Get Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {cat.faqs.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-rajdhani font-bold text-white mb-8 text-center">{cat.title} FAQ</h2>
            <div className="space-y-3">
              {cat.faqs.map((faq, i) => (
                <details key={i} className="group bg-[#0e131b] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-colors">
                  <summary className="flex items-center justify-between p-7 cursor-pointer list-none gap-4">
                    <h3 className="text-white font-rajdhani font-bold text-lg group-open:text-brand-accent transition-colors">{faq.q}</h3>
                    <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-open:text-brand-accent flex-shrink-0 text-lg leading-none">
                      <span className="group-open:hidden">+</span><span className="hidden group-open:block">−</span>
                    </div>
                  </summary>
                  <div className="px-7 pb-7"><p className="text-gray-400 font-dm-sans leading-relaxed">{faq.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#060B17] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-rajdhani font-bold text-white mb-4">Ready to Order {cat.title}?</h2>
          <p className="text-gray-400 font-dm-sans mb-8">Contact our B2B team for current wholesale pricing, batch COA documentation, and volume tier information.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-[#3EABC0] text-brand-bg font-bold py-4 px-8 rounded-xl font-rajdhani text-lg uppercase tracking-wider"><Zap className="w-5 h-5" /> WhatsApp Sales</a>
            <Link href="/products" className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold py-4 px-8 rounded-xl font-rajdhani text-lg uppercase tracking-wider hover:bg-white/10"><ArrowRight className="w-5 h-5" /> Back to Full Catalog</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
