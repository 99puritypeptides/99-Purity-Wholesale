"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import AddToInquiryButton from './AddToInquiryButton';

interface SpecSelectorProps {
  productId: string;
  productName: string;
  category: string;
  categoryPage: string;
  specs: string[];
  kitSizes: number[];
  defaultSpec?: string;
  defaultKitSize?: number;
}

export default function SpecSelector({
  productId,
  productName,
  category,
  categoryPage,
  specs,
  kitSizes,
  defaultSpec,
  defaultKitSize,
}: SpecSelectorProps) {
  const t = useTranslations('Components.SpecSelector');
  const [selectedSpec, setSelectedSpec] = useState(defaultSpec || specs[0]);
  const [selectedKitSize, setSelectedKitSize] = useState(defaultKitSize || kitSizes[0]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('product-spec-change', { detail: { spec: selectedSpec } }));
    }
  }, [selectedSpec]);

  const pillBaseClasses = "border px-5 py-2.5 rounded-full text-xs font-dm-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-shrink-0";
  const defaultPillClasses = "border-black/10 text-black/60 bg-white hover:bg-black/5 hover:border-black/25 hover:text-black";
  const selectedPillClasses = "border-black bg-black text-white";

  return (
    <div className="flex flex-col w-full gap-8">
      
      {/* Top Section: Selectors */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
        {/* Spec Selector */}
        <div className="flex flex-col gap-3 flex-1">
          <label className="text-black/40 font-dm-mono font-bold text-[10px] uppercase tracking-[0.2em]">{t('selectSpec')}</label>
          <div className="flex flex-wrap gap-2.5">
            {specs.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpec(spec)}
                className={`${pillBaseClasses} ${
                  selectedSpec === spec ? selectedPillClasses : defaultPillClasses
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Kit Size Selector */}
        <div className="flex flex-col gap-3 flex-1">
          <label className="text-black/40 font-dm-mono font-bold text-[10px] uppercase tracking-[0.2em]">{t('kitSize')}</label>
          <div className="flex flex-wrap gap-2.5">
            {kitSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedKitSize(size)}
                className={`${pillBaseClasses} ${
                  selectedKitSize === size ? selectedPillClasses : defaultPillClasses
                }`}
              >
                ×{size} {t('vials')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Action Panel */}
      <div className="bg-[#F8F8F6] rounded-[1.5rem] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-black/5 shadow-inner">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/60"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <div>
            <p className="font-dm-sans text-xs font-bold text-black uppercase tracking-wider mb-1">
              Commercial Order
            </p>
            <p className="font-dm-mono text-[10px] font-bold text-black/50 uppercase tracking-widest">
              {t('moqLabel', { count: 10 })}
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-auto md:min-w-[260px]">
          <AddToInquiryButton
            productId={productId}
            productName={productName}
            category={category}
            spec={selectedSpec}
            kitSize={selectedKitSize}
            categoryPage={categoryPage}
            moq={10}
          />
        </div>
      </div>
    </div>
  );
}
