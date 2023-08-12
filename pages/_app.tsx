import '~/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Noto_Sans_KR } from 'next/font/google';

import type { AppProps } from 'next/app';

import BasicLayout from '~/components/layout/BasicLayout';

const noto = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={noto.className}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
