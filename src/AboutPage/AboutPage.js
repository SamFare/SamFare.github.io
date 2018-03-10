import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";

export default class NavigationBar extends React.Component{
  constructor() {
    super();
    this.elementArray =  [
      {img: "test.png", text: "this is text" },
      {img: "test2.png", text: "this is text" },
      {img: "test3.png", text: "this is text" },
    ];
  }
  
  render(){
    return (
      <div>
        <PhotoHeader />
        <ListOfTextElement elements={this.elementArray} />
      </div>
    );
  }
}