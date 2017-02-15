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


class PaperElements extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Paper Elements
Paper Elements are the set of reusable visual polymer components following the Google's **material design** principles providing us a good starting point to develop Web Applications without worrying about the styling & user experience much. This set contains **buttons**, **tabs**, **inputs**, **cards** etc.

Link to browse the exhaustive list of elements - [Paper Elements Catalog Link](https://www.webcomponents.org/collection/PolymerElements/paper-elements)


### Step1:
In order to install the paper elements,you can either selectively install specific paper-element or install the **paper-elements** which contains all elements, using following command:
`		},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`bower install paper-elements -S`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: 
Now, we will code & test with the first paper-tabs element, so we have to now import the component:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/paper-tabs/paper-tabs.html">`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step3: <span style="color:blue">Paper-Tabs &lt;paper-tabs&gt;</span>
We will add the tabs element, with some filled names for each tab. Add the following code in **my-view1.html** file after the existing div card:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<div class="card tabbedCard">
      <div class="tabHeader">
        <paper-tabs selected="0" scrollable>
          <paper-tab>Personal Info</paper-tab>
          <paper-tab>Academics</paper-tab>
          <paper-tab>Professional Experience</paper-tab>
          <paper-tab>Skills</paper-tab>
          <paper-tab>Recommendations</paper-tab>
        </paper-tabs>
      </div>
      <div class="content">
        Content for the Tabs will come here
      </div>
<div>`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step4: Add Styling
We will add some styling to display the tabs in the card in a better way.

Add the following code at the end of the custom styles &lt;style&gt; tag:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.CSS,
		value:`.tabbedCard{
    padding:0px;
}

      .tabHeader{
        background: #607d8b;
        color: #fff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      .tabbedCard .content{
        padding:15px;
      }`		
	},
    {
        type: elementTypes.TEXT,
        value:`### Step5: Paper Item
Paper Item can represent an Item in a list. Paper item can be used in multiple ways inside either a div with an attribute **role=listbox** or if you require a performant list then use it inside **&lt;paper-listbox&gt;**.

Firstly we have import the **paper-item** component using the following code:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<link rel="import" href="../bower_components/paper-item/paper-item.html">`
    },
    {
        type: elementTypes.TEXT,
        value:`### Step6:
Now, we will create a simple div, displaying multiple paper items in it. Please copy the following code and place it in the file **my-view1.html** in place of the content div of tabbed thing:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<div class="content">
        <div class="info-list" role="listbox">
          <paper-item>
            <span class="label">Name</span>
            <span class="value">Rahat Khanna</span>
          </paper-item>
          <paper-item>
            <span class="label">Email</span>
            <span class="value">yehtechnologies@gmail.com</span>
          </paper-item>
          <paper-item>
            <span class="label">Mobile</span>
            <span class="value">8860137755</span>
          </paper-item>
          <paper-item>
            <paper-item-body two-line>
              <div class="label">Hobbies</div>
              <div secondary>Internet, Music, Book Reading, Badminton, Cricket, Snooker</div>
            </paper-item-body>
          </paper-item>
        </div>
      </div>`
    },
    {
        type: elementTypes.TEXT,
        value:`Our web app should look like this screenshot after this step:`
    },
    {
        type: elementTypes.HTML,
        value:`<img src="https://s27.postimg.org/uw0nzosoj/Screen_Shot_2017_02_12_at_1_04_35_pm.png" height="400px" />`
    },
    {
        type: elementTypes.TEXT,
        value:`### Step7: Paper Badge
We will now use a small Paper-UI Element called **Paper Badge** to show number badges generally shown for notifications.

Firstly we have import the **paper-badge** component using the following code:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<link rel="import" href="../bower_components/paper-badge/paper-badge.html">`
    },
    {
        type: elementTypes.TEXT,
        value:`We will modify the HTML code in the recommendations tab title in order to show the number of notifications like the code below:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`...
    <paper-tab>Skills</paper-tab>
    <paper-tab>
        <span>Recommendations</span>
        <paper-badge label="3"></paper-badge>
    </paper-tab>
</paper-tabs>
...`
    },
    {
        type: elementTypes.TEXT,
        value:`Also add the following CSS to show the badge properly:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.CSS,
        value:`paper-tab{
    overflow:visible;
}

paper-badge{
    top: 14px !important;
    margin-left:5px;
}`
    },
    {
        type: elementTypes.TEXT,
        value:`### Step8: Paper Fab & Paper Dialog
Now, we will see the **paper-overlay-elements** collection which contains **paper-fab** and **paper-dialog** which we will use to create a feature of adding a new recommendation.
#### Step8a-
Add the following code to import paper-fab, paper-button & paper-dialog:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<link rel="import" href="../bower_components/paper-fab/paper-fab.html">
<link rel="import" href="../bower_components/paper-dialog/paper-dialog.html">
<link rel="import" href="../bower_components/paper-button/paper-button.html">`
    },
    {
        type: elementTypes.TEXT,
        value:`#### Step8b-
We have to include the paper-fab element inside the card for the tabs at the end. Also just next to the paper-fab we will also add the **paper-dialog** element which will be hidden by default.:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<paper-fab on-tap="openDialog" class="addIcon" label="+"></paper-fab>
<paper-dialog id="addRecommendation">
    <h2>Add New Recommendation</h2>
    <p>Form Elements to Add new Recommendation to be displayed here</p>
    <div class="buttons">
        <paper-button dialog-dismiss>Cancel</paper-button>
        <paper-button autofocus>Submit</paper-button>
    </div>
</paper-dialog>`
    },
    {
        type: elementTypes.TEXT,
        value:`#### Step8c-
Now we will add a method to this component in order to open the dialog on click of the **paper-fab** element:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`Polymer({
    is: 'my-view1',
    openDialog: function(){
        this.$.addRecommendation.toggle();
    }
});`
    },
    {
        type: elementTypes.TEXT,
        value:`#### Step8d-
Add the following CSS to adjust the paper-fab icon and set width for dialog component:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.CSS,
        value:`.addIcon{
    float: right;
    top:-25px;
}

paper-dialog{
    width:80%;
}`
    },
    {
        type: elementTypes.TEXT,
        value: `### Step9
In any Enterprise/Consumer app, **Forms** are an essential part, so we will try out few important **paper-input** elements to create a form to add recommendations.

Please include the HTML imports for important input elements:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<link rel="import" href="../bower_components/paper-input/paper-input.html">
<link rel="import" href="../bower_components/paper-checkbox/paper-checkbox.html">
<link rel="import" href="../bower_components/paper-dropdown-menu/paper-dropdown-menu.html">`
    },
    {
        type: elementTypes.TEXT,
        value: `Please replace the code inside the **paper-dialog** element with the following code:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.HTML,
        value:`<paper-dialog id="addRecommendation">
          <h2>Add New Recommendation</h2>
          <div class="row">
            <paper-input label="Full Name"></paper-input>
          </div>
          <div class="row">
            <paper-input label="Organisation"></paper-input>
          </div>
          <div class="row">
            <paper-input type="email" label="Email"></paper-input>
          </div>
          <div class="row">
            <paper-input label="Recommendation Message" char-counter maxlength="260"></paper-input>
          </div>
          <div class="row">
            <paper-checkbox class="styled">
              Have you worked with Rahat or influenced by his work?
          </div>
          <div class="row">
            <paper-dropdown-menu label="Relationship With Rahat">
              <paper-listbox class="dropdown-content" selected="1">
                <paper-item>Colleague</paper-item>
                <paper-item>Supervised him directly</paper-item>
                <paper-item>Supervised him indirectly</paper-item>
                <paper-item>Senior Leader for his group</paper-item>
                <paper-item>Mentored by him</paper-item>
                <paper-item>Reported to him</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <div class="buttons">
            <paper-button dialog-dismiss>Cancel</paper-button>
            <paper-button autofocus>Submit</paper-button>
          </div>
        </paper-dialog>`
    },
    {
        type: elementTypes.TEXT,
        value: `Also please add this following css to the end of the style tag:`
    },
    {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.CSS,
        value:`paper-dropdown-menu{
    width:60%
}

.row{
    margin-top:0px !important;
}`
    },
    {
        type: elementTypes.TEXT,
        value: `These were the most important paper elements. In the next exercise we will look at all the iron elements.`
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

export default PaperElements;