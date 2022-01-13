import Head from 'next/head';
import { NextSeo } from 'next-seo';

import DefaultLayout from '~/layouts/DefaultLayout';
import Intro from '~/components/general/Intro';
import RecentPosts from '~/components/posts/RecentPosts';
import ExtraContent from '~/components/general/ExtraContent';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import routes from '~/config/routes';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('./src/content/posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('./src/content/posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  return {
    props: { posts: posts.slice(0, 5) },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <NextSeo
        title={routes.home.seo.title}
        description={routes.home.seo.description}
        openGraph={routes.home.seo.openGraph}
      />
      <Intro />
      <RecentPosts posts={posts} />
      <ExtraContent />
    </>
  );
}

Home.Layout = DefaultLayout;
