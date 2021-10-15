import 'faust.config';
import 'normalize.css/normalize.css';
import 'scss/main.scss';

import React from 'react';
import { client } from 'client';
import type { AppProps } from 'next/app';

import { HeadlessProvider } from '@faustjs/next';

export default function KoaApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadlessProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </HeadlessProvider>
    </>
  );
}
