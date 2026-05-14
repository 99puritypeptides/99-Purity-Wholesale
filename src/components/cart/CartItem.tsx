"use client";

import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/context/CartContext';

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
    <div className="flex flex-col py-4 border-b border-[#1D2B40] gap-2">
      <div className="flex items-start justify-between">
        {/* Left Side: Product Info */}
        <div className="flex flex-col gap-1">
          <h4 className="font-rajdhani font-bold text-[15px] text-white leading-tight">
            {item.productName}
          </h4>
          <span className="font-dm-mono text-[10px] text-[#7A8FA3] uppercase tracking-wider">
            {item.category}
          </span>
          <div className="mt-1">
            <span className="inline-block bg-[#1D2B40] text-[#4FC3D0] text-[10px] px-2 py-0.5 rounded font-dm-mono">
              {item.spec} &times;{item.kitSize} vials
            </span>
          </div>
        </div>

        {/* Right Side: Quantity and Remove */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              className="w-7 h-7 rounded border border-[#1D2B40] bg-[#18212F] text-[#7A8FA3] flex items-center justify-center hover:border-[#4FC3D0] hover:text-[#4FC3D0] transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-bold text-white text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              className="w-7 h-7 rounded border border-[#1D2B40] bg-[#18212F] text-[#7A8FA3] flex items-center justify-center hover:border-[#4FC3D0] hover:text-[#4FC3D0] transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          
          <button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
            className="text-[#7A8FA3] hover:text-red-400 transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Summary Line */}
      <div className="font-dm-mono text-[10px] text-[#7A8FA3] opacity-80">
        Kit: {item.kitSize} vials &middot; Qty: {item.quantity} &middot; MOQ: {item.moq} units
      </div>
    </div>
  );
}
