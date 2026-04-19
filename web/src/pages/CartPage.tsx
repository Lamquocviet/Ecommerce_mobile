import { useCart } from '../hooks/useCart';

import CartItem from '../components/CartItem';

import { Link } from 'react-router-dom';

const CartPage = () => {

  const { items } = useCart();

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (

    <div className="container mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {items.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        <>

          {items.map(item => <CartItem key={item.product._id} item={item} />)}

          <p className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</p>

          <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">Checkout</Link>

        </>

      )}

    </div>

  );

};

export default CartPage;