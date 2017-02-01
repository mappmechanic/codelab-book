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
	TS: 'typescript',
	HTML: 'html',
	CSS: 'css',
}

class NGComponent extends Component {
	render() {

		const pageElements = [
			{
				type: elementTypes.TEXT,
				value:`## Creating New Component - Model Component
### Step1:
Create a folder named **components** inside the **app** folder and then go inside that folder using the following commands:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `mkdir ./src/app/components
cd ./src/app/components`
			},
      {
				type: elementTypes.TEXT,
				value:`### Step2:
We can use the Angular CLI command to create a new component from inbuilt scaffolding using the following command:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `ng g component feedback`
			},
			{
				type: elementTypes.TEXT,
				value:`Now, we must have seen that a new component has been generated inside folder **./src/app/components/feedback** and there will be 4 files inside it: component typescript, testing spec file, css file and html template file.`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step3:
Now we will add a new **Input** property for this feedback component in order to receive information which this object requires to display. Please replace the contents of the file **feedback.component.ts** with the following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private _data: feedbackInfo;

  ngOnInit() {}

  @Input()
  set info(info: feedbackInfo) {
    let standardInfoObj = { name:'N/A', company: 'N/A', email: 'N/A', mobile: 0, speakerRating: 0, trainingRating:0, feedback: 'N/A', suggestions: 'N/A'};
    this._data = Object.assign(standardInfoObj,info) || standardInfoObj;
  }

}

interface feedbackInfo{
  name: string;
  company: string;
  email: string;
  mobile: number;
  speakerRating: number;
  trainingRating: number;
  feedback: string;
  suggestions: string;
}`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step4:
Also, we need to update the file **feedback.component.html** template to show the Information which we have saved after getting as Input property. Replace the contents of the html file with the following contents:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<div class="feedbackDetails">
<div class="row">
  <div class="column">
    <div class="label">Name</div>
    <div class="value">{{ _data.name }}</div>
  </div>
  <div class="column">
    <div class="label">Company</div>
    <div class="value">{{ _data.company }}</div>
  </div>
  <div class="column">
    <div class="label">Email</div>
    <div class="value">{{ _data.email }}</div>
  </div>
</div>
<div class="row">
  <div class="column">
    <div class="label">Mobile</div>
    <div class="value">{{ _data.mobile }}</div>
  </div>
  <div class="column">
    <div class="label">Speaker Rating</div>
    <div class="value">{{ _data.speakerRating }}</div>
  </div>
  <div class="column">
    <div class="label">Training Rating</div>
    <div class="value">{{ _data.trainingRating }}</div>
  </div>
</div>
<div class="row">
  <div class="column">
    <div class="label">Feedback</div>
    <div class="value">{{ _data.feedback }}</div>
  </div>
  <div class="column">
    <div class="label">Suggestions</div>
    <div class="value">{{ _data.suggestions }}</div>
  </div>
</div>
</div>`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step5:
Now we have to add the data in the **app.component.ts** to pass data for the feedback component. Update the app component typescript class  with the following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `export class AppComponent {
  title : string;
  sessionInfo: session;
  feedback: any;

  constructor(){
    this.title = 'Session Feedback Manager';
    this.sessionInfo = {
      topic: 'Angular2 Migration Guide',
      speaker: 'Rahat Khanna',
      durationInMins: 90
    }
    this.feedback = {
      name: 'John Mathews',
      company: 'ABC Ltd',
      email: 'john@abc.com',
      mobile: '00918860137755',
      speakerRating: 7,
      trainingRating: 8,
      feedback: 'It was good training with nice hands on.',
      suggestions: 'More time should be given for this training.'
    }
  }
}`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step6:
Now we have to finally add the feedback component's tag inside the **app.component.html** file. In order to pass some properties from parent component to child component we use the paranthesis **[]** like **[propName]="<prop_of_current_class>"**. Add this HTML code after the **infoSection** class div.:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<div class="feedbackList">
  <feedback [info]="feedback"></feedback>
</div>`
			},
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

export default NGComponent;
