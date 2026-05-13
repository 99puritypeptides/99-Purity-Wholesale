import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import locationsData from '@/data/locations.json';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    title: t('locationsTitle'),
    description: t('locationsDesc'),
  };
}

export default async function LocationsIndexPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'LocationsIndex' });

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-bg to-brand-bg"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
            {t('badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationsData.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group block h-full">
                <div className="bg-[#0e131b] border border-white/5 rounded-xl p-8 hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MapPin className="w-24 h-24 text-brand-accent" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-wider">{loc.state}</span>
                    </div>
                    <h2 className="text-3xl font-rajdhani font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                      {loc.city}
                    </h2>
                    <p className="text-gray-400 font-dm-sans mb-8 line-clamp-3">
                      {loc.intro}
                    </p>
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <div className="flex items-center text-white font-bold font-rajdhani uppercase tracking-wider text-sm">
                      {t('viewHub')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform text-brand-accent" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
