import {
  Container,
  Heading,
  Link,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

import DefaultLayout from '~/layouts/DefaultLayout';

import { NextSeo } from 'next-seo';
import NextLink from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { dateFormatted } from '~/utils/dateParser';
import routes from '~/config/routes';

export default function Archivo({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <>
      <NextSeo
        title={routes.archive.seo.title}
        description={routes.archive.seo.description}
        openGraph={routes.archive.seo.openGraph}
        twitter={routes.archive.seo.twitter}
      />
      <Container maxW={'container.sm'} my={20}>
        <Flex flex={1} flexDir={'column'} align={'center'} mb={12}>
          <Stack w={'fit-content'} mb={6}>
            <Heading
              fontFamily={'Work Sans'}
              fontWeight={700}
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            >
              Archivo 🗃
            </Heading>
            <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
          </Stack>
          <Text>Todos los posts ({posts.length}) en orden cronológico.</Text>
        </Flex>
        {posts.map((post) => {
          return (
            <Flex key={post.id} my={4}>
              <Flex flex={2}>
                <NextLink href={`/${post.slug}`} passHref>
                  <Link
                    fontSize={'lg'}
                    fontWeight={700}
                    color={titleColor}
                    _hover={{
                      textDecoration: 'underline 2px',
                    }}
                  >
                    {post.frontmatter.title}
                  </Link>
                </NextLink>
              </Flex>
              <Flex flex={1} align={'center'} justify={'flex-end'}>
                <Text color={dateColor}>
                  {dateFormatted(post.frontmatter.date)}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Container>
    </>
  );
}

Archivo.Layout = DefaultLayout;

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
    props: { posts },
  };
}
