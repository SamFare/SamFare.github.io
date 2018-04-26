import React from "react";
import PropTypes from "prop-types";

import css from "./PhotoHeader.css";

export default class PhotoHeader extends React.Component{
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      text: PropTypes.string, 
      imgUrl: PropTypes.string 
    };  
  }

  render(){
    return (
      <div className={css.photoHeader}>
        <img className={css.photo} src="assets/about-page-pic.jpg" />
        <div className={css.bottomRight}>{this.props.text}</div>
      </div> 
    );
  }
}