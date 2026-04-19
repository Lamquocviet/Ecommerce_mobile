import type { CartItem } from '@/types';
import { Button } from '@/components/ui/Button';

type CartItemProps = {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdate: (id: string, quantity: number) => void;
};

export const CartItemComponent = ({ item, onRemove, onUpdate }: CartItemProps) => {
  return (
    <div className="flex items-center gap-4 rounded-4xl border border-white/10 bg-card p-4">
      <img src={item.image} alt={item.name} className="h-24 w-24 rounded-3xl object-cover" />
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="text-sm text-white/60">${item.price.toFixed(2)}</p>
          </div>
          <Button variant="ghost" onClick={() => onRemove(item.productId)}>
            Remove
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
            onClick={() => onUpdate(item.productId, item.quantity - 1)}
          >
            -
          </button>
          <span className="min-w-[2rem] text-center text-sm text-white">{item.quantity}</span>
          <button
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
            onClick={() => onUpdate(item.productId, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
