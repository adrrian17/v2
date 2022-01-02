import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react';
import DefaultLayout from '~/layouts/DefaultLayout';
import NextLink from 'next/link';

import { getPosts } from '~/lib/ghost';
import { dateFormatted, monthAndYear, numericMonth } from '~/utils/dateParser';

export default function Archivo({ posts }) {
  return (
    <Container maxW={'container.sm'} my={20}>
      <Heading fontFamily={'Work Sans'} textAlign={'center'} mb={6}>
        El Archivo 🗃
      </Heading>
      <Text textAlign={'center'}>Todos los posts en orden cronológico.</Text>
      {posts.map((post) => {
        return (
          <Stack
            key={post.id}
            className={`post-date-${numericMonth(post.published_at)}`}
          >
            <Text
              fontFamily={'Work Sans'}
              fontWeight={700}
              fontSize={'2xl'}
              className="post-label"
              mt={12}
              color={'brand.500'}
            >
              {monthAndYear(post.published_at)}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontSize={'sm'} fontWeight={500} color={'brand.500'}>
                {dateFormatted(post.published_at)}
              </Text>
              <NextLink href={`/${post.slug}`} passHref>
                <Link
                  fontSize={'lg'}
                  fontWeight={700}
                  color={'gray.800'}
                  cursor={'pointer'}
                >
                  {post.title}
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

export async function getStaticProps() {
  const posts = await getPosts('all');

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}