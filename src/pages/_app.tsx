import 'faust.config';
import 'koa.config';
import 'normalize.css/normalize.css';

import React, { useEffect } from 'react';
// import React from 'react';
import { client } from 'client';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { colorBrandBlue } from 'style';
import theme from 'style/theme';

import { FaustProvider } from '@faustjs/next';
import markerSDK from '@marker.io/browser';
import { ThemeProvider } from '@mui/material';

export default function KoaApp({ Component, pageProps }: AppProps) {
  const fetchWidget = async () => {
    const widget = await markerSDK.loadWidget({
      destination: `617c0b2163614c5811dc57a8`,
    });
    console.log('Marker.io widget loaded: ', widget.isVisible);
  };

  useEffect(() => {
    fetchWidget();
  }, []);

  return (
    <>
      <NextNProgress color={colorBrandBlue} options={{ showSpinner: false }} />
      <ThemeProvider theme={theme}>
        <FaustProvider client={client} pageProps={pageProps}>
          <Component {...pageProps} />
        </FaustProvider>
      </ThemeProvider>
    </>
  );
}
