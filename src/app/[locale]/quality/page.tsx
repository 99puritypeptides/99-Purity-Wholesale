'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ShieldCheck, FileText, Check, X, Search, Beaker, FlaskConical, TestTube, ArrowRight } from 'lucide-react';
import productsData from '@/data/products.json';

export default function QualityPage() {
  const t = useTranslations('QualityPage');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const comparisonRows = [
    { 
      id: 'purity', 
      crit: t('comparison.rows.purity.crit'), 
      ours: t('comparison.rows.purity.ours'), 
      theirs: t('comparison.rows.purity.theirs') 
    },
    { 
      id: 'testing', 
      crit: t('comparison.rows.testing.crit'), 
      ours: t('comparison.rows.testing.ours'), 
      theirs: t('comparison.rows.testing.theirs') 
    },
    { 
      id: 'coa', 
      crit: t('comparison.rows.coa.crit'), 
      ours: t('comparison.rows.coa.ours'), 
      theirs: t('comparison.rows.coa.theirs') 
    },
    { 
      id: 'support', 
      crit: t('comparison.rows.support.crit'), 
      ours: t('comparison.rows.support.ours'), 
      theirs: t('comparison.rows.support.theirs') 
    },
    { 
      id: 'shipping', 
      crit: t('comparison.rows.shipping.crit'), 
      ours: t('comparison.rows.shipping.ours'), 
      theirs: t('comparison.rows.shipping.theirs') 
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

      {/* 3-Step Testing Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-4">{t('pipeline.title')}</h2>
            <p className="text-gray-400 font-dm-sans max-w-2xl mx-auto">{t('pipeline.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-accent/0 via-brand-accent/50 to-brand-accent/0"></div>
            
            <div className="bg-[#0e131b] border border-white/5 rounded-xl p-8 relative z-10 hover:border-brand-accent/30 transition-colors text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-black rounded-full border border-brand-accent/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(79,195,208,0.2)]">
                <FlaskConical className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">{t('pipeline.step1.title')}</h3>
              <p className="text-gray-400 font-dm-sans">
                {t('pipeline.step1.desc')}
              </p>
            </div>

            <div className="bg-[#0e131b] border border-brand-accent/40 rounded-xl p-8 relative z-10 shadow-[0_0_30px_rgba(79,195,208,0.1)] text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-accent/10 rounded-full border border-brand-accent flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(79,195,208,0.4)]">
                <TestTube className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">{t('pipeline.step2.title')}</h3>
              <p className="text-gray-400 font-dm-sans">
                {t('pipeline.step2.desc')}
              </p>
            </div>

            <div className="bg-[#0e131b] border border-white/5 rounded-xl p-8 relative z-10 hover:border-brand-accent/30 transition-colors text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-black rounded-full border border-brand-accent/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(79,195,208,0.2)]">
                <FileText className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-3">{t('pipeline.step3.title')}</h3>
              <p className="text-gray-400 font-dm-sans">
                {t('pipeline.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="py-20 bg-[#0B0F15] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-4">{t('comparison.title')}</h2>
            <p className="text-gray-400 font-dm-sans">{t('comparison.subtitle')}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-white/10 text-gray-500 font-dm-mono uppercase tracking-wider text-sm w-1/3">{t('comparison.headers.criteria')}</th>
                  <th className="p-4 border-b-2 border-brand-accent text-brand-accent font-rajdhani font-bold text-xl w-1/3 bg-brand-accent/5 rounded-t-lg">{t('comparison.headers.ours')}</th>
                  <th className="p-4 border-b-2 border-white/10 text-gray-400 font-rajdhani font-bold text-xl w-1/3">{t('comparison.headers.theirs')}</th>
                </tr>
              </thead>
              <tbody className="font-dm-sans">
                {comparisonRows.map((row, i) => (
                  <tr key={row.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-gray-300 font-bold">{row.crit}</td>
                    <td className="p-4 bg-brand-accent/5 text-white flex items-center gap-2">
                      <Check className="w-5 h-5 text-brand-accent flex-shrink-0" /> {row.ours}
                    </td>
                    <td className="p-4 text-gray-500 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 opacity-70" /> {row.theirs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COA Library (Filterable) */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-2">{t('library.title')}</h2>
              <p className="text-gray-400 font-dm-sans">{t('library.subtitle')}</p>
            </div>
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="w-full bg-[#0e131b] border border-white/10 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-dm-sans"
                placeholder={t('library.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-[#0e131b] border border-white/5 rounded-xl overflow-hidden">
            <div className="max-h-[600px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-[#161d27] shadow-md z-10">
                  <tr>
                    <th className="p-4 text-gray-500 font-dm-mono uppercase tracking-wider text-xs">{t('library.headers.name')}</th>
                    <th className="p-4 text-gray-500 font-dm-mono uppercase tracking-wider text-xs hidden md:table-cell">{t('library.headers.category')}</th>
                    <th className="p-4 text-gray-500 font-dm-mono uppercase tracking-wider text-xs hidden sm:table-cell">{t('library.headers.batch')}</th>
                    <th className="p-4 text-right text-gray-500 font-dm-mono uppercase tracking-wider text-xs">{t('library.headers.action')}</th>
                  </tr>
                </thead>
                <tbody className="font-dm-sans divide-y divide-white/5">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white">{product.name}</div>
                          {product.cas !== 'N/A' && <div className="text-xs text-gray-500 font-dm-mono mt-1">CAS: {product.cas}</div>}
                        </td>
                        <td className="p-4 hidden md:table-cell text-gray-400 capitalize">
                          {product.category.replace(/-/g, ' ')}
                        </td>
                        <td className="p-4 hidden sm:table-cell">
                          <span className="bg-brand-accent/10 text-brand-accent border border-brand-accent/20 px-2 py-1 rounded text-xs font-dm-mono uppercase tracking-wider">
                            {t('library.verified')}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <a href="/placeholder-coa.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border border-gray-600 hover:border-brand-accent hover:text-brand-accent text-gray-300 px-4 py-2 rounded font-dm-mono text-sm transition-colors">
                            <FileText className="w-4 h-4" /> <span className="hidden sm:inline">{t('library.download')}</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-gray-500 font-dm-sans">
                        {t('library.empty', { searchTerm })}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Credentials Section */}
      <section className="py-24 bg-[#0B0F15] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 text-brand-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-white mb-6">{t('trust.title')}</h2>
          <p className="text-xl text-gray-400 font-dm-sans max-w-3xl mx-auto mb-12">
            {t('trust.desc')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#0e131b] border border-white/5 px-8 py-4 rounded-lg flex items-center gap-3">
              <Beaker className="w-6 h-6 text-brand-accent" />
              <span className="font-rajdhani font-bold text-white text-lg tracking-wide uppercase">{t('trust.badges.us')}</span>
            </div>
            <div className="bg-[#0e131b] border border-white/5 px-8 py-4 rounded-lg flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
              <span className="font-rajdhani font-bold text-white text-lg tracking-wide uppercase">{t('trust.badges.cgmp')}</span>
            </div>
            <div className="bg-[#0e131b] border border-white/5 px-8 py-4 rounded-lg flex items-center gap-3">
              <Check className="w-6 h-6 text-brand-accent" />
              <span className="font-rajdhani font-bold text-white text-lg tracking-wide uppercase">{t('trust.badges.qa')}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
