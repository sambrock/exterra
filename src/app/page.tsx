import { GetUpcomingLaunchesDocument, type GetUpcomingLaunchesQuery } from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import { LaunchList } from '@/components/launch/LaunchList';
import { LaunchItem } from '@/components/launch/LaunchItem';
import { REVALIDATE_API } from '@/lib/constants';

export const getUpcomingLaunches = async () => {
  const client = getClient();
  if (!client) return Promise.resolve({ data: null });
  return await client.query<GetUpcomingLaunchesQuery>({
    query: GetUpcomingLaunchesDocument,
    context: {
      fetchOptions: {
        next: { revalidate: REVALIDATE_API },
      },
    },
  });
};

export default async function Home() {
  const { data } = await getUpcomingLaunches();

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
