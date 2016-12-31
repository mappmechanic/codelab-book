import React, { Component } from 'react';
import {Router, useRouterHistory} from 'react-router';

import './App.css';
import AppRoutes from './AppRoutes';
import {createHashHistory} from 'history';

class App extends Component {
  constructor(){
    super();
    this.state = { open: false };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle(){
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Router
        history={useRouterHistory(createHashHistory)({queryKey: false})}
        onUpdate={() => window.scrollTo(0, 0)}
      >
        {AppRoutes}
      </Router>
    );
  }
}

export default App;
