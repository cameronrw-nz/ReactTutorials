import React from 'react'
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import * as RoutingConstants from '../Common/RoutingConstants'

// The Header creates links that can be used to navigate
// between routes.
class Navigator extends React.Component {
  render() {
    return (
      <Nav bsStyle="tabs" className="nav nav-tabs" activeKey="1">
        <NavItem className="nav-item nav-link" eventKey="1" href={RoutingConstants.HOME}>
          Home 
        </NavItem>
        <NavItem className="nav-item nav-link" eventKey="1" href={RoutingConstants.TICTACTOE}>
          Tic Tac Toe Game
        </NavItem>
        <NavItem className="nav-item nav-link" eventKey="1" href={RoutingConstants.MINESWEEPER}>
          MineSweeper
        </NavItem>
        <NavItem className="nav-item nav-link" eventKey="1" href={RoutingConstants.PRODUCT}>
          Product
        </NavItem>
        <NavItem className="nav-item nav-link" eventKey="1" href={RoutingConstants.REDDIT}>
          Reddit
        </NavItem>
      </Nav>
    );
  }
}



export default Navigator