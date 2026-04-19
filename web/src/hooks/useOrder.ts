import { useQuery } from '@tanstack/react-query';

import api from '../lib/axios';

import type { Order } from '../types';

export const useOrder = (id: string) => {

  return useQuery<Order>({

    queryKey: ['order', id],

    queryFn: async () => {

      const { data } = await api.get(`/api/orders/${id}`);

      return data;

    },

    enabled: !!id,

  });

};