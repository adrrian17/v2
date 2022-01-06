import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Button,
  IconButton,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { FiArrowRightCircle } from 'react-icons/fi';
import { dateFormatted } from '~/utils/dateParser';

export default function RecentPosts({ posts }) {
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const dateColor = useColorModeValue('gray.500', 'gray.500');

  return (
    <Container maxW={'container.sm'} mx={'auto'} mb={12}>
      <Stack w={'fit-content'} mb={6}>
        <Text
          fontSize={'xl'}
          fontFamily={'Work Sans'}
          fontWeight={700}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          Recientes ⏰
        </Text>
        <Box rounded={'full'} h={'3px'} bg={'brand.400'} w={'50%'} />
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
      <Flex flex={1} justify={'center'} mt={10}>
        <NextLink href="/archivo" passHref>
          <Button
            variant={'link'}
            rightIcon={<FiArrowRightCircle />}
            _focus={{ ring: 0 }}
            _hover={{
              textDecoration: 'none',
              color: useColorModeValue('gray.800', 'whiteAlpha.900'),
            }}
          >
            Ver más posts
          </Button>
        </NextLink>
      </Flex>
    </Container>
  );
}
