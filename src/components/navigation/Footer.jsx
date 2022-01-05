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
    <Container maxW={'container.sm'} mx={'auto'}>
      <Stack
        py={8}
        direction={'row'}
        justify={'space-between'}
        align={'center'}
      >
        <Text color={useColorModeValue('gray.500', 'gray.400')}>
          © 2021 Adrian Ayala
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Link
            color={useColorModeValue('gray.500', 'gray.400')}
            _hover={{ color: 'brand.500' }}
            href="/rss"
            isExternal
          >
            <FiRss size={20} />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
