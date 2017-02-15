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
	HTML: 'html',
	TS: 'typescript'
}


class UsingElement extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Using a Polymer Element
In order to use any polymer element, we have to install its bower component using the **bower install** command. We will use a public open source component from **customelements.io** to display circle progress bars to show progress of some key metrics.
### Step1:

Use the following command: 
`		},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`bower install progress-bubble -S`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: Import Element
After installing the bower component, we will be using the HTML Imports concept to import the polymer element using the link tag. Add the following code in the top imports part of **my-view1.html** :`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/progress-bubble/progress-bubble.html">`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step3: Add the Polymer Element as HTML Tag
Now, we will add the element tag in the HTML where ever we want to display the component. We can add it in the template tag of **my-view1.html**:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<progress-bubble value="40" stroke-width="12">
	<b>40</b>
</progress-bubble>`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step4: 
We will use this component to display important metrics number which we want to track in this dashboard. For the sake of this tutorial adding few metrics, which I want to track in my dashboard.

Add the following html code in the &lt;div class="card"&gt; replacing the existing code`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`  <div class="metricsNos">
	<div class="metricCircle">
		<div class="label">
			Sessions
		</div>
		<progress-bubble id="#sessionVal" value="30" stroke-width="12">
			<b>3/10</b>
		</progress-bubble>
	</div>
	<div class="metricCircle blogs">
		<div class="label">
			Blogs
		</div>
		<progress-bubble value="50" stroke-width="12">
			<b>5/10</b>
		</progress-bubble>
	</div>
	<div class="metricCircle books">
		<div class="label">
			Books
		</div>
		<progress-bubble value="33.33" stroke-width="12">
			<b>1/3</b>
		</progress-bubble>
	</div>
	<div class="metricCircle apps">
		<div class="label">
			Apps
		</div>
		<progress-bubble value="20" stroke-width="12">
			<b>1/5</b>
		</progress-bubble>
	</div>
	<div class="metricCircle codelabs">
		<div class="label">
			Codelabs
		</div>
		<progress-bubble value="40" stroke-width="12">
			<b>2/5</b>
		</progress-bubble>
	</div>
</div>`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step5: Add Styling
We will add some styling for the progress bubble to customise it and add different colors to different ones.

Add the following code before the div card:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<!-- Custom styling and stroke-width -->
    <style is="custom-style">
      progress-bubble {
          margin: 10px auto;
        --progress-bubble-stroke-color: rgba(255, 0, 0, 0.8);
        --progress-bubble-stroke-linecap: butt;
        --progress-bubble-bg-stroke-color: rgba(193, 193, 193, 0.2);
        --progress-bubble-background: transparent;
        --progress-bubble-reflection-display: none;
      }

      .blogs progress-bubble{
        --progress-bubble-stroke-color:#9B59B6;
      }

      .books progress-bubble{
        --progress-bubble-stroke-color:#E67E22;
      }

      .apps progress-bubble{
        --progress-bubble-stroke-color:#2ECC71;
      }

      .codelabs progress-bubble{
        --progress-bubble-stroke-color:#F1C40F;
      }

      b{
        color: #000;
        text-shadow: none;
      }

      .metricsNos{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }

      .metricCircle{
        display: flex;
        flex-direction: column;
        width: 150px;
        justify-content: center;
      }

      .label{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>`		
	},
	];

		return (
			<div>
				{ pageElements.map((pageElement, index) => {
						if(pageElement.type === elementTypes.TEXT){
							return (<ReactMarkdown key={`pe-${index}`} source={pageElement.value} />);
						}else if(pageElement.type === elementTypes.CODE_SNIPPET){
							return (<Highlight key={`pe-${index}`} lang={pageElement.lang} value={pageElement.value} />);
						}
					})
				}
			</div>
		);
	}
}

export default UsingElement;