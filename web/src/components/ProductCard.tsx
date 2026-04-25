import type { Product } from '@/types';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Heart } from 'lucide-react';
import { type MouseEvent } from 'react';
import { useWishlist } from '@/hooks/useWishlist';

type ProductCardProps = {
  product: Product;
  onAddToCart: () => void;
};

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { isInWishlist, toggleWishlist, isAdding, isRemoving } = useWishlist();
  const isWishlisted = isInWishlist(product._id);

  const handleWishlist = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  e.stopPropagation();
  toggleWishlist(product);
};
  return (
    <div className="group overflow-hidden rounded-4xl border border-white/10 bg-card shadow-glow transition hover:-translate-y-1 hover:border-accent/30">
      <Link to={`/product/${product._id}`} className="block">
        <div className="relative h-72 overflow-hidden bg-[#111111]">
          <button 
            className='absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 backdrop-blur-md transition hover:bg-black/70 disabled:opacity-50'
            onClick={handleWishlist}
            disabled={isWishlisted ? isRemoving : isAdding}
          >
            <Heart className={`h-4 w-4 transition ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-white/50">{product.category ?? 'Apparel'}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{product.name}</h3>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xl font-bold text-accent">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </Link>
      <div className="flex justify-between p-5 pt-0">
        <Button variant="secondary" onClick={onAddToCart}>
          Thêm vào giỏ
        </Button>
        <Link to = {`/product/${product._id}`}>
          <Button className='bg-accent'>
          Xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
  );
};
