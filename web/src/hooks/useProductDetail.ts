import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services/productService';
import type { Product } from '@/types';

export const useProductDetail = (id: string | undefined) => {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => getProductById(id ?? ''),
    enabled: Boolean(id),
    staleTime: 1000 * 60,
    retry: 1
  });
};
