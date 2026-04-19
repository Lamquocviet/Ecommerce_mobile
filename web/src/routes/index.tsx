import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import { AppLayout } from '@/pages/AppLayout';
import { CartPage } from '@/pages/Cart';
import { CheckoutPage } from '@/pages/Checkout';
import { HomePage } from '@/pages/Home';
import { OrdersPage } from '@/pages/Orders';
import { ProductDetailPage } from '@/pages/ProductDetail';
import { ProfilePage } from '@/pages/Profile';
import { WishlistPage } from '@/pages/Wishlist';
import { ProtectedRoute } from '@/routes/ProtectedRoute';

export const AppRoutes = () => {
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ?? ''}
      navigate={(to) => {
        window.history.pushState(null, '', to);
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="orders"
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
};
