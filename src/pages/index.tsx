import React from 'react';
import { client, KoaThemeOptions, PageIdType } from 'client';
import { Footer, Header } from 'components';
import getKoaThemeOptions from 'helpers/ssr/getKoaThemeOptions';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

import ComponentsPage from '../koa-framework/ComponentsPage/ComponentsPage';
const { useQuery } = client;

export interface PageProps {
  koaThemeOptions?: KoaThemeOptions;
}

export default function Page({ koaThemeOptions }: PageProps) {
  const generalSettings = useQuery().generalSettings;
  const pageData = useQuery().page({
    id: '/',
    idType: PageIdType.URI,
  });

  const headerSection = (
    <>
      <Header title={generalSettings.title} />
      <Head>
        <title>{generalSettings.title}</title>
      </Head>
    </>
  );
  const footerSection = (
    <Footer
      title="Elizabeth Eakins Studio"
      description="The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from 9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by."
      address="5 Taft Street, South Norwalk, CT 06854"
      phoneNumber="203.831.9347"
      email="Elizabeth.Eakins@elizabetheakins.com"
      hours="9:00am to 5:00pm M-F"
      locationTitle="Holland & Sherry"
      locationDescription="Elizabeth Eakins is part of Holland & Sherry and available for purchase across their showrooms. Click below to find a location near you."
      locationButtonLabel="Find a location near you"
      socialTitle="Follow Elizabeth Eakins on Instagram and join our mailing list"
      socialDescription="Many of our new products and offers we first share in email and instagram. Follow us today"
      emailPlaceholder="Enter your email"
      igCta="Follow us on Instagram"
      igLink="https://instagram.com/elizabetheakins/"
    />
  );

  return (
    <ComponentsPage
      header={headerSection}
      modules={pageData?.pageBuilder?.modules}
      footer={footerSection}
      koaThemeOptions={koaThemeOptions}
    />
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const koaThemeOptions = await getKoaThemeOptions();
  const serializedKoaThemeOptions = JSON.parse(JSON.stringify(koaThemeOptions));

  return getNextStaticProps(context, {
    Page,
    client,
    props: { koaThemeOptions: serializedKoaThemeOptions },
  });
}
