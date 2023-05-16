import { Launch } from '@/__generated__/graphql';
import { LaunchDetails } from '@/components/launch/LaunchDetails/LaunchDetails';
import { getLaunch } from '@/lib/client';

export default async function LaunchPage({ params }: { params: { id: string } }) {
  const { data } = await getLaunch(params.id);

  return (
    <div className="mx-auto py-20">
      <LaunchDetails launch={data.launch as Launch} />
    </div>
  );
}
