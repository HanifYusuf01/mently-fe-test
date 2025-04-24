import { Chivo } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const chivo = Chivo({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], 
  display: 'swap'
});


export const metadata = {
  title: 'Techrity Platform',
  description: 'A learning and community platform for tech enthusiasts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={chivo.className}>
      <div className='flex lg:gap-4 text-white h-full'>
      <div className="h-full bg-gray-50">
        <Sidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
            {children}
          </main>
      </div>
      </div>
      
  
    </body>
  </html>
  );
}
