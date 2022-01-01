import { useEffect } from 'react';
import { client, KoaThemeOptions, Page as PageType, PageIdType, RugIdType } from 'client';
import { Footer, Header } from 'components';
import getKoaThemeOptions from 'helpers/ssr/getKoaThemeOptions';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getNextStaticProps, is404 } from '@faustjs/next';

import ComponentsPage from '../koa-framework/ComponentsPage/ComponentsPage';
const { useQuery, useTransactionQuery } = client;

export interface PageProps {
  page: PageType | PageType['preview']['node'] | null | undefined;
  pageUri?: string[];
  koaThemeOptions?: KoaThemeOptions;
}

export function PageComponent({ page, pageUri, koaThemeOptions }: PageProps) {
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

  // if query contains custom post type 'rug', use the Rug ACF modules
  // otherwise use the Page Builder ACF modules
  const modules = pageUri.includes('rug')
    ? Object.values(rugDetails?.rug?.modules)
        .filter((e) => typeof e !== 'string')
        .sort((a, b) => {
          return a.order - b.order;
        })
    : page?.pageBuilder?.modules;

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

  if (!modules) return null;

  return (
    <ComponentsPage header={headerSection} modules={modules} footer={footerSection} koaThemeOptions={koaThemeOptions} />
  );
}

export default function Page({ pageUri, koaThemeOptions }) {
  // const { usePage } = client;
  // const page = usePage({ });
  // const page = useTransactionQuery((query, args: string) => {
  //   return query.page({ id: `${pageUri}`,
  //   idType: PageIdType.URI, },{ fetchPolicy: 'network-only' });
  // });

  const queryResult = useTransactionQuery(
    (query) => {
      return query.page({ id: `/${pageUri}`, idType: PageIdType.URI });
    },
    {
      pollInterval: 500,
      fetchPolicy: 'cache-and-network',
    },
  );

  if (queryResult.isLoading) return null;

  return <PageComponent page={queryResult?.data} pageUri={pageUri} koaThemeOptions={koaThemeOptions} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const koaThemeOptions = await getKoaThemeOptions();
  const serializedKoaThemeOptions = JSON.parse(JSON.stringify(koaThemeOptions));

  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
    props: { pageUri: context.params.pageUri, koaThemeOptions: serializedKoaThemeOptions },
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
