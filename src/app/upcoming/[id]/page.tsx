import { Launch } from '@/__generated__/graphql';
import { LaunchDetails } from '@/components/launch/LaunchDetails/LaunchDetails';
import { getLaunch } from '@/lib/client';

export default async function LaunchPage({ params }: { params: { id: string } }) {
  const { data } = await getLaunch(params);
  return (
    <div className="py-20 mx-auto">
      <LaunchDetails launch={data.launch as Launch} />
    </div>
  );
}
