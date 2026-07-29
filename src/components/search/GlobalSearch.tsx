'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Command, ArrowRight, FlaskConical, Activity, TrendingUp, Box, Microscope, Sparkles, AlertCircle } from 'lucide-react';
import { Link, useRouter } from '@/i18n/routing';
import productsData from '@/data/products.json';
import { useTranslations } from 'next-intl';
import { getSearchEngine } from '@/lib/search';
import { useNestedSmoothScroll } from '@/hooks/useNestedSmoothScroll';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const t = useTranslations('Search');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchScrollRef = useNestedSmoothScroll<HTMLDivElement>({ enabled: isOpen });

  // Memoize search engine to avoid recreating on every render
  const searchEngine = useMemo(() => getSearchEngine(productsData), []);

  // Handle keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when opened with improved mobile handling
  useEffect(() => {
    if (isOpen) {
      // Small delay works better across various mobile browsers
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // For iOS specifically, sometimes we need to trigger it again
          inputRef.current.click();
        }
      }, 300);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  // Real-time search logic with Fuse.js
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchResults = searchEngine.search(query);
    const filtered = searchResults
      .map(result => result.item)
      .slice(0, 10); // Limit results for clean UI

    setResults(filtered);
  }, [query, searchEngine]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-12 md:pt-40 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Search Command Palette */}
      <div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/10 rounded-3xl md:rounded-[2.5rem] shadow-[0_50px_150px_rgba(0,0,0,0.9)] overflow-hidden animate-in fade-in zoom-in-95 duration-500 ease-out">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Search Input Area */}
        <div className="relative z-10 p-5 md:p-8 border-b border-white/5 flex items-center gap-4 md:gap-6 transition-all duration-500 focus-within:bg-white/[0.02] group/input">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-white/40 transition-all duration-500 group-focus-within/input:bg-white group-focus-within/input:text-black group-focus-within/input:scale-110 shadow-2xl">
            <Search className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <input
            ref={inputRef}
            type="text"
            inputMode="search"
            placeholder={t('placeholder')}
            className="flex-1 bg-transparent border-none text-white focus:ring-0 text-xl md:text-3xl font-absans font-bold placeholder:text-white/10 transition-all duration-500 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose} 
            className="p-2 md:p-3 hover:bg-white/5 rounded-xl md:rounded-2xl transition-all text-white/20 hover:text-white active:scale-90"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Animated Focus Line */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent w-0 group-focus-within/input:w-full transition-all duration-1000 ease-in-out" />
        </div>

        {/* Results / Suggestions Area */}
        <div ref={searchScrollRef} className="relative z-10 max-h-[55vh] overflow-y-auto no-scrollbar pb-6 px-4 md:px-6" data-lenis-prevent>
          {query.length > 0 ? (
            results.length > 0 ? (
              <div className="py-4 space-y-1">
                <div className="px-4 py-4 text-[10px] text-white/20 font-bold uppercase tracking-[0.4em] flex items-center justify-between">
                  <span>{t('found', { count: results.length })}</span>
                  <div className="h-px flex-1 mx-6 bg-white/5" />
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {results.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/`}
                      onClick={onClose}
                      className="flex items-center justify-between p-4 rounded-[1.5rem] hover:bg-white/5 group transition-all"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                          <FlaskConical className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-white text-lg font-bold font-absans tracking-tight group-hover:translate-x-1 transition-transform duration-300">{product.name}</div>
                          <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-0.5">{product.category.replace(/-/g, ' ')}</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-white/20 transition-all">
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-20 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <AlertCircle className="w-8 h-8 text-white/10" />
                </div>
                <h3 className="text-white text-lg font-bold mb-2">{t('noResults')}</h3>
                <p className="text-white/30 font-archia text-sm max-w-xs">{t('noResultsDesc', { query })}</p>
              </div>
            )
          ) : (
            <div className="py-6 space-y-10">
              {/* Quick Access Categories */}
              <div>
                <div className="px-4 mb-6 text-[10px] text-white/20 font-bold uppercase tracking-[0.4em] flex items-center">
                  <span>{t('quickCategories')}</span>
                  <div className="h-px flex-1 mx-6 bg-white/5" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
                  {[
                    { id: 'metabolic-research', name: 'Metabolic Research', icon: Activity },
                    { id: 'growth-factor-research', name: 'Growth Factor Research', icon: TrendingUp },
                    { id: 'recovery-research', name: 'Recovery Research', icon: Microscope },
                    { id: 'cellular-health-research', name: 'Cellular Health Research', icon: Sparkles },
                  ].map(cat => (
                    <Link
                      key={cat.id}
                      href={`/products/${cat.id}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                          <cat.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{cat.name}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Technical Help Bar */}
              <div className="mx-2 p-6 rounded-[2rem] bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Command className="w-5 h-5 text-white/40" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-widest">{t('institutionalAccess')}</div>
                    <div className="text-[10px] text-white/30 font-medium">{t('institutionalDesc')}</div>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  {t('helpCenter')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
