import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import Highlight from 'react-syntax-highlight';

const elementTypes = {
	TEXT: 'markdown',
	CODE_SNIPPET: 'code'
}

const languages = {
	BASH: 'bash',
	JS: 'javascript',
	HTML: 'html'
}

class SettingUp extends Component {
	render() {

		const pageElements = [
			{
				type: elementTypes.TEXT,
				value:`## Setting Up New Angular & Creating Sample App
### Step1:
NodeJS & NPM are pre-requisites to Angular app development. After you install them, we need to install the Angular-CLI tool using the following command:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `npm i -g angular-cli`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step2:
In order to create a new Angular project using the CLI tool, we can run the following command:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `ng new my-crud-sample`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step3:
Now we will run our sample Angular app to test it in browser by running the following command:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `cd my-crud-sample
ng serve`
			}
		]

		return (
			<div>
				{ pageElements.map((pageElement) => {
						if(pageElement.type === elementTypes.TEXT){
							return (<ReactMarkdown source={pageElement.value} />);
						}else if(pageElement.type === elementTypes.CODE_SNIPPET){
							return (<Highlight lang={pageElement.lang} value={pageElement.value} />);
						}
					})
				}
			</div>
		);
	}
}

export default SettingUp;
