import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FiArrowLeftCircle } from 'react-icons/fi';

import DefaultLayout from '~/layouts/DefaultLayout';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import { dateFormatted } from '~/utils/dateParser';

import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function ComicPage({ slug, frontmatter, content }) {
  const router = useRouter();
  const url = `/comics/${slug}`;

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          url,
          site_name: frontmatter.title,
          type: 'website',
          locale: 'es_MX',
          images: [
            {
              url: frontmatter.header,
              alt: frontmatter.title,
            },
          ],
          twitter: {
            handle: '@adrrian17',
            site: '@adrrian17',
            cardType: 'summary_large_image',
          },
        }}
      />
      <Container maxW={'container.md'} my={20}>
        <Button
          mb={12}
          size={'lg'}
          variant={'link'}
          leftIcon={<FiArrowLeftCircle />}
          onClick={() => router.back()}
          _focus={{ ring: 0 }}
          _hover={{
            textDecoration: 'none',
            color: useColorModeValue('gray.800', 'whiteAlpha.900'),
          }}
        >
          Volver
        </Button>
        <Heading fontFamily={'Work Sans'}>{frontmatter.title}</Heading>
        <Stack my={3}>
          <Text fontSize={'lg'} color={'gray.500'}>
            {dateFormatted(frontmatter.date)}
          </Text>
        </Stack>
        <div
          className="post"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </Container>
    </>
  );
}

ComicPage.Layout = DefaultLayout;

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('./src/content/comics', params.slug + '.md'),
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
      slug: params.slug,
      frontmatter,
      content,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('./src/content/comics'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    return { slug };
  });

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
