import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";

import data from "../../data/career-data.json";

export default class NavigationBar extends React.Component{
  constructor() {
    super();
  }
  
  render(){
    return (
      <div>
        <PhotoHeader />
        <ListOfTextElement elements={data.data} />
      </div>
    );
  }
}