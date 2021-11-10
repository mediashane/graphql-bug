import 'faust.config';
import 'normalize.css/normalize.css';

import React, { useEffect } from 'react';
import { client } from 'client';
import type { AppProps } from 'next/app';

import { HeadlessProvider } from '@faustjs/next';
import markerSDK from '@marker.io/browser';

export default function KoaApp({ Component, pageProps }: AppProps) {
  const fetchWidget = async () => {
    const widget = await markerSDK.loadWidget({
      destination: `${process.env.NEXT_PUBLIC_MARKER_ID}`,
    });
    console.log('Marker.io widget loaded: ', widget.isVisible);
  };

  useEffect(() => {
    fetchWidget();
  }, []);

  return (
    <>
      <HeadlessProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </HeadlessProvider>
    </>
  );
}
