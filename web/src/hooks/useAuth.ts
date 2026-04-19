import { useUser, useAuth as useClerkAuth } from '@clerk/clerk-react';

export const useAuth = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useClerkAuth();

  return { user, isLoaded, getToken };
};