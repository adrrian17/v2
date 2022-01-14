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

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { NextSeo } from 'next-seo';

import routes from '~/config/routes';

export default function Comics({ comics }) {
  return (
    <>
      <NextSeo
        title={routes.comics.seo.title}
        description={routes.comics.seo.description}
        openGraph={routes.comics.seo.openGraph}
        twitter={routes.comics.seo.twitter}
      />
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
          <Text>Todos los cómics que he escrito y publicado.</Text>
        </Flex>
        <ComicsGrid comics={comics} />
      </Container>
    </>
  );
}

Comics.Layout = DefaultLayout;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('./src/content/comics'));

  const comics = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('./src/content/comics', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  comics.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  return {
    props: { comics },
  };
}
