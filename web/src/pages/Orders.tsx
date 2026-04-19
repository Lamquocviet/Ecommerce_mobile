import { OrderCard } from '@/components/OrderCard';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useOrders } from '@/hooks/useOrders';

export const OrdersPage = () => {
  const { data, isLoading, isError, error } = useOrders();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonLoader key={index} className="h-60" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-4xl border border-white/10 bg-card p-8 text-center text-white/70">
        {error?.message ?? 'Unable to load orders.'}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-white">Recent orders</h1>
      {data?.length ? (
        data.map((order) => <OrderCard key={order._id} order={order} />)
      ) : (
        <div className="rounded-4xl border border-white/10 bg-card p-8 text-center text-white/70">
          No orders found.
        </div>
      )}
    </div>
  );
};
