import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TSW Asset Studio',
  description: 'Create image assets for The So What',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col bg-slate-900 text-white`}>
        <TopBar />
        <div className="flex-1 min-h-0">
          {children}
        </div>
      </body>
    </html>
  );
}
