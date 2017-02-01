import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Banner from './Assets/es6-ts-banner.png';


class Home extends Component {
	render() {

        const overviewText = `## Introduction
This is a special place where you can get to learn Angular2. This is hand-crafted Workshop Tutorials created by [MAppMechanic](http://twitter.com/mappmechanic). This tutorials are beneficial for any Web Developer who is starting to learn Angular2 to build robust web applications.

Quick Links
- [PPTs for this Workshop](#/introduction/ppt)
- [About](#/introduction/about)
- [Angular2 Exercises](#/angular/settingup)
- [Contributors](#/introduction/contributors)

For details topics like usage of Setting Up, Tutorials, Code Snippets etc. follow the TOC given on the left.

I would require help from other Contributors to this project, to make it more elobarate and have nice examples.`;

		return (
			<div>
				<div className="App-header">
		          <img src={'https://i0.wp.com/adgllorente.com/wp-content/uploads/2016/12/angular2.jpg?fit=750%2C422'} className="App-logo" height="250px" alt="logo" />
							<div>
			          <h2>Angular 2</h2>
								<h3> For Building Scalable Web Apps</h3>
							</div>
		    </div>
		    <ReactMarkdown source={overviewText}/>
			</div>
		);
	}
}

export default Home;
