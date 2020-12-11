import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import theme from "./styles/theme";
import LaunchDetails from "./pages/LaunchDetails";
import LaunchMap from "./pages/LaunchMap";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/launch/:id" component={LaunchDetails} />
            <Route path="/" exact component={LaunchMap} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}