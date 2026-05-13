import { notFound } from 'next/navigation';
import { ShieldCheck, Mail, Zap, CheckCircle2, FileText, Beaker, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import productsData from '@/data/products.json';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    title: t('productsTitle'),
    description: t('productsDesc'),
  };
}

export default async function ProductPage({ params }: { params: { locale: string, category: string, slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'ProductDetail' });
  const product = productsData.find(p => p.slug === params.slug && p.category === params.category);

  if (!product) {
    notFound();
  }

  // Find related products (same category, different slug, max 3)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const formatCategoryName = (cat: string) => {
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text pb-20">
      {/* Breadcrumbs */}
      <div className="border-b border-white/5 bg-[#0e131b]">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm font-dm-mono text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link href="/products" className="hover:text-brand-accent transition-colors">{t('breadcrumbs.products')}</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/products/${product.category}`} className="hover:text-brand-accent transition-colors">
            {formatCategoryName(product.category)}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content - Left */}
          <div className="lg:col-span-8">
            {/* Product Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent px-3 py-1 rounded-full text-xs font-dm-mono uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t('purity')}
                </span>
                {product.cas !== 'N/A' && (
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full text-xs font-dm-mono uppercase tracking-wider">
                    {t('cas')} {product.cas}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-rajdhani font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-400 font-dm-sans leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications & MOQ */}
            <div className="bg-[#0e131b] border border-white/5 rounded-xl p-6 md:p-8 mb-10">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6 flex items-center gap-2">
                <Beaker className="w-6 h-6 text-brand-accent" />
                {t('specsTitle')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-dm-mono text-gray-500 mb-3 uppercase tracking-wider">{t('availableSizes')}</h4>
                  <ul className="space-y-3">
                    {product.specs.map(spec => (
                      <li key={spec} className="flex items-center gap-3 text-white font-dm-sans bg-black/30 px-4 py-2 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-dm-mono text-gray-500 mb-3 uppercase tracking-wider">{t('storageDetails')}</h4>
                  <p className="text-gray-300 font-dm-sans bg-black/30 px-4 py-3 rounded-lg border border-white/5 h-full flex items-center">
                    {product.storage}
                  </p>
                </div>
              </div>

              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-brand-accent font-bold font-dm-mono text-lg">{t('moqHeading')}</div>
                  <div className="text-sm text-gray-400 font-dm-sans">{t('moqSubtext')}</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold font-rajdhani text-xl">{t('pricingHeading')}</div>
                  <div className="text-xs text-gray-500 font-dm-mono uppercase tracking-wider">{t('pricingTiers')}</div>
                </div>
              </div>
            </div>

            {/* Research Context Block */}
            <div className="mb-10">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-4">{t('contextTitle')}</h3>
              <div className="prose prose-invert prose-p:text-gray-400 prose-p:font-dm-sans max-w-none">
                <p>
                  {t('contextP1', { name: product.name })}
                </p>
                <p>
                  {t('contextP2', { name: product.name })}
                </p>
              </div>
            </div>

            {/* COA Download */}
            <div className="bg-[#0e131b] border border-white/5 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-rajdhani font-bold text-white">{t('coaTitle')}</h4>
                  <p className="text-sm text-gray-400 font-dm-sans">{t('coaDesc')}</p>
                </div>
              </div>
              <button className="bg-transparent border border-gray-600 hover:border-brand-accent hover:text-brand-accent text-gray-300 px-6 py-2 rounded font-dm-mono text-sm transition-colors whitespace-nowrap">
                {t('requestCoa')}
              </button>
            </div>
          </div>

          {/* Sidebar - Right (Sticky CTAs) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 bg-[#0B0F15] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">{t('requestPricingTitle')}</h3>
              <p className="text-gray-400 font-dm-sans mb-8 text-sm">
                {t('requestPricingDesc', { name: product.name })}
              </p>
              
              <div className="space-y-4">
                <a href={`https://wa.me/1234567890?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-4 rounded-lg transition-all font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(79,195,208,0.3)] hover:shadow-[0_0_25px_rgba(79,195,208,0.5)]">
                  <Zap className="w-5 h-5" /> {t('whatsappCta')}
                </a>
                
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-500 font-dm-mono text-xs uppercase">{t('or')}</span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                <a href={`mailto:sales@99purity.com?subject=Wholesale Inquiry: ${product.name}`} className="w-full bg-[#0e131b] border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold py-4 rounded-lg transition-colors font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" /> {t('emailCta')}
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-start gap-3 text-sm text-gray-400 font-dm-sans">
                  <ShieldCheck className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <p>{t('confidential')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/5">
            <h2 className="text-3xl font-rajdhani font-bold text-white mb-8">{t('relatedTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(rp => (
                <Link key={rp.slug} href={`/products/${rp.category}/${rp.slug}`} className="group bg-[#0e131b] border border-white/5 rounded-xl p-6 hover:border-brand-accent/30 transition-colors flex flex-col">
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{rp.name}</h3>
                  <p className="text-sm text-gray-400 font-dm-sans mb-4 line-clamp-2 flex-grow">{rp.description}</p>
                  <div className="flex items-center text-brand-accent font-bold font-rajdhani uppercase tracking-wider text-sm mt-auto">
                    {t('viewDetails')} <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Sticky CTA Footer (only visible on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0B0F15] border-t border-white/10 z-50 lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a href={`https://wa.me/1234567890?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-3 rounded-lg transition-colors font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" /> {t('requestPricingTitle')}
        </a>
      </div>
    </div>
  );
}
