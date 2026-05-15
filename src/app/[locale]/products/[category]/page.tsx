import { notFound } from 'next/navigation';
import { AlertTriangle, Mail, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import productsData from '@/data/products.json';
import AddToInquiryButton from '@/components/products/AddToInquiryButton';

export async function generateMetadata({ params }: { params: { locale: string; category: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'CategoryDetail' });
  
  // Validate if category exists in translations
  const categories = ['glp1-metabolic-peptides', 'growth-hormone', 'healing-recovery-peptides', 'cognitive-nootropic', 'anti-aging-longevity', 'cosmetic-aesthetic', 'ancillaries'];
  if (!categories.includes(params.category)) return {};

  return {
    title: `${t(`categories.${params.category}.title`)} — Wholesale Bulk Supply | 99 Purity Wholesale`,
    description: t(`categories.${params.category}.desc`),
  };
}

export default async function CategoryPage({ params }: { params: { locale: string; category: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'CategoryDetail' });
  const ct = await getTranslations({ locale: params.locale, namespace: 'CategoryTemplate' });
  
  const categoryKeys = ['glp1-metabolic-peptides', 'growth-hormone', 'healing-recovery-peptides', 'cognitive-nootropic', 'anti-aging-longevity', 'cosmetic-aesthetic', 'ancillaries'];
  
  if (!categoryKeys.includes(params.category)) notFound();

  const products = productsData.filter(p => p.category === params.category);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {ct('banner')}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 mb-6 text-white/30 font-dm-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-brand-accent">{ct('home')}</Link><span>/</span>
            <Link href="/products" className="hover:text-brand-accent">{ct('products')}</Link><span>/</span>
            <span className="text-brand-accent">{t(`categories.${params.category}.title`)}</span>
          </div>
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
            {t(`categories.${params.category}.badge`)}
          </div>
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            {t(`categories.${params.category}.title`)}
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl">
            {t(`categories.${params.category}.desc`)}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['≥99% Purity', 'Batch COA', 'U.S. Made', `${products.length} ${ct('products')}`].map(b => (
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
                  <h4 className="text-sm font-dm-mono text-gray-500 mb-3 uppercase tracking-wider">{ct('availableSpecs')}</h4>
                  <ul className="space-y-2">
                    {product.specs.map(spec => (
                      <li key={spec} className="flex items-center gap-2 text-gray-300 font-dm-sans"><CheckCircle2 className="w-4 h-4 text-brand-accent" />{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/50 p-4 rounded-lg mb-6 border border-white/5">
                  <div className="flex justify-between mb-2"><span className="text-gray-400 text-sm">{ct('moq')}</span><span className="text-white font-bold font-dm-mono">{ct('units')}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">{ct('pricing')}</span><span className="text-brand-accent font-bold font-dm-mono text-sm border border-brand-accent/30 px-2 py-1 rounded bg-brand-accent/10">{ct('contact')}</span></div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href={`/products/${product.category}/${product.slug}`} className="w-full bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">{ct('viewDetails')}</Link>
                  
                  {(() => {
                    const [spec, kitSizeStr] = product.specs[0].split('×');
                    return (
                      <AddToInquiryButton
                        productId={product.slug}
                        productName={product.name}
                        category={t(`categories.${params.category}.title`)}
                        spec={spec}
                        kitSize={parseInt(kitSizeStr)}
                        categoryPage={`/products/${product.category}`}
                      />
                    );
                  })()}

                  <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}?text=${encodeURIComponent(ct('whatsappMsg', { name: product.name }))}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366] font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" /> {ct('whatsappPricing')}
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
              <h2 className="text-3xl font-rajdhani font-bold text-white">
                {ct('aboutTitle', { title: t(`categories.${params.category}.title`) })}
              </h2>
              <p className="text-gray-300 font-dm-sans leading-relaxed text-lg">
                {t(`categories.${params.category}.seoP1`)}
              </p>
              <p className="text-gray-400 font-dm-sans leading-relaxed">
                {t(`categories.${params.category}.seoP2`)}
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-[#0e131b] border border-brand-accent/20 rounded-2xl p-8 sticky top-24">
                <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
                <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                  {t('guarantee.title')}
                </h3>
                <ul className="space-y-3">
                  {(t.raw('guarantee.items') as string[]).map(p => (
                    <li key={p} className="flex items-start gap-2 text-gray-400 font-dm-sans text-sm"><CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />{p}</li>
                  ))}
                </ul>
                <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-brand-accent text-brand-bg font-bold py-3 rounded-xl flex items-center justify-center gap-2 font-rajdhani uppercase tracking-wider text-sm hover:bg-[#3EABC0] transition-colors">
                  <Zap className="w-4 h-4" /> {t('cta.getPricing')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-rajdhani font-bold text-white mb-8 text-center">
            {ct('faqTitle', { title: t(`categories.${params.category}.title`) })}
          </h2>
          <div className="space-y-3">
            {(t.raw(`categories.${params.category}.faqs`) as {q: string, a: string}[]).map((faq, i) => (
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

      {/* CTA */}
      <section className="py-16 bg-[#060B17] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-rajdhani font-bold text-white mb-4">
            {t('cta.title', { title: t(`categories.${params.category}.title`) })}
          </h2>
          <p className="text-gray-400 font-dm-sans mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-[#3EABC0] text-brand-bg font-bold py-4 px-8 rounded-xl font-rajdhani text-lg uppercase tracking-wider"><Zap className="w-5 h-5" /> {t('cta.whatsapp')}</a>
            <Link href="/products" className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold py-4 px-8 rounded-xl font-rajdhani text-lg uppercase tracking-wider hover:bg-white/10"><ArrowRight className="w-5 h-5" /> {t('cta.catalog')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
