import React from "react";
import TextElement from "../TextElement/TextElement.js";
import InvertedTextElement from "../TextElement/InvertedTextElement.js";

export default class ListOfTextElement extends React.Component{
  
  get numberOfElements() {
    return 3;
  }

  render(){
    return (
      <div>
        <TextElement />
        <InvertedTextElement />  
      </div>
    );
  }
  
}
