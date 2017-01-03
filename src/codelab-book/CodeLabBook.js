import React, { Component, PropTypes } from 'react';
import {Router, useRouterHistory} from 'react-router';

import './CodeLabBook.css';
import BookRoutes from './BookRoutes';
import {createHashHistory} from 'history';

class CodeLabBook extends Component {
  constructor(){
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <Router
        history={useRouterHistory(createHashHistory)()}
        onUpdate={() => window.scrollTo(0, 0)}
      >
        {BookRoutes(this.props.pagesJson)}
      </Router>
    );
  }
}

export default CodeLabBook;
