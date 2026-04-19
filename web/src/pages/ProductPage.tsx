import { useParams } from 'react-router-dom';

import { useProduct } from '../hooks/useProduct';

import { formatPrice } from '../lib/utils';

import { useCart } from '../hooks/useCart';

const ProductPage = () => {

  const { id } = useParams();

  const { data: product, isLoading } = useProduct(id!);

  const { addItem } = useCart();

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  if (!product) return <div className="text-center py-8">Product not found</div>;

  return (

    <div className="container mx-auto px-4 py-8">

      <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover mb-4" />

      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

      <p className="mb-4">{product.description}</p>

      <p className="text-xl font-semibold mb-4">{formatPrice(product.price)}</p>

      <button onClick={() => addItem({ product, quantity: 1 })} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>

    </div>

  );

};

export default ProductPage;