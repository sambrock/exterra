import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import LaunchMarker from './LaunchMarker';

export default function Map({ launches }) {
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoieHNhbWJyb2NrIiwiYSI6ImNraWYxaHplYzBhOTYzMHFrZGVjbmk2azYifQ.YvpDpSvqa6V1SC3EVEEG3A',
    minZoom: 2
  });

  return (
    <Map
      style="mapbox://styles/xsambrock/ckif7859s0lmp1ao74wa6n5c7"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[-101.073324, 38.685516]}
      zoom={[3]}
    >
      {launches.map(launch => (
        <Marker coordinates={[launch.pad.longitude, launch.pad.latitude]} anchor="center" launch={launch} key={launch.id}>
          <LaunchMarker key={launch.id} launch={launch} />
        </Marker>
      ))}
    </Map>
  )
}

