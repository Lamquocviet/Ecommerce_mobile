import { create } from 'zustand';

interface Filters {
  category: string;
  minPrice: number;
  maxPrice: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  filters: Filters;
  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: Partial<Filters>) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  filters: {
    category: 'all',
    minPrice: 0,
    maxPrice: 1000,
  },
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
}));

export default useProductStore;
