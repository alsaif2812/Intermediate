import './globals.css';
import { Nunito } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/Navbar';
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Wahni-IT',
  description: 'Wahni-It-Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body  className="md:bg-[url('/images/blob.png')] bg-no-repeat bg-right-top w-[100%]">
        <div>
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
