'use client';

import { default as ReactMapGL } from 'react-map-gl';

export const Map = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <ReactMapGL
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{}}
        // style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/xsambrock/ckjrql6mh4ryq1ap3p7qrdkkv"
      />
    </div>
  );
};
