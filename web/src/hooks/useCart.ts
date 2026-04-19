import { create } from 'zustand';

import type { CartItem } from '../types/index';

interface CartState {

  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (productId: string) => void;

  updateQuantity: (productId: string, quantity: number) => void;

  clearCart: () => void;

}

export const useCart = create<CartState>((set) => ({

  items: [],

  addItem: (item) => set((state) => {

    const existing = state.items.find(i => i.product._id === item.product._id);

    if (existing) {

      return { items: state.items.map(i => i.product._id === item.product._id ? { ...i, quantity: i.quantity + item.quantity } : i) };

    }

    return { items: [...state.items, item] };

  }),

  removeItem: (productId) => set((state) => ({ items: state.items.filter(i => i.product._id !== productId) })),

  updateQuantity: (productId, quantity) => set((state) => ({ items: state.items.map(i => i.product._id === productId ? { ...i, quantity } : i) })),

  clearCart: () => set({ items: [] }),

}));