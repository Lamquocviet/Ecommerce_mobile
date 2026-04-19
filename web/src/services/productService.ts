import { api } from '@/lib/api';
import type { Product } from '@/types';

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/api/products');
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get<Product>(`/api/products/${id}`);
  return response.data;
};
