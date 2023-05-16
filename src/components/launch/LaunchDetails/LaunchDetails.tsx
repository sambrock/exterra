import { clsx } from 'clsx';
import type { Launch } from '@/__generated__/graphql';
import { LaunchStatus } from '../LaunchStatus';
import { LaunchDetailsImage } from './LaunchDetailsImage';
import { LaunchTimer } from '../LaunchTimer';

type LaunchDetailsProps = {
  launch: Launch;
};

export const LaunchDetails = ({ launch }: LaunchDetailsProps) => {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-[1fr,150px] gap-x-6">
      <div className="col-span-2 col-start-1 grid grid-cols-[1fr,150px] gap-x-6 max-w-3xl">
        <div
          className={clsx('flex items-baseline rounded-lg border px-3 py-1 text-xs', {
            'border-status-go border-opacity-50 bg-status-go bg-opacity-10 text-status-go ': launch.status?.id === 1,
            'border-white/20 bg-white/10 text-white/50': launch.status?.id === 2 || launch.status?.id === 8,
            'border-status-success border-opacity-50 bg-status-success bg-opacity-10 text-status-success ':
              launch.status?.id === 3,
            'border-status-failure border-opacity-50 bg-status-failure bg-opacity-10 text-status-failure ':
              launch.status?.id === 4 || launch.status?.id === 7,
            'border-status-hold border-opacity-50 bg-status-hold bg-opacity-10 text-status-hold ':
              launch.status?.id === 5,
            'border-status-in-flight border-opacity-50 bg-status-in-flight bg-opacity-10 text-status-in-flight ':
              launch.status?.id === 6,
          })}
        >
          <LaunchStatus status={launch.status} />
          <div className="ml-auto flex gap-4">
            <span>{launch.rocket?.configuration?.manufacturer?.type}</span>
            <span>{launch.mission?.type}</span>
            <span>{launch.mission?.orbit?.name}</span>
          </div>
        </div>
        <div className="flex items-center">
          <LaunchTimer
            className="col-start-2 inline-block w-[150px] w-full whitespace-nowrap text-right font-semibold"
            statusId={launch.status?.id}
            windowEnd={launch.window_end}
            windowStart={launch.window_start}
          />
        </div>
      </div>

      <h1 className="col-start-1 mx-3 mt-6 text-3xl font-bold">{launch.name?.replace('|', '—')}</h1>

      <div className="col-span-1 col-start-1 mx-3 mt-2 flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/50">
        <span>{launch.launch_service_provider?.name}</span>
        <span>{launch.pad?.location?.name}</span>
      </div>

      <div className="col-start-1 mx-3 mt-6">
        <p className="leading-6 text-white/80">{launch.mission?.description}</p>
      </div>

      {launch.image && (
        <LaunchDetailsImage
          className="col-span-2 col-start-1 mt-12 max-w-3xl"
          src={launch.image}
          alt={launch.mission?.name as string}
        />
      )}

      {/* <LaunchDetailsAgency
        className="col-span-2 col-start-1 mt-12"
        provider={launch.launch_service_provider as LaunchServiceProvider}
      /> */}

      <div className="col-span-2 col-start-1 mt-12 grid max-w-3xl grid-cols-[1fr,2fr] border-t border-white/10">
        <div className="px-3 py-2 font-medium uppercase text-white/50">Rocket</div>
        <table>
          <tbody className="text-left text-sm text-white/60">
            <TableRow label="Full name" value={launch.rocket?.configuration?.full_name as string} />
            <TableRow label="Family" value={launch.rocket?.configuration?.family as string} />
            <TableRow label="Name" value={launch.rocket?.configuration?.name as string} />
            <TableRow label="Variant" value={launch.rocket?.configuration?.variant as string} />
            <TableRow label="Length" value={`${launch.rocket?.configuration?.length as number} m`} />
            <TableRow
              label="Maiden flight"
              value={new Date(launch.rocket?.configuration?.maiden_flight as string).getFullYear().toString()}
            />
          </tbody>
        </table>
      </div>

      <div className="col-span-2 col-start-1 mt-12 grid max-w-3xl grid-cols-[1fr,2fr] border-t border-white/10">
        <div className="px-3 py-2 font-medium uppercase text-white/50">Agency</div>
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
      <td className="whitespace-nowrap pr-3 font-medium uppercase text-white/40">{label}</td>
      <td className="w-full text-right font-semibold text-white/80">{value || '—'}</td>
    </tr>
  );
};
