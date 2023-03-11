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
import $ from 'jquery'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState((typeof window !== 'undefined' && localStorage.getItem('user').length > 0) ? JSON.parse(localStorage.getItem('user')) : "" );
  useEffect(() => {
    const settings = {
        "url": "http://localhost:3000/api/hello",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
      };
      
    $.ajax(settings).done(async function (response) {
        console.log(response);
    });
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  })
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {
        user.length > 0 ?
        <Component {...pageProps} /> :
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </ThemeProvider>
  )
}
