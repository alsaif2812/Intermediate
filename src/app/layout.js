"use client";
import Head from 'next/head';
import { Nunito } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import 'remixicon/fonts/remixicon.css';

import NextTopLoader from 'nextjs-toploader';
import logo from '../../public/images/wit-logo.png';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import metadata from '../components/Metadata';

config.autoAddCss = false;

const nunitoResult = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({ children, showBackgroundImage }) => {
  return (
    <html lang="en" className={nunitoResult.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
        <link rel="icon" href={logo} />
      </Head>

      <body className={` ${showBackgroundImage ? 'md:bg-[url("/images/blob.png")] bg-no-repeat bg-right-top w-[100%]' : ''}`}>
        <NextTopLoader />
        <div>
          <Navbar showDefaultButtonColors={showBackgroundImage} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
