import {
  Container,
  Heading,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import ProjectsLists from '~/components/projects/ProjectsList';

import DefaultLayout from '~/layouts/DefaultLayout';

export default function Proyectos({ posts }) {
  return (
    <Container maxW={'container.lg'} my={20}>
      <Flex flex={1} flexDir={'column'} align={'center'} mb={12}>
        <Stack w={'fit-content'} mb={6}>
          <Heading
            fontFamily={'Work Sans'}
            fontWeight={700}
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          >
            Proyectos 📝
          </Heading>
          <Box rounded={'full'} h={'3px'} bg={'brand.500'} w={'50%'} />
        </Stack>
        <Text>Los cómics y guiones que he escrito.</Text>
      </Flex>
      <ProjectsLists />
    </Container>
  );
}

Proyectos.Layout = DefaultLayout;
