import { client } from 'client';
import { Footer, Header, Pagination, Posts } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getNextStaticProps, is404 } from '@faustjs/next';

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { useQuery, usePosts, useCategory } = client;
  const { query = {} } = useRouter();
  const { categorySlug, paginationTerm, categoryCursor } = query;
  const generalSettings = useQuery().generalSettings;
  const category = useCategory();
  const isBefore = paginationTerm === 'before';
  const posts = usePosts({
    after: !isBefore ? (categoryCursor as string) : undefined,
    before: isBefore ? (categoryCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>Posts - {generalSettings?.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Category: {category?.name}</h2>
          <Posts posts={posts.nodes} />

          <Pagination pageInfo={posts.pageInfo} basePath={`/category/${categorySlug}`} />
        </div>
      </main>

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
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
