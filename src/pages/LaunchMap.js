import { useEffect, useState } from 'react';

import { getUpcomingLaunches } from '../api';
import LaunchMapList from '../components/LaunchMapList';
import Map from '../components/map/Map';

export default function Launches() {
  const [upcoming, setUpcoming] = useState('');
  const [centerMap, setCenterMap] = useState();

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => setUpcoming(data.results))
  }, []);

  if (!upcoming) return <div></div>;

  return (
    <div className="max-h-screen overflow-hidden">
      <LaunchMapList launches={upcoming} setCenterMap={setCenterMap} />
      <div id="map">
        <Map launches={upcoming} centerMap={centerMap} />
      </div>
    </div>
  )
}
