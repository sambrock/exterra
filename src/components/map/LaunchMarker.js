import getCountryISO2 from 'country-iso-3-to-2';

import Time from '../Time';
import { Status } from '../StatusBar';

export default function LaunchMarker({ launch }) {
  if (launch.pad.location.country_code === 'UNK') launch.pad.location.country_code = 'USA';  // Fix country code issue 

  return (
    <div className="flex select-none">
      <div className="mr-3">
        <img className="h-4 mt-2" src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(launch.pad.location.country_code)}.svg`} alt="" />
      </div>
      <div className="flex flex-col mt-2" statusId={launch.status.id}>
        <span className="font-bold text-sm text-white">{launch.rocket.configuration.full_name}</span>
        <span className="text-opacity">{launch.launch_service_provider.name}</span>
        <div className="flex items-center mt-1">
          <div className="pr-4"><Time launchTime={launch.net} /></div>
          <Status status={launch.status} />
        </div>
      </div>
    </div>
  )
}