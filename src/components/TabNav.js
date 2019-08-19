import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route, Link } from "react-router-dom";
import WelcomePage from './WelcomePage'
import CharacterList from './CharacterList'
import LocationsList from './LocationsList'



const panes = [
    {menuItem: 'Home', render: () => <Tab.Pane><Route exact path='/' component={WelcomePage} /></Tab.Pane>},
    {menuItem: 'Characters', render: () => <Tab.Pane as={NavLink} to='/'><Route path='/characters' component={CharacterList} /></Tab.Pane>},
    {menuItem: 'Locations', render: () => <Tab.Pane><Route path='/locations' component={LocationsList} /></Tab.Pane>}
]
// TODO: Add missing tabs below
const TabNav =() => <Tab panes={panes} />

export default TabNav
