"use client";
import React, { useEffect, useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import CartEmptyState from './CartEmptyState';
import CartSummary from './CartSummary';
import CartProgressBar from './CartProgressBar';
import { useTranslations } from 'next-intl';
import { useNestedSmoothScroll } from '@/hooks/useNestedSmoothScroll';

export default function CartDrawer() {
  const t = useTranslations('Layout');
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;
  
  const cartScrollRef = useNestedSmoothScroll<HTMLDivElement>({ enabled: isOpen });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      const lenis = (window as any).lenis;
      if (lenis) lenis.stop();

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') dispatch({ type: 'CLOSE_DRAWER' });
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (lenis) lenis.start();
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, dispatch]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
      {/* Immersive Overlay */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />

      {/* Modern Drawer Panel */}
      <div 
        className={`relative h-full w-full max-w-[500px] bg-[#F8F8F6] border-l border-black/5 flex flex-col shadow-[-15px_0_40px_rgba(0,0,0,0.1)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          visible ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-[0.95] opacity-0'
        }`}
      >
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Header */}
        <header className="relative z-10 px-8 py-8 flex items-center justify-between border-b border-black/5 bg-white/50 backdrop-blur-md">
          <div className="flex items-center gap-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
              items.length > 0 
                ? 'bg-[#13a7b7]/10 border-[#13a7b7]/20 text-[#13a7b7]'
                : 'bg-black/5 border-black/5 text-black/40'
            }`}>
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-absans font-bold text-xl text-black uppercase tracking-tighter">
                {t('cart.title')}
              </h2>
              <span className="text-[8px] font-bold text-black/40 uppercase tracking-[0.3em] mt-1">
                {items.length} {t('cart.registered')}
              </span>
            </div>
          </div>
          <button 
            onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-black/40 border border-black/5 hover:border-black/10 hover:text-black hover:bg-black/5 transition-all group active:scale-90"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
          </button>
        </header>

        {/* Body */}
        <div ref={cartScrollRef} className="relative z-10 flex-1 overflow-y-auto px-8 py-6 custom-scrollbar" data-lenis-prevent>
          {items.length === 0 ? (
            <div className="h-full flex items-center justify-center animate-fade-in-up">
              <CartEmptyState />
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="animate-item-entry"
                  style={{ animationDelay: `${150 + index * 60}ms` }}
                >
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="relative z-10 bg-white/80 backdrop-blur-xl border-t border-black/5 px-8 py-6 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
            <CartProgressBar items={items} />
            <CartSummary items={items} />
          </footer>
        )}

        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(0,0,0,0.2);
          }

          @keyframes item-entry {
            from {
              opacity: 0;
              transform: translateX(30px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-sweep {
            animation: sweep 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-item-entry {
            opacity: 0;
            animation: item-entry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
