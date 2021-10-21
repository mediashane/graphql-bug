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

      <HeroLeftJustified title="Rugs" />

      <main className="content content-single">
        <div className="wrap">
          <p>Rugs go here</p>
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
