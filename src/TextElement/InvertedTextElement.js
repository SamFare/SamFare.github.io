import React from "react";
import TextElement from "./TextElement.js";

import css from "./TextElement.css";

export default class InvertedTextElement extends TextElement{
  render(){
    return (
      <div className={css.textElement}>
        <div> 
          <div className={css.textHeadingInverted}> {this.props.title} </div> 
          <div className={css.textElement}>
            {this.props.text}
          </div> 
        </div>    
        <div className={css.subElement}>
          <img className={css.experenceImg} src={this.props.img}  height="100" width="100"/>
        </div> 
      </div>
    );
  }
}