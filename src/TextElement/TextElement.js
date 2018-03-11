import React from "react";
import PropTypes from "prop-types";

import css from "./TextElement.css";

export default class TextElement extends React.Component{
  
  constructor(props) {
    super(props);
    this.textValue = this.props.text;
  }

  static get propTypes() { 
    return {
      text: PropTypes.string,
      img: PropTypes.string
    };
  }

  render(){
    return (
      <div className={css.textElement}>  
        <div className={css.subElement}>
          <img src={this.props.img}  height="100" width="100"/>
        </div>
        <div className={css.textElement}>
          {this.props.text}
        </div>  
      </div>
    );
  }
}