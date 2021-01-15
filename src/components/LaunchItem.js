import React from 'react'
import { Link } from 'react-router-dom';
import StatusBar from './StatusBar';
import Time from './Time';

const LaunchItem = ({launch}) => (
  <div className="flex flex-col cursor-pointer mb-6 sm:mb-12">
    <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} />
    <Link to={`/launch/${launch.id}`}>
      <div className="flex justify-between mb-1 font-semibold mt-3">
        <div className="text-xl ">{launch.name}</div><Time launchTime={launch.net} />
      </div>
    </Link>
    <div className={`text-opacity text-sm`}>
      <span className="mr-4">{launch.launch_service_provider.name}</span>
      <span>{launch.pad.location.name}</span>
    </div>
    {launch.mission && (
      <p className={`text-opacity overflow-hidden mt-4`}>
        {launch.mission.description.length > 150 ? `${launch.mission.description.substring(0, 150)}... ` : launch.mission.description}
        {launch.mission.description.length > 150 ? <Link to={`/launch/${launch.id}`} className="font-semibold">More</Link> : ''}
      </p>
    )}
  </div>
);

export default LaunchItem;
