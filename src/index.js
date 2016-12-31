import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './index.css';

ReactDOM.render(
	<MuiThemeProvider>
  		<App />
  	</MuiThemeProvider>,
  document.getElementById('root')
);
