import { client } from 'client';
import { GetStaticPropsContext } from 'next';

import { getNextStaticProps } from '@faustjs/next';

import Page from '..';

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { postSlug } = context.params;

  if (!(postSlug === 'after' || postSlug === 'before')) {
    return {
      notFound: true,
    };
  }

  return getNextStaticProps(context, {
    Page,
    client,
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
