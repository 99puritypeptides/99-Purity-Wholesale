import {getTranslations, getLocale} from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ShieldCheck, Truck, FlaskConical, Building2, Download, CheckCircle2, Star, Beaker, FileBadge, BarChart3, Users, Zap, Mail } from 'lucide-react';

export default async function HomePage() {
  const t = await getTranslations('Index');
  const locale = await getLocale();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-bg text-brand-text overflow-hidden py-24 lg:py-32 border-b border-brand-accent/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-bg to-brand-bg"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-rajdhani font-bold mb-6 tracking-tight text-white leading-tight">
            {t('Hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-dm-sans max-w-3xl mx-auto leading-relaxed">
            {t('Hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold text-lg px-8 py-4 rounded-md transition-colors w-full sm:w-auto font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              {t('Hero.primaryCta')}
            </a>
            <Link href="/catalog" className="bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-bold text-lg px-8 py-4 rounded-md transition-colors w-full sm:w-auto font-rajdhani uppercase tracking-wider text-center">
              {t('Hero.secondaryCta')}
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-dm-mono text-gray-400">
            <span className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-brand-accent"/> {t('Hero.badges.usMade')}</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-accent"/> {t('Hero.badges.purity')}</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-accent"/> {t('Hero.badges.tested')}</span>
            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-brand-accent"/> {t('Hero.badges.shipping')}</span>
            <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-brand-accent"/> {t('Hero.badges.b2b')}</span>
          </div>
        </div>
      </section>

      {/* 2. Differentiators */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'lab', icon: FlaskConical },
              { id: 'coa', icon: FileBadge },
              { id: 'pricing', icon: BarChart3 },
              { id: 'support', icon: Users }
            ].map((feature) => (
              <div key={feature.id} className="bg-brand-bg border border-brand-accent/10 p-8 rounded-xl hover:border-brand-accent/30 transition-colors group">
                <feature.icon className="w-10 h-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-rajdhani font-bold text-white mb-3">
                  {t(`Differentiators.${feature.id}.title` as any)}
                </h3>
                <p className="text-gray-400 font-dm-sans">
                  {t(`Differentiators.${feature.id}.description` as any)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Categories Preview */}
      <section className="py-24 bg-[#0B0F15]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="text-4xl font-rajdhani font-bold text-white">{t('Categories.title')}</h2>
            <Link href="/catalog" className="text-brand-accent hover:text-[#3EABC0] font-bold font-rajdhani uppercase tracking-wider flex items-center gap-2">
              {t('Categories.cta')} &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['bpc', 'cjc', 'tb', 'sema', 'tirz', 'reta'].map((cat) => (
              <Link key={cat} href={`/catalog#${cat}`} className="block group">
                <div className="bg-brand-bg border border-white/5 p-6 rounded-xl hover:border-brand-accent/40 transition-colors">
                  <h4 className="text-xl font-rajdhani font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {t(`Categories.items.${cat}.name` as any)}
                  </h4>
                  <p className="text-gray-400 font-dm-sans text-sm">
                    {t(`Categories.items.${cat}.description` as any)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COA & Quality teaser */}
      <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-b border-brand-accent/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-brand-accent" />
              {t('Quality.title')}
            </h2>
            <p className="text-xl text-gray-400 font-dm-sans leading-relaxed">
              {t('Quality.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {['bpc', 'sema', 'tirz'].map((item) => (
              <div key={item} className="flex items-center justify-between p-5 bg-[#0e131b] rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors">
                <span className="font-dm-mono text-sm text-gray-300">
                  {t(`Quality.downloads.${item}` as any)}
                </span>
                <button className="text-brand-accent hover:text-white transition-colors bg-brand-accent/10 p-2 rounded-md">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <Link href="/quality" className="inline-block bg-white text-black hover:bg-gray-200 font-bold text-lg px-8 py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider">
            {t('Quality.cta')}
          </Link>
        </div>
      </section>

      {/* 5. Wholesale Tier Breakdown */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">{t('Tiers.title')}</h2>
            <p className="text-xl text-gray-400 font-dm-sans">{t('Tiers.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['starter', 'tier1', 'tier2', 'tier3'].map((tier, i) => (
              <div key={tier} className="bg-brand-bg border border-brand-accent/10 p-8 rounded-xl flex flex-col items-center text-center relative overflow-hidden group">
                {i === 3 && <div className="absolute top-0 inset-x-0 h-1 bg-brand-accent"></div>}
                <div className="w-16 h-16 rounded-full bg-[#0e131b] flex items-center justify-center mb-6 text-brand-accent">
                  {i === 0 ? <Star className="w-6 h-6" /> : 
                   i === 1 ? <BarChart3 className="w-6 h-6" /> : 
                   i === 2 ? <Zap className="w-6 h-6" /> : 
                   <Building2 className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">
                  {t(`Tiers.items.${tier}.name` as any)}
                </h3>
                <p className="text-gray-400 font-dm-sans text-sm flex-grow">
                  {t(`Tiers.items.${tier}.description` as any)}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold text-lg px-8 py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider">
              {t('Tiers.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* 6. Services teaser */}
      <section className="py-20 bg-[#0B0F15]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#0e131b] to-brand-bg border border-brand-accent/20 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-rajdhani font-bold text-white mb-6">
                {t('Services.title')}
              </h2>
              <ul className="space-y-4">
                {['whiteLabel', 'dropShipping', 'custom'].map((service) => (
                  <li key={service} className="flex items-center gap-3 text-gray-300 font-dm-sans text-lg">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                    {t(`Services.points.${service}` as any)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-auto">
              <Link href="/services" className="inline-flex bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold text-lg px-8 py-4 rounded-md transition-colors font-rajdhani uppercase tracking-wider">
                {t('Services.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Full-width WhatsApp + Email CTA banner */}
      <section className="bg-brand-accent py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-[#090C11] mb-8">
            {t('CtaBanner.title')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-[#090C11] hover:bg-black text-white font-bold text-lg px-8 py-4 rounded-md transition-colors w-full sm:w-auto font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-brand-accent" />
              {t('CtaBanner.whatsapp')}
            </a>
            <a href="mailto:sales@99purity.com" className="bg-transparent border border-[#090C11] text-[#090C11] hover:bg-[#090C11]/10 font-bold text-lg px-8 py-4 rounded-md transition-colors w-full sm:w-auto font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              {t('CtaBanner.email')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
