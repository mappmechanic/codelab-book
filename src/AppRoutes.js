import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import PageShell from './Components/PageShell';
import Home from './Components/Pages/Home';

// Introduction Section View Components
import Overview from './Components/Pages/Introduction/Overview';


const AppRoutes = (
  <Route path="/" component={PageShell}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Redirect from="introduction" to="/introduction/overview" />
    <Route path="introduction">
      <Route path="overview" component={Overview} />
    </Route>
  </Route>
);

export default AppRoutes;