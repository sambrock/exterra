import { Suspense, useEffect, useState, lazy } from 'react';

import { getUpcomingLaunches } from '../api';
import { LaunchMapList } from '../components';

const Map = lazy(() => import('../components/map/Map'));

const renderLoader = () => <h1 className="bg-white">Loading</h1>;

export default function Launches() {
  const [upcoming, setUpcoming] = useState('');
  const [centerMap, setCenterMap] = useState();

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => setUpcoming(data.results))
  }, []);

  if (!upcoming) return <div></div>;

  return (
    <div className="max-h-screen w-screen">
      <LaunchMapList launches={upcoming} setCenterMap={setCenterMap} />
      <div id="map">
        <Suspense fallback={renderLoader()}>
          <Map launches={upcoming} centerMap={centerMap} />
        </Suspense>
      </div>
    </div>
  )
}
