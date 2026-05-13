import { notFound } from 'next/navigation';
import { MapPin, Mail, Zap, ShieldAlert, CheckCircle2, Package, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import locationsData from '@/data/locations.json';
import { getTranslations } from 'next-intl/server';

export default async function LocationTemplatePage({ params }: { params: { locale: string, slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'LocationDetail' });
  const location = locationsData.find(loc => loc.slug === params.slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-accent/5 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-brand-accent" />
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-wider">
              {t('hub', { city: location.city, state: location.state })}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-rajdhani font-bold mb-8 text-white tracking-tight max-w-4xl">
            {location.h1}
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl">
            {location.intro}
          </p>
        </div>
      </section>

      {/* Main Content & CTAs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="mb-12">
                <h2 className="text-3xl font-rajdhani font-bold text-white mb-6">{t('trendingTitle', { city: location.city })}</h2>
                <p className="text-gray-400 font-dm-sans mb-8">
                  {t('trendingDesc', { city: location.city })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.popularProducts.map((product, idx) => (
                    <div key={idx} className="bg-[#0e131b] border border-white/5 p-5 rounded-lg flex items-center justify-between group">
                      <span className="font-rajdhani font-bold text-white text-lg">{product}</span>
                      <CheckCircle2 className="w-5 h-5 text-brand-accent/50 group-hover:text-brand-accent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-4">{t('fastShippingTitle', { state: location.state })}</h3>
                <p className="text-gray-300 font-dm-sans mb-6">
                  {t('fastShippingDesc', { city: location.city })}
                </p>
                <ul className="space-y-3 font-dm-mono text-sm text-gray-400">
                  <li className="flex items-center gap-2"><Package className="w-4 h-4 text-brand-accent" /> {t('shippingPoints.priority')}</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> {t('shippingPoints.discreet')}</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-accent" /> {t('shippingPoints.noCustoms')}</li>
                </ul>
              </div>

              {/* Compliance Note */}
              <div className="bg-yellow-900/10 border border-yellow-700/30 rounded-xl p-6 flex gap-4">
                <ShieldAlert className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h4 className="font-rajdhani font-bold text-yellow-500 text-lg mb-2">{t('complianceTitle')}</h4>
                  <p className="text-sm text-yellow-500/80 font-dm-sans">
                    {t('complianceDesc', { city: location.city, state: location.state })}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (CTAs) */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 bg-[#0B0F15] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">{t('contactTitle', { city: location.city })}</h3>
                <p className="text-gray-400 font-dm-sans mb-8 text-sm">
                  {t('contactDesc', { state: location.state })}
                </p>
                
                <div className="space-y-4">
                  <a href={`https://wa.me/1234567890?text=${encodeURIComponent(t('whatsappMsg', { city: location.city, state: location.state }))}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-4 rounded-lg transition-all font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(79,195,208,0.3)] hover:shadow-[0_0_25px_rgba(79,195,208,0.5)]">
                    <Zap className="w-5 h-5" /> {t('whatsappCta')}
                  </a>
                  
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-500 font-dm-mono text-xs uppercase">{t('or')}</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  <a href={`mailto:sales@99purity.com?subject=${encodeURIComponent(t('emailSubject', { city: location.city, state: location.state }))}`} className="w-full bg-[#0e131b] border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold py-4 rounded-lg transition-colors font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5" /> {t('emailCta')}
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 text-center">
                  <Link href="/products" className="text-brand-accent hover:text-white font-dm-mono text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                    {t('viewCatalog')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
