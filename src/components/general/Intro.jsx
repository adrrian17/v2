import {
  Stack,
  Flex,
  Box,
  Text,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

export default function Intro() {
  return (
    <Stack
      px={{ base: 4, lg: 0 }}
      py={{ base: 12, md: 20 }}
      align={'center'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex flex={1} justify={'center'} align={'center'}>
        <Box
          height={'300px'}
          width={'300px'}
          rounded={'full'}
          overflow={'hidden'}
        >
          <Image
            alt={'Adrian Ayala'}
            fit={'contain'}
            align={'center'}
            src={'/images/avatar.jpg'}
          />
        </Box>
      </Flex>
      <Stack
        flex={2}
        direction={'column'}
        pl={{ base: 0, md: 12 }}
        pt={{ base: 12, md: 0 }}
      >
        <Stack direction={'row'}>
          <Text
            color={useColorModeValue('gray.800', 'white')}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '5xl' }}
          >
            Hola, soy Adrian
          </Text>
        </Stack>
        <Text
          letterSpacing={'tighter'}
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize={{ base: 'xl' }}
        >
          Soy barista, escritor y programador. En mis ratos libres escribo
          guiones para cómic. Ocasionalmente, hago proyectos de programación.
          Actualmente estoy aprendiendo lettering para cómic.
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
  );
}
