import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={'center'}
      >
        <Text>© 2021 Adrian Ayala</Text>
        <Text>
          Construido con{' '}
          <Link
            color={useColorModeValue('brand.500', 'brand.400')}
            href="https://nextjs.org/"
          >
            Next.js
          </Link>{' '}
          y ☕️
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Link
            _hover={{ color: 'brand.500' }}
            href="https://twitter.com/adrrian17"
            isExternal
          >
            <FiTwitter size={20} />
          </Link>
          <Link
            _hover={{ color: 'brand.500' }}
            href="https://github.com/adrrian17"
            isExternal
          >
            <FiGithub size={20} />
          </Link>
          <Link
            _hover={{ color: 'brand.500' }}
            href="mailto:adrian.ayala17@gmail.com"
          >
            <FiMail size={20} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
