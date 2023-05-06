import { clsx } from 'clsx';
import type { Launch } from '@/__generated__/graphql';
import { LaunchStatus } from './LaunchStatus';
import { LaunchTimer } from './LaunchTimer';

export const LaunchItem = ({ launch }: { launch: Launch }) => {
  return (
    <li
      className={clsx(
        'border-l-2s group flex cursor-pointer flex-col rounded border border-y-white/5 border-r-white/5 bg-white/5 px-4 py-2 transition-all hover:bg-white/10',
        {
          'border-l-status-go': launch.status?.id === 1,
          'border-l-white/50': launch.status?.id === 2 || launch.status?.id === 8,
          'border-l-status-success': launch.status?.id === 3,
          'border-l-status-failure': launch.status?.id === 4 || launch.status?.id === 7,
          'border-l-status-hold': launch.status?.id === 5,
          'border-l-status-in-flight': launch.status?.id === 6,
        }
      )}
    >
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold text-white">
        {launch.name?.replace('|', '—')}
      </div>

      <div className="mt-1 flex gap-2 text-xs font-medium text-white/50">
        <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {launch.launch_service_provider?.name}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <LaunchStatus status={launch.status} />
        <LaunchTimer
          className="text-xs text-white/50"
          statusId={launch.status?.id}
          windowStart={launch.window_start}
          windowEnd={launch.window_end}
        />
      </div>
    </li>
  );
};
