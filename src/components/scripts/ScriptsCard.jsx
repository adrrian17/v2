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
    <Container maxW={'container.sm'} mx={'auto'}>
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
      >
        <LinkBox>
          <Stack
            p={6}
            direction={'row'}
            align={'center'}
            justify={'space-between'}
            borderColor={'brand.400'}
            borderWidth={3}
            borderRadius={'xl'}
          >
            <Stack align={'center'}>
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
              <Text>Algunos de los guiones de cómic que he escrito.</Text>
            </Stack>
          </Stack>
        </LinkBox>
      </motion.div>
    </Container>
  );
}
