import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
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
        bg={useColorModeValue('white', 'darkBg')}
        color={useColorModeValue('gray.600', 'whiteAlpha.900')}
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
        <Flex flex={{ base: 1 }} justify={'center'}>
          <Flex display={{ base: 'none', md: 'flex' }} align={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 0 }} justify={'flex-end'}>
          <Button
            variant={'ghost'}
            onClick={toggleColorMode}
            _hover={{ color: useColorModeValue('brand.500', 'brand.400') }}
            _focus={{ ring: 0 }}
          >
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
              bg={'brand.500'}
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
      bg={useColorModeValue('white', 'darkBg')}
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
          fontWeight={500}
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
    label: 'Cómics',
    href: '/comics',
  },
];
