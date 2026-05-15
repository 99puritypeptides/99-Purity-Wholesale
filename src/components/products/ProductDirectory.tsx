'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, FlaskConical, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import AddToInquiryButton from '@/components/products/AddToInquiryButton';

import { getSearchEngine } from '@/lib/search';

import { useSearchParams } from 'next/navigation';

interface Product {
  name: string;
  slug: string;
  category: string;
  specs: string[];
  description: string;
}

interface ProductDirectoryProps {
  products: Product[];
  categories: { id: string; name: string }[];
}

export default function ProductDirectory({ products, categories }: ProductDirectoryProps) {
  const t = useTranslations('ProductsIndex');
  const tDetail = useTranslations('ProductDetail');
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState<string>(searchParams.get('cat') || 'all');

  // Memoize search engine
  const searchEngine = useMemo(() => getSearchEngine(products), [products]);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Apply fuzzy search if query exists
    if (searchQuery.trim().length >= 2) {
      result = searchEngine.search(searchQuery).map(res => res.item);
    } else if (searchQuery.trim().length > 0) {
      // Basic includes for very short queries
      result = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }

    return result;
  }, [products, searchQuery, activeCategory, searchEngine]);

  return (
    <div className="w-full">
      {/* Search and Filter Bar */}
      <div className="sticky top-[70px] md:top-[90px] z-30 bg-black/60 backdrop-blur-xl border-b border-white/10 py-4 md:py-6 mb-12 shadow-2xl transition-all duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-accent transition-colors" />
              <input
                type="text"
                placeholder={t('searchPlaceholder') || "Search compounds..."}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-brand-accent/50 transition-all font-dm-sans"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Pills - Wrapping for visibility */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg font-dm-mono text-[10px] uppercase tracking-wider border transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-brand-accent text-brand-bg border-brand-accent font-bold'
                    : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-dm-mono text-[10px] uppercase tracking-wider border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-brand-accent text-brand-bg border-brand-accent font-bold'
                      : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 pb-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.slug} 
                className="group bg-[#0e131b] border border-white/5 rounded-2xl p-6 hover:border-brand-accent/30 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg hover:shadow-brand-accent/5"
              >
                <Link href={`/products/${product.category}/${product.slug}`} className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-[10px] font-dm-mono text-brand-accent uppercase tracking-[0.2em] px-2 py-1 bg-brand-accent/5 rounded border border-brand-accent/20">
                      {product.category.replace(/-/g, ' ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-dm-sans line-clamp-2 mb-6 flex-grow">
                    {tDetail.has(`descriptions.${product.slug}`) ? tDetail(`descriptions.${product.slug}`) : product.description}
                  </p>
                </Link>

                <div className="flex flex-col gap-4 pt-4 border-t border-white/5 mt-auto">
                  {(() => {
                    const [spec, kitSizeStr] = product.specs[0].split('×');
                    return (
                      <AddToInquiryButton
                        productId={product.slug}
                        productName={product.name}
                        category={product.category}
                        spec={spec}
                        kitSize={parseInt(kitSizeStr)}
                        categoryPage={`/products/${product.category}`}
                      />
                    );
                  })()}
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-dm-mono text-gray-500 uppercase">
                      {product.specs.length} Specs
                    </div>
                    <Link href={`/products/${product.category}/${product.slug}`} className="flex items-center text-brand-accent text-xs font-bold uppercase tracking-widest transition-all hover:gap-1">
                      Details <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0B0F15] rounded-3xl border border-white/5">
            <FlaskConical className="w-16 h-16 text-gray-700 mx-auto mb-6 opacity-20" />
            <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">No compounds found</h3>
            <p className="text-gray-500 font-dm-sans">Try adjusting your search or category filters</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
              className="mt-6 text-brand-accent font-dm-mono text-sm underline hover:text-white transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
