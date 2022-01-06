import {
  Box,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function ToolsCard() {
  return (
    <Container maxW={'container.sm'} mx={'auto'} mb={12}>
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
            <NextLink href="/herramientas" passHref>
              <LinkOverlay>
                <Stack w={'fit-content'} mb={2}>
                  <Text
                    fontSize={'xl'}
                    fontFamily={'Work Sans'}
                    fontWeight={700}
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                  >
                    Herramientas 🛠
                  </Text>
                  <Box rounded={'full'} h={'3px'} bg={'brand.400'} w={'50%'} />
                </Stack>
              </LinkOverlay>
            </NextLink>
            <Text>Las apps y servicios que uso en el día a día.</Text>
          </Stack>
          <FiChevronRight size={30} />
        </Stack>
      </LinkBox>
    </Container>
  );
}
