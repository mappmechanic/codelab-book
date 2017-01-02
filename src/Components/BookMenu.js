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

	handleTouchTapHeader() {
		window.location.href = "/#/";
	}

	getMenuComponents(MenuItems, currentPath){
		const MenuComponents = MenuItems.map((menuItem) => {
			const menuItemPath = `${currentPath}/${menuItem.path}`;
			if(!menuItem.childPages || (menuItem.childPages && menuItem.childPages.length === 0)){
				return (
					<ListItem primaryText={menuItem.menuLabel} 
					value={menuItemPath}
					href={menuItemPath} />
				)
			}else if(menuItem.childPages.length > 0){
				const nestedMenuItems = this.getMenuComponents(menuItem.childPages, menuItemPath);
				return (
					<ListItem
		            primaryText={menuItem.menuLabel}
		            primaryTogglesNestedList={true}
		            href={menuItemPath}
		            nestedItems={nestedMenuItems}
		            />
				)
			}
		});
		return MenuComponents;
	}

	render(){
		const MenuItems = this.props.menuItems.filter((menuItem) => !menuItem.isRedirect);
		return (
			<Drawer
				className="bookMenu"
				open={this.props.opened}
			>
				<div className="title" style={styles.title} onTouchTap={this.handleTouchTapHeader}>
		          Book Menu
		        </div>
		     	<SelectableList
		          value={location.pathname}
		        >
		          {this.getMenuComponents(MenuItems,'#')}
		        </SelectableList>
			</Drawer>
		);
	}
}

export default BookMenu;