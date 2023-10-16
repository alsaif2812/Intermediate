import './globals.css';
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Wahni-IT',
  description: 'Wahni-It-Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="md:bg-[url('/images/blob.png')] bg-no-repeat bg-right-top w-[100%]">
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
