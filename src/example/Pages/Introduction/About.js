import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

class About extends Component {
	render() {

	const markdown = `## What is ES6 & Typescript
<img src='https://www.joshmorony.com/wp-content/uploads/2016/05/tsvses6-200x200.png' align="left" style="margin:0 10px 10px 0;" />

### About ES6

ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International (European Computer Manufacturers Association) in ECMA-262 and ISO/IEC 16262. It was based on JavaScript, which now tracks ECMAScript. Coders commonly use ECMAScript for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js.

ECMAScript is released in versions. ES6 is the version released in 2015 after a long time (6 years) with plenty of new features giving lot of power to Javascript. Also, now it has been decided that new versions will be released every year. The 7th edition, officially known as ECMAScript 2016, was finalized in June 2016. ES.Next is a dynamic name that refers to whatever the next version is at time of writing. ES.Next features are more correctly called proposals, because by definition the specification has not been finalized yet.

### About Typescript
TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.TypeScript may be used to develop JavaScript applications for client-side or server-side (Node.js) execution.

TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, any existing JavaScript programs are also valid TypeScript programs.
`;

		return (
			<div>
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default About;
