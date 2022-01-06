import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { dateFormatted } from '~/utils/dateParser';

export default function RecentPosts({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Container maxW={'container.sm'} mx={'auto'} mb={12}>
      <Stack w={'fit-content'} mb={6}>
        <Heading
          fontFamily={'Work Sans'}
          fontWeight={700}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          Recientes ⏰
        </Heading>
        <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
      </Stack>
      {posts.map((post) => (
        <Flex
          key={post.slug}
          direction={{ base: 'column-reverse', md: 'row' }}
          my={4}
        >
          <Flex
            flex={1}
            justify={{ base: 'flex-start', md: 'flex-start' }}
            align={'center'}
          >
            <Text color={dateColor}>
              {dateFormatted(post.frontmatter.date)}
            </Text>
          </Flex>
          <Flex flex={2} ml={{ base: 0, md: -12 }}>
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
      ))}
    </Container>
  );
}
