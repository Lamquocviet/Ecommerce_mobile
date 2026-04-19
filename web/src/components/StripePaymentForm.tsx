import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import type { CartItem } from '@/types';

type StripePaymentFormProps = {
  cartItems: CartItem[];
  totalAmount: number;
  onCheckout: () => void;
  loading: boolean;
};

export const StripePaymentForm = ({ cartItems, totalAmount, onCheckout, loading }: StripePaymentFormProps) => {
  const itemCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);

  return (
    <div className="rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-white/50">Payment summary</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Complete checkout</h2>
        </div>
        <div className="space-y-4 rounded-4xl border border-white/10 bg-[#111111] p-6">
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>Items</span>
            <span>{itemCount}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>Shipping</span>
            <span>Calculated at Stripe</span>
          </div>
          <div className="flex items-center justify-between pt-4 text-lg font-semibold text-white">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <Button variant="primary" onClick={onCheckout} disabled={loading} className="w-full py-4">
          {loading ? 'Redirecting...' : 'Proceed to Stripe'}
        </Button>
      </div>
    </div>
  );
};
