import { useEffect, useState } from "react";
import axios from "axios";
import apiData from './apidata.json'
import Map from "./components/Map";
import { GlobalStyle } from "./styles/GlobalStyle";

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
      <Map launches={apiData.results} />
    </div>
  );
}

export default App;
