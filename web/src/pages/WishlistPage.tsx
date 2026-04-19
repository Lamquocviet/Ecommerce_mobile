import { useWishlist } from '../hooks/useWishlist';

import ProductGrid from '../components/ProductGrid';

const WishlistPage = () => {

  const { items } = useWishlist();

  return (

    <div className="container mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

      <ProductGrid products={items} />

    </div>

  );

};

export default WishlistPage;