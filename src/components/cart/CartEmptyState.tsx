"use client";
import React from 'react';
import { Link } from '@/i18n/routing';
import { useCart } from '@/context/CartContext';
import { FlaskConical, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CartEmptyState() {
  const t = useTranslations('Layout');
  const { dispatch } = useCart();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
      {/* Premium Visual Indicator */}
      <div className="relative mb-10">
        <div className="w-20 h-20 rounded-3xl bg-[#13a7b7]/5 border border-[#13a7b7]/10 flex items-center justify-center text-[#13a7b7]/40 shadow-[0_0_20px_rgba(19,167,183,0.05)]">
          <FlaskConical className="w-8 h-8" />
        </div>
        <div className="absolute -inset-4 bg-[#13a7b7]/5 blur-2xl rounded-full opacity-50 animate-pulse" />
      </div>

      <h3 className="font-absans font-bold text-xl text-white uppercase tracking-tighter mb-4">
        {t('cart.empty.title')}
      </h3>
      
      <p className="font-archia text-sm text-white/30 leading-relaxed max-w-[240px] mb-10">
        {t('cart.empty.desc')}
      </p>

      <Link
        href="/products"
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
        className="group flex items-center justify-center gap-3 bg-white text-black font-absans font-bold text-[11px] px-8 py-4 rounded-xl transition-all hover:bg-gray-100 uppercase tracking-widest"
      >
        {t('cart.empty.cta')}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
