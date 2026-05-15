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
  let buttonClasses = "font-rajdhani font-bold text-sm px-4 py-2 rounded-md transition-all duration-200 ";
  let buttonText = t('add');

  if (showAdded) {
    buttonClasses += "bg-[#3ECF8E] text-[#090C11]";
    buttonText = t('added');
  } else if (isInCart) {
    buttonClasses += "bg-transparent border border-[#4FC3D0] text-[#4FC3D0]";
    buttonText = t('inInquiry');
  } else {
    buttonClasses += "bg-[#4FC3D0] hover:bg-[#3ab0bc] text-[#090C11]";
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
