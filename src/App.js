import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import './styles/tailwind.css';

import { Previous, LaunchDetails, LaunchMap, Rockets, Upcoming, RocketCompare } from './pages';
import { Header, Head } from './components';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head />
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
  );
}