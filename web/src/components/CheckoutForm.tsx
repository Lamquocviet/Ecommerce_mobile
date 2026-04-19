import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = () => {

  const handleCheckout = async () => {

    // TODO: Create checkout session on backend and redirect

    const stripe = await stripePromise;

    if (stripe) {

      // stripe.redirectToCheckout({ sessionId });

    }

  };

  return (

    <div className="p-4">

      <h2 className="text-xl font-semibold mb-4">Checkout</h2>

      <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Payment</button>

    </div>

  );

};

export default CheckoutForm;