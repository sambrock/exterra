import { useState } from 'react';
import LaunchList from '../components/LaunchList';
import Map from '../components/map/Map';

import apiData from '../apidata.json';

export default function Launches() {
    const [upcoming, setUpcoming] = useState('');
  
    // const getUpcoming = async () => {
    //   const response = await axios.get('https://ll.thespacedevs.com/2.1.0/launch/upcoming?limit=10');
    //   const { data } = response;
  
    //   setUpcoming(data);
    // }
  
    // useEffect(() => {
    //   getUpcoming();
    // }, [])
  
    // if(!upcoming) return <div></div>;
  
  return (
    <>
      <LaunchList launches={apiData.results} />
      <div id="map">
        <Map launches={apiData.results} />
      </div>
    </>
  )
}
