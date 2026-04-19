import type { Order } from '@/types';

type OrderCardProps = {
  order: Order;
};

export const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="rounded-4xl border border-white/10 bg-card p-6 shadow-glow">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">Order #{order._id}</p>
          <p className="mt-2 text-lg font-semibold text-white">{order.status.toUpperCase()}</p>
        </div>
        <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">{order.status}</span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#101010] p-4">
          <p className="text-sm text-white/50">Total</p>
          <p className="mt-2 text-2xl font-bold text-accent">${order.total.toFixed(2)}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#101010] p-4">
          <p className="text-sm text-white/50">Created</p>
          <p className="mt-2 text-sm text-white/80">{new Date(order.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
