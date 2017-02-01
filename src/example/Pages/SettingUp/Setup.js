import React, { Component } from 'react';

import Highlight from 'react-syntax-highlight';
import ReactMarkdown from 'react-markdown';

class Setup extends Component {
	render() {
	const lang1 = 'bash';
	const markdown1 = `## Install Typescript [ES6 Included]
In order to try out ES6 or Typescript code we can install **typescript** npm module. As Typescript is a superset of ES6 so we can try out all the examples of ES6 in Typescript files itself.

### Step 1:
Install NodeJS, if not present till now, then install the following npm packages globally:
`;
	const codeSnippet1 = `npm i -g typescript http-server`;

	const markdown2 = `### Step 2:
Now, we have to create a new folder to hold all our Typescript example tutorials. Go to any folder where you want to create a new project and then run the following commands:`;
	const codeSnippet2 = `mkdir AppName
cd AppName`;
	const markdown3 = `### Step 3:
Now we create a sample Typescript file named **'welcome.ts'** with the below given contents:`
	const codeSnippet3 = `function welcome(person: string) {
    return "Welcome, " + person;
}
var user = "Rahat Khanna";
welcome(user);
`;
	const markdown4 = `### Step 4:
At this step we will compile this file by following command to generate the file **welcome.js**:`
	const codeSnippet4 = `tsc welcome.ts`;
	const markdown5 = `### Step5:
After the JS file has been generated for our script, we can create a new **index.html** file to test this script. Please create the html file with following code:`;
	const codeSnippet5 = `<!DOCTYPE html>
<html>
    <head><title>TypeScript Examples</title></head>
    <body>
        <script src="welcome.js"></script>
    </body>
</html>
`;

	const markdown6 = `### Step 6:
Now, you can open index.html directly or using any web server like **http-server** with following command:`;
	const codeSnippet6 = `http-server -p 3000`


		return (
			<div>
				<ReactMarkdown source={markdown1} />
				<Highlight lang={lang1} value={codeSnippet1} />
				<ReactMarkdown source={markdown2} />
				<Highlight lang={lang1} value={codeSnippet2} />
				<ReactMarkdown source={markdown3} />
				<Highlight lang={lang1} value={codeSnippet3} />
				<ReactMarkdown source={markdown4} />
				<Highlight lang={lang1} value={codeSnippet4} />
				<ReactMarkdown source={markdown5} />
				<Highlight lang='html' value={codeSnippet5} />
				<ReactMarkdown source={markdown6} />
				<Highlight lang={lang1} value={codeSnippet6} />
			</div>
		);
	}
}

export default Setup;
