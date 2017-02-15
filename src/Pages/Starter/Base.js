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


class Base extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Base App Template
In this whole Polymer course we will be building a **Personal Dashboard** which can also be used as an **Enterprise Dashboard** with little bit of tweaking.

Follow the whole workshop or individual topics to understand & have hands-on important concepts/elements in the Polymer ecosystem.

### Step1:

Use the following command to create the initial project folder wherever you want the project to be: 
`		},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`mkdir personal-dashboard
cs personal-dashboard`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: Starter Template
We will be using the Polymer CLI's **init** command along with its **starter-kit** template to get a production ready App Structure on which we will begin our journey of creating our Personal Dashboard.

In the same folder, run the following command on the terminal/command prompt:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`polymer init starter-kit`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step3: Run the Polymer Server
Now, we will run the polymer server to startup the dev server in order to see the output of what we are building in the browser. It also has a hot reloader which refreshes your web app as soon as you make any change in the source code.

In the same folder, run the following command on the terminal/command prompt:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`polymer server --open`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step4: Comment some code
In order to build & learn polymer from scratch we will comment the **Drawer** element from HTML code and the drawer close code in **_routePageChanged()** event.

In the file **my-app.html**, comment the following lines:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`...
<app-drawer-layout fullbleed>
	<!-- Drawer content -->
	<!--<app-drawer id="drawer">
	<app-toolbar>Menu</app-toolbar>
	<iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
		<a name="view1" href="/view1">View One</a>
		<a name="view2" href="/view2">View Two</a>
		<a name="view3" href="/view3">View Three</a>
	</iron-selector>
	</app-drawer>-->

	<!-- Main content -->
	<app-header-layout has-scrolling-region>
...`		
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`...
_routePageChanged: function(page) {
this.page = page || 'view1';

// if (!this.$.drawer.persistent) {
//   this.$.drawer.close();
// }
},
...`		
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

export default Base;
