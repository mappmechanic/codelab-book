import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class About extends Component {
	render() {

	const markdown = `## About Polymer CodelabBook
<img src='https://www.polymer-project.org/images/logos/p-logo.png' align="left" style="margin:0 10px 10px 0;" height="200px" />

### About Polymer

Polymer allows you to build fully custom web elements of your own for more complex components composed of the building blocks you are used to with the standard set of HTML elements. This course is an introduction to Polymer, and should get you started building your own customisable web elements that you can use on their own, or even with your favourite framework like Angular or React!

The Polymer library is designed to make it easier and faster for developers to create great, reusable components for the modern web. By the time you're done with this course you'll understand how Polymer can be used to build web applications. This includes learning the fundamentals of Polymer, how to use Polymer Elements from the Polymer Element Catalog, and how to create your own custom elements. This is a hands-on course that you can follow along with and learn by doing.

### About Workshop Course

This course is designed to teach participants with a sound understanding of Polymer & WebComponents. It will enable them to  build scalable Web Apps using Polymer. It will be based on Concept discussions along with demos & Hands-On lab exercises during the Tutorial. This course assumes that the participants are well aware of Javascript, CSS & HTML. If the participants are not aware of those, you can contact Rahat for a basic or advanced Javascript training prior to this course. We also use NPM/Yarn and Webpack, to help participants learn on how to manage modules and make them reusable. NPM/Yarn currently is the largest open source javascript package library in the world.

### Format
This course combines **lecture**, **discussion** and **demonstrations** with hands-on labs.
`;

		return (
			<div>
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default About;
