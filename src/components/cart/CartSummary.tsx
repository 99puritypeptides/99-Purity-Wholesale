"use client";

import React from 'react';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { CartItem } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import { buildInquiryMessage } from '@/lib/cartUtils';
import { useTranslations } from 'next-intl';

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const { dispatch } = useCart();
  const t = useTranslations('Layout.cart');
  
  const handleWhatsAppInquiry = () => {
    const message = buildInquiryMessage(items);
    const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message.whatsapp)}`;
    window.open(url, '_blank');
  };

  const handleEmailInquiry = () => {
    const message = buildInquiryMessage(items);
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'sales@99puritypeptides.com';
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(message.email.subject)}&body=${encodeURIComponent(message.email.body)}`;
    window.location.href = mailtoURL;
  };

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      {/* Top Row: Count and Clear */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Procurement</span>
          <span className="text-xs font-archia font-bold text-white">
            {t('productCount', { count: items.length })}
          </span>
        </div>
        <button
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
          className="text-white/20 hover:text-red-400 text-[9px] font-bold uppercase tracking-widest transition-colors"
        >
          {t('clear')}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppInquiry}
          className="group flex items-center justify-center gap-3 bg-white text-black font-absans font-bold text-[11px] w-full py-4 rounded-xl transition-all hover:bg-gray-100 active:scale-95 shadow-lg"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="uppercase tracking-widest">{t('whatsapp')}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmailInquiry}
          className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-absans font-bold text-[11px] w-full py-4 rounded-xl transition-all hover:bg-white/10 hover:border-white/20"
        >
          <Mail className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          <span className="uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{t('email')}</span>
        </button>
      </div>

      {/* Disclaimer */}
      <p className="font-archia text-[9px] text-white/20 text-center leading-relaxed italic px-4">
        &ldquo;{t('disclaimer')}&rdquo;
      </p>
    </div>
  );
}
