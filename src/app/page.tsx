import { getClient } from '@/lib/client';
import { GetUpcomingLaunchesDocument, type GetUpcomingLaunchesQuery } from '@/__generated__/graphql';
import { Map } from '@/components/map/Map';

export default async function Home() {
  const client = getClient();
  const { data } = await client.query<GetUpcomingLaunchesQuery>({ query: GetUpcomingLaunchesDocument });

  return (
    <main>
      {data.upcoming?.map((launch) => (
        <div key={launch?.id}>{launch?.name}</div>
      ))}
      <Map />
    </main>
  );
}
