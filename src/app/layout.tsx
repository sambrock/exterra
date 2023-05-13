import { Chakra_Petch } from 'next/font/google';
import { clsx } from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import { Map } from '@/components/map/Map';
import type { Launch } from '@/__generated__/graphql';
import '@/styles/global.css';
import Head from './head';
import { getUpcomingLaunches } from '@/lib/client';

const sans = Chakra_Petch({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { data } = await getUpcomingLaunches();

  return (
    <html lang="en">
      <Head />
      <Analytics />
      <body className={clsx(sans.variable, 'relative h-screen w-screen bg-map-land font-sans text-white')}>
        <div className="fixed left-8 top-8 z-[999] w-40">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="fixed left-0 top-0 h-screen w-screen">
          <Map launches={(data?.upcoming as Launch[]) || []} />
        </div>
        {children}
      </body>
    </html>
  );
}
