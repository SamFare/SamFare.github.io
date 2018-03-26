import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";
import BarChartElement from "../BarChartElement/BarChartElement.js";
import Paragraph from "../Paragraph/Paragraph.js";
import Heading from "../Heading/Heading.js";

import data from "../../data/career-data.json";



export default class AboutPage extends React.Component{
  constructor() {
    super();

    this.SkillData = [
      {skill: "ES6", skillIQ: 137},
      {skill: "c#", skillIQ: 95},
      {skill: "React", skillIQ: 200},
      {skill: "CSS", skillIQ: 150}
    ];
  }
  
  render(){
    return (
      <div>
        <PhotoHeader />
        <Heading text="About"/>
        <Paragraph />
        <Heading text="Experence"/>
        <ListOfTextElement elements={data.data} />
        <Heading text="Skills"/>
        <BarChartElement data={this.SkillData}/>
      </div>
    );
  }
}