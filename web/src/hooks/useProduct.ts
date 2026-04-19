import { useQuery } from '@tanstack/react-query';

import api from '../lib/axios';

import type { Product } from '../types';

export const useProduct = (id: string) => {

  return useQuery<Product>({

    queryKey: ['product', id],

    queryFn: async () => {

      const { data } = await api.get(`/api/products/${id}`);

      return data;

    },

    enabled: !!id,

  });

};