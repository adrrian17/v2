import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import DefaultLayout from '~/layouts/DefaultLayout';

import { getSinglePost, getPosts } from '~/lib/ghost';

export default function PostPage({ post }) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  post.dateFormatted = new Intl.DateTimeFormat('es-MX', options).format(
    new Date(post.published_at)
  );

  return (
    <Container maxW={'container.sm'} my={20}>
      <Heading fontFamily={'Work Sans'}>{post.title}</Heading>
      <Stack direction={'row'} my={3}>
        <Text>{post.dateFormatted}</Text>
        <Text>•</Text>
        <Text>
          {post.reading_time} {post.reading_time > 1 ? 'minutos' : 'minuto'}
        </Text>
      </Stack>
      <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
}

PostPage.Layout = DefaultLayout;

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts('all');

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
