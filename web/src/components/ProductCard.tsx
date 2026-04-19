import { Link } from 'react-router-dom';

import type { Product } from '../types';

import { formatPrice } from '../lib/utils';

interface ProductCardProps {

  product: Product;

}

const ProductCard = ({ product }: ProductCardProps) => (

  <div className="border rounded-lg p-4 shadow">

    <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" />

    <h3 className="text-lg font-semibold">{product.name}</h3>

    <p className="text-gray-600">{formatPrice(product.price)}</p>

    <Link to={`/product/${product._id}`} className="text-blue-500">View Details</Link>

  </div>

);

export default ProductCard;