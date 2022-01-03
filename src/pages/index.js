import Head from 'next/head';

import DefaultLayout from '~/layouts/DefaultLayout';
import Intro from '~/components/general/Intro';
import RecentPosts from '~/components/posts/RecentPosts';
import SuscribeForm from '~/components/newsletter/SuscribeForm';

import { getPosts } from '~/lib/ghost';

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Adrian (Sin Acento) Ayala</title>
        <meta name="description" content="Hago café y guiones para cómic." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <RecentPosts posts={posts} />
      <SuscribeForm />
    </>
  );
}

Home.Layout = DefaultLayout;
