import { useEffect, useMemo } from 'react';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { setAuthTokenProvider } from '@/lib/api';

export const useAuth = () => {
  const { isLoaded, isSignedIn, userId, getToken, signOut } = useClerkAuth();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    setAuthTokenProvider(async () => {
      if (!isSignedIn) {
        return null;
      }

      try {
        return await getToken();
      } catch {
        return null;
      }
    });
  }, [isLoaded, isSignedIn, getToken]);

  return useMemo(
    () => ({
      isLoaded,
      isSignedIn,
      userId,
      getToken,
      signOut
    }),
    [isLoaded, isSignedIn, userId, getToken, signOut]
  );
};
