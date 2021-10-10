import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/dist/shared/lib/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Who's taller?</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
