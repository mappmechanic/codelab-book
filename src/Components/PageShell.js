import React, { Component } from 'react';
import { AppBar } from 'material-ui';

import './PageShell.css';
import BookMenu from './BookMenu';

class PageShell extends Component {
	constructor(props){
		super(props);
		this.openLeftMenu = this.openLeftMenu.bind(this);
	}

	state = {
		menuOpened: true
	}

	openLeftMenu(){
		this.setState({
			menuOpened: !this.state.menuOpened
		});
	}

	render() {
		const styles = {
			contentView: {
				paddingLeft:this.state.menuOpened ? 256 : 0,
			},
			pageView: {
				margin:50
			}
		}

		const { children } = this.props;

		return (
			<div>
				<BookMenu menuItems={this.props.route.menuItems} opened={this.state.menuOpened} />
				<div className="contentView" style={styles.contentView}>
					<AppBar
					 title="CodeLab Book"
					 onLeftIconButtonTouchTap={this.openLeftMenu}
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