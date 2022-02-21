import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TwitterProvider } from '../context/TwitterContext'
import '../lib/hexStyles.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TwitterProvider>
      <Head>
        <title>Twitter- Blockchain</title>
      </Head>
      <Component {...pageProps} />
    </TwitterProvider>
  )
}

export default MyApp
