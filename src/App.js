import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import apiData from './apidata.json'
import GlobalStyle from "./styles/GlobalStyle";

import Header from "./components/layout/Header";
import LaunchList from "./components/LaunchList";
import Map from "./components/map/Map";
import theme from "./styles/theme";

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <LaunchList launches={apiData.results} />
        <div id="map">
          <Map launches={apiData.results} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
