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

class Services extends Component {
	render() {

		const pageElements = [
			{
				type: elementTypes.TEXT,
				value: `## Angular2 Services/Providers & HttpModule
In this exercise, we will be using a local REST API using json file & a npm module **json-server**. Please follow the steps to convert our static CRUD app to REST Based crud app now.

### Step1:
Install the npm module **json-server** using following command on prompt/terminal:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value:`npm i -g json-server`
			},
      {
				type: elementTypes.TEXT,
				value: `Now, we have to create a new **db.json** and put the following JSON data in that file:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.JS,
				value:`{
  "feedbacks": [
    {
      "id": 1,
      "name": "John Mathews",
      "company": "ABC Ltd",
      "email": "john@abc.com",
      "mobile": 8860137755,
      "speakerRating": 7,
      "trainingRating": 8,
      "feedback": "It was good training with nice hands on.",
      "suggestions": "More time should be given for this training."
    },
    {
      "id": 2,
      "name": "Vin Diesel",
      "company": "XYZ Ltd",
      "email": "vin@diesel.com",
      "mobile": 82637863686,
      "speakerRating": 6,
      "trainingRating": 6,
      "feedback": "It was fun.",
      "suggestions": "More amount of training."
    }
  ]
}`
			},
      {
				type: elementTypes.TEXT,
				value: `In order to start the instance of the REST API, use the following command on prompt/terminal in the same folder where your **db.json** is present. After running this command you will be able to access your **feedbacks - GET** api using URL - **http://localhost:3000/feedbacks**:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `json-server db.json`
			},
			{
				type: elementTypes.TEXT,
				value: `### Step2:
Now we will generate our Service using the Angular CLI. Firstly create a new folder with the following command:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `mkdir ./src/app/services`
			},
      {
				type: elementTypes.TEXT,
				value: `Then, use the following command to generate **services/feedback.service.ts**:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.BASH,
				value: `ng g service feedback`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step3:
We will be using the HttpModule to integrate to our REST APIs, so we have to insure that we have included HttpModule into the **imports** of @NgModule declaration in the file **app.module.ts**:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `import { HttpModule } from '@angular/http';
...
imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule
],
...`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step4:
Replace the contents of the **feedback.service.ts** file with the following code which will create a new method to **getFeedbacks** from the REST WebService:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {feedbackInfo} from '../interfaces/feedback';

@Injectable()
export class FeedbackService {
  private apiUrl = 'http://localhost:3000/feedbacks';  // URL to web API

  constructor (private http: Http) {}

  getFeedbacks () :  Observable<feedbackInfo[]> {
    return this.http.get(this.apiUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = error.status + "-" + (error.statusText || '');
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step5:
Now, first of all we need to remove the input property listData being passed to the **feedback-list** component in the file **app.component.html**. Now, the feedback-list component should take no input like in following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.HTML,
				value: `<div class="feedbackList">
  <feedback-list></feedback-list>
</div>`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step6:
After this, firstly we will be converting the @Input list property to normal list property. After that we will be writing the code inside **feedback-list.component.ts** file to get feedbacks from our FeedbackService and assign it to the list property. Please update the complete file with the following code:`
			},
			{
				type: elementTypes.CODE_SNIPPET,
				lang: languages.TS,
				value: `import { Component, OnInit, Input } from '@angular/core';
import {feedbackInfo} from '../../interfaces/feedback';
import {FeedbackService} from '../../services/feedback.service';

@Component({
  selector: 'feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css'],
  providers: [FeedbackService]
})
export class FeedbackListComponent implements OnInit {
  shownRowIndex: number = -1;
  addFormShown: boolean = false;
  errorMessage: string;
  list: feedbackInfo[];

  constructor(private feedbackService: FeedbackService) {
    //console.log(this.list); //ERROR
  }

  ngOnInit() {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.list = feedbacks);
  }

  onShowBtnClick(rowIndex: number){
    this.shownRowIndex = rowIndex;
  }
}`
			},
      {
				type: elementTypes.TEXT,
				value: `Now, you can see in your networks tab that the list of feedbacks that is being displayed now is from the JSON file and not your local data. You can delete the static array from your main **app.component.ts** as well. You can also try to add a new entry into your **db.json** and see the UI getting updated automatically.`
			},
      {
				type: elementTypes.TEXT,
				value: `### Step7:
Now we will add the method in **feedback.service.ts** file to create a new feedback in the REST API using **'POST'** http method. Add the following method into FeedbackService class:`
			},
      {
				type: elementTypes.CODE_SNIPPET,
        lang: languages.TS,
				value: `addFeedback (feedback: feedbackInfo): Observable<feedbackInfo> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post(this.apiUrl, feedback, options)
                  .map(res => res.json())
                  .catch(this.handleError);
}`
			},
      {
        type: elementTypes.TEXT,
        value: `### Step8:
Now, we will use this method in our **feedback-list.component.ts** file to handle the **onFeedbackAdd** method. Please add the following code to **FeedbackListComponent** class:`
      },
      {
        type: elementTypes.CODE_SNIPPET,
        lang: languages.TS,
        value: `onFeedbackAdd(newFeedback: feedbackInfo){
  this.feedbackService.addFeedback(newFeedback).subscribe(
    feedback  => this.list.push(feedback),
    error =>  this.errorMessage = <any>error);
  if(!this.errorMessage){
    this.addFormShown = false;
  }
}`
      },
      {
				type: elementTypes.TEXT,
				value:`### EXERCISE:
Implement the functionality to show appropriate errorMessage received in adding the new Feedback Form in previous step..

**HINT**: You should do modifications in **feedback-list.component.ts**.`
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

export default Services;
