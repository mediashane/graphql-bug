import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Footer, Header, Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header
        title={generalSettings.title}
      />

      <Head>
        <title>Our Story - {generalSettings.title}</title>
      </Head>

      <Hero title="Our Story" />

      <main className="content content-single">
        <div className="wrap">
          <p>
            Story will go here
          </p>
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
