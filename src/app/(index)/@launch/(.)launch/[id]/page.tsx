import { Launch } from '@/__generated__/graphql';
import { LaunchDetails } from '@/components/launch/LaunchDetails/LaunchDetails';
import { getLaunch } from '@/lib/client';

export default async function LaunchPanel({ params }: { params: { id: string } }) {
  const { data } = await getLaunch(params);

  return (
    <div className="min-h-screen bg-black/40 py-20 backdrop-blur-lg">
      <LaunchDetails launch={data.launch as Launch} />
    </div>
  );
}
