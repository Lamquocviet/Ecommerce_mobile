import { useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useCartStore } from '@/store/cartStore';
import { createCheckoutSession } from '@/services/paymentService';
import type { CheckoutPayload } from '@/types';

export const useCart = () => {
  const { items, totalAmount, totalQuantity, addItem, removeItem, updateQuantity, clearCart } = useCartStore();

  const checkoutMutation = useMutation({
    mutationFn: async (payload: CheckoutPayload) => createCheckoutSession(payload),
    onSuccess: (data) => {
      window.location.href = data.url;
    }
  });

  const addToCart = (item: Parameters<typeof addItem>[0]) => {
    addItem(item);
  };

  const checkout = () => {
    const payload: CheckoutPayload = {
      items: items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity
      }))
    };

    checkoutMutation.mutate(payload);
  };

  return useMemo(
    () => ({
      items,
      totalAmount,
      totalQuantity,
      addToCart,
      removeItem,
      updateQuantity,
      clearCart,
      checkout,
      checkoutLoading: checkoutMutation.isLoading,
      checkoutError: checkoutMutation.error
    }),
    [items, totalAmount, totalQuantity, addItem, removeItem, updateQuantity, clearCart, checkoutMutation]
  );
};
