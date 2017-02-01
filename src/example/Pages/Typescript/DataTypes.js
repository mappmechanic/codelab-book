import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class Presentation extends Component {
	render() {

	const markdown = `## TS - DataTypes
This page will get the presentation for this course.`;

		return (
			<div>
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default Presentation;
