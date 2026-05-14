"use client";

import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { getTotalItemCount } from '@/lib/cartUtils';

export default function CartIcon() {
  const { state, dispatch } = useCart();
  const itemCount = getTotalItemCount(state.items);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger badge animation when count changes from 0 to something
  useEffect(() => {
    if (itemCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  return (
    <button
      onClick={() => dispatch({ type: 'OPEN_DRAWER' })}
      className="group relative flex flex-col items-center justify-center p-2 rounded-full hover:bg-white/5 transition-all"
      title={`Inquiry List (${itemCount} items)`}
    >
      <div className="relative">
        {/* Shopping Bag Icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:text-brand-accent transition-colors"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>

        {/* Badge */}
        {itemCount > 0 && (
          <span 
            className={`absolute -top-1.5 -right-1.5 bg-[#4FC3D0] text-[#090C11] text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1 border-2 border-[#090C11] transition-transform duration-300 ${
              isAnimating ? 'scale-110' : 'scale-100'
            }`}
          >
            {itemCount > 9 ? '9+' : itemCount}
          </span>
        )}
      </div>

      <span className="hidden sm:block font-dm-mono text-[10px] text-[#7A8FA3] mt-0.5 group-hover:text-white transition-colors">
        Inquiry
      </span>
    </button>
  );
}
