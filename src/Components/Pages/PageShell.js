import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class PageShell extends Component {
	render() {
		const { children } = this.props;

		return (
			<div>
				Page Shell
				{React.cloneElement(children, {})}
			</div>
		);
	}
}

export default PageShell;