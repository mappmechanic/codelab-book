import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class Author extends Component {
	render() {

	const markdown = `# About the Author
<img src="https://media.licdn.com/media/p/2/000/28e/362/20cbc61.jpg" align="left" style="margin:0 10px 10px 0;" />

Rahat is an IT Professional with expertise on Front End Technologies having a vast experience of developing 200+ websites, building numerous Enterprise Hybrid Mobile Apps, architecting User Interface Solutions, authoring a popular book on Ionic Framework and conducting 30+ Global Trainings on  latest frameworks and technology tools.

My online alias is **mappmechanic** as I want to help people Design, Build, Architect and Fix scalabale Applications accessible over multiple channels like Web, Mobile, TVs and other IOT devices.

International Trainer for Ionic/Cordova & Angular - Invited by MIMOS, Malaysia (Funded by Ministry of Science & Technology, Malaysian Govt) for Training Workshop

Currently developing apps using Angular2, ES6 (ES2015) , ReactJS, Ionic 2, Cordova/Phonegap, Salesforce & NodeJS. Passionate about exploring Dart, Polymer, IoT - Smart Watches & other Devices in near future.

Authored a Book on "Getting Started with Ionic" targeted for #WebDevelopers to quickly learn #MobileDevelopment and build engaging Mobile Apps 
bit.ly/1S1ulJX

Technologies in which I can be galled a Geek :
- HTML5 & CSS3
- Javascript/Ecmascript (Including ES6 & ES6+)
- ReactJS
- Angular2
- NodeJS
- Webpack
- Phonegap/Cordova
- Android & iOS Phonegap Plugins
- Git & Github
- Integrating Javascript apps to Salesforce, IBM, Oracle, SAP`;

		return (
			<div>
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default Author;