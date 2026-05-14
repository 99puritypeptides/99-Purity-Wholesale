import { notFound } from 'next/navigation';
import { ShieldCheck, Mail, Zap, CheckCircle2, FileText, Beaker, ChevronRight, Box } from 'lucide-react';
import { Link } from '@/i18n/routing';
import productsData from '@/data/products.json';
import { getTranslations } from 'next-intl/server';
import SpecSelector from '@/components/products/SpecSelector';
import ShareProduct from '@/components/products/ShareProduct';

export async function generateMetadata({ params }: { params: { locale: string; category: string; slug: string } }) {
  const product = productsData.find(p => p.slug === params.slug && p.category === params.category);
  if (!product) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const url = `${baseUrl}/${params.locale}/products/${params.category}/${params.slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${product.name} — Wholesale Bulk Supply | 99 Purity Wholesale`,
    description: `Buy ${product.name} wholesale at ≥99% purity. U.S.-manufactured, batch COA verified, tiered B2B pricing. Fast domestic shipping. Research use only.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} | Bulk Wholesale Research Peptides`,
      description: `Premium ${product.name} wholesale supply. ≥99% Purity Guaranteed. Third-party HPLC/MS verified. U.S. domestic fulfillment.`,
      url: url,
      siteName: '99 Purity Wholesale',
      images: [
        {
          url: '/og-image.png',
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
      title: `${product.name} — Wholesale Supply`,
      description: `Buy bulk ${product.name} at ≥99% purity. U.S. manufactured.`,
      images: ['/og-image.png'],
    },
  };
}

function buildFaqs(name: string, specs: string[], cas: string) {
  return [
    { q: `What is the purity of wholesale ${name}?`, a: `All batches of ${name} from 99 Purity Wholesale are independently verified at ≥99% purity by accredited U.S. laboratories using HPLC and Mass Spectrometry. A batch-matched Certificate of Analysis (COA) is included with every shipment.` },
    { q: `What specifications of ${name} are available?`, a: `${name} is available in the following wholesale specifications: ${specs.join(', ')}. Minimum order quantity is 10 units (1 kit) per specification.` },
    { q: `What is the MOQ for wholesale ${name}?`, a: `The minimum order quantity for ${name} is 10 units (1 kit) per specification. Volume discounts are available through our tiered pricing: Start (1–9 kits), Tier 1 (10–19), Tier 2 (20–39), and Tier 3 (40+ kits).` },
    { q: `How is ${name} shipped?`, a: `${name} ships as a lyophilized (freeze-dried) powder via priority domestic carrier from our U.S. facility. Delivery is 2–4 business days to all 50 states. No international customs risk. No cold-chain required during transit.` },
    { q: `Can I get a COA for ${name} before ordering?`, a: `Yes. Contact our team via WhatsApp or email to request the current batch Certificate of Analysis for ${name} before placing your order. COAs include HPLC purity data, MS sequence confirmation, and batch identification.` },
    ...(cas !== 'N/A' ? [{ q: `What is the CAS number for ${name}?`, a: `The CAS registry number for ${name} is ${cas}. This identifier can be used to cross-reference published literature and verify compound identity.` }] : []),
  ];
}

export default async function ProductPage({ params }: { params: { locale: string, category: string, slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'ProductDetail' });
  const product = productsData.find(p => p.slug === params.slug && p.category === params.category);

  if (!product) {
    notFound();
  }

  const faqs = buildFaqs(product.name, product.specs, product.cas);

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

  const formatCategoryName = (cat: string) => {
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <p className="text-xl text-gray-400 font-dm-sans leading-relaxed mb-8">
                {product.description}
              </p>

              <SpecSelector
                productId={product.slug}
                productName={product.name}
                category={formatCategoryName(product.category)}
                categoryPage={`/products/${product.category}`}
                specs={Array.from(new Set(product.specs.map(s => s.split('×')[0])))}
                kitSizes={Array.from(new Set(product.specs.map(s => parseInt(s.split('×')[1]))))}
              />

              <ShareProduct 
                title={product.name} 
                url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale}/products/${product.category}/${product.slug}`}
              />
            </div>

            {/* Specifications & MOQ */}
            <div className="bg-[#0e131b] border border-white/5 rounded-xl p-6 md:p-8 mb-10">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6 flex items-center gap-2">
                <Beaker className="w-6 h-6 text-brand-accent" />
                {t('specsTitle')}
              </h3>
              
              <div className="mb-8">
                <h4 className="text-sm font-dm-mono text-gray-500 mb-3 uppercase tracking-wider">{t('availableSizes')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {product.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-3 text-white font-dm-sans bg-black/30 px-4 py-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="flex-1 bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Box className="w-5 h-5 text-brand-accent" />
                    <h4 className="text-brand-accent font-bold font-dm-mono text-lg uppercase tracking-tight">{t('moqHeading')}</h4>
                  </div>
                  <p className="text-sm text-gray-400 font-dm-sans">{t('moqSubtext')}</p>
                </div>
                
                <div className="flex-[2] bg-[#0B0F15] border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-bold font-rajdhani text-xl mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-brand-accent" />
                    {t('pricingHeading')}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { key: 'starter', range: '1-9' },
                      { key: 'tier1', range: '10-19' },
                      { key: 'tier2', range: '20-39' },
                      { key: 'tier3', range: '40+' }
                    ].map((tier) => (
                      <div key={tier.key} className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center text-center transition-colors hover:border-brand-accent/30">
                        <span className="text-[10px] text-gray-500 font-dm-mono uppercase mb-1">
                          {tier.key === 'tier3' ? 'Tier 3' : tier.key.charAt(0).toUpperCase() + tier.key.slice(1).replace('tier', 'Tier ')}
                        </span>
                        <span className="text-sm text-brand-accent font-bold font-dm-mono">{tier.range} kits</span>
                      </div>
                    ))}
                  </div>
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
                <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-4 rounded-lg transition-all font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(79,195,208,0.3)] hover:shadow-[0_0_25px_rgba(79,195,208,0.5)]">
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

        {/* Product FAQ */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <h2 className="text-3xl font-rajdhani font-bold text-white mb-8">Frequently Asked Questions — {product.name}</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#0e131b] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                  <h3 className="text-white font-rajdhani font-bold text-lg group-open:text-brand-accent transition-colors">{faq.q}</h3>
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-open:text-brand-accent flex-shrink-0 text-lg leading-none">
                    <span className="group-open:hidden">+</span><span className="hidden group-open:block">−</span>
                  </div>
                </summary>
                <div className="px-6 pb-6"><p className="text-gray-400 font-dm-sans leading-relaxed">{faq.a}</p></div>
              </details>
            ))}
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
        <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsappMsg', { name: product.name }))}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-3 rounded-lg transition-colors font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" /> {t('requestPricingTitle')}
        </a>
      </div>
    </div>
  );
}
