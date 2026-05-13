import { AlertTriangle, Mail, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import productsData from '@/data/products.json';

export default async function CognitiveNootropicPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'CategoryTemplate' });
  const products = productsData.filter(p => p.category === 'cognitive-nootropic');

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
            Neurological Research
          </div>
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            Cognitive & Nootropic Peptides
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed">
            Advanced neurological research compounds designed to study neurogenesis, synaptic plasticity, and cognitive pathways. Supplied exclusively to B2B institutions demanding highest-tier purity for neurochemical modeling.
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
                  <a href={`https://wa.me/1234567890?text=Hi, I'm interested in wholesale pricing for ${product.name}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
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
              About Nootropic & Neurological Peptides
              <span className="text-brand-accent group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="p-6 pt-0 border-t border-white/5 text-gray-400 font-dm-sans leading-relaxed space-y-4">
              <p>
                Cognitive and nootropic peptides constitute a highly specialized domain of neuroscience research. These sophisticated sequences—such as ACTH/MSH analogues and neurotrophic factor promoters—are instrumental in modeling synaptogenesis, neuroprotection, and memory consolidation mechanisms in vitro.
              </p>
              <p>
                Our wholesale catalog features heavily researched derivatives like Semax and Selank, renowned for their stability in experimental environments. We also supply novel compounds like Dihexa, utilized for its profound impact on hepatocyte growth factor signaling, and Adamax. DSIP (Delta Sleep-Inducing Peptide) provides unique avenues for studying circadian rhythms and autonomic regulation.
              </p>
              <p>
                Given the delicate nature of neurological research, maintaining sequence fidelity is paramount. All cognitive research compounds are synthesized under strict conditions and verified via HPLC to eliminate impurities that could alter neurochemical responses, ensuring maximum reproducibility for your data.
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
