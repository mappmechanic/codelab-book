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

class Types extends Component {
	render() {

		const pageElements = [
			{
				type: elementTypes.TEXT,
				value: `## Basic Type Checking in Angular Component
### Step1:
Now we will add some type checking to our main App Component, so will update the file **app.component.ts** with the following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value:`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  sessionInfo: session;

  constructor(){
    this.title = 'Session Feedback Manager';
    this.sessionInfo = {
      topic: 'Angular2 Migration Guide',
      speaker: 'Rahat Khanna',
      durationInMins: 90
    }
  }
}

interface session{
  topic: string;
  speaker: string;
  durationInMins: number;
}`
			},
			{
				type: elementTypes.TEXT,
				value: `### Step2:
In order to show the information added to app.component we will need to show the same in the template. Replace the existing code in the file **app.component.html** with the following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<h2>
  {{title}}
</h2>
<div class="session">
  <div class="infoSection">
    <div class="row">
      <div class="label">Topic</div>
      <div class="value">{{sessionInfo.topic}}</div>
    </div>
    <div class="row">
      <div class="label">Speaker</div>
      <div class="value">{{sessionInfo.speaker}}</div>
    </div>
    <div class="row">
      <div class="label">Duration</div>
      <div class="value">{{sessionInfo.durationInMins}} minutes</div>
    </div>
  </div>
</div>
`
			}
		]

		return (
			<div>
				{ pageElements.map((pageElement) => {
						if(pageElement.type === elementTypes.TEXT){
							return (<ReactMarkdown source={pageElement.value} />);
						}else if(pageElement.type === elementTypes.CODE_SNIPPET){
							return (<Highlight lang={pageElement.lang} value={pageElement.value} />);
						}
					})
				}
			</div>
		);
	}
}

export default Types;
