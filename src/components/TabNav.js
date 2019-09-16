import React from 'react';
import { Menu, Tab, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="home"></Icon> Home
      </Menu.Item>
      <Menu.Item>
        <Icon name="users"></Icon> Characters
      </Menu.Item>
      <Menu.Item>
        <Icon name="map outline"></Icon> Locations
      </Menu.Item>
      <Menu.Item>
        <Icon name="video"></Icon> Episodes
      </Menu.Item>
    </Menu>
  );
}
