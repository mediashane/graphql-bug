import { useEffect, useState } from 'react';
import { client, Page as PageType, RugIdType } from 'client';
import { Footer, Header } from 'components';
import HeaderSpacer from 'components/HeaderSpacer/HeaderSpacer';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getNextStaticProps, is404 } from '@faustjs/next';

import ComponentsPage from '../koa-framework/ComponentsPage/ComponentsPage';
const { useQuery } = client;

export interface PageProps {
  page: PageType | PageType['preview']['node'] | null | undefined;
  clientPageModules?: Array<any>;
  pageUri?: string[];
}

export function PageComponent({ pageUri, clientPageModules }: PageProps) {
  // const [pageModules, setPageModules] = useState(ssrPageModules);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const queryState = useQuery().$state;
  const router = useRouter();
  const generalSettings = useQuery().generalSettings;
  const rugDetails = useQuery().rug({
    id: `/${pageUri.join('/')}`,
    idType: RugIdType.URI,
  });

  useEffect(() => {
    if (rugDetails?.rug?.modules?.collection[0]?.$on?.Rug_collection?.rug_collection?.title) {
      const { title } = rugDetails?.rug?.modules?.collection[0]?.$on?.Rug_collection?.rug_collection;
      router.push(
        {
          pathname: pageUri.join('/'),
          query: { collection: title },
        },
        undefined,
        { shallow: true },
      );
    }
  }, [rugDetails]);

  useEffect(() => {
    // setPageModules(clientPageModules);
    setIsLoading(false);
  }, [clientPageModules, queryState.isLoading]);

  // if query contains custom post type 'rug', use the Rug ACF modules
  // otherwise use the Page Builder ACF modules
  const modules = pageUri.includes('rug')
    ? Object.values(rugDetails?.rug?.modules)
        .filter((e) => typeof e !== 'string')
        .sort((a, b) => {
          return a.order - b.order;
        })
    : clientPageModules;

  const headerSection = (
    <>
      <Header />
      <HeaderSpacer />
      <Head>
        <title>{generalSettings.title}</title>
      </Head>
    </>
  );
  const footerSection = (
    <Footer
      title="Elizabeth Eakins Studio TEST"
      description="The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from 9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by."
      address="5 Taft Street, South Norwalk, CT 06854"
      phoneNumber="203.831.9347"
      email="Ann.taylor@elizabetheakins.com"
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

  return <ComponentsPage header={headerSection} modules={modules} footer={footerSection} isLoading={isLoading} />;
}

export default function Page({ pageUri }) {
  const { usePage } = client;
  const clientSidePage = usePage();

  return (
    <PageComponent page={clientSidePage} pageUri={pageUri} clientPageModules={clientSidePage?.pageBuilder?.modules} />
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const pageUri = context.params.pageUri;

  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
    props: {
      pageUri: pageUri,
    },
  });
}

export async function getStaticPaths() {
  const paths = [
    '/rugs',
    '/our-story',
    '/from-the-farm',
    '/contact-us',
    '/belden',
    '/cotton',
    '/elizabeths-cloth',
    '/fabric',
    '/hagga',
    '/hand-tufted',
    '/home',
    '/master-series-classic',
    '/master-series-linen-wool',
    '/master-series-private-reserve',
    '/new-arrivals',
    '/teff',
    '/woven-textures',
  ];

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
