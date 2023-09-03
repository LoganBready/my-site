import Head from 'next/head'
import { Navigation } from '../components/Navigation'

interface IBaseLayout {
  children?: React.ReactNode
}

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
        <Navigation />
        <main id="main-content" data-content="main">
          {children}
        </main>
      </div>
    </>
  )
}
