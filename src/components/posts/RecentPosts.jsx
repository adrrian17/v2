import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link';

export default function RecentPosts({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'brand.400');
  const exceptColor = useColorModeValue('gray.500', 'gray.400');
  const dateColor = useColorModeValue('brand.500', 'gray.200');

  return (
    <Container maxW={'container.md'}>
      <Stack w={'fit-content'} mb={6}>
        <Heading color={useColorModeValue('gray.800', 'white')}>
          Recientes
        </Heading>
        <Box rounded={'full'} h={'4px'} bg={'brand.500'} w={'50%'} />
      </Stack>
      {posts.map((post) => {
        const options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        };

        post.dateFormatted = new Intl.DateTimeFormat('es-MX', options).format(
          new Date(post.published_at)
        );

        return (
          <Stack key={post.id} my={12}>
            <NextLink href={`/${post.slug}`} passHref>
              <Link
                fontSize={'xl'}
                fontWeight={700}
                color={titleColor}
                cursor={'pointer'}
              >
                {post.title}
              </Link>
            </NextLink>
            <Text py={2} fontSize={'lg'} color={exceptColor}>
              {post.excerpt}
            </Text>
            <Stack direction={'row'}>
              <Text color={dateColor} fontWeight={500}>
                {post.dateFormatted}
              </Text>
              <Text color={dateColor} fontWeight={500}>
                •
              </Text>
              <Text color={dateColor} fontWeight={500}>
                {post.reading_time}{' '}
                {post.reading_time > 1 ? 'minutos' : 'minuto'}
              </Text>
            </Stack>
          </Stack>
        );
      })}
    </Container>
  );
}
