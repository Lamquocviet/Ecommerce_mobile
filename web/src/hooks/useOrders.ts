import { useQuery } from '@tanstack/react-query';

import api from '../lib/axios';

import type { Order } from '../types';

export const useOrders = () => {

  return useQuery<Order[]>({

    queryKey: ['orders'],

    queryFn: async () => {

      const { data } = await api.get('/api/orders');

      return data;

    },

  });

};