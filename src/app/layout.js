// components/RootLayout.js
import NextTopLoader from 'nextjs-toploader';
import { Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import 'remixicon/fonts/remixicon.css';
import logo from '../../public/images/wit-logo.png'
import './globals.css'; // Import your global styles
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});
// Consolidate metadata definitions
export const metadata = {
  title: 'Best ERP Software in Kerala, ERP Companies in Kochi, Wahni',
  description: 'Wahni IT Solutions offers Top ERP Software in Kochi Kerala for Retail, Healthcare, Education, Manufacturing, Real Estate, Distribution & Agriculture.',
  keyword: 'erp solutions, best erp software in india, erp for schools india, erp software solutions',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={nunito.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
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

