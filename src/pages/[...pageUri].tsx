import { client, Page as PageType } from 'client';
import { Footer, Header } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps, is404 } from '@faustjs/next';

import ComponentsPage from '../koa-framework/ComponentsPage/ComponentsPage';

export interface PageProps {
  page: PageType | PageType['preview']['node'] | null | undefined;
  pageUri: string[];
}

export function PageComponent({ page, pageUri }: PageProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  console.log('PAGE? ', page.rug);

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
      modules={page?.pageBuilder?.modules}
      pageUri={pageUri}
      footer={footerSection}
    />
  );
}

export default function Page({ pageUri }) {
  const { usePage } = client;
  const page = usePage();

  return <PageComponent page={page} pageUri={pageUri} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
    props: { pageUri: context.params.pageUri },
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
