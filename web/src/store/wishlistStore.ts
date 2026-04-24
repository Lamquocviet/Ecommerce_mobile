import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import type { Product } from '@/types';

type WishlistState = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const items = get().items;
        const exists = items.some((item) => item._id === product._id);
        if (!exists) {
          set({ items: [...items, product] });
        }
      },
      removeItem: (productId) => {
        const items = get().items.filter((item) => item._id !== productId);
        set({ items });
      },
      isInWishlist: (productId) => {
        return get().items.some((item) => item._id === productId);
      },
      clearWishlist: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'luminous-wishlist-storage',
      partialize: (state) => ({ items: state.items })
    }
  )
);
