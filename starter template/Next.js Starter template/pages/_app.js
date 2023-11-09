import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
      <Head>
        <title>Cash Flow</title>
      </Head>
      <Component {...pageProps} />
    
  </>
}
