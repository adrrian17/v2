import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';

import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={2}
        px={4}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <FiX w={3} h={3} size={24} />
              ) : (
                <FiMenu w={5} h={5} size={24} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'space-between' }}
        >
          <NextLink href="/" passHref>
            <Link _hover={{ textDecoration: 'none' }} _focus={{ ring: 0 }}>
              <Text
                fontFamily={'Billion Dreams'}
                fontSize={{ base: '2xl', md: '5xl' }}
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                color={useColorModeValue('gray.800', 'white')}
              >
                Adrian Sin Acento
              </Text>
            </Link>
          </NextLink>

          <Flex display={{ base: 'none', md: 'flex' }} align={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 0 }} justify={'flex-end'}>
          <Button variant={'ghost'} ml={6} onClick={toggleColorMode}>
            {colorMode === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const router = useRouter();

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('brand.500', 'white');
  const linkUnderlineColor = useColorModeValue('brand.500', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        const active = router.asPath === navItem.href ? true : false;

        return (
          <Box key={navItem.label}>
            <NextLink href={navItem.href ?? '#'} passHref>
              <Link
                p={2}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </NextLink>
            <Box
              hidden={active ? false : true}
              rounded={'full'}
              h={'2px'}
              bg={linkUnderlineColor}
              w={3}
              ml={2}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={NextLink}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Proyectos',
    href: '/proyectos',
  },
  {
    label: 'Boletín',
    href: '/boletin',
  },
];
