import { Link } from 'react-router-dom';
import { WishlistItem } from '@/components/WishlistItem';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/contexts/ToastContext';
import { SkeletonLoader } from '@/components/SkeletonLoader';

export const WishlistPage = () => {
  const { wishlistItems, isLoading } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonLoader key={index} className="h-80" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
        <h1 className="text-3xl font-semibold text-white">Wishlist</h1>
        <p className="mt-3 text-sm text-white/70">Your saved items are ready for checkout whenever you want.</p>
      </div>
      {wishlistItems.length ? (
        <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {wishlistItems.map((product) => (
            <WishlistItem
              key={product._id}
              product={product}
              onAddToCart={() => {
                addToCart({
                  productId: product._id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.images[0]
                });
                addToast(`${product.name} added to cart!`, 'success');
              }}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-4xl border border-white/10 bg-card p-10 text-center text-white/70">
          Your wishlist is empty. Add favorites from the home page.
          <Link to="/" className="mt-6 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-black">
            Browse products
          </Link>
        </div>
      )}
    </div>
  );
};
