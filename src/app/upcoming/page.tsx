import { GetUpcomingLaunchesDocument, type GetUpcomingLaunchesQuery } from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import { LaunchList } from '@/components/launch/LaunchList';
import { LaunchItem } from '@/components/launch/LaunchItem';

export default async function Home() {
  const client = getClient();
  const { data } = await client.query<GetUpcomingLaunchesQuery>({ query: GetUpcomingLaunchesDocument });

  return (
    <main>
      <div className="absolute right-2 top-1/2 max-w-lg -translate-y-1/2">
        <LaunchList>
          {data?.upcoming?.map((launch, index) => (
            <LaunchItem key={index} launch={launch || {}} />
          ))}
        </LaunchList>
      </div>
    </main>
  );
}