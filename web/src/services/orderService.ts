import { api } from '@/lib/api';
import type { Order } from '@/types';

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get<Order[]>('/api/orders');
  return response.data;
};
