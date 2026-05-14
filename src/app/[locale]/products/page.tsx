import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { AlertTriangle, FlaskConical, Activity, Brain, ShieldAlert, Sparkles, Syringe, Box, TrendingUp, ShieldCheck, Truck, Award, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import productsData from '@/data/products.json';
import ProductDirectory from '@/components/products/ProductDirectory';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('productsTitle'),
    description: t('productsDesc'),
    openGraph: { title: t('productsTitle'), description: t('productsDesc') },
  };
}

const categoryMeta: Record<string, { icon: any; color: string; keywords: string; compounds: string; longDesc: string }> = {
  'glp1-metabolic-peptides': {
    icon: Activity,
    color: 'from-teal-500/10',
    keywords: 'GLP-1 peptides wholesale, bulk semaglutide, tirzepatide wholesale, retatrutide supplier',
    compounds: 'Semaglutide · Tirzepatide · Retatrutide · Cagrilintide · Cagrisema',
    longDesc: 'The most actively researched peptide category in the U.S. market. GLP-1, GIP, and triple-receptor agonists for metabolic research programs in compounding pharmacies, wellness clinics, and research institutions.',
  },
  'growth-hormone': {
    icon: TrendingUp,
    color: 'from-blue-500/10',
    keywords: 'growth hormone peptides wholesale, bulk ipamorelin, CJC-1295 wholesale, sermorelin supplier',
    compounds: 'Ipamorelin · CJC-1295 · Sermorelin · GHRP-2 · Tesamorelin · MK-677',
    longDesc: 'GHRP and GHRH research compounds for growth hormone axis studies. Consistently high-demand wholesale category for wellness clinic and compounding pharmacy research programs.',
  },
  'healing-recovery-peptides': {
    icon: FlaskConical,
    color: 'from-green-500/10',
    keywords: 'BPC-157 wholesale, TB-500 bulk supply, healing peptides wholesale USA',
    compounds: 'BPC-157 · TB-500 · KPV · LL37 · B7-33 · GHK-Cu',
    longDesc: 'The most reorder-consistent category in our wholesale catalog. BPC-157, TB-500, and healing compounds for tissue repair, angiogenesis, and recovery research across musculoskeletal and gastrointestinal models.',
  },
  'cognitive-nootropic': {
    icon: Brain,
    color: 'from-purple-500/10',
    keywords: 'nootropic peptides wholesale, bulk semax, selank wholesale, cognitive peptides supplier',
    compounds: 'Semax · Selank · Dihexa · DSIP · Adamax · Cortexin',
    longDesc: 'Neuropeptides and cognitive research compounds for CNS studies. Growing wholesale demand from longevity clinics and functional medicine practices studying neurological optimization.',
  },
  'anti-aging-longevity': {
    icon: ShieldAlert,
    color: 'from-amber-500/10',
    keywords: 'anti-aging peptides wholesale, epithalon bulk, NAD+ wholesale, longevity peptides USA',
    compounds: 'Epithalon · MOTS-c · NAD+ · Thymalin · SS-31 · FOXO4-DRI',
    longDesc: 'Longevity and senescence research compounds driving the fastest-growing segment of the U.S. wholesale peptide market. Essential catalog for anti-aging practices and longevity research programs.',
  },
  'cosmetic-aesthetic': {
    icon: Sparkles,
    color: 'from-pink-500/10',
    keywords: 'cosmetic peptides wholesale, GHK-Cu bulk supply, aesthetic peptides USA',
    compounds: 'GHK-Cu · Snap-8 · AOD9604 · 5-AMINO-1MQ · PT-141',
    longDesc: 'Dermatological and aesthetic research compounds for skin biology, wound healing, and cosmetic research models. High-demand category for medical spa and aesthetic clinic wholesale programs.',
  },
  ancillaries: {
    icon: Syringe,
    color: 'from-gray-500/10',
    keywords: 'BAC water wholesale, glutathione peptide supplier, research ancillaries bulk',
    compounds: 'BAC Water · Glutathione · B12 · Vitamin C · Peptide Mixing Kits',
    longDesc: 'Reconstitution solutions, bacteriostatic water, and research support compounds. Essential ancillaries for complete peptide research operations, available at wholesale pricing.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What wholesale peptides do you carry?', acceptedAnswer: { '@type': 'Answer', text: '99 Purity Peptides carries 50+ research-grade compounds across 7 categories: GLP-1 & metabolic peptides (Semaglutide, Tirzepatide, Retatrutide), growth hormone peptides (Ipamorelin, CJC-1295, Sermorelin), healing & recovery (BPC-157, TB-500), cognitive & nootropic peptides, anti-aging & longevity compounds, cosmetic research peptides, and ancillaries. All products are for research use only.' } },
    { '@type': 'Question', name: 'What is the minimum order quantity for wholesale peptides?', acceptedAnswer: { '@type': 'Answer', text: 'Our minimum order quantity (MOQ) is 10 units (1 kit) per product specification. Volume discounts activate at 10, 20, and 40+ kits through our tiered pricing structure.' } },
    { '@type': 'Question', name: 'Are your wholesale peptides third-party tested?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every batch is independently tested by accredited U.S. laboratories using HPLC and Mass Spectrometry. Every shipment includes a batch-matched Certificate of Analysis (COA) confirming ≥99% purity. COAs are available on request prior to purchase.' } },
    { '@type': 'Question', name: 'Do you ship wholesale peptides to all U.S. states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We fulfill wholesale orders to licensed professionals in all 50 U.S. states via priority domestic shipping. Standard delivery is 2–4 business days. All fulfillment is 100% domestic — no international customs exposure.' } },
    { '@type': 'Question', name: 'Who can buy wholesale peptides from 99 Purity Peptides?', acceptedAnswer: { '@type': 'Answer', text: 'Our products are sold exclusively to licensed professionals and qualified research institutions: compounding pharmacies, wellness clinics, medical spas, licensed distributors, and academic research facilities. All buyers must attest to professional status and research-use compliance.' } },
    { '@type': 'Question', name: 'How do I get a Certificate of Analysis (COA)?', acceptedAnswer: { '@type': 'Answer', text: 'COAs for current batches are available on request via WhatsApp or email before and after purchase. Our Quality Hub also maintains a searchable COA library. Contact our team for specific batch documentation.' } },
  ],
};

export default async function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'ProductsIndex' });

  const categories = [
    { id: 'glp1-metabolic-peptides', name: t('categories.glp1-metabolic-peptides.name'), description: t('categories.glp1-metabolic-peptides.desc') },
    { id: 'growth-hormone', name: t('categories.growth-hormone.name'), description: t('categories.growth-hormone.desc') },
    { id: 'healing-recovery-peptides', name: t('categories.healing-recovery-peptides.name'), description: t('categories.healing-recovery-peptides.desc') },
    { id: 'cognitive-nootropic', name: t('categories.cognitive-nootropic.name'), description: t('categories.cognitive-nootropic.desc') },
    { id: 'anti-aging-longevity', name: t('categories.anti-aging-longevity.name'), description: t('categories.anti-aging-longevity.desc') },
    { id: 'cosmetic-aesthetic', name: t('categories.cosmetic-aesthetic.name'), description: t('categories.cosmetic-aesthetic.desc') },
    { id: 'ancillaries', name: t('categories.ancillaries.name'), description: t('categories.ancillaries.desc') },
  ];

  const faqs = [
    { q: 'What wholesale peptides do you carry?', a: '99 Purity Peptides carries 50+ research-grade compounds across 7 categories: GLP-1 & metabolic peptides (Semaglutide, Tirzepatide, Retatrutide), growth hormone peptides (Ipamorelin, CJC-1295, Sermorelin), healing & recovery compounds (BPC-157, TB-500), cognitive & nootropic peptides (Semax, Selank), anti-aging & longevity peptides (Epithalon, NAD+), cosmetic research compounds (GHK-Cu), and ancillaries. All for research use only.' },
    { q: 'What is the minimum order quantity (MOQ) for wholesale peptides?', a: 'Our minimum order is 10 units (1 kit) per product specification. Volume discounts activate at 10, 20, and 40+ kits through our tiered pricing program (Start → Tier 1 → Tier 2 → Tier 3). Contact our team for current pricing at your volume level.' },
    { q: 'Are your wholesale peptides independently tested?', a: 'Yes. Every batch is independently verified by accredited U.S. third-party laboratories using HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry. Every shipment includes a batch-matched Certificate of Analysis confirming ≥99% purity. COAs can be requested before purchase.' },
    { q: 'Do you ship wholesale peptides to all 50 U.S. states?', a: 'Yes. We fulfill wholesale orders to licensed professionals in all 50 U.S. states via priority domestic shipping. Standard delivery is 2–4 business days after payment confirmation. 100% U.S. domestic fulfillment — no international customs exposure or cold-chain transit risk.' },
    { q: 'Who qualifies to purchase wholesale peptides?', a: 'Our products are sold exclusively to licensed professionals: compounding pharmacies, wellness clinics, medical spas, licensed distributors, and qualified research institutions. All buyers must confirm professional status and research-use compliance. Not for resale to consumers.' },
    { q: 'What payment methods are accepted for wholesale orders?', a: 'We accept Bitcoin (BTC), Zelle, and bank transfer (ACH/Wire). Payment instructions are provided after your order is confirmed with our team via WhatsApp or email.' },
    { q: 'How do I request a Certificate of Analysis before ordering?', a: 'Contact our team via WhatsApp or email with the specific product and we will provide the current batch COA. Our Quality Hub also maintains a downloadable COA library for reference.' },
    { q: 'Do you offer private label or white label peptide packaging?', a: 'Yes. Private label packaging is available for qualifying volume accounts. Your branding on our ≥99% purity products. Inquire via WhatsApp for minimum volumes, label specifications, and lead times.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Disclaimer */}
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        {t('banner')}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/8 via-brand-bg to-brand-bg pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
              50+ Research Compounds · U.S. Manufactured · ≥99% Purity
            </div>
            <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-white tracking-tighter leading-tight">
              Wholesale Peptide <span className="text-brand-accent">Catalog</span>
            </h1>
            <p className="text-xl text-gray-400 font-dm-sans max-w-3xl mx-auto leading-relaxed">
              Research-grade bulk peptides for compounding pharmacies, wellness clinics, licensed distributors, and research institutions across the United States. Every compound manufactured domestically, independently tested, and shipped with a batch-matched Certificate of Analysis.
            </p>
          </div>

          {/* Trust Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { icon: ShieldCheck, label: '≥99% Purity', sub: 'Every Batch' },
              { icon: Award, label: 'COA Verified', sub: 'Independent U.S. Labs' },
              { icon: Truck, label: '2–4 Day Delivery', sub: 'All 50 States' },
              { icon: CheckCircle2, label: 'B2B Only', sub: 'Licensed Professionals' },
            ].map((p) => (
              <div key={p.label} className="bg-[#0e131b] border border-white/5 rounded-xl p-5 text-center hover:border-brand-accent/20 transition-all">
                <p.icon className="w-7 h-7 text-brand-accent mx-auto mb-3" />
                <div className="text-white font-rajdhani font-bold text-sm">{p.label}</div>
                <div className="text-gray-500 font-dm-sans text-xs mt-1">{p.sub}</div>
              </div>
            ))}
          </div>

          {/* MOQ Info */}
          <div className="bg-[#0e131b] border border-brand-accent/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl shadow-brand-accent/5">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                <Box className="w-7 h-7 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-xl font-rajdhani font-bold text-white mb-1">{t('moqTitle')}</h3>
                <p className="text-gray-400 font-dm-sans">{t('moqText')}</p>
              </div>
            </div>
            <a href="https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20wholesale%20peptide%20pricing." target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold px-8 py-4 rounded-xl transition-all font-rajdhani text-lg uppercase tracking-wider shadow-lg">
              <Zap className="w-5 h-5" /> {t('cta')}
            </a>
          </div>
        </div>
      </section>

      {/* Search Directory */}
      <ProductDirectory products={productsData} categories={categories} />

      {/* Category Cards */}
      <section className="py-24 bg-[#060B17] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-white mb-4">
              Browse by <span className="text-brand-accent">Research Category</span>
            </h2>
            <p className="text-gray-400 font-dm-sans max-w-2xl mx-auto">
              Our wholesale catalog is organized into 7 research categories. Each category contains multiple compounds at various specifications — all independently tested, batch COA included.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const meta = categoryMeta[cat.id];
              const Icon = meta?.icon || Box;
              const count = productsData.filter(p => p.category === cat.id).length;
              return (
                <Link key={cat.id} href={`/products/${cat.id}`} className="group relative overflow-hidden bg-[#0B0F15] border border-white/5 rounded-2xl p-7 hover:border-brand-accent/40 transition-all duration-300 flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta?.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <Icon className="w-9 h-9 text-brand-accent group-hover:scale-110 transition-transform" />
                      <span className="text-brand-accent/60 font-dm-mono text-xs border border-brand-accent/20 px-2 py-0.5 rounded-full">{count} products</span>
                    </div>
                    <h3 className="text-xl font-rajdhani font-bold text-white mb-3 group-hover:text-brand-accent transition-colors leading-snug">{cat.name}</h3>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4 flex-grow">{meta?.longDesc || cat.description}</p>
                    <div className="text-[10px] text-gray-600 font-dm-mono leading-relaxed mb-4">{meta?.compounds}</div>
                    <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                      View Category <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Source From Us */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Why Choose 99 Purity</span>
              <h2 className="text-4xl font-rajdhani font-bold text-white mb-8 leading-tight">
                America's Most Trusted<br />Wholesale Peptide Supplier
              </h2>
              <div className="space-y-5 text-gray-400 font-dm-sans leading-relaxed">
                <p>
                  When compounding pharmacies, wellness clinics, and licensed distributors across the United States need reliable bulk peptide supply, they need more than a catalog — they need a verified domestic manufacturer with the documentation, purity standards, and operational reliability to support professional research programs.
                </p>
                <p>
                  99 Purity Peptides manufactures all research compounds in the United States using solid-phase peptide synthesis (SPPS) under strict quality controls. Every batch is independently tested by accredited U.S. laboratories — not in-house, not overseas — and shipped with a batch-specific Certificate of Analysis showing HPLC and MS purity confirmation at ≥99%.
                </p>
                <p>
                  Our tiered wholesale pricing program scales with your business. Start with our entry-level minimum and move through Tier 1, Tier 2, and Tier 3 as your volume grows — with margin improvement at every stage and dedicated B2B support throughout.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6">What Every Order Includes</h3>
              <div className="space-y-3">
                {[
                  { t: '≥99% Purity Standard', d: 'Our minimum, not our average. Enforced on every compound, every batch.' },
                  { t: 'Batch-Matched COA', d: 'HPLC and MS reports tied to your specific production lot — not generic documentation.' },
                  { t: 'U.S. Domestic Manufacturing', d: 'Synthesized in America. No import risk, no supply chain uncertainty.' },
                  { t: 'Priority Domestic Shipping', d: '1–2 business day processing. 2–4 day delivery to all 50 states.' },
                  { t: 'Tiered Volume Pricing', d: 'Start through Tier 3. Your margins improve as your volume grows.' },
                  { t: 'B2B Support Access', d: 'WhatsApp + email. COA requests and pricing inquiries within 2 business hours.' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-4 p-4 bg-[#0e131b] rounded-xl border border-white/5 hover:border-brand-accent/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-rajdhani font-bold text-sm">{item.t}</div>
                      <div className="text-gray-500 font-dm-sans text-xs mt-1">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24 bg-[#060B17] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">How to Place a Wholesale Peptide Order</h2>
            <p className="text-gray-400 font-dm-sans max-w-2xl mx-auto">Our ordering process is designed for licensed professionals. No shopping cart — all orders are handled directly through our B2B sales team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
            {[
              { step: '01', title: 'Browse the Catalog', desc: 'Review our 50+ compounds across 7 categories. Request COAs for any compound of interest.' },
              { step: '02', title: 'Contact Our Team', desc: 'Reach us via WhatsApp or email with your product list, specs, and estimated volume.' },
              { step: '03', title: 'Receive Pricing', desc: 'We confirm your tier, provide current pricing, and send payment instructions within 2 business hours.' },
              { step: '04', title: 'Order Ships', desc: 'Payment confirmed → order processes within 1–2 business days → delivery in 2–4 business days.' },
            ].map((s) => (
              <div key={s.step} className="bg-[#0e131b] border border-white/5 rounded-2xl p-7 text-center relative z-10 hover:border-brand-accent/30 transition-all">
                <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-3">Step {s.step}</div>
                <h3 className="text-lg font-rajdhani font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20place%20a%20wholesale%20peptide%20order." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-[#3EABC0] text-brand-bg font-bold py-4 px-8 rounded-xl font-rajdhani text-lg uppercase tracking-wider transition-all">
              <Zap className="w-5 h-5" /> Start Your Order via WhatsApp
            </a>
            <Link href="/wholesale-application"
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-xl font-rajdhani text-lg uppercase tracking-wider transition-all">
              Apply for a Wholesale Account <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Common Questions</span>
            <h2 className="text-4xl font-rajdhani font-bold text-white">Wholesale Peptide Catalog FAQ</h2>
            <p className="text-gray-500 font-dm-sans mt-4">Everything B2B buyers need to know about our wholesale peptide supply program.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#0e131b] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-colors">
                <summary className="flex items-center justify-between p-7 cursor-pointer list-none gap-4">
                  <h3 className="text-white font-rajdhani font-bold text-lg group-open:text-brand-accent transition-colors">{faq.q}</h3>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-open:text-brand-accent group-open:border-brand-accent/40 flex-shrink-0 transition-colors text-lg leading-none">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </div>
                </summary>
                <div className="px-7 pb-7">
                  <p className="text-gray-400 font-dm-sans leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
