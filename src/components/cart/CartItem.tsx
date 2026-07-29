"use client";

import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import { Link } from '@/i18n/routing';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  const handleUpdateQuantity = (newQty: number) => {
    if (newQty < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });
    } else if (newQty <= 99) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: newQty } });
    }
  };

  return (
    <div className="group relative bg-white border border-black/5 rounded-2xl p-6 transition-all hover:shadow-md hover:border-black/10">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-absans font-bold text-lg text-black leading-tight tracking-tight uppercase">
              <Link 
                href={`/products/${item.productId}`}
                onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
                className="hover:text-[#13a7b7] transition-colors cursor-pointer"
              >
                {item.productName}
              </Link>
            </h4>
            <div className="flex items-center gap-2">
              <Link
                href={`/products/${item.category}`}
                onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
                className="text-[9px] font-bold text-black/40 hover:text-black/60 uppercase tracking-widest bg-black/5 px-2 py-0.5 rounded transition-colors"
              >
                {item.category.replace(/-/g, ' ')}
              </Link>
              <span className="text-[9px] font-bold text-[#13a7b7] uppercase tracking-widest bg-[#13a7b7]/10 border border-[#13a7b7]/20 px-2 py-0.5 rounded-md">
                {item.spec}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
            className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black/40 hover:bg-red-50 hover:text-red-500 transition-all"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-2 pt-5 border-t border-black/5">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Inquiry Volume</div>
            <div className="text-sm font-archia font-medium text-black/80">
              {item.kitSize} Vials &times; {item.quantity} Kits
            </div>
          </div>

          <div className="flex items-center bg-[#F8F8F6] rounded-xl border border-black/10 p-1">
            <button
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-black/40 hover:bg-white hover:text-black hover:shadow-sm transition-all"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-10 text-center font-archia font-bold text-black text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-black/40 hover:bg-white hover:text-black hover:shadow-sm transition-all"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
