import React, {Component} from "react";
import { Menu } from "semantic-ui-react";
import { NavLink} from "react-router-dom";

// TODO: Add missing tabs below
export default class TabNav extends Component {
state = {}

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render() {
  const { activeItem } = this.state

  return (
    <Menu>
      <Menu.Item
        as={NavLink}
        to='/'
        name='home'
        active={activeItem === 'home'}
        onClick={this.handleItemClick}
      >
        Home
      </Menu.Item>

      <Menu.Item name='characters' active={activeItem === 'characters'} onClick={this.handleItemClick} as={NavLink} to='/characters'>
        Characters
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to='/locations'
        name='locations'
        active={activeItem === 'locations'}
        onClick={this.handleItemClick}
      >
        Locations
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to='/episodes'
        name='episodes'
        active={activeItem === 'episodes'}
        onClick={this.handleItemClick}
      >
        Episodes
      </Menu.Item>

    </Menu>
  )
}
}
