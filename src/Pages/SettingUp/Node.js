import React, { Component } from 'react';

import Highlight from 'react-syntax-highlight';
import ReactMarkdown from 'react-markdown';

class NodeJS extends Component {
	render() {
	const lang1 = 'bash';
	const markdown1 = `## Install NodeJS & GIT
**NodeJS** has become the defacto tool for Dev Environment of any Front End Projects. NPM - the Node Package Manager has emerged as the only strong candidate for management of front end modules/components.

**NodeJS** is a JavaScript based server side environment to build backend systems. NodeJS has an efficient package manager which takes care of maintaining a central repository of packages, installing them, version management and dependency management. NPM has become the default dependency manager for a lot of other frameworks apart from NodeJS. Polymer framework also leveraged this successful package manager & also bower so we have to install it for hybrid app development.

**GIT** is also required to resolve most of dependencies in NPM. Git download url is **[https://git-scm.com/downloads](https://git-scm.com/downloads)**.

### Step1:
In order to install **NodeJS**, download the binary for the respective **OS – windows, linux or mac os** from the following link: **[https://nodejs.org/download/](https://nodejs.org/download/)**

On a Mac or Linux, you can use a package manager like brew to install NodeJS.
`;
	const codeSnippet1 = `brew install node`;

	const markdown2 = `### Step 2:
After the node installation is complete, please type in the following commands to test the installation:`;
	const codeSnippet2 = `node -v
npm -v`;
	const markdown3 = `The appropriate installed version for Node & NPM will be written to the output. The node version should be greater than 4.0.0 and less than 6.0.0.

There is a package.json file generated which stores the dependent modules and meta information about the specific NodeJS project.`
	
		return (
			<div>
				<ReactMarkdown source={markdown1} />
				<Highlight lang={lang1} value={codeSnippet1} />
				<ReactMarkdown source={markdown2} />
				<Highlight lang={lang1} value={codeSnippet2} />
				<ReactMarkdown source={markdown3} />
			</div>
		);
	}
}

export default NodeJS;
