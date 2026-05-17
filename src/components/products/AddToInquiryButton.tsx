"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import { generateCartId } from '@/lib/cartUtils';

interface AddToInquiryButtonProps {
  productId: string;
  productName: string;
  category: string;
  spec: string;
  kitSize: number;
  moq?: number;
  categoryPage: string;
}

export default function AddToInquiryButton({
  productId,
  productName,
  category,
  spec,
  kitSize,
  moq = 10,
  categoryPage,
}: AddToInquiryButtonProps) {
  const t = useTranslations('Components.AddToInquiry');
  const { state, dispatch } = useCart();
  const [showAdded, setShowAdded] = useState(false);

  const itemId = generateCartId(productId, spec, kitSize);
  const isInCart = state.items.some(item => item.id === itemId);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showAdded) {
      timeout = setTimeout(() => {
        setShowAdded(false);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [showAdded]);

  const handleAdd = () => {
    if (!isInCart) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: itemId,
          productId,
          productName,
          category,
          spec,
          kitSize,
          moq,
          categoryPage,
        },
      });
      setShowAdded(true);
    }
    dispatch({ type: 'OPEN_DRAWER' });
  };

  // Determine button styles based on state
  let buttonClasses = "font-dm-sans font-bold text-xs py-2.5 px-5 rounded-full transition-all duration-300 uppercase tracking-wider border ";
  let buttonText = t('add');

  if (showAdded) {
    buttonClasses += "bg-emerald-500/10 border-emerald-500/30 text-emerald-600";
    buttonText = t('added');
  } else if (isInCart) {
    buttonClasses += "bg-transparent border-black/15 border text-black/80 hover:bg-black hover:text-white hover:border-black";
    buttonText = t('inInquiry');
  } else {
    buttonClasses += "bg-black border-black text-white hover:bg-transparent hover:text-black hover:border-black";
  }

  return (
    <button
      onClick={handleAdd}
      className={buttonClasses}
    >
      {buttonText}
    </button>
  );
}
