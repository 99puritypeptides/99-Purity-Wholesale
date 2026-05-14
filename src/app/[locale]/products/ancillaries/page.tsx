import { AlertTriangle, Mail, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import productsData from '@/data/products.json';

export default async function AncillariesPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'CategoryTemplate' });
  const products = productsData.filter(p => p.category === 'ancillaries');

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Research Disclaimer Banner */}
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        {t('banner')}
      </div>

      {/* Category Hero */}
      <section className="relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
            Laboratory Supplies
          </div>
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            Ancillaries & Reagents
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed">
            High-grade reconstitution solutions, metabolic injectable supplies, and vital research ancillaries to complete your laboratory toolkit. Trusted wholesale supply for uninterrupted research.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-[#0e131b] border border-white/5 rounded-xl p-8 hover:border-brand-accent/30 transition-all flex flex-col">
                <h3 className="text-3xl font-rajdhani font-bold text-white mb-6 border-b border-white/10 pb-4">
                  {product.name}
                </h3>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-dm-mono text-gray-500 mb-3 uppercase tracking-wider">{t('availableSpecs')}</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-gray-300 font-dm-sans">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg mb-6 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 font-dm-sans text-sm">{t('moq')}</span>
                    <span className="text-white font-bold font-dm-mono">{t('units')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-dm-sans text-sm">{t('pricing')}</span>
                    <span className="text-brand-accent font-bold font-dm-mono text-sm border border-brand-accent/30 px-2 py-1 rounded bg-brand-accent/10">{t('contact')}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href={`/products/${product.category}/${product.slug}`} className="w-full bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
                    {t('viewDetails')}
                  </Link>
                  <a href={`https://wa.me/18437439007?text=Hi, I'm interested in wholesale pricing for ${product.name}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" /> {t('whatsappPricing')}
                  </a>
                  <a href={`mailto:sales@99purity.com?subject=Wholesale Inquiry: ${product.name}`} className="w-full bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" /> {t('emailInquiry')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block (Expandable) */}
      <section className="py-16 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <details className="group border border-white/10 rounded-xl bg-[#0e131b] overflow-hidden">
            <summary className="p-6 cursor-pointer font-rajdhani font-bold text-xl text-white flex justify-between items-center outline-none">
              About Research Ancillaries & Reagents
              <span className="text-brand-accent group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="p-6 pt-0 border-t border-white/5 text-gray-400 font-dm-sans leading-relaxed space-y-4">
              <p>
                Reliable research outcomes demand more than just high-purity primary compounds; the quality of your reconstitution media and supporting ancillaries is equally critical. We provide laboratories with premium-grade reagents to ensure the integrity of your experimental protocols.
              </p>
              <p>
                Our inventory includes essential solvent solutions such as Bacteriostatic Water (BAC Water), precisely formulated to preserve the stability of delicate peptide chains during long-term storage. We also offer high-demand metabolic ancillaries including L-Carnitine, injectable-grade Vitamin B12 (Cyanocobalamin and Methylcobalamin), Glutathione, and specialized lipotropic blends (MIC/Lipo-C).
              </p>
              <p>
                By sourcing your primary research compounds and laboratory ancillaries through a single, trusted wholesale provider, your institution benefits from streamlined logistics and uncompromised quality control across all experimental variables.
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
