import { useQuery } from '@tanstack/react-query';

import api from '../lib/axios';

export const useCategories = () => {

  return useQuery<string[]>({

    queryKey: ['categories'],

    queryFn: async () => {

      const { data } = await api.get('/api/categories');

      return data;

    },

  });

};