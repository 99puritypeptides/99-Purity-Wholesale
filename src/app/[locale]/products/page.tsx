import React from 'react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  Globe, 
  Zap, 
  Microscope, 
  Star, 
  FlaskConical 
} from 'lucide-react';
import productsData from '@/data/products.json';
import ProductDirectory from '@/components/products/ProductDirectory';
import GlobalCTA from '@/components/layout/GlobalCTA';
import FaqSection from '@/components/shared/FaqSection';

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('productsTitle'),
    description: t('productsDesc'),
    openGraph: { title: t('productsTitle'), description: t('productsDesc') },
  
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/products' : `/${locale}/products`}`,
      languages: { 'en-US': '/products', es: '/es/products', 'x-default': '/products' },
    },
  };
}

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'metabolic-research': return Zap;
    case 'cognitive-function': return Microscope;
    case 'sleep-cycle-investigation': return ShieldCheck;
    case 'growth-factor-research': return Award;
    case 'recovery-research': return Star;
    case 'cellular-health-research': return FlaskConical;
    case 'aminos': return Globe;
    case 'essentials': return Truck;
    default: return FlaskConical;
  }
};

export default async function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'ProductsIndex' });

  const categoryIds = [
    'metabolic-research',
    'cognitive-function',
    'sleep-cycle-investigation',
    'growth-factor-research',
    'recovery-research',
    'cellular-health-research',
    'aminos',
    'essentials'
  ];

  const categories = categoryIds.map(id => ({
    id,
    name: t(`categories.${id}.name`),
    description: t(`categories.${id}.desc`),
    longDesc: t(`categories.${id}.longDesc`),
    compounds: t(`categories.${id}.compounds`),
    icon: getCategoryIcon(id)
  }));

  // Strip icon components for Client Component boundary
  const categoriesForDirectory = categories.map(({ icon, ...rest }) => rest);

  const faqs = t.raw('faqs') as { q: string; a: string }[];

  // FAQ JSON-LD is emitted by the <FaqSection> below (which renders this same faqs array) — no separate script here.

  return (
    <div className="flex flex-col min-h-screen bg-[#05080C] text-brand-text -mt-24 md:-mt-32">
      {/* Cinematic Dark Hero Section */}
      <section className="relative min-h-[45vh] flex flex-col justify-center items-center overflow-hidden bg-[#090C11] text-white px-6 pt-36 md:pt-48 pb-20 md:pb-28 border-b border-white/5">
        {/* Cinematic Dark Background & Vignette */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-radial-vignette opacity-80 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/15 via-[#090C11] to-[#090C11] z-10" />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
        </div>

        <div className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center">
          {/* Premium Status Badge */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent"></span>
              </span>
              <span className="text-[9px] font-dm-mono font-bold uppercase tracking-[0.3em] text-white/60">
                Institutional Sourcing Catalog
              </span>
            </div>
          </div>

          <div>
             <h1 className="reveal-text font-absans text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter uppercase mb-6 text-white drop-shadow-lg break-words w-full">
              {t('title')}
            </h1>
          </div>

          <div>
            <p className="reveal-text font-archia text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto font-medium">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* MOQ/Wholesale Info Banner - Redesigned as Cinematic Dark Cards */}
      <section className="relative z-20 bg-[#090C11] border-b border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             <div className="reveal-card group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-black transition-all duration-500">
                   <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                   <h3 className="text-xs font-dm-mono font-bold uppercase tracking-widest text-white mb-1.5">{t('moqTitle')}</h3>
                   <p className="text-white/60 text-xs font-archia leading-relaxed font-medium">{t('moqText')}</p>
                </div>
             </div>
             <div className="reveal-card group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-black transition-all duration-500">
                   <Truck className="w-4 h-4" />
                </div>
                <div>
                   <h3 className="text-xs font-dm-mono font-bold uppercase tracking-widest text-white mb-1.5">Nationwide Fulfillment</h3>
                   <p className="text-white/60 text-xs font-archia leading-relaxed font-medium">Secure 50-state U.S. priority logistics</p>
                </div>
             </div>
             <div className="reveal-card group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-black transition-all duration-500">
                   <Award className="w-4 h-4" />
                </div>
                <div>
                   <h3 className="text-xs font-dm-mono font-bold uppercase tracking-widest text-white mb-1.5">Purity Guaranteed</h3>
                   <p className="text-white/60 text-xs font-archia leading-relaxed font-medium">Batch-matched COA and HPLC verification</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Search Directory Module */}
      <section className="bg-[#F8F8F6] py-16 border-b border-black/5 relative overflow-hidden">
        {/* Subtle Light Grain Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <span className="text-[10px] font-dm-mono font-bold uppercase tracking-[0.3em] text-black/40 block mb-3">
              [ laboratory procurement terminal ]
            </span>
            <h2 className="reveal-text font-absans text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
              Instant Compound Discovery
            </h2>
          </div>
        </div>
        <div className="min-h-[400px]">
          <React.Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin"></div>
            </div>
          }>
            <ProductDirectory products={productsData} categories={categoriesForDirectory} />
          </React.Suspense>
        </div>
      </section>

      {/* Redesigned Categories Library */}
      <section className="relative z-10 overflow-hidden bg-[#060B17] py-24 md:py-32 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-white/20" />
                <span className="text-[10px] font-dm-mono font-bold uppercase tracking-[0.4em] text-white/40">RESEARCH LIBRARY</span>
              </div>
              <h2 className="reveal-text font-absans text-4xl md:text-7xl font-bold text-white leading-none tracking-tighter uppercase">
                Product
                <span className="text-white/20 italic font-medium lowercase ml-4">Categories</span>
              </h2>
              <p className="reveal-text mt-8 max-w-xl font-archia text-lg text-white/40 leading-relaxed font-medium">
                Explore our specialized catalog of domestic-manufactured research compounds verified for purity.
              </p>
            </div>
          </div>

          <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="reveal-card">
                <div className="group relative h-[460px] w-full block rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  <div className="flex h-full flex-col justify-between relative z-10">
                    <div>
                      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <cat.icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-500" />
                      </div>
                      <h4 className="font-absans text-2xl font-bold leading-tight text-white tracking-tight mb-4">{cat.name}</h4>
                      <p className="line-clamp-4 font-archia text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors font-medium mb-6">{cat.longDesc}</p>
                    </div>
                    
                    <div className="pt-6 border-t border-white/5">
                      <span className="block text-[8px] text-white/20 uppercase tracking-widest mb-2 font-dm-mono">Compounds</span>
                      <p className="text-xs text-white/50 font-archia leading-relaxed italic line-clamp-1">{cat.compounds}</p>
                    </div>
                  </div>

                  <Link href={`/products/${cat.id}`} className="absolute inset-0 z-20"></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned FAQ Section using unified component */}
      <FaqSection 
        title="Peptide Sourcing FAQ"
        subtitle="Essential information for clinical directors and research procurement teams regarding bulk compound sourcing."
        items={faqs}
        eyebrow="(PRODUCTS FAQ)"
        theme="light"
      />

      <GlobalCTA 
        badge="Institutional Sourcing"
        title="Bulk Sourcing Redefined"
        subtitle="Access tiered pricing, verified purity, and priority domestic fulfillment for your research institution or clinical practice."
        primaryCtaText="WhatsApp Sales"
        primaryCtaHref="https://wa.me/18433307365"
        secondaryCtaText="Wholesale Application"
        secondaryCtaHref="/wholesale-application"
      />
    </div>
  );
}
