import { Launch } from '@/__generated__/graphql';
import { LaunchMarkerRadial } from './LaunchMarkerRadial';
import { LaunchTimer } from '../LaunchTimer';

export const LaunchMarker = ({ launch }: { launch: Launch }) => {
  return (
    <div className="group relative">
      <LaunchMarkerRadial status={launch.status} />
      <div className="absolute -top-[10px] left-5 flex w-[220px] flex-col">
        <span className="font-semibold">{launch.mission?.name}</span>
        <div className="flex flex-col text-white/50">
        <span>{launch.rocket?.configuration?.full_name}</span>
          <LaunchTimer statusId={launch.status?.id} windowStart={launch.window_start} windowEnd={launch.window_end} />
        </div>
      </div>
    </div>
  );
};
