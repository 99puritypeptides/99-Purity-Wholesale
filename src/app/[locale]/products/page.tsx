import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { AlertTriangle, ChevronRight, FlaskConical, Activity, Brain, ShieldAlert, Sparkles, Syringe, Box } from 'lucide-react';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    title: t('productsTitle'),
    description: t('productsDesc'),
  };
}

export default async function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'ProductsIndex' });

  const categories = [
    {
      id: 'glp1-metabolic-peptides',
      name: t('categories.glp1-metabolic-peptides.name'),
      icon: Activity,
      description: t('categories.glp1-metabolic-peptides.desc'),
    },
    {
      id: 'growth-hormone',
      name: t('categories.growth-hormone.name'),
      icon: TrendingUpIcon,
      description: t('categories.growth-hormone.desc'),
    },
    {
      id: 'healing-recovery-peptides',
      name: t('categories.healing-recovery-peptides.name'),
      icon: FlaskConical,
      description: t('categories.healing-recovery-peptides.desc'),
    },
    {
      id: 'cognitive-nootropic',
      name: t('categories.cognitive-nootropic.name'),
      icon: Brain,
      description: t('categories.cognitive-nootropic.desc'),
    },
    {
      id: 'anti-aging-longevity',
      name: t('categories.anti-aging-longevity.name'),
      icon: ShieldAlert,
      description: t('categories.anti-aging-longevity.desc'),
    },
    {
      id: 'cosmetic-aesthetic',
      name: t('categories.cosmetic-aesthetic.name'),
      icon: Sparkles,
      description: t('categories.cosmetic-aesthetic.desc'),
    },
    {
      id: 'ancillaries',
      name: t('categories.ancillaries.name'),
      icon: Syringe,
      description: t('categories.ancillaries.desc'),
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Research Disclaimer Banner */}
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        {t('banner')}
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* MOQ Info Block */}
        <div className="bg-[#0e131b] border border-brand-accent/20 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <Box className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-xl font-rajdhani font-bold text-white mb-1">{t('moqTitle')}</h3>
              <p className="text-gray-400 font-dm-sans">{t('moqText')}</p>
            </div>
          </div>
          <div>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold px-6 py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider inline-flex">
              {t('cta')}
            </a>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.id}`} className="group block h-full">
              <div className="bg-[#0B0F15] border border-white/5 rounded-xl p-8 hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col">
                <cat.icon className="w-10 h-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {cat.name}
                </h2>
                <p className="text-gray-400 font-dm-sans flex-grow mb-6">
                  {cat.description}
                </p>
                <div className="flex items-center text-brand-accent font-bold font-rajdhani uppercase tracking-wider text-sm mt-auto">
                  {t('viewCategory')} <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
