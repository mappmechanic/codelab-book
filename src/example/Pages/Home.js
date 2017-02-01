import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Banner from './Assets/es6-ts-banner.png';


class Home extends Component {
	render() {

        const overviewText = `## Introduction
This is a special place where you can get to learn ES6 and Typescript. This is hand-crafted Workshop Tutorials created by [MAppMechanic](http://twitter.com/mappmechanic). This tutorials are beneficial for any Web Developer who is starting to learn ES6 & Typescript for Angular2 or any other web framework to build robust web applications.

Quick Links
- [PPTs for this Workshop]
- [What is ES6 & Typescript ?](/#/introduction/features)
- [Author](/#/introduction/author)
- [Contributors](/#/introduction/contributors)

For details topics like usage of Setting Up, Tutorials, Code Snippets etc. follow the TOC given on the left.

I would require help from other Contributors to this project, to make it more elobarate and have nice examples.`;

		return (
			<div>
				<div className="App-header">
		          <img src={Banner} className="App-logo" alt="logo" />
							<div>
			          <h2>Ecmascript6 & Typescript</h2>
								<h3> For Building Scalable Web Apps</h3>
							</div>
		    </div>
		    <ReactMarkdown source={overviewText}/>
			</div>
		);
	}
}

export default Home;
