import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import { ClerkProvider } from '@clerk/clerk-react';

import { queryClient } from './lib/queryClient';

import { CLERK_PUBLISHABLE_KEY } from './lib/clerk';

import AxiosInterceptor from './lib/AxiosInterceptor';

import Header from './components/Header';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';

import ProductPage from './pages/ProductPage';

import CartPage from './pages/CartPage';

import CheckoutPage from './pages/CheckoutPage';

import OrdersPage from './pages/OrdersPage';

import OrderPage from './pages/OrderPage';

import WishlistPage from './pages/WishlistPage';

import LoginPage from './pages/LoginPage';

import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <AxiosInterceptor />
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/order/:id" element={<OrderPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
