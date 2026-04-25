import { QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from '@/routes';
import { queryClient } from '@/lib/query';
import { ToastProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/ToastContainer';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AppRoutes />
        <ToastContainer />
      </ToastProvider>
    </QueryClientProvider>
  );
};
