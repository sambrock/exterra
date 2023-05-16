'use client';

import { useSelectedLayoutSegment, usePathname, useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { useEventListener, useWindowSize } from 'usehooks-ts';

type LayoutProps = {
  children: React.ReactNode;
  upcoming: React.ReactNode;
  launch: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  const launchPanel = useSelectedLayoutSegment('launch');

  const pathname = usePathname();

  const { width } = useWindowSize();
  const isMobile = width < 640;

  const router = useRouter();
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      router.push('/');
    }
  });

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {!isMobile && (
        <Fragment>
          {launchPanel === '(.)launch' && pathname !== '/' && (
            <div
              className="fixed left-0 top-0 z-10 h-screen overflow-y-scroll bg-transparent"
              style={{
                width: 'calc(100% - 446px)',
              }}
            >
              {props.launch}
            </div>
          )}

          <div className="fixed right-0 top-0 z-10 h-screen w-[446px] overflow-y-scroll border-l border-white/10 bg-black/40 p-2 backdrop-blur-lg">
            {props.upcoming}
          </div>
        </Fragment>
      )}
      <div className="z-10 h-full w-full">{props.children}</div>
    </div>
  );
}
