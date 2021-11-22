import 'faust.config';
import 'koa.config';
import 'normalize.css/normalize.css';

import React, { useEffect } from 'react';
import { client } from 'client';
import type { AppProps } from 'next/app';

import { FaustProvider } from '@faustjs/next';
import markerSDK from '@marker.io/browser';

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
      <FaustProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}
