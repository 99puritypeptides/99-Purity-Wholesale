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

  const pillBaseClasses = "border px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer";
  const defaultPillClasses = "border-[#1D2B40] text-[#7A8FA3] bg-[#18212F] hover:border-[#7A8FA3]/30";
  const selectedPillClasses = "border-[#4FC3D0] text-[#4FC3D0] bg-[#0d2030]";

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      {/* Spec Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-rajdhani font-bold text-sm">{t('selectSpec')}</label>
        <div className="flex flex-wrap gap-2">
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
        <label className="text-white font-rajdhani font-bold text-sm">{t('kitSize')}</label>
        <div className="flex flex-wrap gap-2">
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
      <div className="flex flex-col gap-4">
        <p className="font-dm-mono text-[11px] text-[#7A8FA3] uppercase tracking-wider">
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
