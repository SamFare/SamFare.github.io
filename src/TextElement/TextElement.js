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
      title: PropTypes.string,
      img: PropTypes.string,
      orientation: PropTypes.string
    };
  }

  chooseOrientation() { 
    return this.props.orientation === "right"? "right" : "left";
  }

  render(){
    return (
      <div className={css.textElement}>  
        <div style={ {float: this.chooseOrientation() }}className={`${css.subElement} qa-img`}>
          <img className={css.experenceImg} src={this.props.img}  height="100" width="100"/>
        </div>
        <div> 
          <div className={`${css.textHeading} qa-header-text ${this.chooseOrientation() === "right"? css.rightAlign : css.leftAlign}` }> {this.props.title} </div> 
          <div className={css.textElementText}>
            {this.props.text}
          </div> 
        </div> 
      </div>
    );
  }
}