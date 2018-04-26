import React from "react";
import PropTypes from "prop-types";

import css from "./Paragraph.css";

export default class Paragraph extends React.Component{
  
  constructor(props) {
    super(props); 
  }

  static get propTypes() {
    return {
      text: PropTypes.string
    };
  }

  render(){
    return (
      <div className={css.paragraphText}>
        {this.props.text}
      </div>
    );
  }
}
