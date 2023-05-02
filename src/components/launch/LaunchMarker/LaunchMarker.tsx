import { Launch } from '@/__generated__/graphql';
import { LaunchMarkerRadial } from './LaunchMarkerRadial';

export const LaunchMarker = ({ launch }: { launch: Launch }) => {
  return (
    <div className="group relative">
      <LaunchMarkerRadial status={launch.status} />
      <div className="absolute -top-[10px] left-5 flex w-[220px] flex-col">
        {/* <div className="flex gap-2">
          <div className="flex h-7 w-7 items-center justify-center overflow-hidden">
            <img src={'/weather-animated/day.svg'} className="scale-[1.7]" />
          </div>
          <span></span>
        </div> */}
        <span className="font-semibold">{launch.mission?.name}</span>
        <span className="text-xs text-white/50">{launch.pad?.location?.name}</span>
      </div>
    </div>
  );
};
