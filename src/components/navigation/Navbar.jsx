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
                ml={6}
              >
                Sin Acento
              </Text>
            </Link>
          </NextLink>

          <Flex display={{ base: 'none', md: 'flex' }} align={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          mr={{ base: 0, lg: 6 }}
        >
          <Button variant={'ghost'} ml={6} onClick={toggleColorMode}>
            {colorMode === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
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
    <Stack direction={'row'} spacing={10}>
      {NAV_ITEMS.map((navItem) => {
        const active = router.asPath === navItem.href ? true : false;

        return (
          <Stack key={navItem.label} w={'fit-contents'} spacing={0}>
            <NextLink href={navItem.href ?? '#'} passHref>
              <Link
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
              w={'50%'}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

const MobileNav = ({ onToggle }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onToggle={onToggle} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href, onToggle }) => {
  return (
    <Stack spacing={4}>
      <NextLink href={href ?? '#'} passHref>
        <Link
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
          onClick={onToggle}
          _active={{
            textDecoration: 'none',
          }}
        >
          {label}
        </Link>
      </NextLink>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Archivo',
    href: '/archivo',
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
