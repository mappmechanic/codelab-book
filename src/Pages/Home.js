import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Banner from './Assets/es6-ts-banner.png';


class Home extends Component {
	render() {

        const overviewText = `## Introduction
This is a special place where you can get to learn PolymerJS. This is hand-crafted Workshop Tutorials created by [MAppMechanic](http://twitter.com/mappmechanic). This tutorials are beneficial for any Web Developer who is starting to learn Polymer to build robust web applications.

Quick Links
- [Slides for this Workshop](#/introduction/ppts)
- [About](#/introduction/about)
- [Contributors](#/introduction/contributors)

For details topics like usage of Setting Up, Tutorials, Code Snippets etc. follow the TOC given on the left.

I would require help from other Contributors to this project, to make it more elobarate and have nice examples.`;

		return (
			<div>
				<div className="App-header">
		          <img src={'https://www.polymer-project.org/images/logos/p-logo.png'} className="App-logo" height="250px" alt="logo" />
							<div>
			          <h2>PolymerJS</h2>
								<h3>WebComponents Simplified with extra Sugar Coating</h3>
							</div>
		    </div>
		    <ReactMarkdown source={overviewText}/>
			</div>
		);
	}
}

export default Home;
