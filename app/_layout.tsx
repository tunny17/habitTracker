import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import AuthProvider, { useAuth } from './authContext';
import './globals.css';

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthRoute = segments[0] === 'auth';

    if (!user && !inAuthRoute && !isLoadingUser) {
      router.replace('/auth');
    } else if (user && inAuthRoute) {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, segments]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}
