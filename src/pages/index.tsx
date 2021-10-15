import React from 'react';
import { client } from 'client';
import { Footer, Header, HeroLeftJustified } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

const descriptionPlaceholder =
  'Beloved for their richness, simplicity, and ease of use, the sophisticated colors of Elizabeth Eakins rugs, fabrics, and grasscloth wallpapers evoke the phenomenon of natural light gracing an organic form.';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header title={generalSettings.title} />
      <Head>
        <title>Rugs - {generalSettings.title}</title>
      </Head>

      <HeroLeftJustified
        introTitle="Welcome to"
        title="Elizabeth Eakins"
        description={descriptionPlaceholder}
        backgroundImage="images/elizabethWeaving.png"
      />

      <main className="content content-single">
        <div className="wrap">
          <p>Home page goes here</p>
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
