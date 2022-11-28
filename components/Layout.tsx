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

const Layout = ({ children, title = 'I Soli di Claudio' }: Props) => {
  return (
  <div className="wrap">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href='/favicon.ico' />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Merriweather:wght@300&display=swap" rel="stylesheet" /> 
    </Head>
    <header>
      <NavigationBar />
    </header>
    {children}
    <CookieConsent
      location="bottom"
      cookieName="CookieConsentBanner"
      style={{ background: "#755b3e", color: "#000000", borderTop: '2px solid black' }}
      buttonClasses="custom-button custom-button-dark"
      expires={30}
    >
      Il sito web utilizza i cookie per finalità strettamente necessarie al suo funzionamento.
    </CookieConsent>
    <Footer />
  </div>
  );
};

export default Layout
