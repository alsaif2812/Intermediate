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

const blobHideRoutes = ['/services/e-commerce'];

const RootLayout = ({ children }) => {
    const showBlob = !blobHideRoutes.includes(usePathname());

    return (
        <html lang="en" className={`${nunitoResult.className}`}>
            <body
                className={`${
                    showBlob
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
