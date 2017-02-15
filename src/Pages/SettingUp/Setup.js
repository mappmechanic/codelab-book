import React, { Component } from 'react';

import Highlight from 'react-syntax-highlight';
import ReactMarkdown from 'react-markdown';

class Setup extends Component {
	render() {
	const lang1 = 'bash';
	const markdown1 = `## Install Polymer CLI, Bower & JSON-Server
In order to build Polymer web apps, we need to use some development server & also build tool. Polymer CLI provides all of these functionalities and is available as a Node Module. 

Also, most of the Polymer dependencies are available as **bower** dependencies so we have to install bower too. 

In order to run some data mock server, we will also use the **json-server** package which can help in running up mock **REST API** from a JSON File itself.

### Step 1:
Install NodeJS at previous step, if not present till now.

Then run following commands to install the important npm packages globally:
`;
	const codeSnippet1 = `npm i -g polymer-cli bower json-server`;

	const markdown2 = `### Step 2:
Check the polymer-cli installation by typeing the following command to get list of possible polymer commands`;
	const codeSnippet2 = `polymer help`;
	

		return (
			<div>
				<ReactMarkdown source={markdown1} />
				<Highlight lang={lang1} value={codeSnippet1} />
				<ReactMarkdown source={markdown2} />
				<Highlight lang={lang1} value={codeSnippet2} />
				<div>
					The output will look like this:<br/><br/>
					<img src={'http://i.imgur.com/4e9Xelo.png'} height="350px"/>
				</div>
			</div>
		);
	}
}

export default Setup;
