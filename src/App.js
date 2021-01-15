import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from "./styles/theme";
import Header from "./components/layout/Header";
import LaunchDetails from "./pages/LaunchDetails";
import LaunchMap from "./pages/LaunchMap";
import Rockets from "./pages/Rockets";
import Upcoming from "./pages/Upcoming";
import Previous from "./pages/Previous";
import RocketCompare from "./pages/RocketCompare";
import './styles/tailwind.css';


export default function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/previous" component={Previous} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/rockets/compare/:compare" component={RocketCompare} />
            <Route path="/rockets" component={Rockets} />
            <Route path="/launch/:id" component={LaunchDetails} />
            <Route path="/" exact component={LaunchMap} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}