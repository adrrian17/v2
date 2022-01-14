import {
  Container,
  Heading,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

import DefaultLayout from '~/layouts/DefaultLayout';

import ToolLists from '~/components/tools/ToolsList';

import { NextSeo } from 'next-seo';
import routes from '~/config/routes';

export default function Herramientas({ posts }) {
  return (
    <>
      <NextSeo
        title={routes.tools.seo.title}
        description={routes.tools.seo.description}
        openGraph={routes.tools.seo.openGraph}
        twitter={routes.tools.seo.twitter}
      />
      <Container maxW={'container.sm'} my={20}>
        <Flex flex={1} flexDir={'column'} align={'center'} mb={12}>
          <Stack w={'fit-content'} mb={6}>
            <Heading
              fontFamily={'Work Sans'}
              fontWeight={700}
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            >
              Herramientas 🛠
            </Heading>
            <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
          </Stack>
          <Text>Las apps y servicios que uso en el día a día.</Text>
        </Flex>
        <ToolLists />
      </Container>
    </>
  );
}

Herramientas.Layout = DefaultLayout;
