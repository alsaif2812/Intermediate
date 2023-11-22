"use client"
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { Nunito } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en" className={nunito.className}>
      <body  className="md:bg-[url('/images/blob.png')]  bg-no-repeat bg-right-top w-[100%]">
      <NextTopLoader />
        <div>
        <Navbar />
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
