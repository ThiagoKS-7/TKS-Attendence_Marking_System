import 'katex/dist/katex.css'
import '@/css/tailwind.css'
import '@/css/prism.css'
import siteMetadata from '@/components/siteMetadata'
import '@fontsource/inter/variable-full.css'
import '../config/firebaseClient';

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Layout from '@/components/Layout'
import React, { useEffect,useReducer,useState } from 'react'
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState((typeof window !== 'undefined' && localStorage.getItem('user').length > 0) ? JSON.parse(localStorage.getItem('user')) : "" );
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {
        user.length > 0 && user.role =='employee' ?
        <Component {...pageProps} /> :
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </ThemeProvider>
  )
}
