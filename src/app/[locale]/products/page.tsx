import React from 'react';
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

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'glp1-metabolic-peptides': return Activity;
    case 'growth-hormone': return TrendingUp;
    case 'healing-recovery-peptides': return FlaskConical;
    case 'cognitive-nootropic': return Brain;
    case 'anti-aging-longevity': return Sparkles;
    case 'cosmetic-aesthetic': return Syringe;
    case 'ancillaries': return Box;
    default: return FlaskConical;
  }
};

const getCategoryColor = (id: string) => {
  switch (id) {
    case 'glp1-metabolic-peptides': return 'from-teal-500/10';
    case 'growth-hormone': return 'from-blue-500/10';
    case 'healing-recovery-peptides': return 'from-green-500/10';
    case 'cognitive-nootropic': return 'from-purple-500/10';
    case 'anti-aging-longevity': return 'from-amber-500/10';
    case 'cosmetic-aesthetic': return 'from-pink-500/10';
    case 'ancillaries': return 'from-slate-500/10';
    default: return 'from-gray-500/10';
  }
};

export default async function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'ProductsIndex' });

  const categoryIds = [
    'glp1-metabolic-peptides',
    'growth-hormone',
    'healing-recovery-peptides',
    'cognitive-nootropic',
    'anti-aging-longevity',
    'cosmetic-aesthetic',
    'ancillaries'
  ];

  const categories = categoryIds.map(id => ({
    id,
    name: t(`categories.${id}.name`),
    description: t(`categories.${id}.desc`),
    longDesc: t(`categories.${id}.longDesc`),
    compounds: t(`categories.${id}.compounds`),
    icon: getCategoryIcon(id),
    color: getCategoryColor(id)
  }));

  // Strip icon components for Client Component boundary
  const categoriesForDirectory = categories.map(({ icon, ...rest }) => rest);

  const faqs = t.raw('faqs') as { q: string; a: string }[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Research Disclaimer Banner */}
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        {t('banner')}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/5 via-brand-bg to-brand-bg pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-white tracking-tighter leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-400 font-dm-sans max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* MOQ/Wholesale Info Banner */}
      <section className="py-12 bg-[#0B0F15] border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-accent/20">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-white font-rajdhani font-bold text-lg uppercase tracking-wide">{t('moqTitle')}</h3>
                <p className="text-gray-500 text-sm font-dm-sans">{t('moqText')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-accent/20">
                <Truck className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-white font-rajdhani font-bold text-lg uppercase tracking-wide">Nationwide Fulfillment</h3>
                <p className="text-gray-500 text-sm font-dm-sans">Discreet 50-state U.S. shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-accent/20">
                <Award className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-white font-rajdhani font-bold text-lg uppercase tracking-wide">Purity Guaranteed</h3>
                <p className="text-gray-500 text-sm font-dm-sans">Batch-matched COA provided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Directory */}
      <div className="min-h-[400px]">
        <React.Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin"></div>
          </div>
        }>
          <ProductDirectory products={productsData} categories={categoriesForDirectory} />
        </React.Suspense>
      </div>

      {/* Category Cards */}
      <section className="py-24 bg-[#060B17] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-white mb-4">Research Categories</h2>
            <p className="text-gray-400 font-dm-sans max-w-2xl mx-auto">Explore our specialized catalog of domestic-manufactured research compounds verified for purity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group relative bg-[#0e131b] border border-white/5 rounded-2xl p-8 hover:border-brand-accent/30 transition-all flex flex-col h-full overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="p-3 bg-brand-accent/10 rounded-xl border border-brand-accent/20">
                    <cat.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-2xl font-rajdhani font-bold text-white mb-4 relative z-10">{cat.name}</h3>
                <p className="text-gray-400 text-sm font-dm-sans leading-relaxed mb-6 relative z-10 flex-grow">
                  {cat.longDesc}
                </p>

                <div className="pt-6 border-t border-white/5 relative z-10">
                  <span className="block text-[10px] text-gray-600 uppercase tracking-widest mb-2 font-dm-mono">Compounds</span>
                  <p className="text-xs text-gray-500 font-dm-sans leading-relaxed italic">{cat.compounds}</p>
                </div>

                <Link href={`/products/${cat.id}`} className="absolute inset-0 z-20"></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional FAQ Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">Peptide Wholesale FAQ</h2>
            <p className="text-gray-400 font-dm-sans">Essential information for clinical directors and research procurement teams.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#0e131b] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-all">
                <summary className="flex items-center justify-between p-7 cursor-pointer list-none gap-6 outline-none">
                  <h3 className="text-lg font-rajdhani font-bold text-white group-open:text-brand-accent transition-colors">{faq.q}</h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-open:border-brand-accent group-open:text-brand-accent transition-all">
                    <span className="group-open:hidden text-xl">+</span>
                    <span className="hidden group-open:block text-xl">−</span>
                  </div>
                </summary>
                <div className="px-7 pb-7 border-t border-white/5 pt-6">
                  <p className="text-gray-400 font-dm-sans leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Global Wholesale CTA */}
      <section className="py-24 bg-[#0B0F15] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block p-3 bg-brand-accent/10 rounded-2xl mb-8 border border-brand-accent/20">
            <Zap className="w-8 h-8 text-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-rajdhani font-bold text-white mb-6">Bulk Sourcing Redefined</h2>
          <p className="text-xl text-gray-400 font-dm-sans mb-12 max-w-2xl mx-auto">
            Stop navigating international customs and inconsistent quality. Secure your domestic supply chain with America's most trusted B2B peptide partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/18437439007" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-[#090C11] font-bold py-4 px-10 rounded-xl font-rajdhani text-lg uppercase tracking-widest hover:bg-[#3EABC0] transition-all flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" /> WhatsApp Sales
            </a>
            <Link href="/contact" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-xl font-rajdhani text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
              Request Pricing List
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
