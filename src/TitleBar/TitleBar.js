import React from "react";
import { Navbar } from "react-bootstrap";

import css from  "./TitleBar.css";


export default class TitleBar extends React.Component{
  render(){
    return (
      <Navbar className={css.TitleBarLayout}>
        <div className="col-md-24">
          <div className={css.TitleBarText}>
            SamFare.io
          </div>
        </div>
      </Navbar>
    );
  }
}
