import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class About extends Component {
	render() {

	const markdown = `## About Angular2
<img src='https://angular.io/resources/images/logos/angular2/angular.png' align="left" style="margin:0 10px 10px 0;" height="200px" />

### About Angular2

Angular 2 or simply Angular is a reincarnation of the most popular front end framework AngularJS. Angular 2 has been redeveloped from scratch keeping in mind the principles of Performance, Mobile support, Cross Platform support and easy learning curve. With the introduction of Typescript along with Angular 2, the ever tested features of Object Oriented Principles can now empower Angular 2. Angular 2 can be used to build highly scalable Consumer Web experiences and Enterprise web applications.

### About Workshop Course

This course is designed to teach participants with a sound understanding of Typescript & Angular2. It will enable them to  build scalable Web Apps using Angular2. It will be based on Concept discussions along with demos & Hands-On lab exercises during the Tutorial. This course assumes that the participants are well aware of Javascript and the ES6 syntax. If the participants are not aware of those, you can contact Rahat for a basic or advanced Javascript training prior to this course. We also use NPM/Yarn and Webpack, to help participants learn on how to manage modules and make them reusable. NPM/Yarn currently is the largest open source javascript package library in the world.

### Format
This course combines lecture, discussion and demonstrations with hands-on labs.
`;

		return (
			<div>
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default About;
