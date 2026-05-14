import { Zap, Package, Rocket, MonitorSmartphone, TrendingUp, Tag, ClipboardCheck, ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    title: t('servicesTitle'),
    description: t('servicesDesc'),
  };
}

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Services' });

  const services = [
    {
      id: 'dropshipping',
      title: t('items.dropshipping.title'),
      icon: Package,
      description: t('items.dropshipping.desc'),
      whatsappMsg: t('items.dropshipping.msg')
    },
    {
      id: 'launch-support',
      title: t('items.launch-support.title'),
      icon: Rocket,
      description: t('items.launch-support.desc'),
      whatsappMsg: t('items.launch-support.msg')
    },
    {
      id: 'website-development',
      title: t('items.website-development.title'),
      icon: MonitorSmartphone,
      description: t('items.website-development.desc'),
      whatsappMsg: t('items.website-development.msg')
    },
    {
      id: 'sales-distribution',
      title: t('items.sales-distribution.title'),
      icon: TrendingUp,
      description: t('items.sales-distribution.desc'),
      whatsappMsg: t('items.sales-distribution.msg')
    },
    {
      id: 'private-label',
      title: t('items.private-label.title'),
      icon: Tag,
      description: t('items.private-label.desc'),
      whatsappMsg: t('items.private-label.msg')
    },
    {
      id: 'fulfillment-consulting',
      title: t('items.fulfillment-consulting.title'),
      icon: ClipboardCheck,
      description: t('items.fulfillment-consulting.desc'),
      whatsappMsg: t('items.fulfillment-consulting.msg')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-24 border-b border-white/5">
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

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-[#0e131b] border border-white/5 rounded-xl p-8 hover:border-brand-accent/30 transition-all flex flex-col group">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-6 border border-brand-accent/20 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-brand-accent" />
                </div>
                
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-dm-sans mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <a 
                  href={`https://wa.me/18437439007?text=${encodeURIComponent(service.whatsappMsg)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" /> {t('inquireBtn')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started - 3 Steps */}
      <section className="py-24 bg-[#0B0F15] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-white mb-4">{t('stepsTitle')}</h2>
            <p className="text-xl text-gray-400 font-dm-sans max-w-2xl mx-auto">
              {t('stepsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>
            
            {/* Step 1 */}
            <div className="bg-[#0e131b] border border-white/5 rounded-2xl p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#0B0F15] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
                <PhoneCall className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="text-brand-accent font-dm-mono text-sm uppercase tracking-widest mb-2">Step 01</div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">{t('step1Title')}</h3>
              <p className="text-gray-400 font-dm-sans text-sm">
                {t('step1Desc')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0e131b] border border-white/5 rounded-2xl p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#0B0F15] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
                <ClipboardCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="text-brand-accent font-dm-mono text-sm uppercase tracking-widest mb-2">Step 02</div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">{t('step2Title')}</h3>
              <p className="text-gray-400 font-dm-sans text-sm">
                {t('step2Desc')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0e131b] border border-brand-accent/30 rounded-2xl p-8 text-center relative z-10 shadow-[0_0_30px_rgba(79,195,208,0.1)]">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#0B0F15] shadow-[0_0_0_1px_rgba(79,195,208,0.5)]">
                <CheckCircle2 className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="text-brand-accent font-dm-mono text-sm uppercase tracking-widest mb-2">Step 03</div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">{t('step3Title')}</h3>
              <p className="text-gray-400 font-dm-sans text-sm">
                {t('step3Desc')}
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href={`https://wa.me/18437439007?text=${encodeURIComponent(t('scheduleMsg'))}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-4 px-8 rounded-lg transition-colors font-rajdhani text-lg uppercase tracking-wider">
              {t('scheduleCta')} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
