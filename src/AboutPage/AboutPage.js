import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";

import data from "../../data/career-data.json";

export default class AboutPage extends React.Component{
  constructor() {
    super();
  }
  
  render(){
    return (
      <div>
        <PhotoHeader text={"About"}/>
        <ListOfTextElement elements={data.data} />
      </div>
    );
  }
}