import { useOrders } from '../hooks/useOrders';

import { Link } from 'react-router-dom';

const OrdersPage = () => {

  const { data: orders, isLoading } = useOrders();

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  return (

    <div className="container mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {orders?.map(order => (

        <div key={order._id} className="border p-4 mb-4 rounded">

          <p>Order ID: {order._id}</p>

          <p>Total: ${order.total}</p>

          <p>Status: {order.status}</p>

          <Link to={`/order/${order._id}`} className="text-blue-500">View Details</Link>

        </div>

      ))}

    </div>

  );

};

export default OrdersPage;