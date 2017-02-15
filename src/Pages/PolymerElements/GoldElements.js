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


class GoldElements extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Gold Elements
A collection of components related to Ecommerce web apps like CC Input etc.

Link to browse the exhaustive list of elements - [Gold Elements Catalog Link](https://www.webcomponents.org/collection/PolymerElements/gold-elements)

### Step1: Payment Form
We will first install the gold elements using bower & then import the all required elements first:
`		},
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`bower install gold-elements iron-form -S`		
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<link rel="import"href="../bower_components/iron-flex-layout/classes/iron-flex-layout.html">
<link rel="import" href="../bower_components/iron-form/iron-form.html">
<link rel="import" href="../bower_components/paper-styles/color.html">
<link rel="import" href="../bower_components/paper-input/paper-input.html">
<link rel="import" href="../bower_components/paper-button/paper-button.html">
<link rel="import" href="../bower_components/gold-cc-input/gold-cc-input.html">
<link rel="import" href="../bower_components/gold-cc-cvc-input/gold-cc-cvc-input.html">
<link rel="import" href="../bower_components/gold-cc-expiration-input/gold-cc-expiration-input.html">`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: 
Now we will include the following HTML code inside the **my-view2.html** file:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.HTML,
		value:`<div class="ccform">
<div class="horizontal layout center form-title">
    <div class="avatar" item-icon></div>
    <div class="flex company">Cognizant Solutions</div>
</div>

<form is="iron-form" id="form">

    <paper-input name="name" label="Name on card" required autocomplete="cc-name"></paper-input>

    <gold-cc-input name="cc-number" required value="4000 0000 0000 0002"
        auto-validate card-type="{{cardType}}"></gold-cc-input>

    <div class="horizontal layout">
    <gold-cc-expiration-input name="cc-expiration" required label="Expiration"></gold-cc-expiration-input>
    <gold-cc-cvc-input name="cc-cvc" required card-type="[[cardType]]"></gold-cc-cvc-input>
    </div>

    <br><br>

    <div class="horizontal layout">
    <div class="filler"></div>
    <div class="footer">
        <div class="total-item horizontal layout">
        <div class="flex">Sub total </div>
        <div class="price">₹30,000.00</div>
        </div>

        <div class="total-item horizontal layout">
        <div class="flex">Tax </div>
        <div class="price">₹3,000.00</div>
        </div>

        <div class="total-item horizontal layout">
        <div class="flex">Your total </div>
        <div class="price">₹33,000.00</div>
        </div>

        <div class="horizontal layout end-justified">
        <paper-button on-click="_submit">Pay ₹33,000.00</paper-button>
        </div>
    </div>
    </div>

</form>
</div>`		
	},
    {
		type: elementTypes.TEXT,
		value:`### Step3: 
We will add some JS code in the polymer prototype on this view:`
    },
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.JS,
		value:`Polymer({
    is: 'my-view2',

    listeners: {
        'iron-form-submit': '_formSubmitted'
    },
    _submit: function() {
        var form = this.$.form;
        if (form.requestAutocomplete)
            form.requestAutocomplete();
        form.submit();
    },
    _formSubmitted: function(event) {
        console.log("Submitted: ", event.detail);
    }
});`		
	},
    {
		type: elementTypes.TEXT,
		value:`### Step4: 
We will add some CSS code in the style tag of the view:`
    },
    {
		type: elementTypes.CODE_SNIPPET,
		lang: languages.CSS,
		value:`
      .form-title, .footer {
        margin-bottom: 20px;
      }

      .avatar {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        background: var(--google-blue-700);
        margin-right: 20px;
      }

      .company {
        color: var(--google-blue-700);
        font-size: 20px;
        font-weight: 200;
      }

      gold-cc-expiration-input, .filler {
        width: 50%;
        margin-right: 20px;
      }

      .footer {
        width: 50%;
        @apply(--paper-input-container-font);
        color:  var(--secondary-text-color);
      }

      .price {
        color:  var(--primary-text-color);
      }

      paper-button {
        background-color: var(--google-blue-500);
        color: #fff;
        margin-right: 0px;
        margin-top: 50px;
      }

      .ccform{
        max-width:360px;
        margin:0 auto;
      }`		
	},
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

export default GoldElements;