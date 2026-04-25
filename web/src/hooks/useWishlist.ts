import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useWishlistStore } from '@/store/wishlistStore';
import { useProducts } from '@/hooks/useProducts';
import type { Product } from '@/types';

export const useWishlist = () => {
  const { items, addItem, removeItem, isInWishlist, clearWishlist } = useWishlistStore();
  const queryClient = useQueryClient();

  // 🔥 lấy toàn bộ products (để map)
  const { data: allProducts } = useProducts();

  // Fetch wishlist IDs
  const { isLoading, refetch } = useQuery({
    queryKey: ['wishlist'],
    queryFn: async () => {
      try {
        const response = await api.get<{ wishlist: string[] }>('/api/users/wishlist');
        return response.data.wishlist || [];
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
        return [];
      }
    },

    onSuccess: (ids) => {
  if (!allProducts) return;

  const mappedProducts = allProducts.filter((p) =>
    ids.includes(p._id)
  );

  // 🔥 chỉ update nếu khác
  const currentIds = items.map((i) => i._id).sort();
  const newIds = mappedProducts.map((i) => i._id).sort();

  const isDifferent =
    currentIds.length !== newIds.length ||
    currentIds.some((id, i) => id !== newIds[i]);

  if (isDifferent) {
    clearWishlist();
    mappedProducts.forEach(addItem);
  }
},

    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
  });

  // Add
  const addToWishlistMutation = useMutation({
    mutationFn: async (product: Product) => {
      const response = await api.post('/api/users/wishlist', {
        productId: product._id,
      });
      return response.data;
    },
    onSuccess: (_, product) => {
      addItem(product); // 🔥 optimistic update
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });

  // Remove
  const removeFromWishlistMutation = useMutation({
    mutationFn: async (productId: string) => {
      const response = await api.delete(`/api/users/wishlist/${productId}`);
      return response.data;
    },
    onSuccess: (_, productId) => {
      removeItem(productId); // 🔥 optimistic update
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });

  // Toggle
const toggleWishlist = (product: Product) => {
  if (isInWishlist(product._id)) {
    removeItem(product._id); // update UI ngay
    removeFromWishlistMutation.mutate(product._id);
  } else {
    addItem(product); // update UI ngay
    addToWishlistMutation.mutate(product);
  }
};

  return {
    wishlistItems: items,
    isLoading,
    isInWishlist,
    toggleWishlist,
    addToWishlist: (product: Product) => addToWishlistMutation.mutate(product),
    removeFromWishlist: (productId: string) => removeFromWishlistMutation.mutate(productId),
    isAdding: addToWishlistMutation.isPending,
    isRemoving: removeFromWishlistMutation.isPending,
    refetch,
  };
};