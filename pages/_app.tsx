import '~/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Noto_Sans_KR, Montserrat } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import BasicLayout from '~/components/layout/BasicLayout';

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

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <title>점핏 | 개발자 커리어 점프</title>
      <div className={noto.className}>
        <SessionProvider session={session}>
          <BasicLayout>
            <Component {...pageProps} />
          </BasicLayout>
        </SessionProvider>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
