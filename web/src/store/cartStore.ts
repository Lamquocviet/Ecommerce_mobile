import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import type { CartItem } from '@/types';

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const calculateTotals = (items: CartItem[]) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalQuantity, totalAmount };
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
      addItem: (item) => {
        const items = [...get().items];
        const existingIndex = items.findIndex((entry) => entry.productId === item.productId);

        if (existingIndex >= 0) {
          const existingItem = items[existingIndex];
          items[existingIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity
          };
        } else {
          items.push(item);
        }

        const totals = calculateTotals(items);

        set({
          items,
          ...totals
        });
      },
      removeItem: (productId) => {
        const items = get().items.filter((entry) => entry.productId !== productId);
        const totals = calculateTotals(items);
        set({ items, ...totals });
      },
      updateQuantity: (productId, quantity) => {
        const items = get().items.map((entry) =>
          entry.productId === productId
            ? {
                ...entry,
                quantity: Math.max(1, quantity)
              }
            : entry
        );
        const totals = calculateTotals(items);
        set({ items, ...totals });
      },
      clearCart: () => {
        set({ items: [], totalQuantity: 0, totalAmount: 0 });
      }
    }),
    {
      name: 'luminous-cart-storage',
      partialize: (state) => ({ items: state.items, totalQuantity: state.totalQuantity, totalAmount: state.totalAmount })
    }
  )
);
