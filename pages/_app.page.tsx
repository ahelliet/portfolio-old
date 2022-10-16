import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { NextPageWithLayout } from '../types/page'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../libs/graphqlRequestClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme='light' attribute='class'>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

export default MyApp
