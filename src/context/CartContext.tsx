"use client";

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { CartItem, CartState, CartAction } from '@/types/cart';

const STORAGE_KEY = '99pp-inquiry-cart';

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: newItems, isOpen: true };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        isOpen: true,
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, Math.min(99, action.payload.quantity)) }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    case 'OPEN_DRAWER':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_DRAWER':
      return {
        ...state,
        isOpen: false,
      };

    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        const items = JSON.parse(savedCart);
        if (Array.isArray(items)) {
          dispatch({ type: 'SET_ITEMS', payload: items });
        }
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage on state change
  useEffect(() => {
    // Only save if hydration has completed to avoid overwriting with initial empty state
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      } catch (error) {
        console.error('Failed to save cart to localStorage:', error);
      }
    }
  }, [state.items, isHydrated]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
