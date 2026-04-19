import type { CartItem as CartItemType } from '../types/index';

import { formatPrice } from '../lib/utils';

import { useCart } from '../hooks/useCart';

interface CartItemProps {

  item: CartItemType;

}

const CartItem = ({ item }: CartItemProps) => {

  const { updateQuantity, removeItem } = useCart();

  return (

    <div className="flex justify-between items-center border-b py-2">

      <div>

        <h3>{item.product.name}</h3>

        <p>{formatPrice(item.product.price)}</p>

      </div>

      <div className="flex items-center">

        <button onClick={() => updateQuantity(item.product._id, item.quantity - 1)} className="px-2">-</button>

        <span className="mx-2">{item.quantity}</span>

        <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)} className="px-2">+</button>

        <button onClick={() => removeItem(item.product._id)} className="ml-4 text-red-500">Remove</button>

      </div>

    </div>

  );

};

export default CartItem;