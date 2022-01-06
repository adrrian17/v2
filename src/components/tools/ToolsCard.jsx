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

export default function ToolsCard() {
  return (
    <Container maxW={'container.sm'} mx={'auto'} mb={12}>
      <LinkBox>
        <Stack
          p={8}
          bg={'gray.50'}
          borderRadius={'xl'}
          _hover={{
            bg: 'gray.100',
          }}
        >
          <NextLink href="/herramientas" passHref>
            <LinkOverlay>
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
            </LinkOverlay>
          </NextLink>
          <Text>Las apps y servicios que uso en el día a día.</Text>
        </Stack>
      </LinkBox>
    </Container>
  );
}
