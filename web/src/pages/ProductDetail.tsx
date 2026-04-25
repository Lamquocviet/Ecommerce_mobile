import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useCart } from '@/hooks/useCart';
import { useProductDetail } from '@/hooks/useProductDetail';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useProductDetail(id);
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = useMemo(() => product?.images ?? [], [product]);
  const imageUrl = useMemo(() => images[selectedImageIndex] ?? '', [images, selectedImageIndex]);

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
      <div className="space-y-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md p-8">
        {/* Main Image */}
        <div className="relative group overflow-hidden rounded-3xl bg-[#111111] aspect-square">
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Image Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden transition-all duration-200 border-2 ${
                  selectedImageIndex === index
                    ? 'border-emerald-500 ring-2 ring-emerald-500/30'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Product Info */}
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/80">{product.category ?? 'Featured'}</p>
          <h1 className="text-4xl font-semibold text-white">{product.name}</h1>
          <p className="max-w-2xl text-sm leading-7 text-white/70">{product.description ?? 'A premium product with modern styling and impressive craftsmanship.'}</p>
        </div>
      </div>

      <aside className="space-y-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md p-8 h-fit">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/50">Price</span>
            <span className="text-3xl font-semibold text-emerald-400">${product.price.toFixed(2)}</span>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-black/40 p-5 text-white/70">
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
