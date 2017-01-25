import React, { Component } from 'react';

import Highlight from 'react-syntax-highlight';
import ReactMarkdown from 'react-markdown';

class Setup extends Component {
	render() {
	const lang1 = 'bash';
	const markdown1 = `## Setup New Base App
In this section of our tutorial, we will learn how to setup a new Codelab-Book. The codelab-book is available as a Node Module which can be imported into any normal React App or you can use Create-React-App to bootstrap a basic React App quickly.

Thanks to **FacebookIncubator** for this amazing repository which abstracts the idiosyncrasies of React and provide us an easy way to create React Apps. In our **Codelab-Book**, we will leverage this repo to easily create new CodeLab Books, but keeping the core library separate as a Node Module for regular enhancements and upgrades.

### Step 1:
Install NodeJS, if not present till now, then install the following npm packages globally:
`;
	const codeSnippet1 = `npm i -g create-react-app`;

	const markdown2 = `### Step 2:
Now, we have to create a new React App. Go to any folder where you want to create a new project and then run the following commands:`;
	const codeSnippet2 = `create-react-app app-name
cd app-name`;
	const markdown3 = `### Step 3:
After the previous commands have been successfully executed, then run the following command to start the dev server and sample react app will open in default browser.`
	const codeSnippet3 = `yarn start`;

		return (
			<div>
				<ReactMarkdown source={markdown1} />
				<Highlight lang={lang1} value={codeSnippet1} />
				<ReactMarkdown source={markdown2} />
				<Highlight lang={lang1} value={codeSnippet2} />
				<ReactMarkdown source={markdown3} />
				<Highlight lang={lang1} value={codeSnippet3} />
			</div>
		);
	}
}

export default Setup;