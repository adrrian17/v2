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
import { dateFormatted } from '~/utils/dateParser';

export default function RecentPosts({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'brand.400');
  const dateColor = useColorModeValue('gray.400', 'gray.200');

  return (
    <Container maxW={'container.sm'} mx={'auto'} mb={12}>
      <Stack w={'fit-content'} mb={6}>
        <Heading color={useColorModeValue('gray.800', 'white')}>
          Recientes
        </Heading>
        <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
      </Stack>
      {posts.map((post) => {
        return (
          <Stack key={post.id} my={6}>
            <NextLink href={`/${post.slug}`} passHref>
              <Link
                fontSize={'xl'}
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
            <Stack direction={'row'}>
              <Text color={dateColor} fontWeight={500}>
                {dateFormatted(post.frontmatter.date)}
              </Text>
            </Stack>
          </Stack>
        );
      })}
    </Container>
  );
}
