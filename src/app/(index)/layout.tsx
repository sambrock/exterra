'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { Fragment } from 'react';
import { useWindowSize } from 'usehooks-ts';

type LayoutProps = {
  children: React.ReactNode;
  upcoming: React.ReactNode;
  launch: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  const launchPanel = useSelectedLayoutSegment('launch');

  const { width } = useWindowSize();
  const isMobile = width < 640;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {!isMobile && (
        <Fragment>
          <div>{launchPanel === '(.)launch' && props.launch}</div>
          <div className="fixed right-0 top-0 z-10 h-screen max-w-lg">{props.upcoming}</div>
        </Fragment>
      )}
      <div className="z-0 h-full w-full">{props.children}</div>
    </div>
  );
}
