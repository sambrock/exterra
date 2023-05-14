import { clsx } from 'clsx';
import type { LaunchServiceProvider } from '@/__generated__/graphql';

type LaunchDetailsAgencyProps = {
  provider: LaunchServiceProvider;
} & React.ComponentProps<'div'>;

export const LaunchDetailsAgency = ({ provider, ...props }: LaunchDetailsAgencyProps) => {
  return (
    <div {...props} className={clsx(props.className, 'grid grid-cols-[150px,1fr] gap-x-6 py-2')}>
      <h2 className="mb-2 py-3 text-sm font-semibold uppercase text-white/40">Agency</h2>
      <div className="grid grid-cols-[2fr,1fr] self-start rounded-xl border border-white/5 px-3 py-3 text-white/80">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-0">
            <span className="mb-2 text-xs font-medium uppercase text-white/40">Name</span>
            <span className="text-base font-semibold leading-none">{provider.name}</span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="mb-2 text-xs font-medium uppercase text-white/40">Country</span>
            <span className="text-base font-semibold leading-none">{provider.country_code}</span>
          </div>
        </div>
        <div className="flex items-start justify-end overflow-hidden pt-3">
          <img src={provider.logo_url as string} alt={provider.name as string} className="w-32" />
        </div>
      </div>
    </div>
  );
};
