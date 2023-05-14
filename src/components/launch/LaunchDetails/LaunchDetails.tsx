import type { Launch, LaunchServiceProvider } from '@/__generated__/graphql';
import { LaunchStatus } from '../LaunchStatus';
import { LaunchDetailsImage } from './LaunchDetailsImage';
import { LaunchTimer } from '../LaunchTimer';
import { LaunchDetailsAgency } from './LaunchDetailsAgency';

type LaunchDetailsProps = {
  launch: Launch;
};

export const LaunchDetails = ({ launch }: LaunchDetailsProps) => {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-[1fr,150px] gap-x-6">
      <div className="flex w-full items-baseline rounded-lg border border-status-go border-opacity-50 bg-status-go bg-opacity-10 px-3 py-1  text-xs text-status-go">
        <LaunchStatus status={launch.status} />
        <div className="ml-auto flex gap-4">
          <span>{launch.mission?.type}</span>
          <span>{launch.mission?.orbit?.name}</span>
        </div>
      </div>

      <div className="flex items-center">
        <LaunchTimer
          className="col-start-2 inline-block w-full max-w-[150px] whitespace-nowrap text-right font-semibold"
          statusId={launch.status?.id}
          windowEnd={launch.window_end}
          windowStart={launch.window_start}
        />
      </div>

      <h1 className="col-start-1 mx-3 mt-6 text-3xl font-bold">{launch.name?.replace('|', '—')}</h1>

      <div className="col-span-2 col-start-1 mx-3 mt-2 flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/50">
        <span>{launch.launch_service_provider?.name}</span>
        <span>{launch.pad?.location?.name}</span>
      </div>

      <div className="col-start-1 mx-3 mt-6">
        <p className="leading-6 text-white/80">{launch.mission?.description}</p>
      </div>

      {launch.image && (
        <LaunchDetailsImage
          className="col-span-2 col-start-1 mt-12"
          src={launch.image}
          alt={launch.mission?.name as string}
        />
      )}

      {/* <LaunchDetailsAgency
        className="col-span-2 col-start-1 mt-12"
        provider={launch.launch_service_provider as LaunchServiceProvider}
      /> */}

      <div className="col-span-2 col-start-1 mt-12 grid grid-cols-[1fr,2fr] border-t border-white/10">
        <div className="px-3 py-2 font-medium uppercase text-white/50">Rocket</div>
        <table>
          <tbody className="text-left text-sm text-white/60">
            <TableRow label="Full name" value={launch.rocket?.configuration?.full_name as string} />
            <TableRow label="Family" value={launch.rocket?.configuration?.family as string} />
            <TableRow label="Name" value={launch.rocket?.configuration?.name as string} />
            <TableRow label="Variant" value={launch.rocket?.configuration?.variant as string} />
            <TableRow label="Length" value={`${launch.rocket?.configuration?.length as number} m`} />
            <TableRow label="Maiden flight" value={new Date(launch.rocket?.configuration?.maiden_flight as string).getFullYear().toString()} />

          </tbody>
        </table>
      </div>

      <div className="col-span-2 col-start-1 mt-12 grid grid-cols-[1fr,2fr] border-t border-white/10">
        <div className="px-3 py-2 font-semibold uppercase text-white/50">Agency</div>
        <table>
          <tbody className="text-left text-sm text-white/50">
            <TableRow label="Name" value={launch.launch_service_provider?.name as string} />
            <TableRow label="Country" value={launch.launch_service_provider?.country_code as string} />
            <TableRow label="Founded" value={launch.launch_service_provider?.founding_year as string} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <tr className="inline-block w-full gap-x-4 border-b border-white/10 px-3 py-2">
      <td className="pr-3 font-medium uppercase text-white/40 whitespace-nowrap">{label}</td>
      <td className="w-full text-right font-semibold text-white/80">{value || '—'}</td>
    </tr>
  );
};
