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
  CSS: 'css'
}

class List extends Component {
	render() {

		const pageElements = [
			{
				type: elementTypes.TEXT,
				value:`## Creating Model List using InBuilt Directives
### Step1:
We will create a new component representing the list of feedbacks being shown/managed by this system. We will use the same AngularCLI command we previously used to create it:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `ng g component feedback-list`
			},
      {
				type: elementTypes.TEXT,
				value:`### Step2:
In the 2nd Step, we have used listData type as an array of interface **feedbackInfo** so in this step, create a new folder inside app folder using the below given command:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `mkdir ./src/app/interfaces`
			},
      {
				type: elementTypes.TEXT,
				value:`In this folder, create a new file called **feedback.ts** and cut the interface for **feedbackInfo** from **feedback.component.ts** file to this file.`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `interface feedbackInfo{
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
				value:`### Step3:
Now we will add the required properties in our new component to hold the list data and also remember which row amongst the list is currently shown or expanded. The default being -1 which represents no row being expanded. Replace the code of the class in file **feedback-list.component.ts** with the following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `export class FeedbackListComponent implements OnInit {
  shownRowIndex: number = -1;

  @Input('listData') list: feedbackInfo[];

  constructor() {
    //console.log(this.list); //ERROR
  }

  ngOnInit() {
    // Accessible Here
    console.log(this.list);
  }

  onShowBtnClick(rowIndex: number){
    this.shownRowIndex = rowIndex;
  }

}`
			},
			{
				type: elementTypes.TEXT,
				value:`### Step4:
We have to also modify the code in our HTML template to show the list of data in the class in form of a table with action buttons like Edit, Show in the last column:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<div class="list">
  <div class="header">
    Feedback List
  </div>
  <div class="pure-table">
    <table>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody *ngFor="let feedback of list;let i=index">
        <tr>
          <td>{{i+1}}</td>
          <td>{{feedback.name}}</td>
          <td>{{feedback.company}}</td>
          <td>{{feedback.email}}</td>
          <td>
            <button>Edit</button>
            <button (click)="onShowBtnClick(i)">Show</button>
          </td>
        </tr>
        <tr *ngIf="shownRowIndex === i">
          <td colspan="5">
            <feedback [info]="feedback"></feedback>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step5:
Also, in order to style the table a bit, we will add one external CSS **pure.io** into our **index.html** and also add the below given CSS code to **feedback-list.component.css**:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css">`
			},
      {
				type: elementTypes.CODE_SNIPPET,
				lang: languages.CSS,
				value: `.list{
  width:100%;
  display:flex;
  flex-direction: column;
}

.list .header{
  background: #525050;
  color:#fff;
  font-size:17px;
  padding: 10px;
}

.list table{
  width:100%;
  border:1px solid #aeaeae;
}

td button{
  margin:2px 10px;
  border-radius: 5px;
  outline: none;
  padding: 3px 10px;
  width:90px;
}`
			},
      {
				type: elementTypes.TEXT,
				value:`### EXERCISE:
Simple exercise for you to hide the **Show** button once the row is expanded and you can display some other **Hide** button on clicking which the row should be collapsed.

**HINT**: You should use *ngIf directive.`
			},
      {
				type: elementTypes.TEXT,
				value: `Solution should not be seen before trying. Scroll down afterwards:
        =>

 =>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>

=>`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<td>
  <button>Edit</button>
  <button *ngIf="shownRowIndex !== i" (click)="onShowBtnClick(i)">Show</button>
  <button *ngIf="shownRowIndex === i" (click)="onShowBtnClick(-1)">Hide</button>
</td>`
			}
		]

		return (
			<div>
				{ pageElements.map((pageElement, index) => {
						if(pageElement.type === elementTypes.TEXT){
							return (<ReactMarkdown key={index} source={pageElement.value} />);
						}else if(pageElement.type === elementTypes.CODE_SNIPPET){
							return (<Highlight key={index} lang={pageElement.lang} value={pageElement.value} />);
						}
					})
				}
			</div>
		);
	}
}

export default List;
