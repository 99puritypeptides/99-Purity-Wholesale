import {getTranslations, getLocale} from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ShieldCheck, Truck, FlaskConical, Building2, Download, CheckCircle2, Star, BarChart3, Zap, Mail, ArrowRight, Microscope, Globe, Award, ArrowUpRight } from 'lucide-react';
import productsData from '@/data/products.json';

export default async function HomePage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Index' });
  const pt = await getTranslations({ locale: params.locale, namespace: 'ProductsIndex' });
  const locale = await getLocale();

  return (
    <div className="bg-[#050505] p-2 md:p-4 selection:bg-brand-accent/30 overflow-x-hidden">
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] bg-[#090C11] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden flex items-center border border-white/5 shadow-2xl mb-4 md:mb-6">
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-full lg:w-1/2 h-full relative">
            <Image 
              src="/images/hero-lab.png"
              alt="Research Laboratory"
              fill
              className="object-cover opacity-60 grayscale-[10%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#090C11]/80 to-[#090C11]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-transparent to-transparent"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-8 lg:px-16 relative z-10 pt-32 lg:pt-48 flex flex-col justify-start h-full">
          <div className="max-w-full lg:max-w-[70%]">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[9px] uppercase tracking-[0.3em] font-bold mb-4 animate-fade-in backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              {t('Hero.badges.usMade')}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-rajdhani font-bold mb-6 tracking-tighter text-white leading-[0.85] drop-shadow-2xl">
              {t('Hero.title').split('Trusted')[0]}<span className="text-brand-accent">Trusted</span>{t('Hero.title').split('Trusted')[1]}
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-brand-text/50 mb-8 font-dm-sans max-w-2xl leading-relaxed">
              {t('Hero.subtitle')}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-white/10"></div>
              <div className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">{t('Hero.authorized')}</div>
            </div>
          </div>
        </div>

        {/* Bottom Left "Tab" Button */}
        <div className="absolute bottom-0 left-0 z-20 scale-75 md:scale-90 lg:scale-100 origin-bottom-left will-change-transform">
          <Link 
            href="/products" 
            className="group flex items-center gap-8 bg-[#4FC3D0] text-[#090C11] pl-10 pr-6 py-6 md:py-8 rounded-tr-[3.5rem] font-bold text-lg uppercase tracking-tighter transition-[padding,background-color,transform] duration-300 ease-out hover:pl-14"
          >
            <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[10px] tracking-[0.3em] opacity-60 mb-1">{t('Hero.explore')}</span>
              <span>{t('Hero.secondaryCta')}</span>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#090C11] flex items-center justify-center text-[#4FC3D0] group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </Link>
        </div>

        {/* Floating Stat - Bottom Right */}
        <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-6 bg-black/40 backdrop-blur-xl border border-white/5 p-3 rounded-3xl scale-75 md:scale-90 lg:scale-100 origin-bottom-right">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#090C11] bg-gray-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brand-accent/20 to-brand-accent/40"></div>
              </div>
            ))}
          </div>
          <div className="pr-4">
            <div className="text-white font-bold text-xs">{t('Hero.institutions')}</div>
            <div className="text-white/40 text-[9px] uppercase tracking-widest">{t('Hero.partners')}</div>
          </div>
        </div>
      </section>

      {/* 2. Bento Grid Differentiators */}
      <section className="py-32 px-6 lg:px-12 bg-[#020202]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[280px]">
            <div className="md:col-span-8 md:row-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 lg:p-16 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Microscope className="w-64 h-64 text-brand-accent" />
              </div>
              <div className="relative z-10">
                <FlaskConical className="w-12 h-12 text-brand-accent mb-8" />
                <h3 className="text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6">
                  {t('Differentiators.lab.title')}
                </h3>
                <p className="text-brand-text/50 font-dm-sans text-lg max-w-xl">
                  {t('Differentiators.lab.description')}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#0F0F0F] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-brand-accent/30 transition-colors group">
              <Award className="w-10 h-10 text-brand-accent transition-transform group-hover:rotate-12" />
              <div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                  {t('Differentiators.coa.title')}
                </h3>
                <p className="text-brand-text/40 font-dm-sans text-sm">
                  {t('Differentiators.coa.description')}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-brand-accent/30 transition-colors group">
              <Globe className="w-10 h-10 text-brand-accent transition-transform group-hover:scale-110" />
              <div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                  {t('Differentiators.pricing.title')}
                </h3>
                <p className="text-brand-text/40 font-dm-sans text-sm">
                  {t('Differentiators.pricing.description')}
                </p>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-6 bg-[#080808] border border-white/5 rounded-[2rem] p-10 flex items-center gap-8 hover:border-brand-accent/30 transition-colors">
              <div className="bg-brand-accent/10 p-6 rounded-2xl">
                <Building2 className="w-10 h-10 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                  {t('Differentiators.support.title')}
                </h3>
                <p className="text-brand-text/40 font-dm-sans text-sm max-w-md">
                  {t('Differentiators.support.description')}
                </p>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-6 bg-[#080808] border border-white/5 rounded-[2rem] p-10 flex items-center gap-8 hover:border-brand-accent/30 transition-colors">
              <div className="bg-brand-accent/10 p-6 rounded-2xl">
                <Truck className="w-10 h-10 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                  {t('Hero.badges.shipping')}
                </h3>
                <p className="text-brand-text/40 font-dm-sans text-sm max-w-md">
                  {t('Differentiators.shippingDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Category Showcase */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('Categories.badge')}</span>
              <h2 className="text-5xl lg:text-7xl font-rajdhani font-bold text-white leading-[0.9] tracking-tight">
                {t('Categories.title').split('Library')[0]} <br />
                <span className="text-white/20">{t('Categories.title').split('Library')[1] || 'Library'}</span>
              </h2>
            </div>
            <Link href="/products" className="group flex items-center gap-4 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] pb-2 border-b border-brand-accent/20 hover:border-brand-accent transition-all duration-300">
              {t('Categories.cta')} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {[
              { id: 'glp1-metabolic-peptides', icon: Zap },
              { id: 'growth-hormone', icon: Award },
              { id: 'healing-recovery-peptides', icon: ShieldCheck },
              { id: 'cognitive-nootropic', icon: Microscope },
              { id: 'anti-aging-longevity', icon: Star },
              { id: 'cosmetic-aesthetic', icon: Globe },
              { id: 'ancillaries', icon: FlaskConical },
            ].map((cat, idx) => (
              <Link 
                key={cat.id} 
                href={`/products#${cat.id}`} 
                className="group relative block h-full"
              >
                <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-500 hover:border-brand-accent/40 hover:-translate-y-2 hover:bg-[#0E0E0E] shadow-xl hover:shadow-brand-accent/5">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-brand-accent/10 transition-colors">
                      <cat.icon className="w-6 h-6 text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                    </div>
                    <h4 className="text-xl font-rajdhani font-bold text-white mb-4 tracking-wide group-hover:text-brand-accent transition-colors">
                      {pt(`categories.${cat.id}.name`)}
                    </h4>
                    <p className="text-brand-text/30 font-dm-sans text-xs leading-relaxed line-clamp-3">
                      {pt(`categories.${cat.id}.desc`)}
                    </p>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-2 text-[10px] font-bold text-brand-accent/40 group-hover:text-brand-accent uppercase tracking-widest transition-colors">
                    {t('Categories.exploreSeries')} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                
                <span className="absolute top-8 right-8 text-white/5 text-4xl font-dm-mono font-bold group-hover:text-brand-accent/5 transition-colors">
                  0{idx + 1}
                </span>
              </Link>
            ))}

            <Link href="/products" className="group relative block h-full">
              <div className="bg-brand-accent border border-brand-accent rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-[0.98] shadow-2xl shadow-brand-accent/20">
                <FlaskConical className="w-12 h-12 text-brand-bg mb-6 animate-pulse" />
                <h4 className="text-2xl font-rajdhani font-bold text-brand-bg uppercase tracking-widest mb-2">
                  {t('Categories.fullCatalog')}
                </h4>
                <p className="text-brand-bg/60 font-dm-sans text-xs mb-8">
                  {t('Categories.fullCatalogDesc')}
                </p>
                <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent group-hover:rotate-45 transition-transform duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 Top 9 Products Section */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('BestSellers.badge')}</span>
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight mb-6">
              {t('BestSellers.title').split('Wholesale')[0]} <br /><span className="text-brand-accent text-opacity-50">Wholesale {t('BestSellers.title').split('Wholesale')[1]}</span>
            </h2>
            <p className="text-brand-text/50 font-dm-sans text-lg max-w-2xl mx-auto">
              {t('BestSellers.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(t.raw('BestSellers.items') as any[]).map((p, i) => {
              const slugs = ['semaglutide', 'tirzepatide', 'retatrutide', 'bpc-157', 'tb-500', 'ipamorelin', 'cjc-1295-no-dac', 'nad', 'epithalon'];
              const cats = ['glp1-metabolic-peptides', 'glp1-metabolic-peptides', 'glp1-metabolic-peptides', 'healing-recovery-peptides', 'healing-recovery-peptides', 'growth-hormone', 'growth-hormone', 'anti-aging-longevity', 'anti-aging-longevity'];
              const slug = slugs[i];
              const cat = cats[i];
              
              return (
                <div key={slug} className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-2xl">
                  <div className="absolute top-6 right-8 text-brand-accent/5 font-dm-mono text-5xl font-bold group-hover:text-brand-accent/10 transition-colors">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <span className="text-brand-accent font-dm-mono text-[10px] uppercase tracking-widest px-3 py-1 bg-brand-accent/5 border border-brand-accent/10 rounded-full mb-4 inline-block">
                        {pt(`categories.${cat}.name`)}
                      </span>
                      <h3 className="text-3xl font-rajdhani font-bold text-white mb-3 tracking-tight group-hover:text-brand-accent transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-brand-text/40 font-dm-sans text-sm leading-relaxed mb-6">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">{t('BestSellers.specs')}</span>
                          <span className="text-white/60 font-dm-mono text-xs">{p.spec}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">{t('BestSellers.purity')}</span>
                          <span className="text-brand-accent font-dm-mono text-xs">≥99.0%</span>
                        </div>
                      </div>

                      <Link 
                        href={`/products/${cat}/${slug}`}
                        className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 group-hover:bg-brand-accent group-hover:text-brand-bg group-hover:border-brand-accent transition-all duration-300"
                      >
                        {t('BestSellers.viewSpecs')} <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-4 text-brand-accent font-bold text-sm uppercase tracking-[0.2em] group"
            >
              {t('BestSellers.browseAll', { count: productsData.length })}
              <div className="w-10 h-10 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Technical Quality Section */}
      <section className="py-32 bg-[#020202] border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <ShieldCheck className="w-16 h-16 text-brand-accent mb-8" />
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white mb-8 leading-tight">
              {t('Quality.title').split('Analytical')[0]} <br />
              <span className="text-brand-accent">Analytical {t('Quality.title').split('Analytical')[1]}</span>
            </h2>
            <p className="text-xl text-brand-text/50 font-dm-sans mb-12 leading-relaxed">
              {t('Quality.description')}
            </p>
            <Link href="/quality" className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest pb-2 border-b-2 border-white hover:border-brand-accent hover:text-brand-accent transition-all">
              {t('Quality.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {['bpc', 'sema', 'tirz'].map((item) => (
              <div key={item} className="flex items-center justify-between p-8 bg-[#080808] rounded-2xl border border-white/5 hover:bg-[#0A0A0A] transition-all group">
                <div>
                  <h5 className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-1">{t('Quality.batchReport')}</h5>
                  <span className="font-rajdhani font-bold text-xl text-white">
                    {t(`Quality.downloads.${item}` as any)}
                  </span>
                </div>
                <button className="bg-white/5 hover:bg-brand-accent hover:text-brand-bg transition-all p-4 rounded-xl group-hover:scale-110">
                  <Download className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Wholesale Tier Breakdown */}
      <section className="py-32 bg-[#020202] border-y border-white/5" id="wholesale-tiers">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('Tiers.badge')}</span>
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight mb-6">
              {t('Tiers.title').split('Every')[0]}<br /><span className="text-white/30">Every {t('Tiers.title').split('Every')[1]}</span>
            </h2>
            <p className="text-brand-text/50 font-dm-sans text-lg max-w-2xl mx-auto">
              {t('Tiers.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['starter', 'tier1', 'tier2', 'tier3'].map((tierKey, i) => {
              const tier = (t.raw('Tiers.items') as any)[tierKey];
              const isPremium = i >= 2;
              return (
                <div key={tierKey} className={`bg-[#0A0A0A] border ${isPremium ? 'border-brand-accent/40' : 'border-white/10'} rounded-3xl p-8 flex flex-col relative ${isPremium ? 'shadow-[0_0_30px_rgba(79,195,208,0.08)]' : ''}`}>
                  {isPremium && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-bg text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{t('Tiers.bestValue')}</span>}
                  <div className="mb-6">
                    <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-1">{tier.label}</div>
                    <div className="text-4xl font-rajdhani font-bold text-white">{tier.name}</div>
                    <div className="text-white/40 font-dm-mono text-sm mt-1">{tier.kits}</div>
                  </div>
                  <p className="text-brand-text/50 font-dm-sans text-sm leading-relaxed flex-grow">{tier.description}</p>
                  <a href={`https://wa.me/18437439007?text=${encodeURIComponent(`Hi, I'd like to learn about wholesale tier ${tier.name} pricing.`)}`} target="_blank" rel="noopener noreferrer" className="mt-8 w-full text-center py-3 rounded-xl border border-brand-accent/30 text-brand-accent text-sm font-bold uppercase tracking-widest hover:bg-brand-accent/10 transition-colors font-rajdhani">
                    {t('Tiers.getPricng')}
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-center text-white/20 font-dm-sans text-sm mt-10">{t('Tiers.onRequests')}</p>
        </div>
      </section>

      {/* 6. Industry Stats Bar */}
      <section className="py-20 bg-brand-bg border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5">
            {[
              { id: 'compounds', stat: '50+' },
              { id: 'purity', stat: '99%+' },
              { id: 'clients', stat: '200+' },
              { id: 'coverage', stat: '50 States' },
            ].map((s) => (
              <div key={s.id} className="px-8 py-6 text-center">
                <div className="text-4xl lg:text-5xl font-rajdhani font-bold text-brand-accent mb-2">{s.stat}</div>
                <div className="text-white font-bold text-sm uppercase tracking-widest mb-1">{t(`StatsBar.${s.id}.label`)}</div>
                <div className="text-white/30 font-dm-sans text-xs">{t(`StatsBar.${s.id}.sub`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Social Proof / Testimonials */}
      <section className="py-32 bg-[#020202]" id="testimonials">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('Testimonials.badge')}</span>
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight">
              {t('Testimonials.title').split('Across')[0]}<br /><span className="text-white/30">Across {t('Testimonials.title').split('Across')[1]}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t.raw('Testimonials.items') as any[]).map((test, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 flex flex-col hover:border-brand-accent/20 transition-colors">
                <div className="text-brand-accent text-4xl font-rajdhani mb-6">"</div>
                <p className="text-brand-text/60 font-dm-sans leading-relaxed flex-grow italic mb-8">"{test.quote}"</p>
                <div>
                  <div className="text-white font-bold font-rajdhani text-sm">{test.role}</div>
                  <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mt-1">{test.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. B2B Services Teaser */}
      <section className="py-32 bg-brand-bg border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('Services.badge')}</span>
              <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight mb-8">
                {t('Services.title').split('Not')[0]}<br /><span className="text-brand-accent">Not {t('Services.title').split('Not')[1]}</span>
              </h2>
              <p className="text-brand-text/50 font-dm-sans text-lg leading-relaxed mb-10">
                {t('Services.description')}
              </p>
              <Link href="/services" className="inline-flex items-center gap-3 bg-brand-accent text-brand-bg font-bold text-sm px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(79,195,208,0.3)] transition-all font-dm-sans uppercase tracking-widest">
                {t('Services.cta')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: BarChart3, key: 'dropshipping' },
                { icon: Globe, key: 'privateLabel' },
                { icon: Award, key: 'launch' },
                { icon: ShieldCheck, key: 'web' },
              ].map((s, i) => {
                const service = (t.raw('Services.items') as any)[s.key];
                return (
                  <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-brand-accent/30 transition-colors">
                    <s.icon className="w-8 h-8 text-brand-accent mb-4" />
                    <h4 className="text-white font-rajdhani font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-white/30 font-dm-sans text-xs leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Blog / Content Hub Teaser */}
      <section className="py-32 bg-[#020202]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('Blog.badge')}</span>
              <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight">
                {t('Blog.title').split('Industry')[0]}<br /><span className="text-white/30">Industry {t('Blog.title').split('Industry')[1]}</span>
              </h2>
            </div>
            <Link href="/blog" className="group flex items-center gap-4 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] pb-2 border-b border-brand-accent/20 hover:border-brand-accent transition-all duration-300">
              {t('Blog.cta')} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t.raw('Blog.items') as any[]).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-brand-accent/30 transition-all h-full flex flex-col">
                  <div className="text-brand-accent font-dm-mono text-[10px] uppercase tracking-widest mb-4 inline-block border border-brand-accent/20 px-3 py-1 rounded-full">{post.tag}</div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-4 group-hover:text-brand-accent transition-colors leading-snug">{post.title}</h3>
                  <p className="text-white/30 font-dm-sans text-sm leading-relaxed flex-grow">{post.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-brand-accent/60 group-hover:text-brand-accent text-xs font-bold uppercase tracking-widest transition-colors">
                    {t('Blog.readMore')} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Homepage FAQ */}
      <section className="py-32 bg-brand-bg border-t border-white/5" id="faq">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t('FAQ.badge')}</span>
            <h2 className="text-5xl font-rajdhani font-bold text-white">{t('FAQ.title')}</h2>
            <p className="text-brand-text/40 font-dm-sans mt-4">{t('FAQ.subtitle')}</p>
          </div>
          <div className="space-y-4">
            {(t.raw('FAQ.items') as any[]).map((faq, i) => (
              <details key={i} className="group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-colors">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none gap-4">
                  <h3 className="text-white font-rajdhani font-bold text-lg group-open:text-brand-accent transition-colors">{faq.q}</h3>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-open:text-brand-accent group-open:border-brand-accent/40 flex-shrink-0 transition-colors">
                    <span className="text-xl leading-none group-open:hidden">+</span>
                    <span className="text-xl leading-none hidden group-open:block">−</span>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <p className="text-brand-text/50 font-dm-sans leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-6 block">{t('FinalCta.badge')}</span>
            <h2 className="text-5xl md:text-7xl font-rajdhani font-bold text-white mb-8 leading-tight">
              {t('FinalCta.title').split('Peptide')[0]}<br />
              <span className="text-brand-accent">Peptide {t('FinalCta.title').split('Peptide')[1]}</span>
            </h2>
            <p className="text-xl text-brand-text/50 font-dm-sans mb-12 max-w-2xl mx-auto">
              {t('FinalCta.subtitle')}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href={`https://wa.me/18437439007?text=${encodeURIComponent(t('FinalCta.msg'))}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-brand-accent text-brand-bg font-bold text-sm px-12 py-6 rounded-full transition-all hover:shadow-[0_0_50px_rgba(79,195,208,0.4)] hover:-translate-y-1 font-dm-sans uppercase tracking-widest">
                <Zap className="w-5 h-5 fill-current" />
                {t('FinalCta.whatsapp')}
              </a>
              <a href="mailto:sales@99puritypeptides.com" className="flex items-center gap-4 text-white font-bold text-sm px-8 py-6 transition-all hover:text-brand-accent font-dm-sans uppercase tracking-widest">
                <Mail className="w-5 h-5" />
                {t('FinalCta.email')}
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/20 font-dm-sans text-xs uppercase tracking-widest">
              <span>🇺🇸 {t('Hero.badges.usMade')}</span>
              <span>{t('Hero.badges.purity')}</span>
              <span>{t('Hero.badges.tested')}</span>
              <span>{t('Hero.badges.b2b')}</span>
              <span>{t('Hero.badges.states')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
