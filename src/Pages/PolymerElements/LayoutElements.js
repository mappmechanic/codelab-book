import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import Highlight from 'react-syntax-highlight';

const elementTypes = {
	TEXT: 'markdown',
	CODE_SNIPPET: 'code',
    HTML:'html'
}

const languages = {
	BASH: 'bash',
	JS: 'javascript',
	HTML: 'html',
	TS: 'typescript',
    CSS: 'CSS'
}


class LayoutElements extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Layout Elements
A collection of layout related elements.

Link to browse the exhaustive list of elements - [Layout Elements Catalog Link](https://www.webcomponents.org/collection/PolymerElements/layout-elements)

### Step1: Iron Collapse
We will import the iron-collapse element first:
`		},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/iron-collapse/iron-collapse.html">`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: 
We will make a row in our experience tab to represent a company experience and will open a collapsed details content when clicked.

Add the following html code inside the div for Professional Experience:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<div class="experience">
    <div class="mainRow" data-collapse="flipkartExp" on-tap="toggleExp">
    <div class="company">
        Lead UI Dev <b>@</b> Flipkart Internet Private Ltd
    </div>
    <div class="duration">
        June 2015 - <b>Present</b>
    </div>
    </div>
    <div class="details">
    <iron-collapse id="flipkartExp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in dolor tempus, tempus ligula at, blandit elit. Praesent semper, felis at dapibus rhoncus, ex risus dignissim felis, auctor dictum felis tortor a urna. Pellentesque id commodo purus. Vivamus orci mauris, aliquam eget luctus eget, dignissim in velit. Nunc sapien nibh, consequat quis ipsum quis, rhoncus tempus orci. Cras vestibulum erat eu pellentesque aliquet. Nulla at rhoncus justo, eget ultrices dui.
    </iron-collapse>
    </div>
</div>`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step3: 
Add the following JS method to dynamically open any collapse for an experience:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`toggleExp(event){
    var expCollapseId = event.currentTarget.getAttribute("data-collapse");
    this.$[expCollapseId].toggle();
}`		
	},
    {
		type: elementTypes.TEXT,
		value: `### Step4: 
Now add the relevant CSS for it:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.CSS,
		value:`.experience{
    display: flex;
    flex-direction: column;
}

.experience .mainRow{
    border:1px solid #aeaeae;
    background:#cfd8dc;
    color:#000;
    border-radius: 5px;
    display: flex;
    font-size:14px;
    cursor:pointer;
    padding: 5px;
    z-index:5;
}

.experience .mainRow:hover{
    background: #eceff1;
}

.mainRow .company{
    flex: 4;
}
.mainRow .duration{
    flex: 1;
    justify-content: flex-end;
}

.experience .details{
    border: 1px solid;
    font-size: 12px;
    padding: 5px;
    margin-top:-20px;
    z-index: 2;
}

iron-collapse{
    margin-top: 25px;
}`		
	}
	];

		return (
			<div>
				{ pageElements.map((pageElement, index) => {
						if(pageElement.type === elementTypes.TEXT){
							return (<ReactMarkdown key={`pe-${index}`} source={pageElement.value} />);
						}else if(pageElement.type === elementTypes.CODE_SNIPPET){
							return (<Highlight key={`pe-${index}`} lang={pageElement.lang} value={pageElement.value} />);
						}else if(pageElement.type === elementTypes.HTML){
                return (<div key={`pe-${index}`} dangerouslySetInnerHTML={{ __html: pageElement.value }} />);
            }
					})
				}
			</div>
		);
	}
}

export default LayoutElements;