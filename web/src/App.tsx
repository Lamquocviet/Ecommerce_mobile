import { QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from '@/routes';
import { queryClient } from '@/lib/query';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};
