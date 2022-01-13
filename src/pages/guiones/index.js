import {
  Container,
  Heading,
  Link,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import DefaultLayout from '~/layouts/DefaultLayout';

import { NextSeo } from 'next-seo';
import NextLink from 'next/link';

import { dateFormatted } from '~/utils/dateParser';

import routes from '~/config/routes';
import data from '~/content/scripts.json';

export default function Guiones() {
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <>
      <NextSeo
        title={routes.scripts.seo.title}
        description={routes.scripts.seo.description}
        openGraph={routes.scripts.seo.openGraph}
      />
      <Container maxW={'container.sm'} my={20}>
        <Flex flex={1} flexDir={'column'} align={'center'} mb={12}>
          <Stack w={'fit-content'} mb={6}>
            <Heading
              fontFamily={'Work Sans'}
              fontWeight={700}
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            >
              Guiones 📝
            </Heading>
            <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
          </Stack>
          <Text>Algunos de los guiones de cómic que he escrito.</Text>
        </Flex>
        {data.map((script) => {
          return (
            <Flex key={script.id} my={4}>
              <Flex flex={1} align={'center'} justify={'flex-end'} mr={4}>
                <Text color={dateColor}>{dateFormatted(script.date)}</Text>
              </Flex>
              <Flex flex={2}>
                <NextLink href={script.file} passHref>
                  <Link
                    isExternal
                    fontSize={'lg'}
                    fontWeight={700}
                    color={titleColor}
                    _hover={{
                      textDecoration: 'underline 2px',
                    }}
                  >
                    {script.title}
                  </Link>
                </NextLink>
              </Flex>
            </Flex>
          );
        })}
      </Container>
    </>
  );
}

Guiones.Layout = DefaultLayout;
