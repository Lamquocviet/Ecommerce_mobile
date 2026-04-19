export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  rating: number;
  reviewsCount: number;
}

export interface User {
  _id: string;
  clerkId: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  _id: string;
  user: string;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
}

export interface Review {
  _id: string;
  product: string;
  user: string;
  rating: number;
  comment: string;
}