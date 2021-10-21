import { client } from 'client';
import { Footer, Header, HeroLeftJustified } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>Rugs - {generalSettings.title}</title>
      </Head>

      <HeroLeftJustified title="Grasscloth" />

      <main className="content content-single">
        <div className="wrap">
          <p>Grasscloth goes here</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
