"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import CartEmptyState from './CartEmptyState';
import CartSummary from './CartSummary';

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;
  
  // Animation states
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Handle mounting and animation triggers
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Small delay to ensure transition triggers after mounting
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      // Wait for transition (300ms) before unmounting
      const timer = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle body scroll lock and escape key
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
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />

      {/* Drawer Panel */}
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-[420px] bg-[#0F1520] border-l border-[#1D2B40] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#0F1520] border-b border-[#1D2B40] px-6 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="font-rajdhani font-bold text-xl text-white uppercase tracking-tight">
              Inquiry List
            </h2>
            <span className="font-dm-mono text-[11px] text-[#7A8FA3] uppercase tracking-widest mt-0.5">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button 
            onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#7A8FA3] hover:text-white hover:bg-white/5 transition-all"
            aria-label="Close drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
          {items.length === 0 ? (
            <CartEmptyState />
          ) : (
            <div className="flex flex-col">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="sticky bottom-0 z-10 bg-[#0F1520] border-t border-[#1D2B40] px-6 py-6 pb-8">
            <CartSummary items={items} />
          </footer>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1D2B40;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4FC3D0;
        }
      `}</style>
    </div>
  );
}
