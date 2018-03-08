import React from "react";
import TextElement from "./TextElement.js";

import css from "./TextElement.css";

export default class InvertedTextElement extends TextElement{
  render(){
    return (
      <div className={css.textElement}>
        <div className={css.textElement}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta accumsan molestie. Suspendisse potenti. Vivamus eu tempus dui, eu consectetur metus. Sed non est gravida, egestas est sed, vulputate tortor. Sed quis eros quis elit congue tempor vitae vitae enim. Aliquam sed ultrices elit. Duis venenatis consequat enim, faucibus porttitor eros suscipit non. Pellentesque rutrum aliquet nibh, eget iaculis nibh lobortis bibendum. Proin consectetur, turpis eget blandit ultricies, neque nisi facilisis leo, vel dapibus velit est dignissim nunc.
        </div>   
        <div className={css.subElement}>
          <img src="../../assets/about-page-pic.jpg"  height="100" width="100"/>
        </div> 
      </div>
    );
  }
}