import { useQuery } from '@tanstack/react-query';

import api from '../lib/axios';

import type { Product } from '../types';

export const useProducts = () => {

  return useQuery<Product[]>({

    queryKey: ['products'],

    queryFn: async () => {

      const { data } = await api.get('/api/products');

      return data;

    },

  });

};