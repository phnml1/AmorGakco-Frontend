import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/ui/Header';
import NavBar from '../components/ui/Navbar';
import Script from 'next/script';
import RQProvider from '../components/RQProvider';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('../components/ui/Header'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <RQProvider>
          <DynamicHeader/>
          <div className="flex flex-col mt-12 min-h-default relative mb-navbarHeight">
            {children}
          </div> 
         
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </RQProvider>
      </body>
    </html>
  );
}
