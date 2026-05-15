import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Search, Book, ArrowRight, Microscope, FlaskConical, ShieldCheck, Zap } from 'lucide-react';

export default async function GlossaryPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Glossary' });
  const terms = await t.raw('Terms');
  const termKeys = Object.keys(terms);

  return (
    <div className="bg-[#050505] min-h-screen p-2 md:p-4 selection:bg-brand-accent/30 overflow-x-hidden">
      {/* 1. Technical Hero Section */}
      <section className="relative min-h-[50vh] bg-[#090C11] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden flex items-center border border-white/5 shadow-2xl mb-4 md:mb-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[9px] uppercase tracking-[0.3em] font-bold mb-6 backdrop-blur-md">
              <Book className="w-3 h-3 text-brand-accent" />
              {t('Hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani font-bold mb-8 tracking-tighter text-white leading-[0.9]">
              {t('Hero.title').split('&')[0]} <br />
              <span className="text-brand-accent">& {t('Hero.title').split('&')[1]}</span>
            </h1>
            <p className="text-lg text-brand-text/50 font-dm-sans max-w-2xl leading-relaxed">
              {t('Hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Dictionary Search & Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Alphabetical Index (Simple) */}
          <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-white/5">
            {['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map(letter => (
              <button 
                key={letter}
                className="w-10 h-10 rounded-lg border border-white/5 text-white/40 font-dm-mono text-sm hover:border-brand-accent/40 hover:text-brand-accent transition-all"
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {termKeys.map((key) => {
              const term = terms[key];
              return (
                <div 
                  key={key} 
                  id={key}
                  className="group bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 hover:border-brand-accent/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-rajdhani font-bold text-white tracking-tight group-hover:text-brand-accent transition-colors">
                      {term.title}
                    </h2>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent/20 group-hover:text-brand-accent/40 transition-colors">
                      <Microscope className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-brand-text/50 font-dm-sans text-base leading-relaxed mb-8">
                    {term.definition}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-grow bg-white/5"></div>
                    <Link href="/products" className="text-[10px] font-bold text-brand-accent/40 hover:text-brand-accent uppercase tracking-[0.2em] transition-colors flex items-center gap-2">
                      {t('relatedProducts')} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Education / Values Teaser */}
      <section className="py-32 bg-[#020202] border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(t.raw('ValueBoxes') as {icon: any, title: string, desc: string}[]).map((box, i) => {
              const Icon = [ShieldCheck, FlaskConical, Zap][i];
              return (
                <div key={i} className="bg-[#080808] border border-white/5 rounded-[2rem] p-10">
                  <Icon className="w-10 h-10 text-brand-accent mb-6" />
                  <h3 className="text-2xl font-rajdhani font-bold text-white mb-4">{box.title}</h3>
                  <p className="text-brand-text/40 font-dm-sans text-sm leading-relaxed">{box.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Final CTA Banner */}
      <section className="py-24 bg-[#090C11] rounded-[2rem] md:rounded-[3.5rem] border border-white/5 mt-4 md:mt-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent/5 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-rajdhani font-bold text-white mb-8 tracking-tighter">
            {t('Cta.title')}
          </h2>
          <p className="text-brand-text/50 font-dm-sans mb-12 max-w-xl mx-auto">
            {t('Cta.subtitle')}
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-4 bg-brand-accent text-brand-bg font-bold text-sm px-10 py-5 rounded-full hover:shadow-[0_0_40px_rgba(79,195,208,0.3)] transition-all font-dm-sans uppercase tracking-widest"
          >
            {t('Cta.button')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
