// components/RootLayout.js
import NextTopLoader from 'nextjs-toploader';
import { Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import 'remixicon/fonts/remixicon.css';
import logo from '../../public/images/wit-logo.png'
import './globals.css'; // Import your global styles

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Wahni IT Solutions',
  description: 'Best ERP Software in Kerela'
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={nunito.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={logo} />
      </Head>
      <body className="md:bg-[url('/images/blob.png')] bg-no-repeat bg-right-top w-[100%]">
        <NextTopLoader />
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};


export default RootLayout;
