'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Command, ArrowRight, FlaskConical, Activity, Brain, ShieldAlert, Sparkles, Syringe, TrendingUp, Box } from 'lucide-react';
import { Link, useRouter } from '@/i18n/routing';
import productsData from '@/data/products.json';
import { useTranslations } from 'next-intl';

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

  // Handle keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // This is handled by parent, but we can emit event
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  // Real-time search logic
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const filtered = productsData.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // Limit results for clean UI

    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Search Modal */}
      <div className="relative w-full max-w-2xl bg-[#0e131b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-4 border-b border-white/5 flex items-center gap-4">
          <Search className="w-5 h-5 text-brand-accent" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, categories, or research applications..."
            className="flex-1 bg-transparent border-none text-white focus:ring-0 text-lg font-dm-sans"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-500 font-dm-mono uppercase">
            <span>ESC</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto no-scrollbar p-2">
          {query.length > 0 ? (
            results.length > 0 ? (
              <div className="space-y-1">
                <div className="px-4 py-2 text-[10px] text-gray-500 font-dm-mono uppercase tracking-widest">
                  Research Compounds ({results.length})
                </div>
                {results.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.category}/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                        <FlaskConical className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <div className="text-white font-bold font-rajdhani group-hover:text-brand-accent transition-colors">{product.name}</div>
                        <div className="text-xs text-gray-500 capitalize">{product.category.replace(/-/g, ' ')}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500 font-dm-sans">
                No matching research materials found for "{query}"
              </div>
            )
          ) : (
            <div className="p-4 space-y-6">
              <div>
                <div className="px-2 mb-4 text-[10px] text-gray-500 font-dm-mono uppercase tracking-widest">Quick Categories</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'glp1-metabolic-peptides', name: 'GLP-1', icon: Activity },
                    { id: 'growth-hormone', name: 'Growth Hormone', icon: TrendingUp },
                    { id: 'healing-recovery-peptides', name: 'Healing', icon: FlaskConical },
                  ].map(cat => (
                    <Link
                      key={cat.id}
                      href={`/products/${cat.id}`}
                      onClick={onClose}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all group"
                    >
                      <cat.icon className="w-4 h-4 text-brand-accent" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-brand-accent/5 border border-brand-accent/10 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-brand-accent text-sm font-bold">
                  <Command className="w-4 h-4" />
                  <span>Pro Tip: Use Ctrl+K to search anytime</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
