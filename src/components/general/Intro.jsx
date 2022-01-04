import {
  Stack,
  Text,
  Link,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

export default function Intro() {
  return (
    <Container
      maxW={'container.sm'}
      mx={'auto'}
      mt={{ base: 0, md: 12 }}
      mb={24}
    >
      <Stack align={'center'} direction={{ base: 'column', md: 'row' }}>
        <Stack flex={2} direction={'column'} pt={{ base: 12, md: 0 }}>
          <Stack direction={'row'}>
            <Text
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={600}
              fontSize={'5xl'}
            >
              Hola, soy Adrian
            </Text>
          </Stack>
          <Text
            letterSpacing={'tight'}
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={'xl'}
          >
            Soy barista, escritor y programador. En mis ratos libres escribo
            guiones para cómic. Ocasionalmente, hago proyectos de programación.
          </Text>
          <Stack pt={6} direction={'row'} spacing={6}>
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
        </Stack>
      </Stack>
    </Container>
  );
}
