import type { Launch } from '@/__generated__/graphql';
import { LaunchMarkerRadial } from './LaunchMarkerRadial';
import { LaunchStatus } from '../LaunchStatus';
import { LaunchTimer } from '../LaunchTimer';

export const LaunchMarker = ({ launch }: { launch: Launch }) => {
  return (
    <div className="group relative">
      <LaunchMarkerRadial status={launch.status} />
      <div className="absolute left-5 top-[-8px] flex flex-col gap-0.5">
        <div className="whitespace-nowrap text-xs font-semibold text-white/80">{launch.mission?.name}</div>
        <div className="flex gap-2">
          <LaunchStatus className="text-xs" status={launch.status} />
          {launch.status?.id === 1 && (
            <LaunchTimer
              className="whitespace-nowrap text-xs text-white/50"
              statusId={launch.status?.id}
              windowStart={launch.window_start}
              windowEnd={launch.window_end}
            />
          )}
        </div>
      </div>
    </div>
  );
};
