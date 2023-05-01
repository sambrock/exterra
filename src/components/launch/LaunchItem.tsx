import { clsx } from 'clsx';

import type { Results } from '@/__generated__/graphql';

export const LaunchItem = ({ launch }: { launch: Results }) => {
  return (
    <li
      className={clsx(
        'group flex flex-col rounded border border-l-4 border-y-white/5 border-r-white/5 bg-white/5 px-4 py-2',
        {
          'border-l-status-go': launch.status?.id === 1,
          'border-l-status-tbd': launch.status?.id === 2 || launch.status?.id === 8,
          'border-l-status-success': launch.status?.id === 3,
          'border-l-status-failure': launch.status?.id === 4 || launch.status?.id === 7,
          'border-l-status-hold': launch.status?.id === 5,
          'border-l-status-in-flight': launch.status?.id === 6,
        }
      )}
    >
      <div className="font-semibold text-white">{launch.name}</div>
      <div className="mt-1 flex gap-2 text-xs font-medium text-white/70">
        <span>{launch.launch_service_provider?.name}</span>
      </div>
      {/* <div className="mt-2">
        <p className="text-sm text-white/50">{launch.mission?.description?.slice(0, 150)}</p>
      </div> */}
    </li>
  );
};
