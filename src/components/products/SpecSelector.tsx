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

  const pillBaseClasses = "border px-5 py-2.5 rounded-full text-xs font-dm-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-shrink-0";
  const defaultPillClasses = "border-black/10 text-black/60 bg-white hover:bg-black/5 hover:border-black/25 hover:text-black";
  const selectedPillClasses = "border-black bg-black text-white";

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      {/* Spec Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-black/80 font-absans font-bold text-[10px] uppercase tracking-widest">{t('selectSpec')}</label>
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
      <div className="flex flex-col gap-2">
        <label className="text-black/80 font-absans font-bold text-[10px] uppercase tracking-widest">{t('kitSize')}</label>
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

      {/* MOQ and CTA */}
      <div className="flex flex-col gap-4 pt-4 border-t border-black/5 mt-4">
        <p className="font-dm-sans text-xs font-bold text-black/55 uppercase tracking-wider mt-1 mb-1">
          {t('moqLabel', { count: 10 })}
        </p>
        
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
  );
}
