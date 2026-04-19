import { useParams } from 'react-router-dom';

import { useOrder } from '../hooks/useOrder';

const OrderPage = () => {

  const { id } = useParams();

  const { data: order, isLoading } = useOrder(id!);

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  if (!order) return <div className="text-center py-8">Order not found</div>;

  return (

    <div className="container mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-4">Order Details</h1>

      <p>Order ID: {order._id}</p>

      <p>Total: ${order.total}</p>

      <p>Status: {order.status}</p>

      <h2 className="text-xl font-semibold mt-4">Items</h2>

      {order.items.map(item => (

        <div key={item.product._id} className="border p-2 mb-2 rounded">

          <p>{item.product.name} x {item.quantity}</p>

        </div>

      ))}

    </div>

  );

};

export default OrderPage;