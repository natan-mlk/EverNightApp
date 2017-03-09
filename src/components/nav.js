import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'


const Navigation = (props) => (

  <div>
    <Navbar>

      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">
            Evernight
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>

          <LinkContainer to="/team-view.js">
            <NavItem>Mieszkańcy bazy</NavItem>
          </LinkContainer>

          <LinkContainer to="/treasury.js">
            <NavItem>Skarby</NavItem>
          </LinkContainer>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {props.children}
  </div>
);

export default Navigation;
