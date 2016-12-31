import React, { Component, PropTypes } from 'react';
import { Drawer } from "material-ui";
import './BookMenu.css';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {spacing, typography, zIndex} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
	title: {
		backgroundColor: cyan500,
		color: typography.textFullWhite,
    	lineHeight: `${spacing.desktopKeylineIncrement}px`,
	}
}

const SelectableList = makeSelectable(List);


class BookMenu extends Component{

	static contextTypes = {
	    router: PropTypes.object.isRequired,
	};

	static childContextTypes = {
    	muiTheme: PropTypes.object,
	};

	state = {
		open: true
	}

	handleTouchTapHeader() {
		window.location.href = "/";
	}

	render(){
		return (
			<Drawer
				className="bookMenu"
				open={this.state.open}
			>
				<div className="title" style={styles.title} onTouchTap={this.handleTouchTapHeader}>
		          Book Menu
		        </div>
		     	<SelectableList
		          value={location.pathname}
		        >
		          <ListItem
		            primaryText="Introduction"
		            primaryTogglesNestedList={true}
		            nestedItems={[
		              <ListItem primaryText="Overview" value="/components/avatar"
		                href="#/introduction/overview" />,
		              <ListItem primaryText="Installation" value="/get-started/installation" />,
		              <ListItem primaryText="Usage" value="/get-started/usage" />,
		              <ListItem primaryText="Server Rendering" value="/get-started/server-rendering" />,
		              <ListItem primaryText="Examples" value="/get-started/examples" />,
		            ]}
		          />
		          <ListItem
		            primaryText="Customization"
		            primaryTogglesNestedList={true}
		            nestedItems={[
		              <ListItem primaryText="Themes" value="/customization/themes" />,
		              <ListItem primaryText="Styles" value="/customization/styles" />,
		              <ListItem primaryText="Colors" value="/customization/colors" />,
		            ]}
		          />
		          <ListItem
		            primaryText="Components"
		            primaryTogglesNestedList={true}
		            nestedItems={[
		              <ListItem
		                primaryText="App Bar"
		                value="/components/app-bar"
		                href="#/components/app-bar"
		              />,
		              <ListItem
		                primaryText="Auto Complete"
		                value="/components/auto-complete"
		                href="#/components/auto-complete"
		              />,
		              <ListItem
		                primaryText="Avatar"
		                value="/components/avatar"
		                href="#/components/avatar"
		              />,
		              <ListItem
		                primaryText="Badge"
		                value="/components/badge"
		                href="#/components/badge"
		              />]} 
		            />
		        </SelectableList>
			</Drawer>
		);
	}
}

export default BookMenu;