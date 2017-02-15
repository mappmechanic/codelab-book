import React, { Component, PropTypes } from 'react';
import { AppBar } from 'material-ui';

import './PageShell.css';
import BookMenu from './BookMenu';

const defaultPageTitle = 'CodeLab Book';

class PageShell extends Component {

	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	constructor(props){
		super(props);
		this.openLeftMenu = this.openLeftMenu.bind(this);
		this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
	}

	state = {
		menuOpened: true,
		openedPageTitle: this.props.bookTitle || defaultPageTitle,
	}

	openLeftMenu(){
		this.setState({
			menuOpened: !this.state.menuOpened
		});
	}

	handleMenuItemClick(newPageTitle){
		this.setState({
			openedPageTitle: newPageTitle ? newPageTitle : defaultPageTitle
		});
	}

	render() {
		const styles = {
			contentView: {
				paddingLeft:this.state.menuOpened ? 256 : 0,
			},
			pageView: {
				margin:30
			}
		}


		const { children } = this.props;

		return (
			<div>
				<BookMenu
				title={this.props.route.menuTitle}
				headerBackground={this.props.route.headerBackground}
				menuItems={this.props.route.menuItems}
				opened={this.state.menuOpened}
				onItemClick={this.handleMenuItemClick} />
				<div className="contentView" style={styles.contentView}>
					<AppBar
					 title={this.state.openedPageTitle}
					 style={{backgroundColor: this.props.route.headerBackground}}
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
