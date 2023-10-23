import '~/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Noto_Sans_KR, Montserrat } from 'next/font/google';
import BasicLayout from '~/components/layout/BasicLayout';
import AuthProvider from '~/context/AuthProvider';

import type { AppProps } from 'next/app';

export const noto = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const mont = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <title>점핏 | 개발자 커리어 점프</title>
      <div className={noto.className}>
        <AuthProvider>
          <BasicLayout>
            <Component {...pageProps} />
          </BasicLayout>
        </AuthProvider>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
