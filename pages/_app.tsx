import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // styles for the react carousel

import { withAxiom } from "next-axiom";

//Binding events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function SoliDiClaudioFE({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "it_IT",
          url: "https://www.claudiobizzo.com",
          siteName: "Claudio Bizzo",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default withAxiom(SoliDiClaudioFE);