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


class CustomElements extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Custom Elements
Now finally we come to the most important part of the Polymer framework or the Web Components world. We will now try our hands on creating few custom elements and then converting/reorganising our whole app into heirarchy of custom elements.

### Step1:
Create a new folder **contact** where will keep all our components for the contact page, also we will create an empty **social.html** where we will add a new custom element to display a social card:`		},
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`mkdir ./src/contact`		
	},
	{
		type: elementTypes.TEXT,
		value:`### Step2:
Now we will create the structure for our custom element with important parts like **dom-module**, **template** & **Polymer({})** element.

Add the below given code to **social.html** file inside contact folder:`		
	},
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value: `<link rel="import" href="../../bower_components/polymer/polymer.html">
<link rel="import" href="../shared-styles.html">

<dom-module id="social-card">
  <template>
    <style include="shared-styles">
      :host {
        display: block;
      }
    </style>

    <div class="social-card">
      [[type]]
    </div>
  </template>

  <script>
    Polymer({
      is: 'social-card',
      properties: {
          type: {
              type: String,
              value: 'link'
          }
      }
    });
  </script>
</dom-module>
`
    },
	{
		type: elementTypes.TEXT,
		value: `### Step3: 
Now we will update the **my-view3.html** file to import the new component we have made and then use it to display different instances.

Add the following code:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:` <!-- Contact Specific Components -->
<link rel="import" href="./contact/social.html">
...
<div class="card">
    <h1>Contact</h1>
    <social-card type="twitter"></social-card>
    <social-card type="linkedin"></social-card>
    <social-card type="github"></social-card>
    <social-card type="facebook"></social-card>
</div>`		
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

export default CustomElements;