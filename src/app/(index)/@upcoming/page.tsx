import { LaunchItem } from '@/components/launch/LaunchItem';
import { LaunchList } from '@/components/launch/LaunchList';
import { getUpcomingLaunches } from '@/lib/client';

export default async function LaunchesPanel() {
  const { data } = await getUpcomingLaunches();

  return (
    <LaunchList>
      {data?.upcoming?.map((launch, index) => (
        <LaunchItem key={index} launch={launch || {}} />
      ))}
    </LaunchList>
  );
}
