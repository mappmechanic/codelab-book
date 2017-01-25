import React, { Component } from 'react';

import Highlight from 'react-syntax-highlight';
import ReactMarkdown from 'react-markdown';

class ImportCodelabBook extends Component {
	render() {
	const lang1 = 'bash';
	const markdown1 = `## Importing Codelab Book Component
In this section of our tutorial, we will learn how to setup a new Codelab-Book. The codelab-book is available as a Node Module which can be imported into any normal React App or you can use Create-React-App to bootstrap a basic React App quickly.

Firstly, install the **codelab-book** module into your app by following command`;
	const code1 = 'npm install codelab-book';
	const markdown2 = `### Import Codelab-Book into your **App.js** file.
Add the following code in **App.js** file after App.css import statement:`
	const lang2 = 'javascript';
	const code2 = `import CodeLabBook from 'codelab-book';`

		return (
			<div>
				<ReactMarkdown source={markdown1} />
				<Highlight lang={lang1} value={code1} />
				<ReactMarkdown source={markdown2} />
				<Highlight lang={lang2} value={code2} />
			</div>
		);
	}
}

export default ImportCodelabBook;