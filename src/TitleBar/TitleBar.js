import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

import css from  "./TitleBar.css";


export default class TitleBar extends React.Component{
  render(){
    return (
      <Navbar className={css.TitleBarLayout}>
        <Navbar.Header className={css.TitleBarText}>
          SamFare.me
        </Navbar.Header>
        <Nav>
          <NavItem href="https://github.com/SamFare">
            <img className={css.logoButton} src="assets/GitHub-Mark-64px.png"/>
          </NavItem>
          <NavItem href="https://medium.com/@samuel.fare">
            <img className={css.logoButton} src="assets/Monogram.png"/>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
