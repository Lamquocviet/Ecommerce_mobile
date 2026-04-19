export type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description?: string;
  category?: string;
};

export type Order = {
  _id: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
  createdAt: string;
  items: CartItem[];
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CheckoutPayload = {
  items: Array<{
    productId: string;
    quantity: number;
  }>;
};

export type CheckoutResponse = {
  url: string;
};

export type ApiError = {
  message: string;
  statusCode?: number;
};
