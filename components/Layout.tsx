/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */

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
}

const Layout = ({ children }: Props) => {
  return (
  <div className="wrap">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href='/favicon.ico' />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Merriweather:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </Head>
    <header>
      <NavigationBar />
    </header>
    {children}
    <CookieConsent
      location="bottom"
      cookieName="CookieConsentBanner"
      buttonText="Accetto"
      style={{ background: "#c29f7a", color: "#000000", borderTop: '2px solid black' }}
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
