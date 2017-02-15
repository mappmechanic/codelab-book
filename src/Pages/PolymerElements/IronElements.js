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


class IronElements extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Iron Elements
Iron Elements are the core set of elements & behaviors which empower the backbone of the Polymer library. It has very important elements like events, icons, input core, page containers etc.

Link to browse the exhaustive list of elements - [Iron Elements Catalog Link](https://www.webcomponents.org/collection/PolymerElements/iron-elements)

### Step1:
In order to install the iron elements,you can either selectively install specific iron-element or install the **iron-elements** which contains all elements, using following command:
`		},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`bower install iron-elements -S`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: 
We had created the tabs but had only one content view, now we will use **iron-pages** component to display dynamic content based on which tab is selected out of the paper-tabs set.

Now, we will code & test with the iron-pages element, so we have to now import the component:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/iron-pages/iron-pages.html">`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step3: <span style="color:blue">Iron Pages &lt;iron-pages&gt;</span>
In the first step we will add a property on our view polymer element to store the **selectedTabIndex** property of the type Number. We will also a new method to select a particular tabIndex.

Please add the following code in the Polymer element prototype of the view:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`Polymer({
      is: 'my-view1',
      properties:{
        selectedTabIndex: {
          type: Number,
          value:0,
        }
      },
      openDialog: function(){
        this.$.addRecommendation.toggle();
      }
    });`		
	},
    {
		type: elementTypes.TEXT,
		value: `### Step4: 
In this step, we will bind the **selected** property of the view to the selected attribute of the paper-tabs with the below given code:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<paper-tabs selected={{selectedTabIndex}} scrollable>`
    },
    {
		type: elementTypes.TEXT,
		value: `### Step5: 
Now, we will change the content inside the &lt;div class="content"&gt; tag with the following code of the **iron-pages** tag. All the direct children of the iron-pages tag are regarded as the pages in the same order. 

The selected property on this tag is having one way binding using the [[]] symbols:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<iron-pages selected=[[selectedTabIndex]]>
          <!-- 0 Personal Info Content -->
          <div class="tabContent">
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
          </div>
          <div class="tabContent">
            Academics
          </div>
          <div class="tabContent">
            Professional Experience
          </div>
          <div class="tabContent">
            Skills
          </div>
          <!-- 4 Recommendations -->
          <div class="tabContent">
            <paper-fab on-tap="openDialog" class="addIcon" label="+"></paper-fab>
            <paper-dialog id="addRecommendation">
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
            </paper-dialog>
          </div>
        </iron-pages>`
    },
    {
		type: elementTypes.TEXT,
		value: `### Step6: Iron Icons
Now, we will try out the **iron-icons** element which contains multiple icon sets and **iron-icon** element. We will import two sets of iron icon **icons** & **hardware** using the following code:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/iron-icons/iron-icons.html">
<link rel="import" href="../bower_components/iron-icons/hardware-icons.html">`
    },
    {
		type: elementTypes.TEXT,
		value: `### Step7: Using Iron Icons
Now we will use these icons in the title of the tabs we have put, we can render an icon anywhere using the **iron-icon** element passing the name of the icon to the **icon** attribute. We have to write the name of the icon set before the icon name like **hardware:computer**. 

Replace the **paper-tabs** code with the following code:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<paper-tabs selected={{selectedTabIndex}} scrollable>
          <paper-tab>
           <iron-icon icon="icons:perm-identity"></iron-icon> 
           Personal Info
          </paper-tab>
          <paper-tab>
            <iron-icon icon="icons:chrome-reader-mode"></iron-icon> 
            Academics
          </paper-tab>
          <paper-tab>
            <iron-icon icon="hardware:computer"></iron-icon>
            Professional Experience
          </paper-tab>
          <paper-tab>
            <iron-icon icon="icons:lightbulb-outline"></iron-icon>
            Skills
          </paper-tab>
          <paper-tab>
            <iron-icon icon="icons:thumb-up"></iron-icon>
            <span>Recommendations</span>
            <paper-badge label="3"></paper-badge>
          </paper-tab>
        </paper-tabs>`
    },
    {
		type: elementTypes.TEXT,
		value: `### Step8: Iron Ajax (IMPORTANT)
In almost all applications, we do not show static data but show some data which we get from REST APIs using Ajax. So **iron-ajax** is one of the most important elements of the iron-elements group.

**iron-ajax** supports declaratively defining an Ajax requests and also calling it automatically on DOM loading if the **auto** attribute is set. We will integrate a mock API with our web app which we have created.

#### Step8a- 
Create a new file called **db.json** in the **/src** folder with the following json code:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`{
    "skills": [
    {
        "id":"1",
        "name": "Javascript",
        "description": "Have good knowledge about important Javascript concepts like Prototypal Inheritance, Variable/Function Hoisting, Closures, Module Pattern, Functions, Event Loop, Event Delegation etc.",
        "rating": "7"
    },
    {
        "id":"2",
        "name": "HTML5",
        "description": "Have been working with HTML5 APIs like Geolocation, FileReader, GetUserMedia, Notifications etc. & semantic elements like section, article, header, nav etc.",
        "rating": "8"
    },
    {
        "id":"3",
        "name": "CSS3",
        "description": "Good hands-on experience with CSS3 Transitions, Animations and important layout concepts like FlexBox.",
        "rating": "8"
    }
    ],
    "recommendations":[]
}`
    },
    {
		type: elementTypes.TEXT,
		value: `#### Step8b- 
Now we will start a mock API server using node module called **json-server**, run this command in your terminal/command prompt to start a dummy server on port 3001:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`json-server ./src/db.json -p 3001`
    },
    {
		type: elementTypes.TEXT,
		value: `You can try to open the **skills** api route in your browser using the URL [http://localhost:3001/skills](http://localhost:3001/skills). 

#### Step8c-
First we have to install 2 components which we will be using - **iron-ajax** & **s-rating** using following bower command:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`bower install iron-ajax s-rating -S`
    },
    {
		type: elementTypes.TEXT,
		value: `#### Step8d:
Now we will import the iron-ajax & s-rating components using the HTML import in the start of our view html file:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import" href="../bower_components/iron-ajax/iron-ajax.html">
<link rel="import" href="../bower_components/s-rating/s-rating.html">`
    },
    {
		type: elementTypes.TEXT,
		value: `#### Step8e-
In order to make the ajax request & display the resules we fetch from the API, we will put the following code inside the div where **Skills** was written inside the **iron-pages** element:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<!-- 3 Skills -->
          <div class="tabContent">
            <iron-ajax
              auto
              url="http://localhost:3001/skills"
              handle-as="json"
              on-response="skillsFetchSuccess"
              debounce-duration="100">
            </iron-ajax>
            <template is="dom-repeat" items="{{skills}}">
                <div class="skill">
                  <div class="row">
                    <div class="title">
                      <b>{{ item.name }}</b>
                    </div>
                    <div class="rating">
                      <s-rating value={{get5StarRating(item.rating)}} disabled></s-rating>
                    </div>
                  </div>
                  <div class="row">
                    <div class="description">
                      {{item.description}}
                    </div>
                  </div>
                </div>
            </template>
          </div>`
    },
    {
		type: elementTypes.TEXT,
		value: `#### Step8f-
As we can see in the previous, we have put the method name **skillsFetchSuccess** in the **on-response** event attribute so we will create this method in the prototype of this polymer element:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`skillsFetchSuccess: function(event){
    var skills = event.detail.response;
    this.skills = skills;
}`
    },
    {
		type: elementTypes.TEXT,
		value: `#### Step8g-
Also will add the following CSS to display the list of Skills properly:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.CSS,
		value:`.skill{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom:1px solid #eaeaea
}

.skill .row{
    display: flex;
}

.skill .rating{
    margin-left: 15px;
}`
    },
    {
		type: elementTypes.TEXT,
		value: `#### Step8h-
The last thing is to convert the rating field we have received from the API and convert it into 5 star rating value using the following method in the prototype of the element:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`get5StarRating: function(rating){
    return Math.floor((rating/10)*5);
}`
    },
    {
		type: elementTypes.TEXT,
		value: `### Step9: Iron Ajax - POST API
The next thing we will try is using **iron-ajax** element to make a POST request to create a new object. We will do this in the recommendations tab to add a new recommendation using the form which we created earlier.

Add the following code to add a new **iron-ajax** component add the on-click event on paper-fab as per the code below:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<iron-ajax 
  id="newRecoAjax"
  url="http://localhost:3001/recommendations" 
  method="post"
  handle-as="json" 
  content-type="application/json"
  on-response="recosCreateSuccess" 
  debounce-duration="100"
></iron-ajax>
...
<paper-dropdown-menu id="relSelect" toggles label="Relationship With Rahat">
...
 <paper-button on-tap="createNewReco" autofocus>Submit</paper-button>`
    },
    {
		type: elementTypes.TEXT,
		value: `We will add the Javascript methods createNewReco to our prototype element:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`createNewReco(){
  var relationSelect = this.$.relSelect;
  this.newReco.relation = relationSelect.selectedItemLabel;
  this.$.newRecoAjax.body = this.newReco;
  this.$.newRecoAjax.generateRequest();
}`
    },
    {
      type: elementTypes.TEXT,
      value: `We can add a new recommendation and see in our browser DevTools Network tab or the db.json file that our new reco has been added.:`
    },
    {
		type: elementTypes.TEXT,
		value: `### Step10: Iron List - Infinite List
We will add the recosCreateSuccess event after which we will initiate a new ajax request to fetch list of recommendations and display them using **iron-list**

First add this JS code to the prototype element:`
	},
    {
       type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`properties:{
  ...
  recos:{
    type: Array
  }
  ...
  recosCreateSuccess(event){
    if(event.detail.xhr.status == '201'){
      this.$.recosGet.generateRequest();
      this.$.addRecommendation.toggle();
    }
  },
  recosFetchSuccess(event){
    this.recos = event.detail.response;
    this.recoCount = event.detail && event.detail.response && event.detail.response.length ? event.detail.response.length : 0;
  }
}`
    },
    {
      type: elementTypes.TEXT,
      value: `Now add the following iron-ajax element before/after the existing iron-ajax element inside the recos tab:`
    },
      {
        type: elementTypes.CODE_SNIPPET,
      lang: languages.HTML,
      value:`<iron-ajax 
    id="recosGet" 
    auto 
    url="http://localhost:3001/recommendations" 
    handle-as="json" 
    on-response="recosFetchSuccess" 
    debounce-duration="100">
  </iron-ajax>`
      },
      {
      type: elementTypes.TEXT,
      value: `Now add the import statement & then the **iron-list** element to display list of recommendations fetched:`
    },
      {
        type: elementTypes.CODE_SNIPPET,
      lang: languages.HTML,
      value:`<link rel="import" href="../bower_components/iron-list/iron-list.html">
...
<iron-list items="[[recos]]" as="item">
  <template>
    <div class="reco">
      <div class="row">
        <div class="name">[[item.name]]</div>
        <div class="org">[[item.organisation]] ([[item.email]])</div>
      </div>
      <div class="row">
        <div class="relation">Relation: <b>[[item.relation]]</b></div>
      </div>
      <div class="row">
        <div class="message">[[item.message]]</div>
      </div>
    </div>
  </template>
</iron-list>`
      },
      {
        type: elementTypes.TEXT,
        value: `Add the following CSS too:`
      },
      {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.CSS,
        value:`.reco {
  display: flex;
  flex-direction: column;
  padding:10px 0px;
}

.reco .row{
  display: flex;
  position: relative;
}

.reco .name{
  color:#000;
}

.reco .org{
  font-size:12px;
  font-weight: bold;
  margin-left:10px;
  padding-top:5px;
}

.reco .relation{
  font-size:12px;
  border-bottom:1px solid #eaeaea;
}

.reco .message{
  border:1px solid #aeaeae;
  border-radius:10px;
  padding: 10px;
  margin-top:10px;
  font-size:13px;
  width: 90%;
}

.reco .message::before{
  content:"";
  position: absolute;
  display: block;
  top:3px;
  left:40px;
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #aeaeae;
}`
      },
    {
      type: elementTypes.TEXT,
      value: `We have learnt about most of the important iron elements now. The recommendation tab will look something like this:`
    },
    {
      type: elementTypes.HTML,
      value: `<img src="https://s28.postimg.org/vcro09m7x/Screen_Shot_2017_02_13_at_10_16_11_pm.png" height="350px" />`
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

export default IronElements;