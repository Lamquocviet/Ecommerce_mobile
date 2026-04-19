import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@/services/orderService';
import type { Order } from '@/types';

export const useOrders = () => {
  return useQuery<Order[], Error>({
    queryKey: ['orders'],
    queryFn: getOrders,
    staleTime: 1000 * 60,
    retry: 1
  });
};
