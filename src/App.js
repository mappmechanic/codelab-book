import React, { Component } from 'react';
import './App.css';
import CodeLabBook from './codelab-book';
import PagesList from './PagesList';

class App extends Component {

  render() {
    return (
      <CodeLabBook pagesJson={PagesList} />
    );
  }
}

export default App;
