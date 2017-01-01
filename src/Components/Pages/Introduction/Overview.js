import React, { Component } from 'react';
import { AppBar } from 'material-ui';

import ReactMarkdown from 'react-markdown';

class Overview extends Component {
	render() {

	const markdown = `# learning-react
Learning React JS by Writing Small Example Apps

## Step 1:

We will create a new folder named *"ReactApp"* and then inside it create folders *'public'*, *'src'*.

Also, create a new file called *webpack.config.js* and put the following code in the file:`;

		return (
			<div>
				Overview
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default Overview;