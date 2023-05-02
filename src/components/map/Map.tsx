'use client';

import { default as MapGL, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE, MAP_MAX_ZOOM, MAP_MIN_ZOOM } from '@/lib/constants';
import { Launch } from '@/__generated__/graphql';
import { LaunchMarker } from '../launch/LaunchMarker/LaunchMarker';

export const Map = ({ launches }: { launches: Launch[] }) => {
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
