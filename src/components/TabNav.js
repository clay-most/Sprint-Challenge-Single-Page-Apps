import React, {Component} from 'react';
import { Menu, Tab, Icon } from 'semantic-ui-react';
import {Link } from 'react-router-dom';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default class TabNav extends Component {
	state = {}

	handleItemClick = ({ name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state 

		return (
			<Menu>
				
				<Menu.Item as={Link} to='/'
					name='Home'
					active={activeItem === 'Home'}
					onClick={this.handleItemClick}
				><Icon name="home"></Icon>Home
				</Menu.Item>
				
				<Menu.Item as={Link} to='/character'
					name='characters'
					active={activeItem === 'character'}
					onClick={this.handleItemClick}
				><Icon name="users"></Icon>Characters
				</Menu.Item>

				<Menu.Item as={Link} to='/locations'
					name='locations'
					active={activeItem === 'locations'}
					onClick={this.handleItemClick}
				><Icon name="map outline"></Icon>Locations
				</Menu.Item>

				<Menu.Item as={Link} to='/episode'
					name='episodes'
					active={activeItem === 'episodes'}
					onClick={this.handleItemClick}
				><Icon name="video"></Icon>Episodes
				</Menu.Item>
			</Menu>
		)
	}
};
