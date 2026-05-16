"use client";
import React, { useEffect, useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import CartEmptyState from './CartEmptyState';
import CartSummary from './CartSummary';
import { useTranslations } from 'next-intl';

export default function CartDrawer() {
  const t = useTranslations('Layout');
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;
  
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
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') dispatch({ type: 'CLOSE_DRAWER' });
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, dispatch]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
      {/* Immersive Overlay */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />

      {/* Modern Drawer Panel */}
      <div 
        className={`relative h-full w-full max-w-[500px] bg-[#0A0A0A] border-l border-white/10 flex flex-col shadow-[0_0_150px_rgba(0,0,0,0.9)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          visible ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-[0.95] opacity-0'
        }`}
      >
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Light Sweep Effect */}
        <div className={`absolute inset-0 z-20 pointer-events-none overflow-hidden ${visible ? 'block' : 'hidden'}`}>
           <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 animate-sweep" />
        </div>

        {/* Header */}
        <header className="relative z-10 px-8 py-8 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shadow-inner">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-absans font-bold text-xl text-white uppercase tracking-tighter">
                {t('cart.title')}
              </h2>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em] mt-1">
                {items.length} {t('cart.registered')}
              </span>
            </div>
          </div>
          <button 
            onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-white/20 hover:text-white hover:bg-white/5 transition-all group active:scale-90"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
          </button>
        </header>

        {/* Body */}
        <div className="relative z-10 flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
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
          <footer className="relative z-10 bg-black/40 backdrop-blur-3xl border-t border-white/5 px-8 py-6">
            <CartSummary items={items} />
          </footer>
        )}

        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,0.1);
          }

          @keyframes sweep {
            from { transform: translateX(-100%) skewX(-12deg); }
            to { transform: translateX(400%) skewX(-12deg); }
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
