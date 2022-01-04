import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import DefaultLayout from '~/layouts/DefaultLayout';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import { dateFormatted } from '~/utils/dateParser';

export default function PostPage({ slug, frontmatter, content }) {
  return (
    <Container maxW={'container.sm'} my={20}>
      <Heading fontFamily={'Work Sans'}>{frontmatter.title}</Heading>
      <Stack direction={'row'} my={3}>
        <Text>{dateFormatted(frontmatter.date)}</Text>
      </Stack>
      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </Container>
  );
}

PostPage.Layout = DefaultLayout;

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('./src/posts', params.slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  if (!frontmatter) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('./src/posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    return { slug };
  });

  console.log(posts);

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
