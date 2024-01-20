'use client';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'remixicon/fonts/remixicon.css';

import React, { Fragment } from 'react';
import Footer from '@/components/Footer';
import { GoogleTagManager } from '@next/third-parties/google';

import Navbar from '@/components/Navbar';
import NextTopLoader from 'nextjs-toploader';
import { Nunito } from 'next/font/google';
import SpeedDial from '../components/SpeedDial';

import { config } from '@fortawesome/fontawesome-svg-core';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

config.autoAddCss = false;

const nunitoResult = Nunito({
    subsets: ['latin'],
    display: 'swap',
});

const blobHideRoutes = [
    '(/services/.*)',
    '(/contact-sales/.*)',
    '(/products/.*)',
    '(/form-submit-success/.*)',
];

const bgHideRoutes = ['(/learn/blogs/.*)', '(/learn/case-studies/.*)'];

export default function RootLayout({ children }) {
    let isBgHideRoute = false;
    let isBlobHideRoute = false;
    const pathname = usePathname();

    bgHideRoutes.forEach((pattern) => {
        if (pathname.match(pattern)) {
            isBgHideRoute = true;
            return;
        }
        isBlobHideRoute = false;
        return;
    });

    blobHideRoutes.forEach((pattern) => {
        if (pathname === '/') {
            isBlobHideRoute = false;
            return;
        }
        if (pathname.match(pattern)) {
            isBlobHideRoute = true;
            return;
        }
    });

    const getBgClass = () => {
        if (isBgHideRoute) {
            return null;
        }

        if (isBlobHideRoute) {
            return 'md:bg-[url("/images/bg-2.png")] bg-no-repeat bg-top-right bg-contain';
        } else {
            return 'md:bg-[url("/images/bg.png")] bg-no-repeat bg-top-right bg-contain';
        }
    };

    const bgClass = getBgClass();

    return (
        <html lang="en" className={`${nunitoResult.className} select-none`}>
            <GoogleTagManager gtmId="GTM-K95WCZQ" />
            <body className={`${bgClass} body`}>
                <NextTopLoader showSpinner={false} height={6} />

                <Fragment>
                    <div>
                        {pathname !== '/form-submit-success' ? (
                            <Navbar showDefaultButtonColors={isBlobHideRoute} />
                        ) : null}

                        {children}
                        {pathname !== '/contact-me' ? <div id='layout' className='text-[#2e2e2e] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold py-4 sm:py-6 flex items-center justify-center rounded-t-lg shadow-md'>
                            <p className='text-center'>
                                Made with <span className='font-extrabold gradient-text'>❤️ & AL-SAIF</span>
                                <Link href='/contact-me' className='ml-2 sm:ml-4 text-xs sm:text-sm cursor-pointer hover:underline font-extrabold transition duration-500'>
                                    How to reach me?
                                </Link>
                            </p>
                        </div> : null}
                    </div>

                    {pathname !== '/form-submit-success' ? <Footer /> : null}

                    {pathname !== '/form-submit-success' ? (
                        <div
                            style={{
                                position: 'fixed',
                                bottom: '20px',
                                right: '20px',
                            }}
                        >
                            <SpeedDial />
                        </div>
                    ) : null}
                </Fragment>
            </body>
        </html >
    );
}
