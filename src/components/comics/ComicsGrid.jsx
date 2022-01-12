import {
  Box,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { dateFormatted } from '~/utils/dateParser';

import NextLink from 'next/link';

import data from '~/content/comics.json';

export default function ComicsGrid() {
  const cardBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const cardText = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <SimpleGrid mt={12} columns={{ base: 1, md: 2 }} spacing={12}>
      {data.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
          }}
        >
          <LinkBox>
            <NextLink href={`/comics/${project.slug}`} passHref>
              <LinkOverlay>
                <Stack
                  overflow={'hidden'}
                  align={'center'}
                  justify={'space-between'}
                  bg={cardBg}
                  borderRadius={'xl'}
                >
                  <Box
                    w={'full'}
                    h={'200px'}
                    bgImage={project.image}
                    bgPos={'center'}
                    bgSize={'cover'}
                  />
                  <Stack p={3} align={'center'}>
                    <Tag rounded={'full'} bg={'brand.400'} color={'white'}>
                      {project.tag}
                    </Tag>
                    <Text fontSize={'xl'} fontWeight={'bold'} color={cardText}>
                      {project.title}
                    </Text>
                    <Text color={cardText}>{dateFormatted(project.date)}</Text>
                  </Stack>
                </Stack>
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </motion.div>
      ))}
    </SimpleGrid>
  );
}
