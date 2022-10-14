import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
