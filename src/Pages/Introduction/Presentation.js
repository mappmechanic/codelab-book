import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import ReactMarkdown from 'react-markdown';

class Presentation extends Component {
	constructor(){
		super();
		this.selectPpt = this.selectPpt.bind(this);
	}

	state = {
		selectedPpt:0,
		slideScripts:[
			`<iframe src="//www.slideshare.net/slideshow/embed_code/key/y9gikCR5niaiis" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>`,
			`<iframe src="//www.slideshare.net/slideshow/embed_code/key/FMQTxEtbz2cXIR" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>`,
			`<iframe src="//www.slideshare.net/slideshow/embed_code/key/HLhoiZwafTWKbV" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>`,
			`<iframe src="//www.slideshare.net/slideshow/embed_code/key/xpGteshI402VIK" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>`
		]
	}

	selectPpt(index){
		this.setState({
			selectedPpt: index
		});
	}

	render() {

	const markdown = `## Slides
Slides are divided into 4 parts based on the complexity levels.`;
	const getPpt = () => {
		return { __html: this.state.slideScripts[this.state.selectedPpt]}
	}
	const btnStyle = {
		margin:12,
		float:'left'
	}

		return (
			<div>
				<ReactMarkdown source={markdown} />
				<div>
					<div>
						{["Introduction","Polymer Element","Custom Element","Advanced"].map((text, index) => {
							return (
								<div key={index}>
									<RaisedButton 
										onClick={() => {this.selectPpt(index)}}
										label={text} 
										secondary={this.state.selectedPpt !== index} 
										style={btnStyle} />
								</div>
							);
						})
						}
					</div>
				 <div dangerouslySetInnerHTML={getPpt()} />
				</div>
			</div>
		);
	}
}

export default Presentation;
