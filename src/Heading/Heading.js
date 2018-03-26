import React from "react";
import PropTypes from "prop-types";

import css from "./Heading.css"

export default class Heading extends React.Component{
  constructor(props) {
    super(props)
  }

  static get PropTypes() {
    return {
      text: PropTypes.text
    };
  }
  render(){
    return (  
      <div className={css.header}>  
        <p> {this.props.text} </p>
      </div>
    );
  }
}