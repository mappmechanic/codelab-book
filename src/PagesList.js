// Here we define all our material-ui ReactComponents.
import Home from './example/Pages/Home';

// Introduction Section View Components
import Presentation from './example/Pages/Introduction/Presentation';
import About from './example/Pages/Introduction/About';
import Contributors from './example/Pages/Introduction/Contributors';
import Setup from './example/Pages/SettingUp/Setup';
import DataTypes from './example/Pages/Typescript/DataTypes';

import Angular from './example/Pages/Angular';

const PagesList = {
  menuTitle: 'Angular 2',
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
        path: "ppt",
        menuLabel: "Presentation",
        component: Presentation
      },
      {
        path: "about",
        menuLabel: "About",
        component: About
      },
      {
        path: "contributors",
        menuLabel: "Contributors",
        component: Contributors
      }
    ]
  },
  // {
  //   path: "settingup",
  //   menuLabel: "Install & Setup",
  //   childPages: [
  //     {
  //       path: "npminstall",
  //       menuLabel: "Install Typescript",
  //       component: Setup
  //     }
  //   ]
  // },
  // {
  //   path: "typescript",
  //   menuLabel: "Typescript Exercises",
  //   childPages: [
  //     {
  //       path: "datatypes",
  //       menuLabel: "DataTypes",
  //       component: DataTypes
  //     },
  //     {
  //       path: "functions",
  //       menuLabel: "Functions",
  //       component: DataTypes
  //     },
  //   ]
  // },
  {
    path: "angular",
    menuLabel: "Angular 2 Exercises",
    childPages: [
      {
        path: "settingup",
        menuLabel: "Setting Up",
        component: Angular.SettingUp
      },
      {
        path: "types",
        menuLabel: "Basic Type Checking",
        component: Angular.Types
      },
      {
        path: "component",
        menuLabel: "New Component",
        component: Angular.Component
      },
      {
        path: "list",
        menuLabel: "List & InBuilt Directives",
        component: Angular.List
      },
      {
        path: "forms",
        menuLabel: "Forms & Input Controls",
        component: Angular.Forms
      },
      {
        path: "services",
        menuLabel: "Services & API Integration",
        component: Angular.Services
      },
    ]
  },
]};

export default PagesList;
