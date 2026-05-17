'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, FlaskConical, Info } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  category: string;
  relatedProducts: string[];
}

interface Category {
  id: string;
  name: string;
}

interface GlossaryDirectoryProps {
  initialTerms: GlossaryTerm[];
  categories: Category[];
}

export default function GlossaryDirectory({ initialTerms, categories }: GlossaryDirectoryProps) {
  const t = useTranslations('Glossary');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = useMemo(() => {
    return initialTerms.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLetter = activeLetter ? item.term.startsWith(activeLetter) : true;
      
      const matchesCategory = activeCategory === 'all' || item.category.toLowerCase().replace(/ /g, '-') === activeCategory;

      return matchesSearch && matchesLetter && matchesCategory;
    });
  }, [initialTerms, searchQuery, activeLetter, activeCategory]);

  // Group by first letter for the list
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach(term => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(term);
    });
    return Object.keys(groups).sort().map(letter => ({
      letter,
      terms: groups[letter]
    }));
  }, [filteredTerms]);

  return (
    <div className="w-full pb-24">
      {/* Search and Alphabet Nav */}
      <div className="sticky top-[70px] md:top-[90px] z-30 bg-brand-bg/80 backdrop-blur-xl border-b border-white/10 py-6 mb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col gap-8">
            {/* Search */}
            <div className="relative group max-w-xl mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-accent transition-colors" />
              <input
                type="text"
                placeholder={t('Search.placeholder')}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-6 text-white focus:outline-none focus:border-brand-accent/50 transition-all font-dm-sans"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveLetter(null);
                }}
              />
            </div>

            {/* Alphabet Bar */}
            <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
              <button
                onClick={() => {setActiveLetter(null); setSearchQuery('');}}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-dm-mono text-xs transition-all border ${
                  !activeLetter && !searchQuery
                    ? 'bg-brand-accent text-brand-bg border-brand-accent font-bold'
                    : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {t('Search.all')}
              </button>
              {alphabet.map(letter => {
                const hasTerms = initialTerms.some(t => t.term.toUpperCase().startsWith(letter));
                return (
                  <button
                    key={letter}
                    disabled={!hasTerms}
                    onClick={() => {
                      setActiveLetter(letter === activeLetter ? null : letter);
                      setSearchQuery('');
                    }}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-dm-mono text-xs transition-all border ${
                      activeLetter === letter
                        ? 'bg-brand-accent text-brand-bg border-brand-accent font-bold'
                        : hasTerms
                        ? 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                        : 'bg-white/2 text-gray-800 border-white/5 cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 max-w-5xl">
        {groupedTerms.length > 0 ? (
          <div className="space-y-16">
            {groupedTerms.map(group => (
              <div key={group.letter} className="relative">
                <div className="sticky top-[240px] md:top-[260px] z-10 py-4 bg-brand-bg/50 backdrop-blur-sm mb-6 border-b border-white/5">
                  <h2 className="text-4xl font-rajdhani font-bold text-brand-accent/50">{group.letter}</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {group.terms.map(item => (
                    <div 
                      key={item.slug} 
                      id={item.slug}
                      className="group bg-[#0e131b] border border-white/5 rounded-2xl p-8 hover:border-brand-accent/20 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl font-rajdhani font-bold text-white group-hover:text-brand-accent transition-colors">
                              {item.term}
                            </h3>
                            <span className="text-[10px] font-dm-mono text-gray-500 uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded border border-white/5">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-gray-400 font-dm-sans leading-relaxed text-lg mb-6">
                            {item.definition}
                          </p>

                          {item.relatedProducts.length > 0 && (
                            <div className="pt-6 border-t border-white/5">
                              <h4 className="text-xs font-dm-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <FlaskConical className="w-3 h-3 text-brand-accent" />
                                {t('relatedTitle')}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.relatedProducts.map(prodSlug => (
                                  <Link 
                                    key={prodSlug}
                                    href={`/products?q=${prodSlug}`}
                                    className="bg-brand-accent/5 hover:bg-brand-accent/10 border border-brand-accent/10 hover:border-brand-accent/30 text-brand-accent text-xs font-dm-sans px-3 py-1.5 rounded-lg transition-all flex items-center gap-2"
                                  >
                                    {prodSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    <ChevronRight className="w-3 h-3" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="hidden md:block">
                          <div className="w-12 h-12 rounded-2xl bg-brand-accent/5 flex items-center justify-center border border-brand-accent/10 group-hover:border-brand-accent/30 transition-all">
                            <Info className="w-6 h-6 text-brand-accent/40 group-hover:text-brand-accent transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0B0F15] rounded-3xl border border-white/5">
            <Info className="w-16 h-16 text-gray-700 mx-auto mb-6 opacity-20" />
            <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">{t('Search.noResults')}</h3>
            <button 
              onClick={() => {setSearchQuery(''); setActiveLetter(null);}}
              className="mt-6 text-brand-accent font-dm-mono text-sm underline hover:text-white transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* SEO Content Footer */}
      <section className="container mx-auto px-4 max-w-4xl mt-24 pt-24 border-t border-white/5">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-rajdhani font-bold text-white mb-6">Why Technical Transparency Matters in Peptide Research</h2>
          <p className="text-gray-400 font-dm-sans leading-relaxed mb-6">
            In the rapidly evolving landscape of research-grade compounds, technical literacy is a prerequisite for safety and data integrity. Whether you are a lead investigator at an academic institution or a clinical director at a wellness facility, understanding the nuances between <strong>lyophilized powders</strong> and reconstituted solutions, or the specific analytical role of <strong>HPLC testing</strong>, is vital.
          </p>
          <p className="text-gray-400 font-dm-sans leading-relaxed mb-6">
            99 Purity Wholesale provides this glossary as part of our commitment to transparency. We believe that by empowering our B2B partners with clear, pharmacological definitions and quality standards, we contribute to a more professional and scientifically rigorous industry. Every <strong>COA</strong> we issue is backed by the standards defined here, ensuring that your institutional research is built on a foundation of verified excellence.
          </p>
          <div className="bg-[#0e131b] border border-brand-accent/20 rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-rajdhani font-bold text-white mb-4">Requesting Batch Documentation</h3>
            <p className="text-sm text-gray-400 font-dm-sans mb-6">
              If you require a specific Certificate of Analysis or detailed manufacturing specifications for any compound in our catalog, our U.S.-based support team is available to assist you.
            </p>
            <Link href="/contact" className="inline-flex items-center text-brand-accent font-bold uppercase tracking-widest text-xs hover:gap-2 transition-all">
              Contact Quality Assurance Team <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
