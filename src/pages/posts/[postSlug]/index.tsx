import { client, Post } from 'client';
import { Footer, Header, HeroLeftJustified } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps, is404 } from '@faustjs/next';

export interface PostProps {
  post: Post | Post['preview']['node'] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>

      <HeroLeftJustified title={post?.title()} />

      <main className="content content-single">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
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
