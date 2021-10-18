import React from 'react';
import { client } from 'client';
import { CallToAction, Footer, Header, HeroLeftJustified } from 'components';
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

      <CallToAction
        ctaTitle="May Sale 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ctaButtonLabel="Shop now"
        backgroundImage="images/ctaSale.png"
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
