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

class Forms extends Component {
	render() {

		const pageElements = [
      {
				type: elementTypes.TEXT,
				value:`## Forms & Input Controls in Angular2
### Step1:
We will create a new component representing the form which will be used to add a new feedback or edit an existing one:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `ng g component feedback-form`
			},
			{
				type: elementTypes.TEXT,
				value: `### Step2:
In order to use Forms in **Angular** we have to insure that our **App Module** imports the **FormsModule** & **ReactiveFormsModule**. Please update the 3rd line of **app.module.ts** file with following code & also include both in imports:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value:`import { FormsModule, ReactiveFormsModule } from '@angular/forms';
...
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
...`
			},
			{
				type: elementTypes.TEXT,
				value: `### Step3:
Now, we will create a form in our **feedback-form** component. In new Angular, we will use a new service called FormBuilder to create a form connected with our model. We can add **Initial Values** as well as **Validators** to this FormBuilder properties. Please update the code in the **feedback-form.component.ts**:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  @Output() onFeedbackAdd = new EventEmitter();

  public feedbackForm = this.fb.group({
     name: ["", Validators.required],
     company: ["", Validators.required],
     email: ["", Validators.required],
     mobile: [0, Validators.required],
     speakerRating: [0, Validators.required],
     trainingRating: [0, Validators.required],
     feedback: ["", Validators.required],
     suggestions: ["", Validators.required],
   });

  constructor(public fb: FormBuilder) { }

  saveFeedback(event) {
    if(this.feedbackForm.valid){
      console.log(this.feedbackForm.value);
      this.onFeedbackAdd.emit(this.feedbackForm.value);
    }else{
      alert('Not Valid Form');
    }
  }

  ngOnInit() {
  }

}`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step4:
Now we will update the **feedback-form.component.html** template file with the HTML code for the form to display. **Remember**, in new Angular **formControlName** is the property that binds the input control to a **FormBuilder** property. Also, the **formGroup** property on a **form** tag is used to bind the FormBuilder instance with the form.:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value:`<form class="form" [formGroup]="feedbackForm" (ngSubmit)="saveFeedback($event)">
  <div class="row">
    <input formControlName="name" type="text" placeholder="Your Name">
    <input formControlName="company" type="text" placeholder="Your Company">
    <input formControlName="email" type="email" placeholder="Your Email">
  </div>
  <div class="row">
    <input formControlName="mobile" type="number" placeholder="Your Mobile">
    <input formControlName="speakerRating" max="10" type="range" placeholder="Rate Speaker"> <span class="ratingValue">{{feedbackForm.value.speakerRating}} /10</span>
    <input formControlName="trainingRating" max="10" type="range" placeholder="Rate Training">
    <span class="ratingValue">{{feedbackForm.value.trainingRating}} /10</span>
  </div>
  <div class="row">
    <textarea formControlName="feedback" placeholder="Your Feedback Here"></textarea>
    <textarea formControlName="suggestions" placeholder="Your Suggestions Here"></textarea>
  </div>
  <div class="row">
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </div>
</form>
`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step5:
Now, we will add this **feedback-form** component to our feedback list with a flag to hide it default and show it only when an **Add New** button is pressed. Add a new property and a new method **onFeedbackAdd** to add object to the list.:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value:`export class FeedbackListComponent implements OnInit {
  shownRowIndex: number = -1;
  addFormShown: boolean = false;
...
  onFeedbackAdd(newFeedback: feedbackInfo){
    this.list.push(newFeedback);
    this.addFormShown = false;
  }
...
}`
			},
      {
				type: elementTypes.TEXT,
				value: `Also we need to update the file **feedback-list.component.html** with the updated code for showing Add New button and showing the form also based on the new flag.:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value:`<div class="list">
  <div class="header">
    Feedback List
    <button *ngIf="!addFormShown" (click)="addFormShown=true">+ Add New</button>
    <button *ngIf="addFormShown" (click)="addFormShown=false">Hide Add Form</button>
  </div>
  <div class="pure-table">
    <table>
      <thead *ngIf="addFormShown">
        <tr>
          <td colspan="5">
            <feedback-form (onFeedbackAdd)="onFeedbackAdd($event)"></feedback-form>
          </td>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
...`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step6:
Now we will write a custom validator to check if the mobile number entered is of 10 digits or not. Please add the following function at the end of the **feedback-form.component.ts** file. Also, replace **Validators.required** with the function name:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value:`...
  email: ["", Validators.required],
  mobile: [0, isIndianMobile],
  speakerRating: [0, Validators.required],
...
function isIndianMobile(c: FormControl) {
  if(c.value && c.value.toString().length !== 10) {
    //console.log('not valid')
    return {
      isIndianMobile: false
    }
  }

  // Null means valid, believe it or not
  //console.log('valid')
  return null
}
...`
			},
      {
				type: elementTypes.TEXT,
				value:`### EXERCISE:
Implement the Edit functionality for this list using the same **feedback-form** component.

**HINT**: You should use the initializers of FormBuilders to pass existing data and then save to the same index again.`
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

export default Forms;
