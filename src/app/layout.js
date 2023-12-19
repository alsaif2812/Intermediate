'use client';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'remixicon/fonts/remixicon.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NextTopLoader from 'nextjs-toploader';
import SpeedDial from '../components/SpeedDial';

import { Nunito } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import { usePathname } from 'next/navigation';

config.autoAddCss = false;

const nunitoResult = Nunito({
  subsets: ['latin'],
  display: 'swap',
});
const metadata = {
  title: 'Best ERP Software in Kerala, ERP Companies in Kochi, Wahni',
  description: 'Wahni IT Solutions offers Top ERP Software in Kochi Kerala for Retail, Healthcare, Education, Manufacturing, Real Estate, Distribution & Agriculture.',
  keyword: 'erp solutions, best erp software in india, erp for schools india, erp software solutions',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-icon.png',
  },
};



const blobHideRoutes = ['/learn/blogs/abc', '/services/erp-implementation', '/services/e-commerce', '/services/business-consulting', '/services/workflow-automation'];

const RootLayout = ({ children }) => {
  const showBlob = !blobHideRoutes.includes(usePathname());

  return (
    <html lang="en" className={`${nunitoResult.className}`}>
      <body
        className={`${showBlob
            ? 'md:bg-[url("/images/blob.png")] bg-no-repeat bg-right-top'
            : ''
          }`}
      >
        <NextTopLoader />

        <div>
          <Navbar showDefaultButtonColors={showBlob} />
          {children}
        </div>

        <Footer />

        <div
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <SpeedDial />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
