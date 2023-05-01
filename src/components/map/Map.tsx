'use client';

import { default as MapGL } from 'react-map-gl';

import { MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE, MAP_MAX_ZOOM, MAP_MIN_ZOOM } from '@/lib/constants';

export const Map = () => {
  return (
    <MapGL
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      maxZoom={MAP_MAX_ZOOM}
      minZoom={MAP_MIN_ZOOM}
      mapStyle={MAPBOX_MAP_STYLE}
    />
  );
};
