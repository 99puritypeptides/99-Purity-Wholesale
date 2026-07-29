"use client";

import React, { useState } from 'react';
import { Beaker } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  categoryName: string;
  specImagesMap?: Record<string, string>;
}

// Parses filenames like "semaglutide-10mg.jpg" to return "10MG"
const getDosageLabel = (filename: string) => {
  // Try to match standard milligram or microgram patterns
  const match = filename.match(/(\d+(?:\.\d+)?\s*(?:mg|mcg|g)(?:\s*-\s*\d+\s*ml|\s*\d+\s*kit)?)/i);
  if (match) {
    return match[1].replace(/\s+/g, '').toUpperCase();
  }
  
  // Try fallback patterns for numbers like "500mcg" or "100 counts"
  const matchCount = filename.match(/(\d+\s*count(s)?)/i);
  if (matchCount) {
    return matchCount[1].toUpperCase();
  }

  // General number + suffix
  const matchNum = filename.match(/(\d+\+?\s*(?:mg|mcg|g|ml))/i);
  if (matchNum) {
    return matchNum[1].replace(/\s+/g, '').toUpperCase();
  }

  return "SPEC"; // Default fallback
};

export default function ProductGallery({ images, productName, categoryName, specImagesMap }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  React.useEffect(() => {
    const handleSpecChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ spec: string }>;
      const spec = customEvent.detail.spec;
      if (specImagesMap && specImagesMap[spec]) {
        const targetImg = specImagesMap[spec];
        const idx = images.indexOf(targetImg);
        if (idx !== -1) {
          setActiveIndex(idx);
        }
      }
    };

    window.addEventListener('product-spec-change', handleSpecChange);
    return () => window.removeEventListener('product-spec-change', handleSpecChange);
  }, [images, specImagesMap]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-black/35 w-full aspect-square bg-black/[0.01] border border-black/5 rounded-2xl">
        <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center mb-4 text-black/40">
          <Beaker className="w-8 h-8" />
        </div>
        <span className="text-[10px] font-dm-mono uppercase tracking-[0.2em] text-black/50">Pure Compound</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/20 mt-1">Research Reference</span>
      </div>
    );
  }

  const currentImage = images[activeIndex];
  const isNearRight = zoomPos.x > 68;
  const isNearBottom = zoomPos.y > 75;

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Main Large Showcase Image Card with Cursor-Tracking Magnifier Zoom */}
      <div 
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => { setIsZoomed(false); setZoomPos({ x: 50, y: 50 }); }}
        onMouseMove={handleMouseMove}
        className={`relative aspect-square w-full rounded-2xl bg-black/[0.01] border border-black/5 overflow-hidden flex items-center justify-center group/img ${isZoomed ? 'cursor-none' : 'cursor-default'}`}
      >
        <img 
          src={encodeURI(`/product-images/${currentImage}`)}
          alt={`${productName} Wholesale Reference Standard - View ${activeIndex + 1}`}
          className="w-[90%] h-[90%] object-contain rounded-2xl transition-transform duration-200 ease-out mix-blend-multiply brightness-[1.05] contrast-[1.02]"
          style={{
            transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
          }}
        />

        {/* Stealth-Luxury Glass Loupe Magnifier Lens */}
        {isZoomed && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
            {/* Elegant Circular Precision Crystal Glass Lens */}
            <div 
              className="absolute w-24 h-24 rounded-full border border-black/15 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
              style={{ 
                left: `${zoomPos.x}%`, 
                top: `${zoomPos.y}%`,
                background: 'rgba(255, 255, 255, 0.02)',
                boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.85), 0 12px 28px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Ultra-minimalist detail label */}
              <span className="text-[7px] font-bold font-dm-sans tracking-[0.25em] text-black/25 uppercase mt-auto mb-2">
                1.8x Lens
              </span>
            </div>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-6 left-6 bg-black border border-black px-4 py-1.5 rounded-full text-[9px] font-dm-mono uppercase tracking-[0.2em] text-white select-none pointer-events-none">
          {categoryName}
        </div>

        {/* Dynamic Dosage Indicator Badge */}
        <div className="absolute top-6 right-6 bg-emerald-500/10 border border-emerald-500/25 px-4 py-1.5 rounded-full text-[9px] font-dm-mono uppercase tracking-[0.2em] text-emerald-700 font-bold select-none pointer-events-none">
          {getDosageLabel(currentImage)}
        </div>
      </div>

      {/* Multiple Image Thumbnails Grid */}
      {images.length > 1 && (
        <div className="flex flex-col gap-2.5">
          <span className="font-absans text-[9px] font-bold uppercase tracking-[0.25em] text-black/40 block mb-1">
            Available Concentrated Variations ({images.length})
          </span>
          <div className="grid grid-cols-4 gap-3.5 w-full">
            {images.map((img, idx) => {
              const isActive = idx === activeIndex;
              const dosage = getDosageLabel(img);

              return (
                <button
                  key={img}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative aspect-square rounded-xl border flex flex-col items-center justify-center p-2.5 bg-white transition-all duration-300 ${
                    isActive 
                      ? "border-black shadow-[0_8px_20px_rgba(0,0,0,0.04)] ring-1 ring-black scale-102" 
                      : "border-black/5 hover:border-black/20 hover:shadow-sm"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-[75%] h-[75%] flex items-center justify-center overflow-hidden mb-1">
                    <img 
                      src={encodeURI(`/product-images/${img}`)}
                      alt={`${productName} Wholesale Reference Standard - View ${idx + 1}`}
                      className="h-full object-contain mix-blend-multiply brightness-[1.05] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Miniature Label badge */}
                  <span className={`text-[7px] font-bold font-dm-mono tracking-wider leading-none mt-auto px-1.5 py-0.5 rounded ${
                    isActive 
                      ? "bg-black text-white" 
                      : "bg-black/5 text-black/60 group-hover:bg-black/10 group-hover:text-black"
                  }`}>
                    {dosage}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
