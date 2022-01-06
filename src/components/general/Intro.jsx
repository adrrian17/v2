import {
  Stack,
  Text,
  Link,
  useColorModeValue,
  Container,
  Flex,
  Image,
} from '@chakra-ui/react';

import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

export default function Intro() {
  return (
    <Container maxW={'container.sm'} mt={12} mb={{ base: 12, md: 16 }}>
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontWeight={700}
        fontSize={'4xl'}
      >
        Hola, soy Adrian (Sin Acento)
      </Text>
      <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize={'xl'}>
        Soy barista, escritor y programador. En mis ratos libres escribo guiones
        para cómic, y ocasionalmente, hago proyectos de programación.
      </Text>
      <Stack mt={6} direction={'row'} spacing={6}>
        <Link
          _hover={{ color: 'brand.500' }}
          href="https://twitter.com/adrrian17"
          isExternal
        >
          <FiTwitter size={24} />
        </Link>
        <Link
          _hover={{ color: 'brand.500' }}
          href="https://github.com/adrrian17"
          isExternal
        >
          <FiGithub size={24} />
        </Link>
        <Link
          _hover={{ color: 'brand.500' }}
          href="mailto:adrian.ayala17@gmail.com"
        >
          <FiMail size={24} />
        </Link>
      </Stack>
    </Container>
  );
}
