/* eslint-disable @next/next/no-script-in-document */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  render() {
    
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <NextScript />
          <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"/>
        </body>
        
      </Html>
    )
  }
}

export default MyDocument
