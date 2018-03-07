import React from "react";

import css from "./PhotoHeader.css";

export default class PhotoHeader extends React.Component{
  render(){
    return (
      <div className={css.photoHeader}>
        <img src="../../assets/about-page-pic.jpg" />
        <div className={css.bottomRight}>About</div>
      </div> 
    );
  }
}