// react | next
import Head from "next/head";
import { Header } from "../components/Navigation/Header";
// components

interface IBaseLayout {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/> 
        </Head>
        <Header />
        <main id="main-content" data-content="main">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};
