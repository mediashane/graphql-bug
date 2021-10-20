import React from 'react';
import { client } from 'client';
import { CallToAction, EmailSubscribe, Footer, Header, HeroLeftJustified, ThreeImageExplore } from 'components';
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

      <ThreeImageExplore
        backgroundImageOne="images/rugsLink.png"
        labelOne="Rugs"
        linkOne="/rugs"
        backgroundImageTwo="images/fabricLink.png"
        labelTwo="Fabric"
        linkTwo="/fabric"
        backgroundImageThree="images/grassclothLink.png"
        labelThree="Grasscloth"
        linkThree="/grasscloth"
      />

      <EmailSubscribe
        title="Get new products and promotions in your inbox"
        placeholder="Your email"
        buttonLabel="Subscribe"
        subtitle="Keep up with what we’re up to. Unsubscribe at any time."
        backgroundImage="images/emailSubscribe.png"
      />

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
