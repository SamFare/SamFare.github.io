import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";

//import css from "./NavigationBar.css";

export default class NavigationBar extends React.Component{
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Nav>
            <NavItem href="#">
              Home
            </NavItem>
            <NavItem href="#">
              About
            </NavItem>
            <NavItem href="#">
              Experence
            </NavItem>
            <NavItem href="#">
              Open Source
            </NavItem>
          </Nav>
        </Navbar.Header>
      </Navbar>
    );
  }
}
