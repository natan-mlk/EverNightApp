import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

const Navigation = (props) => (

  <div>
    <Navbar inverse collapseOnSelect className="navbar-static-top navbar-fixed-top">

      <Navbar.Header>
        <Navbar.Brand>
          <img src={require("../img/EverN-logo.png")} height="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>

          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>

          <LinkContainer to="/team-view.js">
            <NavItem>Mieszkańcy bazy</NavItem>
          </LinkContainer>

          <LinkContainer to="/missions.js">
            <NavItem>Misje</NavItem>
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
