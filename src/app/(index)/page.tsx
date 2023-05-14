import { Launch } from '@/__generated__/graphql';
import { Map } from '@/components/map/Map';
import { getUpcomingLaunches } from '@/lib/client';

export default async function IndexPage() {
  const { data } = await getUpcomingLaunches();

  return (
    <div className="fixed left-0 top-0 h-screen w-screen">
      <Map launches={(data?.upcoming || []) as Launch[]} />
    </div>
  );
}
