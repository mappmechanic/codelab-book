import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import logo from './Assets/logo.png';


class Home extends Component {
	render() {

        const overviewText = `## Introduction 
This is a special UI Project which can be used by Techology Enthusiasts &
Trainers to create a small web/mobile app which can act as a Book for a Training Session/Workshop. This is right now biased towards a Tech Stack and uses ReactJS as a prerequisite for someone to use this.

Quick Link
- [Features](/#/introduction/features)
- [Author](/#/introduction/author)
- [Contributors](/#/introduction/contributors)

For details topics like usage of Setting Up, Highlight, Markdown etc. follow the TOC given on the left.

I would require help from other Contributors to this project, to make this more tech agnostic and let it be used by multiple people by just passing HTML pages to our app.`;

		return (
			<div>
				<div className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h2>Welcome to CodeLab Book</h2>
		        </div>
		        <ReactMarkdown source={overviewText}/>
			</div>
		);
	}
}

export default Home;