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
import ComicsGrid from '~/components/comics/ComicsGrid';

export default function Comics() {
  return (
    <Container maxW={'container.lg'} my={20}>
      <Flex flex={1} flexDir={'column'} align={'center'} mb={12}>
        <Stack w={'fit-content'} mb={6}>
          <Heading
            fontFamily={'Work Sans'}
            fontWeight={700}
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          >
            Cómics 📚
          </Heading>
          <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
        </Stack>
        <Text>Todos los cómics que he escrito.</Text>
      </Flex>
      <ComicsGrid />
    </Container>
  );
}

Comics.Layout = DefaultLayout;
