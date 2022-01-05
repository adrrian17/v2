import {
  Container,
  Heading,
  Link,
  Stack,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import DefaultLayout from '~/layouts/DefaultLayout';

import NextLink from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { dateFormatted } from '~/utils/dateParser';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('./src/posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('./src/posts', filename),
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

export default function Archivo({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Container maxW={'container.sm'} my={20}>
      <Heading fontFamily={'Work Sans'} textAlign={'center'} mb={12}>
        El Archivo 🗃
      </Heading>
      {posts.map((post) => {
        return (
          <Flex key={post.id} my={4}>
            <Flex flex={1} align={'center'} justify={'flex-end'} mr={4}>
              <Text color={dateColor}>
                {dateFormatted(post.frontmatter.date)}
              </Text>
            </Flex>
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
          </Flex>
        );
      })}
    </Container>
  );
}

Archivo.Layout = DefaultLayout;
