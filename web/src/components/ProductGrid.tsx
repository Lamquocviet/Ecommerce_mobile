import type { Product } from '../types';

import ProductCard from './ProductCard';

interface ProductGridProps {

  products: Product[];

}

const ProductGrid = ({ products }: ProductGridProps) => (

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

    {products.map(product => <ProductCard key={product._id} product={product} />)}

  </div>

);

export default ProductGrid;