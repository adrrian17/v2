import Navbar from '~/components/navigation/Navbar';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
