import Head from 'next/head';
import Intro from '~/components/general/Intro';

import DefaultLayout from '~/layouts/DefaultLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian (Sin Acento) Ayala</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </>
  );
}

Home.Layout = DefaultLayout;
