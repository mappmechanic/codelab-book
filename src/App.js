import React, { Component } from 'react';
import './App.css';
import CodeLabBook from './codelab-book';


// Here we define all our material-ui ReactComponents.
import Home from './example/Pages/Home';

// Introduction Section View Components
import Features from './example/Pages/Introduction/Features';
import Author from './example/Pages/Introduction/Author';
import Contributors from './example/Pages/Introduction/Contributors';

const pagesJson = {
  menuTitle: 'Contents',
  indexComponent: Home,
  pagesList:[
  {
    isRedirect: true,
    from: "introduction",
    to: "/introduction/features"
  },
  {
    path: "introduction",
    menuLabel: "Introduction",
    childPages: [
      {
        path: "features",
        menuLabel: "Features",
        component: Features
      },
      {
        path: "author",
        menuLabel: "Author",
        component: Author
      },
      {
        path: "contributors",
        menuLabel: "Contributors",
        component: Contributors
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
