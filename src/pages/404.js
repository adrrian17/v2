import DefaultLayout from '~/layouts/DefaultLayout';

import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Custom404() {
  return (
    <Container maxW={'container.sm'}>
      <Flex
        flexDir={'column'}
        minH={'50vh'}
        align={'center'}
        justify={'center'}
      >
        <Heading mb={6}>404</Heading>
        <Text>Has llegado a un pequeño espacio del limbo...</Text>
        <NextLink href="/" passHref>
          <Link
            color={'brand.500'}
            _hover={{
              textDecoration: 'underline 2px',
            }}
          >
            Volvamos a un lugar seguro.
          </Link>
        </NextLink>
      </Flex>
    </Container>
  );
}

Custom404.Layout = DefaultLayout;
