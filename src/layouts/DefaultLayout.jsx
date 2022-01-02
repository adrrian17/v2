import { Container } from '@chakra-ui/react';
import Navbar from '~/components/navigation/Navbar';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'}>{children}</Container>
    </>
  );
}
