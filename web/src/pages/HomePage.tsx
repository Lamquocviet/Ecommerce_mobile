import { useProducts } from '../hooks/useProducts';

import ProductGrid from '../components/ProductGrid';

const HomePage = () => {

  const { data: products, isLoading } = useProducts();

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  return (

    <div className="container mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ProductGrid products={products || []} />

    </div>

  );

};

export default HomePage;