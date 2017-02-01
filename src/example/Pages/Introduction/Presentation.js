import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class Presentation extends Component {
	render() {

	const markdown = `## Presentation`;
	const getPpt = () => {
		const pptIframe = `<iframe src="//www.slideshare.net/slideshow/embed_code/key/NYxMaXaIiu0QUw" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>`;
		return { __html: pptIframe}
	}

		return (
			<div>
				<ReactMarkdown source={markdown} />
				 <div dangerouslySetInnerHTML={getPpt()} />;
			</div>
		);
	}
}

export default Presentation;
