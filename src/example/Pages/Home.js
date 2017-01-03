import React, { Component } from 'react';
import Highlight from 'react-syntax-highlight';

import logo from './Assets/logo.svg';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h2>Welcome to CodeLab Book</h2>
		        </div>
		        <p className="App-intro">
		          To get started, edit <code>src/App.js</code> and save to reload.
		        </p>
		        <Highlight lang="bash" value={"$ npm install codelab-book"} />
			</div>
		);
	}
}

export default Home;