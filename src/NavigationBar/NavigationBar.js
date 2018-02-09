import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";


import css from "./NavigationBar.css";

export default class NavigationBar extends React.Component{
  render(){
    return (
      <Navbar className={"col-md-24"}>
        <ol className={`${css.centreNav}`}>
          <li className={css.navItem}>
            <a href="#"> About </a>
          </li>
          <li className={css.navItem}>
            <a href="#"> Experence </a>
          </li>
          <li className={css.navItem}>
            <a href="https://github.com/SamFare"> GitHub </a>
          </li>
          <li className={css.navItem}>
            <a href="https://medium.com/@samuel.fare"> Medium </a>
          </li>
        </ol>
      </Navbar>
    );
  }
}
