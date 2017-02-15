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


class AppElements extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## App Elements
The app elements are a loosely-coupled set of components that can be useful when building entire applications. They include components for features like routing, internationalization, data storage, and more.

Link to browse the exhaustive list of elements - [App Elements Catalog Link](https://www.webcomponents.org/collection/PolymerElements/app-elements)

### Step1:
We will now go to **my-app.html** file and uncomment the drawer code we commented in the beginning of the workshop. Also do the modifications to the code to name the options better like the following code:
`		},
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<app-drawer-layout force-narrow>
<!-- Drawer content -->
<app-drawer id="drawer">
    <app-toolbar>Menu</app-toolbar>
    <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
        <a name="view1" href="/view1">Home</a>
        <a name="view2" href="/view2">Blog</a>
        <a name="view3" href="/view3">Contact</a>
    </iron-selector>
</app-drawer>`		
	},
	{
		type: elementTypes.TEXT,
		value:`### Step2:
Now we will bower install and then import **iron-media-query** element to display the menu button to open drawer only for screen sizes having width less than 600px.`		
	},
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.BASH,
        value: `bower install iron-media-query -S`
    },
    {
		type: elementTypes.TEXT,
		value:`Also import it using the link element:`		
	},
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value: `<link rel="import" href="../bower_components/iron-media-query/iron-media-query.html">
<link rel="import" href="../bower_components/paper-tabs/paper-tabs.html">`
    },
	{
		type: elementTypes.TEXT,
		value: `### Step3: 
Now we will update the **$hidden** property of the menu icon and also add a new **paper-tabs** menu to be displayed if screen size greater than 600px.

Update the app-header-layout with the following code`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:` <iron-media-query query="min-width: 600px" query-matches="{{wideLayout}}"></iron-media-query>
<!-- Main content -->
<app-header-layout has-scrolling-region>

<app-header reveals fixed effects="waterfall">
    <app-toolbar>
    <template is="dom-if" if={{!wideLayout}}>
        <paper-icon-button icon="my-icons:menu" drawer-toggle></paper-icon-button>
    </template>
    <div main-title>mAppMechanic</div>
    </app-toolbar>

    <app-toolbar class="tabs-bar">
    <!-- Nav on desktop: tabs -->
    <paper-tabs selected="[[page]]" attr-for-selected="name" bottom-item>
        <paper-tab name="view1" link>
        <a href="/view1" class="link" tabindex="-1">Home</a>
        </paper-tab>
        <paper-tab name="view2" link>
        <a href="/view2" class="link" tabindex="-1">Blog</a>
        </paper-tab>
        <paper-tab name="view3" link>
        <a href="/view3" class="link" tabindex="-1">Contact</a>
        </paper-tab>
    </paper-tabs>
    </app-toolbar>
</app-header>
</app-header-layout>`		
	},
    {
		type: elementTypes.TEXT,
		value:`### Step4: 
We will add some CSS code along with **CSS Media Queries** also to see how we can control Responsive Design using CSS also:`
    },
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.CSS,
		value:`iron-pages{
    padding-top: 60px;
}

paper-tabs{
    --paper-tabs-selection-bar-color: #fff;
}

paper-tab a{
    color:#fff;
    text-decoration: none;
    font-size: 16px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
    margin-top:17px;
}

paper-tab{
    text-align: center;
}

app-toolbar{
    height: 50px;
    border-bottom:1px solid rgba(256,256,256,0.1)
}

@media(min-width: 600px){
    iron-pages{
        padding-top: 100px;
    }
}

@media(max-width: 600px){
    .tabs-bar{
        display: none;
    }
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

export default AppElements;