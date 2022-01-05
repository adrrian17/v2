import {
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiRss } from 'react-icons/fi';

export default function Footer() {
  return (
    <Container maxW={'container.sm'}>
      <Stack py={8} justify={'center'} align={'center'} spacing={6}>
        <Text color={useColorModeValue('gray.500', 'gray.400')}>
          © 2021 Adrian Ayala
        </Text>
        <Link
          color={useColorModeValue('gray.500', 'gray.400')}
          _hover={{ color: 'brand.500' }}
          href="/rss.xml"
          isExternal
        >
          <FiRss size={20} />
        </Link>
      </Stack>
    </Container>
  );
}
