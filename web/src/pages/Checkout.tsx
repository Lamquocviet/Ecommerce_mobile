import { StripePaymentForm } from '@/components/StripePaymentForm';
import { useCart } from '@/hooks/useCart';

export const CheckoutPage = () => {
  const { items, totalAmount, checkout, checkoutLoading } = useCart();

  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
        <h1 className="text-3xl font-semibold text-white">Secure checkout</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
          Review your order and complete payment through Stripe for safe, encrypted checkout.
        </p>
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <div key={item.productId} className="flex items-center justify-between rounded-4xl border border-white/10 bg-[#101010] p-4">
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/50">Qty {item.quantity}</p>
              </div>
              <p className="text-white/80">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <StripePaymentForm cartItems={items} totalAmount={totalAmount} onCheckout={checkout} loading={checkoutLoading} />
    </section>
  );
};
