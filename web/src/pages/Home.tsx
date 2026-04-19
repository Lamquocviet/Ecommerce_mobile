import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';

export const HomePage = () => {
  const { data, isLoading, isError, error } = useProducts();
  const { addToCart } = useCart();

  return (
    <section className="space-y-10">
      <div className="rounded-4xl border border-white/10 bg-card p-10 shadow-glow">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Shop home</p>
          <h1 className="text-4xl font-semibold text-white">The depth of minimalism</h1>
          <p className="max-w-2xl text-sm leading-7 text-white/70">
            Discover elevated dark-mode goods built for modern spaces. Browse the newest drops,
            curated collections, and premium essentials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/wishlist" className="rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110">
              View wishlist
            </Link>
            <Link to="/cart" className="rounded-2xl border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5">
              View cart
            </Link>
          </div>
        </div>
      </div>

      {isError ? (
        <div className="rounded-4xl border border-white/10 bg-card p-8 text-center text-white/70">
          {error?.message ?? 'Unable to load products.'}
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonLoader key={index} className="h-96" />
              ))
            : data?.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onAddToCart={() =>
                    addToCart({
                      productId: product._id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.images[0]
                    })
                  }
                />
              ))}
        </div>
      )}
    </section>
  );
};
