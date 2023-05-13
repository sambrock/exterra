'use client';

import { default as MapGL, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Launch } from '@/__generated__/graphql';
import { MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE, MAP_MAX_ZOOM, MAP_MIN_ZOOM } from '@/lib/constants';
import { LaunchMarker } from '../launch/LaunchMarker/LaunchMarker';

export const Map = ({ launches }: { launches: Launch[] }) => {
  // const filteredLaunches = launches.filter((launch) => {
  //   // If pad locations are within 2 degrees of each other, only show the first one
  //   // TODO: need to have a group marker for multiple launches at the same pad, but this is good enough for now
  //   const filtered = launches.filter((l) => {
  //     const lat = +(l.pad?.latitude as string);
  //     const lon = +(l.pad?.longitude as string);

  //     const launchLat = +(launch.pad?.latitude as string);
  //     const launchLon = +(launch.pad?.longitude as string);

  //     return Math.abs(lat - launchLat) < 2 && Math.abs(lon - launchLon) < 2;
  //   });

  //   return filtered[0].id === launch.id;
  // });

  return (
    <MapGL
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      maxZoom={MAP_MAX_ZOOM}
      minZoom={MAP_MIN_ZOOM}
      mapStyle={MAPBOX_MAP_STYLE}
    >
      {launches.map((launch, index) => (
        <Marker key={index} latitude={+(launch.pad?.latitude as string)} longitude={+(launch.pad?.longitude as string)}>
          <LaunchMarker launch={launch} />
        </Marker>
      ))}
    </MapGL>
  );
};
