"use client";

import React from 'react';
import { Link } from '@/i18n/routing';
import { useCart } from '@/context/CartContext';

export default function CartEmptyState() {
  const { dispatch } = useCart();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* Beaker Icon */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1D2B40"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-6"
      >
        <path d="M4.5 3h15" />
        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
        <path d="M6 14h12" />
      </svg>

      <h3 className="font-rajdhani font-bold text-[18px] text-[#EDF2F7] mb-3">
        Your inquiry list is empty
      </h3>
      
      <p className="font-dm-sans text-[13px] text-[#7A8FA3] leading-relaxed max-w-[192px] mb-8">
        Browse our compound catalog and add products to build your wholesale inquiry.
      </p>

      <Link
        href="/products"
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
        className="bg-[#4FC3D0] hover:bg-[#3ab0bc] text-[#090C11] font-bold font-rajdhani px-6 py-2.5 rounded-md transition-colors"
      >
        Browse Products &rarr;
      </Link>
    </div>
  );
}
