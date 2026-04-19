import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useCart } from '@/hooks/useCart';
import { useProductDetail } from '@/hooks/useProductDetail';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useProductDetail(id);
  const { addToCart } = useCart();

  const imageUrl = useMemo(() => product?.images[0] ?? '', [product]);

  if (isLoading) {
    return <SkeletonLoader className="h-[32rem]" />;
  }

  if (isError || !product) {
    return (
      <div className="rounded-4xl border border-white/10 bg-card p-10 text-center text-white/70">
        {error?.message ?? 'Product not found.'}
      </div>
    );
  }

  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-8 rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
        <div className="h-[32rem] overflow-hidden rounded-4xl bg-[#111111]">
          <img src={imageUrl} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">{product.category ?? 'Featured'}</p>
          <h1 className="text-4xl font-semibold text-white">{product.name}</h1>
          <p className="max-w-2xl text-sm leading-7 text-white/70">{product.description ?? 'A premium product with modern styling and impressive craftsmanship.'}</p>
        </div>
      </div>

      <aside className="space-y-6 rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/50">Price</span>
            <span className="text-3xl font-semibold text-accent">${product.price.toFixed(2)}</span>
          </div>
          <div className="rounded-4xl border border-white/10 bg-[#101010] p-5 text-white/70">
            <p className="text-sm">Ships worldwide with premium handling and secure delivery.</p>
          </div>
        </div>
        <Button
          variant="primary"
          onClick={() =>
            addToCart({
              productId: product._id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.images[0]
            })
          }
          className="w-full py-4"
        >
          Add to cart
        </Button>
      </aside>
    </section>
  );
};
