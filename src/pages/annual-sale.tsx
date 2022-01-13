import { client } from 'client';
import { Header } from 'components';
import FourButtonsGroup from 'components/FourButtonsGroup/FourButtonsGroup';
import HeaderSpacer from 'components/HeaderSpacer/HeaderSpacer';
import HeroCenter from 'components/HeroCenter/HeroCenter';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header />
      <HeaderSpacer />
      <Head>
        <title>{generalSettings.title}</title>
      </Head>
      <HeroCenter
        textOverlineTop="THE ANNUAL"
        textOverlineBottom="ELIZABETH EAKINS FALL SALE"
        textHeadline="Bring Joy In"
        textBodyline="SEPTEMBER 20TH – OCTOBER 15TH"
        textSublineTop="At the Elizabeth Eakins Studio"
        textSublineBottom="5 Taft Street, South Norwalk, CT 06854"
        textPostline="BY APPOINTMENT ONLY"
        media="images/annualSaleHero.jpg"
        textColor="#000000"
      />
      <FourButtonsGroup
        labelOne="Details"
        labelTwo="Hours and Directions"
        labelThree="Book an Appointment"
        labelFour="Email us at"
        email="sale@elizabetheakins.com"
      />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
