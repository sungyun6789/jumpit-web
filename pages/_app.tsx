import '~/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Noto_Sans_KR, Montserrat } from 'next/font/google';
import BasicLayout from '~/components/layout/BasicLayout';

import type { AppProps } from 'next/app';

const noto = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const mont = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <title>점핏 | 개발자 커리어 점프</title>
      <div className={noto.className}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
