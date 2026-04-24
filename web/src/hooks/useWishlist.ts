import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useWishlistStore } from '@/store/wishlistStore';
import type { Product } from '@/types';

export const useWishlist = () => {
  const { items, addItem, removeItem, isInWishlist, clearWishlist } = useWishlistStore();
  const queryClient = useQueryClient();

  // Fetch wishlist from server on mount
  const { isLoading, data: serverWishlist, refetch } = useQuery({
    queryKey: ['wishlist'],
    queryFn: async () => {
      try {
        const response = await api.get<{ wishlist: Product[] }>('/api/users/wishlist');
        console.log('Wishlist fetched:', response.data.wishlist);
        return response.data.wishlist || [];
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
        return [];
      }
    },
    onSuccess: (data) => {
      console.log('Wishlist sync to store:', data);
      // Clear and repopulate store with server data
      clearWishlist();
      data?.forEach((product) => {
        console.log('Adding product to wishlist:', product._id);
        addItem(product);
      });
    },
    staleTime: Infinity, // Never consider data stale
    gcTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  // Add to wishlist mutation
  const addToWishlistMutation = useMutation({
    mutationFn: async (product: Product) => {
      const response = await api.post<{ message: string; wishlist: string[] }>('/api/users/wishlist', {
        productId: product._id,
      });
      return response.data;
    },
    onSuccess: (_, product) => {
      addItem(product);
      // Refetch to sync with server
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
    onError: (error) => {
      console.error('Failed to add to wishlist:', error);
    },
  });

  // Remove from wishlist mutation
  const removeFromWishlistMutation = useMutation({
    mutationFn: async (productId: string) => {
      const response = await api.delete<{ message: string; wishlist: string[] }>(`/api/users/wishlist/${productId}`);
      return response.data;
    },
    onSuccess: (_, productId) => {
      removeItem(productId);
      // Refetch to sync with server
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
    onError: (error) => {
      console.error('Failed to remove from wishlist:', error);
    },
  });

  // Toggle wishlist
  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product._id)) {
      removeFromWishlistMutation.mutate(product._id);
    } else {
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
