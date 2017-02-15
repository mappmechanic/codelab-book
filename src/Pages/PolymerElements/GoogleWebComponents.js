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


class GoogleComponents extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Google Web Components
A collection of components related to Google Public APIs like Location, Google Maps, Firebase, Charts, Feeds, Hangout, Youtube etc.

Link to browse the exhaustive list of elements - [Google Web Components Catalog Link](https://www.webcomponents.org/collection/PolymerElements/layout-elements)

### Step1: Google Map
We will first install the google-map using bower & then import the iron-collapse element first:
`		},
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`bower install google-map -S`		
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/google-map/google-map.html">`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: 
Now we will include the following HTML code inside the Academics tab:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<div class="row">
    <b>B.Tech - Computer Science & Engineering</b>
</div>
<div class="row">
    2008-12 Batch
</div>
<div class="row">
    Amity University, Noida
</div>
<div class="row">
    <google-map 
    fit-to-marker 
    zoom="13"
    api-key="AIzaSyDdh2V-lavZRJVApnXAOL2nTVBJO-5ZW-Y"
    latitude="28.543884" longitude="77.333653"
    >
    <google-map-marker 
        latitude="28.543884" 
        longitude="77.333653" 
        draggable="true">
    </google-map-marker>
    </google-map>
</div>`		
	},
    {
		type: elementTypes.TEXT,
		value:`Add following CSS to give height to google map:`		},
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.CSS,
		value:`google-map{ height: 350px }`		
	},
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

export default GoogleComponents;