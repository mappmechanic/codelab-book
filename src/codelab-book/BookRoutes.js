import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';
import PageShell from './Components/PageShell';

const getPagesListRoutes = (pagesList) => {

	const RouteComponents = pagesList.map((page, index) => {
		if(page.isRedirect){
			return (
				<Redirect key={index} from={page.from} to={page.to} />
			)
		}else if(!page.childPages || (page.childPages && page.childPages.length === 0)){
			return (
				<Route key={index} path={page.path} title={page.menuLabel} component={page.component} />
			)
		}else{
			return (
				<Route key={index} path={page.path} title={page.menuLabel} component={page.component}>
					{getPagesListRoutes(page.childPages)}
				</Route>
			)
		}
	});

	return RouteComponents;
};

const BookRoutes = (pagesJson) => (
  <Route path="/"
    menuItems={pagesJson.pagesList || []}
    menuTitle={pagesJson.menuTitle || 'Contents'}
    headerBackground={pagesJson.headerBackground || {}}
    component={PageShell}>
    <IndexRoute component={pagesJson.indexComponent} />
    {getPagesListRoutes(pagesJson.pagesList)}
  </Route>
);

export default BookRoutes;
