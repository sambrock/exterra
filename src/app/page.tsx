import { getUpcomingLaunches } from '@/lib/client';
import { LaunchList } from '@/components/launch/LaunchList';
import { LaunchItem } from '@/components/launch/LaunchItem';

export default async function Home() {
  const { data } = await getUpcomingLaunches();

  return (
    <main>
      <div className="fixed right-0 top-0 h-screen max-w-lg overflow-y-scroll">
        <LaunchList>
          {data?.upcoming?.map((launch, index) => (
            <LaunchItem key={index} launch={launch || {}} />
          ))}
        </LaunchList>
      </div>
    </main>
  );
}
