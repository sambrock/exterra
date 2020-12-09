import { useEffect, useState } from "react";
import axios from "axios";
import apiData from './apidata.json'
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./components/layout/Header";
import LaunchList from "./components/LaunchList";
import Map from "./components/map/Map";

function App() {
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
    <div className="App">
      <GlobalStyle />
      <Header />
      <LaunchList launches={apiData.results} />
      <div id="map">
        <Map launches={apiData.results} />
      </div>
    </div>
  );
}

export default App;
