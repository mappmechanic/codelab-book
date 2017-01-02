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

const getPagesListRoutes = (pagesList) => {

	const RouteComponents = pagesList.map((page) => {
		if(page.isRedirect){
			return (
				<Redirect from={page.from} to={page.to} />
			)
		}else if(!page.childPages || page.childPages && page.childPages.length === 0){
			return (
				<Route path={page.path} component={page.component} />
			)
		}else{
			return (
				<Route path={page.path} component={page.component}>
					{getPagesListRoutes(page.childPages)}
				</Route>
			)
		}
	});

	return RouteComponents;
};

const AppRoutes = (
  <Route path="/" menuItems={pagesJson.pagesList} component={PageShell}>
    <IndexRoute component={pagesJson.indexComponent} />
    {getPagesListRoutes(pagesJson.pagesList)}
  </Route>
);

export default AppRoutes;