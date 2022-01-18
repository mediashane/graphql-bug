import 'faust.config';
import 'koa.config';
import 'normalize.css/normalize.css';

import React from 'react';
import { client } from 'client';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { colorBrandBlue } from 'style';
import theme from 'style/theme';

import { FaustProvider } from '@faustjs/next';
import { ThemeProvider } from '@mui/material';

export default function KoaApp({ Component, pageProps }: AppProps) {
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
