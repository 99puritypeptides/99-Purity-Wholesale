"use client";

import React from 'react';
import { Mail } from 'lucide-react';
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
    <div className="flex flex-col gap-4 pt-6 mt-2 border-t border-[#1D2B40]">
      {/* Top Row: Count and Clear */}
      <div className="flex items-center justify-between">
        <span className="font-dm-sans text-[13px] text-[#7A8FA3]">
          {t('productCount', { count: items.length })}
        </span>
        <button
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
          className="text-[#7A8FA3] hover:text-red-400 text-xs underline transition-colors"
        >
          {t('clear')}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppInquiry}
          className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-rajdhani font-bold text-base w-full py-3.5 rounded-lg transition-all shadow-lg shadow-green-900/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t('whatsapp')}
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmailInquiry}
          className="flex items-center justify-center gap-3 border border-[#1D2B40] hover:border-[#4FC3D0] text-[#7A8FA3] hover:text-[#EDF2F7] font-rajdhani font-bold text-base w-full py-3.5 rounded-lg transition-all"
        >
          <Mail className="w-[18px] h-[18px]" />
          {t('email')}
        </button>
      </div>

      {/* Disclaimer */}
      <p className="font-dm-sans italic text-[11px] text-[#7A8FA3] text-center mt-2 leading-relaxed">
        {t('disclaimer')}
      </p>
    </div>
  );
}
