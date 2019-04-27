import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import ListOfTextElement from "../ListOfTextElement/ListOfTextElement.js";
import Paragraph from "../Paragraph/Paragraph.js";
import Subheading from "../Subheading/Subheading.js";

import careerData from "../../data/career-data.json";
import activityData from "../../data/activity-data.json";
import aboutData from "../../data/about-data.json";

import css from "./AboutPage.css";

export default class AboutPage extends React.Component{
  render(){
    return (
      <div>
        <PhotoHeader arrowImgUrl={"assets/down-arrow.png"} text={"Modern, Clean, High Quality Software Engineering For People First Organisations"} mobileImgUrl={"assets/photo-header-background-mobile.png"} imgUrl={"assets/photo-header-background.png"}/>
        <div className={css.centerDiv}>
          <Subheading text="About"/>
          <Paragraph text={aboutData.data}/>
          <Subheading text="What I'm up too"/>
          <ListOfTextElement elements={activityData.data} />
          <Subheading text="Experience"/>
          < ListOfTextElement elements={careerData.data} />
        </div>
      </div>
    );
  }
}