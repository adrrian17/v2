import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link';

export default function RecentPosts({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'brand.400');
  const dateColor = useColorModeValue('brand.500', 'gray.200');

  return (
    <Container maxW={'container.lg'} my={12}>
      <Stack w={'fit-content'} mb={6}>
        <Heading color={useColorModeValue('gray.800', 'white')}>
          Recientes
        </Heading>
        <Box rounded={'full'} h={'4px'} bg={'brand.500'} w={'50%'} />
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignContent={'center'}
      >
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
            <Stack key={post.id}>
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
      </SimpleGrid>
    </Container>
  );
}
