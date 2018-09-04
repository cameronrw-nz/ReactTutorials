import React from 'react'
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

// The Header creates links that can be used to navigate
// between routes.
class Navigator extends React.Component {
  handleSelect(eventKey, event) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" className="nav nav-tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem className="nav-item nav-link" eventKey="1" href="/">
          Home 
        </NavItem>
        <NavItem className="nav-item nav-link" eventKey="1" href="/tictactoe">
          Tic Tac Toe Game
        </NavItem>
      </Nav>
    );
  }
}



export default Navigator