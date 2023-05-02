import { Chakra_Petch } from '@next/font/google';
import { clsx } from 'clsx';

import { Map } from '@/components/map/Map';
import { getUpcomingLaunches } from './page';
import type { Launch } from '@/__generated__/graphql';
import '@/styles/global.css';

const sans = Chakra_Petch({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout({ children, ...props }: { children: React.ReactNode }) {
  // @ts-expect-error
  // There is no Next api for this yet
  const { segment } = children.props?.childProp || '';

  let launches: Launch[] = [];

  if (segment === 'upcoming' || !segment) {
    const { data } = await getUpcomingLaunches();
    launches = (data.upcoming as Launch[]) || [];
  }

  return (
    <html lang="en">
      <head />

      <body className={clsx(sans.variable, 'relative h-screen w-screen bg-map-land font-sans text-white')}>
        <div className="fixed left-8 top-8 z-[999] w-36">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="fixed left-0 top-0 h-screen w-screen">
          <Map launches={launches} />
        </div>
        {children}
      </body>
    </html>
  );
}
