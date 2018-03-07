import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";

export default class NavigationBar extends React.Component{
  render(){
    return (
      <div>
        <PhotoHeader />
        <ListOfTextElement />
      </div>
    );
  }
}