import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";

export default class NavigationBar extends React.Component{
  constructor() {
    super();
    this.elementArray =  [
      {img: "../../assets/about-page-pic.jpg", text: "this is text" },
      {img: "../../assets/about-page-pic.jpg", text: "this is text" },
      {img: "../../assets/about-page-pic.jpg", text: "this is text" },
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