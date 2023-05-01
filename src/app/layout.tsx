import { Chakra_Petch } from '@next/font/google';
import { clsx } from 'clsx';

import { Map } from '@/components/map/Map';
import '@/styles/global.css';

const sans = Chakra_Petch({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className={clsx(sans.variable, 'bg-map-land relative h-screen w-screen font-sans text-white')}>
        <div className="fixed left-0 top-0 h-screen w-screen">
          <Map />
        </div>
        {children}
      </body>
    </html>
  );
}
