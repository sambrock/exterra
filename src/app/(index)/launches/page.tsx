import { LaunchItem } from '@/components/launch/LaunchItem';
import { LaunchList } from '@/components/launch/LaunchList';
import { getUpcomingLaunches } from '@/lib/client';

export default async function LaunchesPage() {
  const { data } = await getUpcomingLaunches();

  return (
    <LaunchList>
      {data?.upcoming?.map((launch, index) => (
        <LaunchItem href={`/launches/${launch?.id}`} key={index} launch={launch || {}} />
      ))}
    </LaunchList>
  );
}
