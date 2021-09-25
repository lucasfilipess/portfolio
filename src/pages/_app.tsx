import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
