import "bootstrap/dist/css/bootstrap.min.css";

import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './footer/Footer'
// to avoid warning due to Next.js SSR
import dynamic from 'next/dynamic'
import CookieConsent from "react-cookie-consent";

const NavigationBar = dynamic(() => import('./navbar/NavigationBar'), { ssr: false })

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'e-Voting Web Application' }: Props) => {
  return (
  <div className="wrap">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href='/favicon.ico' />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <header>
      <NavigationBar />
    </header>
    {children}
    <CookieConsent
      location="bottom"
      cookieName="CookieConsentBanner"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={30}
    >
      This website uses cookies only for purposes strictly necessary for its operation.
    </CookieConsent>
    <Footer />
  </div>
  );
};

export default Layout
