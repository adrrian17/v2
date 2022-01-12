import {
  Box,
  Container,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

import NextLink from 'next/link';

export default function ScriptsCard() {
  return (
    <Container maxW={'container.sm'} mx={'auto'} mb={12}>
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
      >
        <LinkBox>
          <Stack
            p={6}
            direction={'row'}
            align={'center'}
            justify={'space-between'}
            bg={useColorModeValue('gray.100', 'whiteAlpha.100')}
            borderRadius={'xl'}
            _hover={{
              bg: useColorModeValue('gray.200', 'whiteAlpha.200'),
            }}
          >
            <Stack>
              <NextLink href="/guiones" passHref>
                <LinkOverlay>
                  <Stack w={'fit-content'} mb={2}>
                    <Text
                      fontSize={'xl'}
                      fontFamily={'Work Sans'}
                      fontWeight={700}
                      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    >
                      Guiones 📝
                    </Text>
                    <Box
                      rounded={'full'}
                      h={'3px'}
                      bg={'brand.400'}
                      w={'50%'}
                    />
                  </Stack>
                </LinkOverlay>
              </NextLink>
              <Text>Todos los guiones de cómics que he escrito.</Text>
            </Stack>
            <FiChevronRight size={30} />
          </Stack>
        </LinkBox>
      </motion.div>
    </Container>
  );
}
