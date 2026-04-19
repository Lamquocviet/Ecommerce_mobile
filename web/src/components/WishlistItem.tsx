import type { Product } from '@/types';
import { Button } from '@/components/ui/Button';

type WishlistItemProps = {
  product: Product;
  onAddToCart: () => void;
};

export const WishlistItem = ({ product, onAddToCart }: WishlistItemProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-4xl border border-white/10 bg-card p-5">
      <div className="h-60 overflow-hidden rounded-3xl bg-[#111111]">
        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">Wishlist item</p>
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-sm text-white/60">${product.price.toFixed(2)}</p>
      </div>
      <Button variant="secondary" onClick={onAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};
