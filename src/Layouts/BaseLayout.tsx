import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import Script from 'next/script'

interface IBaseLayout {
  children?: React.ReactNode
}

const googleTag = process.env.GOOGLE_ANALITICS

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Head>
          <title>Logan Bready 💻</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
        </Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTag}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${googleTag}');
        `}
        </Script>
        <Navigation />
        <main id="main-content" data-content="main">
          {children}
        </main>
      </div>
    </>
  )
}
