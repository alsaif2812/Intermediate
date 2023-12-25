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

const blobHideRoutes = [
    '/learn/blogs/abc',
    '/services/erp-implementation',
    '/services/e-commerce',
    '/services/business-consulting',
    '/services/workflow-automation',
    '/contact-sales',
    '/products/erpnext',
    '/products/mobileapp',
    '/products/neupos',
    '/form-submit-success',

];


const RootLayout = ({ children }) => {
    const pathname = usePathname();
    const showBlob = !blobHideRoutes.includes(pathname);
    console.log(pathname)
    return (

        <html lang="en" className={`${nunitoResult.className}`}>
            <body
                className={`${showBlob
                    ? 'md:bg-[url("/images/bg.png")] bg-no-repeat bg-top-right bg-contain'
                    : ''
                    }`}
            >
                <NextTopLoader showSpinner={false} height={6} />


                <>
                    <div>
                        {pathname !== "/form-submit-success" ? (
                            <Navbar showDefaultButtonColors={showBlob} />
                        ) : null}
                        {children}
                    </div>
                    {pathname !== "/form-submit-success" ? (

                        <Footer />
                    ) : null}

                    {pathname !== "/form-submit-success" ? (<div
                        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
                    >
                        <SpeedDial />
                    </div>) : null}
                </>
            </body>
        </html>
    );
};

export default RootLayout;
