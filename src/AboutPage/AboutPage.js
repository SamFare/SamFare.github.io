import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";
import BarChartElement from "../BarChartElement/BarChartElement.js";
import Paragraph from "../Paragraph/Paragraph.js";
import Subheading from "../Subheading/Subheading.js";

import careerData from "../../data/career-data.json";
import activityData from "../../data/activity-data.json";
import SkillData from "../../data/skill-data.json";
import aboutData from "../../data/about-data.json";

export default class AboutPage extends React.Component{
  render(){
    return (
      <div>
        <PhotoHeader />
        <Subheading text="About"/>
        <Paragraph text={aboutData.data}/>
        <Subheading text="What I'm up too"/>
        <ListOfTextElement elements={careerData.data} />
        <Subheading text="Experence"/>
        <ListOfTextElement elements={activityData.data} />
        <Subheading text="Skills"/>
        <BarChartElement data={SkillData.data}/>
      </div>
    );
  }
}