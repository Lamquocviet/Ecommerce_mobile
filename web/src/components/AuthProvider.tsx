import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Initialize auth & token provider on mount
  useAuth();
  
  return <>{children}</>;
};
