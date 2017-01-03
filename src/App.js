import React, { Component } from 'react';
import './App.css';
import CodeLabBook from './codelab-book';


// Here we define all our material-ui ReactComponents.
import Home from './example/Pages/Home';

// Introduction Section View Components
import Overview from './example/Pages/Introduction/Overview';

const pagesJson = {
  indexComponent: Home,
  pagesList:[
  {
    isRedirect: true,
    from: "introduction",
    to: "/introduction/overview"
  },
  {
    path: "introduction",
    menuLabel: "Introduction",
    childPages: [
      {
        path: "overview",
        menuLabel: "Overview",
        component: Overview
      }
    ]
  } 
]};

class App extends Component {

  render() {
    return (
      <CodeLabBook pagesJson={pagesJson} />
    );
  }
}

export default App;
