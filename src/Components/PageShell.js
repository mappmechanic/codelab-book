import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import BookMenu from './BookMenu';

const styles = {
	contentView: {
		paddingLeft:256,
	},
	pageView: {
		margin:50
	}
}

class PageShell extends Component {
	render() {
		const { children } = this.props;

		return (
			<div>
				<BookMenu />
				<div style={styles.contentView}>
					<AppBar
					 title="CodeLab Book"
					/>
					<div style={styles.pageView}>
					{React.cloneElement(children, {})}
					</div>
				</div>
			</div>
		);
	}
}

export default PageShell;