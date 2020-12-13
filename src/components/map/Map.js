import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import LaunchMarker from './LaunchMarker';

import { mapbox } from '../../config';
import { groupByLocation } from '../../utils';
import LaunchMarkerMultple from './LaunchMarkerMultple';

export default function Map({ launches }) {
  const Map = ReactMapboxGl({
    accessToken: mapbox.accessToken,
    minZoom: mapbox.zoom.min
  });

  launches = groupByLocation(launches);

  return (
    <Map style={mapbox.style} containerStyle={{ ...mapbox.containerStyle }} center={[mapbox.center.longitude, mapbox.center.latitude]} zoom={[mapbox.zoom.default]}  >
      {launches[0].map(launch => {
        return (
          <Marker coordinates={[launch.pad.longitude, launch.pad.latitude]} anchor="center" launch={launch} key={launch.id}>
            <LaunchMarker key={launch.id} launch={launch} />
          </Marker>
        )
      })}
      {launches[1].map(launchArr => (
        <Marker coordinates={[launchArr[0].pad.longitude, launchArr[0].pad.latitude]} anchor="center" launch={launchArr[0]} key={launchArr[0].id}>
          <LaunchMarkerMultple key={launchArr[0].id} launches={launchArr} />
        </Marker>
      ))}
    </Map>
  )
}