import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class Features extends Component {
	render() {

	const markdown = `# Features
I want this repo to be useful to many Developers/Trainers, so just go through the existing set of features which you can use now or suggest new ones.

Current Features:
- Multi Level Dockable Menu for Easy Content Navigation
- Configurable Menu Title & Book Title
- JSON Driven CodeLab Book for Showing Pages
- Supporting Basic React Components
- Support for HTML Styled Pages
- Supporting Code Highlight using highlight.js Module
- Supporting MarkDown in any Page using [react-markdown](https://github.com/rexxars/react-markdown) module by [Espen](https://github.com/rexxars)

Future Features:
- Quick Navigation to Next & Previous
- Status Marking
- Presentation Link
- Trainer/Author Dedicated Section
- <Suggest_By_Creating_Issue>`;

		return (
			<div>
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default Features;