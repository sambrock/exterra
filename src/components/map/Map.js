import { createRef, useEffect, useRef, useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import LaunchMarker from './LaunchMarker';

import { mapbox } from '../../config';
import { groupByLocation } from '../../utils';
import LaunchMarkerMultple from './LaunchMarkerMultple';

const Mapbox = ReactMapboxGl({
  accessToken: mapbox.accessToken,
  minZoom: mapbox.zoom.min,
  antialias: true,
});

export default function Map({ launches, centerMap }) {
  const defaultCenter = [mapbox.center.longitude, mapbox.center.latitude];
  
  let mapRef = createRef();

  useEffect(() => {
    if(!centerMap) return;
    setTimeout(() => {
      mapRef.state.map.flyTo({
        center: centerMap,
        zoom: 7,
        speed: 1.5,
        curve: 1,
        pitch: 5 + (Math.random() - 0.5) * 10,
      })
    }, 10)
  }, [centerMap, mapRef]);

  launches = groupByLocation(launches);

  return (
    <Mapbox ref={(map) => { mapRef = map }} center={defaultCenter} style={mapbox.style} containerStyle={{ ...mapbox.containerStyle }} zoom={[mapbox.zoom.default]}>
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
    </Mapbox>
  )
}