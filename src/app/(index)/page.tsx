import { Launch } from '@/__generated__/graphql';
import { Map } from '@/components/map/Map';
import { getUpcomingLaunches } from '@/lib/client';

export default async function IndexPage() {
  const { data } = await getUpcomingLaunches();
  console.log(data);

  return <Map launches={(data?.upcoming || []) as Launch[]} />;
}
