import {
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import DefaultLayout from '~/layouts/DefaultLayout';

import NextLink from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { dateFormatted, monthAndYear, numericMonth } from '~/utils/dateParser';

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
  const titleColor = useColorModeValue('gray.800', 'gray.400');

  return (
    <Container maxW={'container.sm'} my={20}>
      <Heading fontFamily={'Work Sans'} textAlign={'center'} mb={6}>
        El Archivo 🗃
      </Heading>
      <Text textAlign={'center'} fontSize={'xl'}>
        Todos los posts en orden cronológico.
      </Text>
      {posts.map((post) => {
        return (
          <Stack
            key={post.id}
            className={`post-date-${numericMonth(post.frontmatter.date)}`}
          >
            <Text
              fontFamily={'Work Sans'}
              fontWeight={700}
              fontSize={'2xl'}
              className="post-label"
              mt={12}
              color={'brand.500'}
            >
              {monthAndYear(post.frontmatter.date)}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontSize={'sm'} fontWeight={500} color={'gray.500'}>
                {dateFormatted(post.frontmatter.date)}
              </Text>
              <NextLink href={`/${post.slug}`} passHref>
                <Link
                  fontSize={'lg'}
                  fontWeight={700}
                  color={titleColor}
                  cursor={'pointer'}
                  _hover={{
                    textDecoration: 'underline 2px',
                  }}
                >
                  {post.frontmatter.title}
                </Link>
              </NextLink>
            </Stack>
          </Stack>
        );
      })}
    </Container>
  );
}

Archivo.Layout = DefaultLayout;
