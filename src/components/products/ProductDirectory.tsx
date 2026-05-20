'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, ArrowRight, FlaskConical, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import AddToInquiryButton from '@/components/products/AddToInquiryButton';
import { getSearchEngine } from '@/lib/search';
import { useSearchParams } from 'next/navigation';
import { useNestedSmoothScroll } from '@/hooks/useNestedSmoothScroll';

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

const productImagesMap = {
  "5-amino-1mq": "5-Amino-1MQ 10mg.jpg",
  "adamax": "adamax-5mg.webp",
  "adipotide-fttp": "adipotide-fttp-2mg.webp",
  "aod9604": "aod9604-5mg.webp",
  "b12": "b12-10mg.webp",
  "b7-33": "b7-33-2mg.webp",
  "bac-water": "bac-water-3ml.webp",
  "bpc-157": "BPC-157 5mg.jpg",
  "bpc-5mg-tb-5mg": "BPC-157.TB-500 5.5mg.jpg",
  "bpc-10mg-tb-10mg": "BPC-157.TB-500 10.10mg.jpg",
  "cagrilintide": "cagrilintide-5mg.webp",
  "cagrisema": "cagrisema-2.5+2.5-5mg.webp",
  "cjc-1295-dac": "cjc-1295-dac=5mg.webp",
  "cjc-1295-no-dac": "cjc-1295-no-dac-5mg.webp",
  "cjc-1295-ipam": "CJC-1295.Ipamorelin 10.10mg.jpg",
  "dihexa": "dihexa-10mg.webp",
  "dsip": "dsip-5mg.webp",
  "dulaglutide": "dulaglutide-5mg.webp",
  "epithalon": "Epithalon 10mg.jpg",
  "foxo4": "foxo4-2mg.webp",
  "foxo4-dri": "foxo4-dri-10mg.webp",
  "ghk-cu": "GHK-CU 50mg.jpg",
  "glow-blend": "GLOW.jpg",
  "klow-blend": "KLOW.jpg",
  "glutathione": "glutathione-600mg.webp",
  "ipamorelin": "Ipamorelin 5mg.jpg",
  "kpv": "kpv-5mg.webp",
  "l-carnitine": "l-carnitine-1200mg.webp",
  "lipo-c": "lipo-c-10ml.webp",
  "ll37": "LL37 5mg.jpg",
  "mic-blend": "mic-lipo-c+b12-10mg.webp",
  "mots-c": "Mots-c 10mg.jpg",
  "nad": "NAD 100mg.jpg",
  "retatrutide": "retatrutide-5mg.webp",
  "selank": "selank-5mg.webp",
  "semaglutide": "Semaglutide 10mg.jpg",
  "semax": "semax-5mg.webp",
  "sermorelin-acetate": "semorelin-acetate-5mg.webp",
  "snap-8": "Snap 8 10mg.jpg",
  "ss-31": "ss-31-10mg.webp",
  "tb-500": "TB-500 5mg - 3ml.jpg",
  "tesamorelin": "Tesamorelin 5mg.jpg",
  "thymalin-thymulin": "thymalin-thymylin-10mg.webp",
  "thymosin-alpha-1": "thymosin-alpha-1-5mg.webp",
  "tirzepatide": "tirzepatide-5mg.webp",
  "vip": "vip-5mg.webp"
};

export default function ProductDirectory({ products, categories }: ProductDirectoryProps) {
  const t = useTranslations('ProductsIndex');
  const tDetail = useTranslations('ProductDetail');
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryScrollRef = useNestedSmoothScroll<HTMLDivElement>({ orientation: 'horizontal' });

  useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('cat');
    if (q) setSearchQuery(q);
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  // Memoize search engine
  const searchEngine = useMemo(() => getSearchEngine(products), [products]);

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    categories.forEach(cat => {
      counts[cat.id] = products.filter(p => p.category === cat.id).length;
    });
    return counts;
  }, [products, categories]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        (window as any).initScrollReveals?.();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProducts]);


  return (
    <div className="w-full">
      {/* Search and Filter Bar */}
      <div className="sticky top-[70px] md:top-[90px] z-30 bg-[#F8F8F6]/90 backdrop-blur-xl border-b border-black/5 py-6 mb-12 shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col w-full">
            {/* Layer 1: Centered Search Input */}
            <div className="relative w-full max-w-2xl mx-auto mb-6 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-black/30 group-focus-within:text-brand-accent transition-all duration-300 group-hover:scale-105 pointer-events-none" />
              <input
                type="text"
                placeholder={t('searchPlaceholder') || "Search compounds..."}
                className="w-full bg-black/5 border border-black/5 rounded-full py-3.5 pl-14 pr-20 text-sm text-black placeholder-black/30 focus:outline-none focus:border-black/15 focus:bg-white focus:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all font-dm-sans"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded bg-black/5 border border-black/5 text-[9px] font-bold text-black/40 font-dm-mono pointer-events-none">
                <span>⌘</span>
                <span>K</span>
              </div>
            </div>

            {/* Layer 2: Premium Horizontal Scrolling Navigation Track */}
            <div className="w-full relative max-w-4xl mx-auto px-4 mt-2">
              {/* Fade Overlays to indicate scrolling */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F8F8F6] via-[#F8F8F6]/80 to-transparent pointer-events-none z-20" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F8F8F6] via-[#F8F8F6]/80 to-transparent pointer-events-none z-20" />

              <div ref={categoryScrollRef} className="flex items-center justify-start gap-3 overflow-x-auto pb-4 px-10 scroll-smooth [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/25 transition-all duration-300" data-lenis-prevent>
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-3 rounded-full font-dm-sans text-[10px] font-bold uppercase tracking-wider border flex items-center gap-2.5 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black/60 border-black/10 hover:bg-black/5 hover:border-black/25 hover:text-black'
                  }`}
                >
                  <span>All</span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-dm-mono leading-none ${
                    activeCategory === 'all'
                      ? 'bg-brand-accent text-black'
                      : 'bg-black/5 text-black/40'
                  }`}>
                    {categoryCounts['all']}
                  </span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-6 py-3 rounded-full font-dm-sans text-[10px] font-bold uppercase tracking-wider border flex items-center gap-2.5 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black/60 border-black/10 hover:bg-black/5 hover:border-black/25 hover:text-black'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-dm-mono leading-none ${
                      activeCategory === cat.id
                        ? 'bg-brand-accent text-black'
                        : 'bg-black/5 text-black/40'
                    }`}>
                      {categoryCounts[cat.id] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-2 sm:px-4 pb-20">
        {filteredProducts.length > 0 ? (
          <div className="reveal-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => {
              const productImage = productImagesMap[product.slug as keyof typeof productImagesMap];
              return (
                <div 
                  key={product.slug} 
                  className="reveal-card group relative bg-white border border-black/5 rounded-[1.25rem] sm:rounded-[2.2rem] p-3 sm:p-6 hover:border-black/15 transition-all duration-500 flex flex-col hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] overflow-hidden"
                >
                  {/* Grainy Noise Overlay for premium luxury depth */}
                  <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  <Link href={`/products/${product.category}/${product.slug}`} className="flex flex-col h-full relative z-10">
                    {/* Luxury Product Thumbnail Showcase */}
                    <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl bg-white overflow-hidden flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500">
                      
                      {productImage ? (
                        <img 
                          src={encodeURI(`/Product images/${productImage}`)}
                          alt={product.name}
                          className="w-[90%] h-[90%] object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-4 text-black/20 relative z-10">
                          <FlaskConical className="w-10 h-10 text-black/10 mb-2 group-hover:text-brand-accent/50 transition-colors" />
                          <span className="text-[9px] font-dm-mono uppercase tracking-[0.15em] text-black/20">Research Only</span>
                        </div>
                      )}
                    </div>
 
                    <div className="mb-2.5 sm:mb-3.5">
                      <span className="text-[8px] font-dm-mono font-bold text-black/40 uppercase tracking-[0.2em] px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/5 rounded-full border border-black/5 group-hover:border-black/15 group-hover:text-black transition-all duration-300">
                        {product.category.replace(/-/g, ' ')}
                      </span>
                    </div>
                    
                    <h3 className="text-xs sm:text-base md:text-lg font-absans font-bold text-black mb-1 sm:mb-2 leading-tight group-hover:text-black/80 transition-colors duration-300 uppercase tracking-tight line-clamp-1 sm:line-clamp-none">
                      {product.name}
                    </h3>
                    
                    <p className="text-[10px] sm:text-xs text-black/50 font-archia leading-relaxed font-medium line-clamp-2 mb-3 sm:mb-6 group-hover:text-black/70 transition-colors duration-300 flex-grow">
                      {tDetail.has(`descriptions.${product.slug}`) ? tDetail(`descriptions.${product.slug}`) : product.description}
                    </p>
                  </Link>

                  <div className="flex flex-col gap-2.5 sm:gap-4 pt-3 sm:pt-5 border-t border-black/5 mt-auto relative z-10">
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
                    
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-[9px] font-dm-mono font-bold text-black/30 uppercase tracking-widest">
                        {product.specs.length} Specs
                      </div>
                      
                      <Link 
                        href={`/products/${product.category}/${product.slug}`} 
                        className="flex items-center gap-1 text-black/50 text-[10px] font-dm-mono font-bold uppercase tracking-widest transition-colors hover:text-black"
                      >
                        Details <ChevronRight className="w-3.5 h-3.5 ml-0.5 transform transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-black/5 shadow-sm">
            <FlaskConical className="w-16 h-16 text-black/10 mx-auto mb-6" />
            <h3 className="text-2xl font-absans font-bold text-black mb-2 uppercase tracking-tight">No compounds found</h3>
            <p className="text-black/50 font-dm-sans text-sm">Try adjusting your search or category filters</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
              className="mt-6 text-brand-accent font-dm-mono text-sm underline hover:text-black transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
