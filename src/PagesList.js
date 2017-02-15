// Here we define all our material-ui ReactComponents.
import Home from './Pages/Home';

// Introduction Section View Components
import Presentation from './Pages/Introduction/Presentation';
import About from './Pages/Introduction/About';
import Contributors from './Pages/Introduction/Contributors';
import Setup from './Pages/SettingUp/Setup';
import NodeJS from './Pages/SettingUp/Node';
import Base from './Pages/Starter/Base';

import PolymerElements from './Pages/PolymerElements';

const PagesList = {
  menuTitle: 'PolymerJS',
  headerBackground:'#1565c0',
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
        path: "slides",
        menuLabel: "Slides",
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
  {
    path: "settingup",
    menuLabel: "Install & Setup",
    childPages: [
      {
        path: "installnode",
        menuLabel: "Install NodeJS & GIT",
        component: NodeJS
      },
      {
        path: "npminstall",
        menuLabel: "Install Polymer-CLI",
        component: Setup
      }
    ]
  },
  {
    path: "starter",
    menuLabel: "Starter App",
    childPages: [
      {
        path: "base",
        menuLabel: "App Template",
        component: Base
      },
    ]
  },
  {
    path: "elements",
    menuLabel: "Polymer Elements",
    childPages: [
      {
        path: "usingone",
        menuLabel: "Using an Element",
        component: PolymerElements.UsingElement
      },
      {
        path: "paper-elements",
        menuLabel: "Paper Elements",
        component: PolymerElements.PaperElements
      },
      {
        path: "iron-elements",
        menuLabel: "Iron Elements",
        component: PolymerElements.IronElements
      },
      {
        path: "layout-elements",
        menuLabel: "Layout Elements",
        component: PolymerElements.LayoutElements
      },
      {
        path: "google-components",
        menuLabel: "Google Web Components",
        component: PolymerElements.GoogleComponents
      },
      {
        path: "gold-elements",
        menuLabel: "Gold Elements",
        component: PolymerElements.GoldElements
      },
      {
        path: "app-elements",
        menuLabel: "App Elements",
        component: PolymerElements.AppElements
      },
      {
        path: "custom-elements",
        menuLabel: "Custom Elements",
        component: PolymerElements.CustomElements
      },
    ]
  },
]};

export default PagesList;
