import { client } from 'client';
import { Footer, Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Head>
        <title>Rugs - {generalSettings.title}</title>
      </Head>

      <Hero title="Contact us" />

      <main className="content content-single">
        <div className="wrap">
          <p>Contact us goes here</p>
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
