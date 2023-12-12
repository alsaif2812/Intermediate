// "use client"
import NextTopLoader from 'nextjs-toploader';
import { Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import 'remixicon/fonts/remixicon.css';
import logo from '../../public/images/wit-logo.png'
import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// import { metadata } from '../components/Metadata'
config.autoAddCss = false;

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});
import metadata from '../components/Metadata'
const RootLayout = ({ children, showBackgroundImage }) => {
  return (
    <html lang="en" className={nunito.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
        <link rel="icon" href={logo} />
      </Head>

      <body className={` ${showBackgroundImage ? 'md:bg-[url("/images/blob.png")] bg-no-repeat bg-right-top w-[100%]' : ''}`}>
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

