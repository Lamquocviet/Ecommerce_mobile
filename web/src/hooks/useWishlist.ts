import { create } from 'zustand';

import type { Product } from '../types';

interface WishlistState {

  items: Product[];

  addItem: (product: Product) => void;

  removeItem: (productId: string) => void;

  clearWishlist: () => void;

}

export const useWishlist = create<WishlistState>((set) => ({

  items: [],

  addItem: (product) => set((state) => {

    if (!state.items.find(p => p._id === product._id)) {

      return { items: [...state.items, product] };

    }

    return state;

  }),

  removeItem: (productId) => set((state) => ({ items: state.items.filter(p => p._id !== productId) })),

  clearWishlist: () => set({ items: [] }),

}));