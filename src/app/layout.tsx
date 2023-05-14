import { Chakra_Petch } from 'next/font/google';
import { clsx } from 'clsx';
import { Analytics } from '@vercel/analytics/react';

import Head from './head';
import '@/styles/global.css';

const sans = Chakra_Petch({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout(props: { children: React.ReactNode; launches: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <Analytics />
      <body className={clsx(sans.variable, 'relative bg-map-water font-sans text-white')}>
        <div className="fixed left-8 top-8 z-[999] w-32">
          <img src="/logo.svg" alt="logo" />
        </div>
        {props.children}
      </body>
    </html>
  );
}
