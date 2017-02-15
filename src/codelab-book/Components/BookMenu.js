import React, { Component, PropTypes } from 'react';
import { Drawer } from "material-ui";
import './BookMenu.css';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {spacing, typography} from 'material-ui/styles';
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

	constructor(props){
		super(props);
		this.onChangeList = this.onChangeList.bind(this);
	}

	handleTouchTapHeader() {
		window.location.href = "#/";
	}

	onChangeList(event, newRoute){
		const newPageTitle = newRoute !== '#/' ? event.target.innerText : null;
		this.props.onItemClick(newPageTitle);
	}

	getMenuComponents(MenuItems, currentPath){
		const MenuComponents = MenuItems.map((menuItem, index) => {
			const menuItemPath = `${currentPath}/${menuItem.path}`;
			if(!menuItem.childPages || (menuItem.childPages && menuItem.childPages.length === 0)){
				return (
					<ListItem key={index} primaryText={menuItem.menuLabel}
					value={menuItemPath}
					href={menuItemPath} />
				)
			}else if(menuItem.childPages.length > 0){
				const nestedMenuItems = this.getMenuComponents(menuItem.childPages, menuItemPath);
				return (
					<ListItem
					key={index}
					initiallyOpen={true}
		            primaryText={menuItem.menuLabel}
		            primaryTogglesNestedList={true}
		            href={menuItemPath}
		            nestedItems={nestedMenuItems}
		            />
				)
			}
			return null;
		});
		return MenuComponents;
	}

	render(){
		const { title, headerBackground } = this.props;
		const MenuItems = this.props.menuItems.filter((menuItem) => !menuItem.isRedirect);
		if(headerBackground){
			styles.title.backgroundColor = headerBackground;
		}
		
		return (
			<Drawer
				className="bookMenu"
				open={this.props.opened}
			>
				<div className="title" style={styles.title} onTouchTap={this.handleTouchTapHeader}>
		          {title || 'Book Menu'}
		        </div>
		     	<SelectableList
		          value={location.pathname}
		          onChange={this.onChangeList}
		        >
		          {this.getMenuComponents(MenuItems,'#')}
		        </SelectableList>
			</Drawer>
		);
	}
}

export default BookMenu;
