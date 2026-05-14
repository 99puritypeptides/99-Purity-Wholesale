import {getTranslations, getLocale} from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ShieldCheck, Truck, FlaskConical, Building2, Download, CheckCircle2, Star, BarChart3, Zap, Mail, ArrowRight, Microscope, Globe, Award, ArrowUpRight } from 'lucide-react';
import productsData from '@/data/products.json';

export default async function HomePage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Index' });
  const locale = await getLocale();

  return (
    <div className="bg-[#050505] p-2 md:p-4 selection:bg-brand-accent/30 overflow-x-hidden">
      {/* 1. Immersive Hero Section - Viewport Height Locked Entry */}
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
              America's <span className="text-brand-accent">Trusted</span> Wholesale Peptide Supplier
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-brand-text/50 mb-8 font-dm-sans max-w-2xl leading-relaxed">
              {t('Hero.subtitle')}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-white/10"></div>
              <div className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">Authorized Research Supplier</div>
            </div>
          </div>
        </div>

        {/* Bottom Left "Tab" Button - Scaled down for height safety */}
        <div className="absolute bottom-0 left-0 z-20 scale-75 md:scale-90 lg:scale-100 origin-bottom-left will-change-transform">
          <Link 
            href="/products" 
            className="group flex items-center gap-8 bg-[#4FC3D0] text-[#090C11] pl-10 pr-6 py-6 md:py-8 rounded-tr-[3.5rem] font-bold text-lg uppercase tracking-tighter transition-[padding,background-color,transform] duration-300 ease-out hover:pl-14"
          >
            <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[10px] tracking-[0.3em] opacity-60 mb-1">Explore Full</span>
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
            <div className="text-white font-bold text-xs">200+ Institutions</div>
            <div className="text-white/40 text-[9px] uppercase tracking-widest">Verified Partners</div>
          </div>
        </div>
      </section>

      {/* 2. Bento Grid Differentiators */}
      <section className="py-32 px-6 lg:px-12 bg-[#020202]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[280px]">
            {/* Main Feature */}
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

            {/* COA Card */}
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

            {/* Global Reach */}
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

            {/* Support */}
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

            {/* Shipping */}
            <div className="md:col-span-12 lg:col-span-6 bg-[#080808] border border-white/5 rounded-[2rem] p-10 flex items-center gap-8 hover:border-brand-accent/30 transition-colors">
              <div className="bg-brand-accent/10 p-6 rounded-2xl">
                <Truck className="w-10 h-10 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                  {t('Hero.badges.shipping')}
                </h3>
                <p className="text-brand-text/40 font-dm-sans text-sm max-w-md">
                  Fast, discrete global logistics for pharmaceutical-grade peptides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Category Showcase */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Wholesale Catalog</span>
              <h2 className="text-5xl lg:text-7xl font-rajdhani font-bold text-white leading-[0.9] tracking-tight">
                Precision Research <br />
                <span className="text-white/20">Library</span>
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
                      {/* Using the mapping logic to get names from ProductsIndex if possible, or fallback */}
                      {cat.id === 'glp1-metabolic-peptides' ? 'GLP-1 / Metabolic' :
                       cat.id === 'growth-hormone' ? 'Growth Hormone' :
                       cat.id === 'healing-recovery-peptides' ? 'Healing & Recovery' :
                       cat.id === 'cognitive-nootropic' ? 'Cognitive / Nootropic' :
                       cat.id === 'anti-aging-longevity' ? 'Anti-Aging & Longevity' :
                       cat.id === 'cosmetic-aesthetic' ? 'Cosmetic & Aesthetic' : 'Ancillaries'}
                    </h4>
                    <p className="text-brand-text/30 font-dm-sans text-xs leading-relaxed line-clamp-3">
                      {cat.id === 'glp1-metabolic-peptides' ? 'Advanced metabolic research peptides including Semaglutide, Tirzepatide, and Retatrutide.' :
                       cat.id === 'growth-hormone' ? 'GHRP and GHRH peptides for research applications.' :
                       cat.id === 'healing-recovery-peptides' ? 'Tissue repair and recovery compounds including BPC-157 and TB-500.' :
                       cat.id === 'cognitive-nootropic' ? 'Neurological research compounds and cognitive enhancers.' :
                       cat.id === 'anti-aging-longevity' ? 'Cellular senescence and longevity research peptides.' :
                       cat.id === 'cosmetic-aesthetic' ? 'Dermatological and cosmetic research compounds.' : 'Reconstitution solutions, supplies, and research ancillaries.'}
                    </p>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-2 text-[10px] font-bold text-brand-accent/40 group-hover:text-brand-accent uppercase tracking-widest transition-colors">
                    Explore Series <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                
                {/* Background Number */}
                <span className="absolute top-8 right-8 text-white/5 text-4xl font-dm-mono font-bold group-hover:text-brand-accent/5 transition-colors">
                  0{idx + 1}
                </span>
              </Link>
            ))}

            {/* View Full Catalog Card */}
            <Link href="/products" className="group relative block h-full">
              <div className="bg-brand-accent border border-brand-accent rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-[0.98] shadow-2xl shadow-brand-accent/20">
                <FlaskConical className="w-12 h-12 text-brand-bg mb-6 animate-pulse" />
                <h4 className="text-2xl font-rajdhani font-bold text-brand-bg uppercase tracking-widest mb-2">
                  Full Catalog
                </h4>
                <p className="text-brand-bg/60 font-dm-sans text-xs mb-8">
                  Browse our complete inventory of 99%+ purity compounds.
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
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Bestselling Compounds</span>
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight mb-6">
              High-Volume <br /><span className="text-brand-accent text-opacity-50">Wholesale Favorites</span>
            </h2>
            <p className="text-brand-text/50 font-dm-sans text-lg max-w-2xl mx-auto">
              Our most frequently requested research compounds, manufactured to ≥99% purity and trusted by 200+ institutions nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: 'Semaglutide', slug: 'semaglutide', cat: 'glp1-metabolic-peptides', spec: '5mg / 10mg', desc: 'The industry-standard GLP-1 receptor agonist for metabolic research.' },
              { name: 'Tirzepatide', slug: 'tirzepatide', cat: 'glp1-metabolic-peptides', spec: '5mg / 10mg / 15mg', desc: 'Dual GLP-1 and GIP receptor agonist with exceptional research utility.' },
              { name: 'Retatrutide', slug: 'retatrutide', cat: 'glp1-metabolic-peptides', spec: '5mg / 10mg', desc: 'Next-generation triple agonist (GLP-1/GIP/Glucagon) for advanced study.' },
              { name: 'BPC-157', slug: 'bpc-157', cat: 'healing-recovery-peptides', spec: '5mg / 10mg', desc: 'Highly stable gastric pentadecapeptide studied for tissue repair and healing.' },
              { name: 'TB-500', slug: 'tb-500', cat: 'healing-recovery-peptides', spec: '5mg / 10mg', desc: 'Synthetic version of Thymosin Beta-4 studied for angiogenesis and recovery.' },
              { name: 'Ipamorelin', slug: 'ipamorelin', cat: 'growth-hormone', spec: '2mg / 5mg', desc: 'Selective GHRP known for its stability and research-proven efficacy.' },
              { name: 'CJC-1295 (no DAC)', slug: 'cjc-1295-no-dac', cat: 'growth-hormone', spec: '5mg / 10mg', desc: 'Modified GHRH analog frequently paired with Ipamorelin in GH-axis research.' },
              { name: 'NAD+', slug: 'nad', cat: 'anti-aging-longevity', spec: '100mg / 500mg', desc: 'Essential coenzyme for mitochondrial health and longevity research models.' },
              { name: 'Epithalon', slug: 'epithalon', cat: 'anti-aging-longevity', spec: '10mg', desc: 'Tetrapeptide studied for its role in telomerase activation and pineal research.' },
            ].map((p, i) => (
              <div key={p.slug} className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-2xl">
                <div className="absolute top-6 right-8 text-brand-accent/5 font-dm-mono text-5xl font-bold group-hover:text-brand-accent/10 transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <span className="text-brand-accent font-dm-mono text-[10px] uppercase tracking-widest px-3 py-1 bg-brand-accent/5 border border-brand-accent/10 rounded-full mb-4 inline-block">
                      {p.cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
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
                        <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Available Specs</span>
                        <span className="text-white/60 font-dm-mono text-xs">{p.spec}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Purity</span>
                        <span className="text-brand-accent font-dm-mono text-xs">≥99.0%</span>
                      </div>
                    </div>

                    <Link 
                      href={`/products/${p.cat}/${p.slug}`}
                      className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 group-hover:bg-brand-accent group-hover:text-brand-bg group-hover:border-brand-accent transition-all duration-300"
                    >
                      View Full Specs <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-4 text-brand-accent font-bold text-sm uppercase tracking-[0.2em] group"
            >
              Browse Complete Inventory ({productsData.length}+ Compounds)
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
              Uncompromising <br />
              <span className="text-brand-accent">Analytical Quality</span>
            </h2>
            <p className="text-xl text-brand-text/50 font-dm-sans mb-12 leading-relaxed">
              Every batch undergoes rigorous HPLC and MS analysis to ensure purity levels exceeding 99%. Our B2B clients receive full documentation with every shipment.
            </p>
            <Link href="/quality" className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest pb-2 border-b-2 border-white hover:border-brand-accent hover:text-brand-accent transition-all">
              {t('Quality.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {['bpc', 'sema', 'tirz'].map((item) => (
              <div key={item} className="flex items-center justify-between p-8 bg-[#080808] rounded-2xl border border-white/5 hover:bg-[#0A0A0A] transition-all group">
                <div>
                  <h5 className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-1">Batch Report</h5>
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
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Volume-Based Pricing</span>
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight mb-6">
              Wholesale Pricing Tiers<br /><span className="text-white/30">Built for Every Scale</span>
            </h2>
            <p className="text-brand-text/50 font-dm-sans text-lg max-w-2xl mx-auto">
              Our tiered wholesale program rewards volume. From emerging clinics to high-volume compounding pharmacies — there's a tier designed for your operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tier: 'Start', kits: '1–9 Kits', label: 'Entry Level', desc: 'Ideal for new wellness clinics and distributors testing the market. Low MOQ, full COA documentation, and immediate access to our full catalog.', color: 'border-white/10' },
              { tier: 'Tier 1', kits: '10–19 Kits', label: 'Growth', desc: 'For growing clinics with consistent monthly reorder. Improved per-unit pricing and priority fulfillment status with your dedicated account contact.', color: 'border-white/10' },
              { tier: 'Tier 2', kits: '20–39 Kits', label: 'Established', desc: 'Multi-location operations and established distributors. Significant volume discount, dedicated account manager, and expedited processing.', color: 'border-brand-accent/40' },
              { tier: 'Tier 3', kits: '40+ Kits', label: 'Enterprise', desc: 'Maximum margins for high-volume compounding pharmacies and regional distributors. Custom terms, white-label options, and flexible payment arrangements.', color: 'border-brand-accent/40' },
            ].map((t, i) => (
              <div key={t.tier} className={`bg-[#0A0A0A] border ${t.color} rounded-3xl p-8 flex flex-col relative ${i >= 2 ? 'shadow-[0_0_30px_rgba(79,195,208,0.08)]' : ''}`}>
                {i >= 2 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-bg text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Best Value</span>}
                <div className="mb-6">
                  <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-1">{t.label}</div>
                  <div className="text-4xl font-rajdhani font-bold text-white">{t.tier}</div>
                  <div className="text-white/40 font-dm-mono text-sm mt-1">{t.kits}</div>
                </div>
                <p className="text-brand-text/50 font-dm-sans text-sm leading-relaxed flex-grow">{t.desc}</p>
                <a href="https://wa.me/18437439007?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20wholesale%20tier%20pricing." target="_blank" rel="noopener noreferrer" className="mt-8 w-full text-center py-3 rounded-xl border border-brand-accent/30 text-brand-accent text-sm font-bold uppercase tracking-widest hover:bg-brand-accent/10 transition-colors font-rajdhani">
                  Get Pricing
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-white/20 font-dm-sans text-sm mt-10">Pricing available on request. Contact our team via WhatsApp for a custom quote based on your volume and product mix.</p>
        </div>
      </section>

      {/* 6. Industry Stats Bar */}
      <section className="py-20 bg-brand-bg border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5">
            {[
              { stat: '50+', label: 'Research Compounds', sub: 'In Active Catalog' },
              { stat: '99%+', label: 'Purity Guaranteed', sub: 'Third-Party Verified' },
              { stat: '200+', label: 'B2B Clients', sub: 'Clinics · Pharmacies · Labs' },
              { stat: '50 States', label: 'U.S. Coverage', sub: 'Domestic Shipping Only' },
            ].map((s) => (
              <div key={s.stat} className="px-8 py-6 text-center">
                <div className="text-4xl lg:text-5xl font-rajdhani font-bold text-brand-accent mb-2">{s.stat}</div>
                <div className="text-white font-bold text-sm uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-white/30 font-dm-sans text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Social Proof / Testimonials */}
      <section className="py-32 bg-[#020202]" id="testimonials">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Client Feedback</span>
            <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight">
              Trusted by Professionals<br /><span className="text-white/30">Across the United States</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "We've been sourcing research-grade peptides for our compounding facility for two years. The COA documentation and purity consistency from 99 Purity Wholesale is simply unmatched by any domestic supplier we've tested.", role: 'Compounding Pharmacy Director', location: 'Texas' },
              { quote: "Switching to 99 Purity Wholesale for our wholesale supply was a game changer. Tiered pricing made it easy to scale as our clinic network grew. Our account manager is responsive and the fulfillment is fast.", role: 'Wellness Clinic Network Owner', location: 'Florida' },
              { quote: "As a distributor serving medical spas across the Southwest, consistent purity and reliable batch COAs are non-negotiable. 99 Purity Wholesale delivers both, every single time.", role: 'Regional B2B Distributor', location: 'Arizona' },
            ].map((t, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 flex flex-col hover:border-brand-accent/20 transition-colors">
                <div className="text-brand-accent text-4xl font-rajdhani mb-6">"</div>
                <p className="text-brand-text/60 font-dm-sans leading-relaxed flex-grow italic mb-8">"{t.quote}"</p>
                <div>
                  <div className="text-white font-bold font-rajdhani text-sm">{t.role}</div>
                  <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mt-1">{t.location}</div>
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
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Partner Services</span>
              <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight mb-8">
                We Build Peptide<br /><span className="text-brand-accent">Businesses, Not Just Orders</span>
              </h2>
              <p className="text-brand-text/50 font-dm-sans text-lg leading-relaxed mb-10">
                Beyond wholesale supply, 99 Purity Wholesale offers a full suite of B2B services for clinics, distributors, and entrepreneurs entering the peptide market. From dropshipping and private label to website development and business launch consulting.
              </p>
              <Link href="/services" className="inline-flex items-center gap-3 bg-brand-accent text-brand-bg font-bold text-sm px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(79,195,208,0.3)] transition-all font-dm-sans uppercase tracking-widest">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: BarChart3, title: 'Dropshipping Program', desc: 'Sell without holding inventory. We fulfill under your brand.' },
                { icon: Globe, title: 'Private Label', desc: 'Your brand on our ≥99% purity products. MOQ-based.' },
                { icon: Award, title: 'Business Launch', desc: 'Start your peptide brand with expert guidance.' },
                { icon: ShieldCheck, title: 'Website Development', desc: 'Compliant, high-converting peptide retail sites.' },
              ].map((s, i) => (
                <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-brand-accent/30 transition-colors">
                  <s.icon className="w-8 h-8 text-brand-accent mb-4" />
                  <h4 className="text-white font-rajdhani font-bold text-lg mb-2">{s.title}</h4>
                  <p className="text-white/30 font-dm-sans text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Blog / Content Hub Teaser */}
      <section className="py-32 bg-[#020202]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Industry Knowledge</span>
              <h2 className="text-5xl lg:text-6xl font-rajdhani font-bold text-white leading-tight">
                Wholesale Peptide<br /><span className="text-white/30">Industry Insights</span>
              </h2>
            </div>
            <Link href="/blog" className="group flex items-center gap-4 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] pb-2 border-b border-brand-accent/20 hover:border-brand-accent transition-all duration-300">
              View All Articles <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: 'how-to-start-peptide-product-line', title: 'How to Start a Peptide Product Line for Your Wellness Clinic', desc: 'A step-by-step guide for clinic owners integrating research-grade peptides into their B2B offerings.', tag: 'Business Guide' },
              { slug: 'us-manufactured-vs-imported-peptides', title: 'U.S.-Manufactured vs. Imported Peptides: What Your Business Needs to Know', desc: 'Why domestic sourcing matters for quality assurance, COA reliability, and regulatory positioning.', tag: 'Quality & Trust' },
              { slug: 'understanding-wholesale-peptide-pricing-tiers', title: 'Understanding Wholesale Peptide Pricing Tiers', desc: 'A breakdown of tiered pricing models and how to maximize margins as your volume scales.', tag: 'Wholesale Pricing' },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-brand-accent/30 transition-all h-full flex flex-col">
                  <div className="text-brand-accent font-dm-mono text-[10px] uppercase tracking-widest mb-4 inline-block border border-brand-accent/20 px-3 py-1 rounded-full">{post.tag}</div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-4 group-hover:text-brand-accent transition-colors leading-snug">{post.title}</h3>
                  <p className="text-white/30 font-dm-sans text-sm leading-relaxed flex-grow">{post.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-brand-accent/60 group-hover:text-brand-accent text-xs font-bold uppercase tracking-widest transition-colors">
                    Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Common Questions</span>
            <h2 className="text-5xl font-rajdhani font-bold text-white">Wholesale Peptide FAQ</h2>
            <p className="text-brand-text/40 font-dm-sans mt-4">Everything licensed professionals need to know about sourcing bulk peptides from 99 Purity Wholesale.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What makes 99 Purity Wholesale different from other wholesale peptide suppliers?', a: 'We are a U.S.-based manufacturer — not an importer or repackager. Every batch is synthesized domestically and independently tested by accredited U.S. third-party laboratories. Every product ships with a batch-matched Certificate of Analysis (COA) confirming ≥99% purity via HPLC and Mass Spectrometry.' },
              { q: 'Who qualifies to purchase wholesale peptides from 99 Purity Wholesale?', a: 'Our products are sold strictly to licensed professionals and qualified research institutions — including compounding pharmacies, wellness clinics, medical spas, licensed distributors, and academic research facilities. All purchases require buyer attestation of professional status.' },
              { q: 'What is the minimum order quantity (MOQ) for wholesale peptides?', a: 'Our minimum order is 10 units (1 kit) per product specification. Volume discounts activate at 10, 20, and 40+ kits through our tiered pricing program. Contact our team for current pricing.' },
              { q: 'Do you offer bulk peptides for compounding pharmacies?', a: 'Yes. Compounding pharmacies are one of our primary B2B client segments. We supply bulk research-grade peptides including GLP-1 compounds, growth hormone secretagogues, and healing peptides with full COA documentation suitable for pharmacy procurement records.' },
              { q: 'What payment methods do you accept for wholesale orders?', a: 'We accept Bitcoin, Zelle, and bank transfer (ACH/Wire). These methods are available to all verified wholesale accounts. Contact our team for payment instructions after your account is approved.' },
              { q: 'Can I get a COA before placing a wholesale order?', a: 'Yes. Certificates of Analysis for current batches are available upon request before purchase. Our Quality Hub also maintains a downloadable COA library for your reference.' },
              { q: 'Do you offer private label or white label peptide services?', a: 'Yes. We offer private label packaging for qualifying volume accounts. Your brand, your label, our ≥99% purity laboratory quality. Inquire via WhatsApp to discuss minimum volumes and customization options.' },
              { q: 'How fast does wholesale peptide shipping take within the USA?', a: 'Domestic orders typically ship within 1–2 business days after payment confirmation. Delivery to most U.S. states is 2–4 business days via priority shipping. No international customs delays — 100% U.S. domestic fulfillment.' },
            ].map((faq, i) => (
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
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-[0.3em] mb-6 block">Ready to Order?</span>
            <h2 className="text-5xl md:text-7xl font-rajdhani font-bold text-white mb-8 leading-tight">
              Request Wholesale<br />
              <span className="text-brand-accent">Peptide Pricing Today</span>
            </h2>
            <p className="text-xl text-brand-text/50 font-dm-sans mb-12 max-w-2xl mx-auto">
              Join 200+ compounding pharmacies, wellness clinics, and licensed distributors sourcing research-grade bulk peptides from America's most trusted wholesale supplier.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="https://wa.me/18437439007?text=Hi%2C%20I%27d%20like%20to%20request%20wholesale%20peptide%20pricing." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-brand-accent text-brand-bg font-bold text-sm px-12 py-6 rounded-full transition-all hover:shadow-[0_0_50px_rgba(79,195,208,0.4)] hover:-translate-y-1 font-dm-sans uppercase tracking-widest">
                <Zap className="w-5 h-5 fill-current" />
                Request Pricing on WhatsApp
              </a>
              <a href="mailto:sales@99puritypeptides.com" className="flex items-center gap-4 text-white font-bold text-sm px-8 py-6 transition-all hover:text-brand-accent font-dm-sans uppercase tracking-widest">
                <Mail className="w-5 h-5" />
                Email Wholesale Inquiry
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/20 font-dm-sans text-xs uppercase tracking-widest">
              <span>🇺🇸 U.S. Manufactured</span>
              <span>≥99% Purity</span>
              <span>Batch COA on Every Order</span>
              <span>B2B Only</span>
              <span>Ships All 50 States</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
