import { Link } from 'react-router-dom';
import { CartItemComponent } from '@/components/CartItem';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';

export const CartPage = () => {
  const { items, totalAmount, totalQuantity, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-4xl border border-white/10 bg-card p-10 text-center">
        <p className="text-sm text-white/60">Your cart is empty.</p>
        <Link to="/" className="mt-6 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-black">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 xl:grid-cols-[1.6fr_0.9fr]">
      <div className="space-y-6">
        {items.map((item) => (
          <CartItemComponent
            key={item.productId}
            item={item}
            onRemove={removeItem}
            onUpdate={updateQuantity}
          />
        ))}
      </div>
      <aside className="space-y-6 rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Cart summary</p>
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Items</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="flex items-center justify-between text-xl font-semibold text-white">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <div className="space-y-4">
          <Link
            to="/checkout"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-accent py-4 text-sm font-semibold text-black text-center transition hover:brightness-110"
          >
            Checkout
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="w-full rounded-2xl border border-white/10 bg-card py-4 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Clear cart
          </button>
        </div>
      </aside>
    </div>
  );
};
