import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import _, { upperFirst } from 'lodash';

import LaunchMarker from './LaunchMarker';

import { mapbox } from '../../config';

export default function Map({ launches }) {
  const Map = ReactMapboxGl({
    accessToken: mapbox.accessToken,
    minZoom: mapbox.zoom.min
  });

  return (
    <Map style={mapbox.style} containerStyle={{ ...mapbox.containerStyle }} center={[mapbox.center.longitude, mapbox.center.latitude]} zoom={[mapbox.zoom.default]}  >
      {launches.map(launch => (
        <Marker coordinates={[launch.pad.longitude, launch.pad.latitude]} anchor="center" launch={launch} key={launch.id}>
          <LaunchMarker key={launch.id} launch={launch} />
        </Marker>
      ))}
    </Map>
  )
}

