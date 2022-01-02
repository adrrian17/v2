import { Container } from '@chakra-ui/react';

import Navbar from '~/components/navigation/Navbar';
import Footer from '~/components/navigation/Footer';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'}>{children}</Container>
      <Footer />
    </>
  );
}
