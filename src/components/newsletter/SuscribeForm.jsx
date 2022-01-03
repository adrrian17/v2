import { useState } from 'react';

import NextLink from 'next/link';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Text,
  Container,
  Link,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

export default function SuscribeForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('initial');
  const [error, setError] = useState(false);

  return (
    <Container
      maxW={'container.lg'}
      bg={useColorModeValue('gray.100', 'whiteAlpha.100')}
      rounded={'lg'}
      direction={'column'}
      my={24}
      p={6}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={'center'}
        justify={'space-around'}
        mb={6}
      >
        <Text
          fontFamily={'Billion Dreams'}
          fontSize={'5xl'}
          textAlign={'center'}
        >
          Café & Tinta
        </Text>
        <Stack spacing={6}>
          <Text maxW={'lg'}>
            Mi boletín quincenal donde comparto cosas interesantes que me
            encuentro por ahí y hablo sobre los proyectos en los que estoy
            trabajando. Puedes leer el primer número{' '}
            <NextLink href="/cafe-y-tinta-001" passHref>
              <Link
                textDecoration={'underline'}
                color={useColorModeValue('brand.500', 'brand.300')}
              >
                aquí
              </Link>
            </NextLink>
            .
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        as={'form'}
        spacing={'12px'}
        onSubmit={async (e) => {
          e.preventDefault();
          setError(false);
          setState('submitting');

          const res = await fetch('/api/members', {
            method: 'POST',
            body: email,
          });

          if (res.ok) {
            setState('success');
          } else {
            setError(true);
            setState('initial');
          }
        }}
      >
        <FormControl>
          <Input
            variant={'solid'}
            borderWidth={1}
            color={'gray.800'}
            _placeholder={{
              color: 'gray.400',
            }}
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            id={'email'}
            type={'email'}
            required
            placeholder={'Tu correo'}
            aria-label={'Tu correo'}
            value={email}
            disabled={state !== 'initial'}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl w={{ base: '100%', md: '40%' }}>
          <Button
            colorScheme={state === 'success' ? 'green' : 'brand'}
            isLoading={state === 'submitting'}
            w="100%"
            type={state === 'success' ? 'button' : 'submit'}
          >
            {state === 'success' ? <CheckIcon /> : 'Enviar'}
          </Button>
        </FormControl>
      </Stack>
      <Text mt={2} textAlign={'center'} color={error ? 'red.500' : 'green'}>
        {error &&
          '!Oh no ha ocurrido un error! 😢 Por favor intenta de nuevo más tarde.'}
        {!error && state === 'success' && '¡Gracias por suscribirte! 🥳'}
      </Text>
    </Container>
  );
}
