import '../styles/globals.css'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { SessionProvider } from 'next-auth/react';
import { ExtendedAppProps } from "../types/auth-types";
import Auth from "../components/auth/Auth";

//Binding events
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

export default function SoliDiClaudioFE({ Component, pageProps }: ExtendedAppProps) {

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}