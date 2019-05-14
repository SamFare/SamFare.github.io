import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import Subheading from "../Subheading/Subheading.js";

import ImageList from "../ImageList/image-list.js";

import css from "./AboutPage.css";

const images = [
  {url: "assets/bbc.png"},
  {url: "assets/ge.png"},
  {url: "assets/philips.png"},
  {url: "assets/ctm.png"}, 

];

export default class AboutPage extends React.Component{
  render(){
    return (
      <div>
        <PhotoHeader arrowImgUrl={"assets/down-arrow.png"} text={"Modern, Clean, High Quality Software Engineering For People First Organisations"} mobileImgUrl={"assets/photo-header-background-mobile.png"} imgUrl={"assets/photo-header-background.png"}/>
        <div className={css.centerDiv}>
          <Subheading text="My Background"/>
          <ImageList images={images} />
          <div className={css.spacer} /> 
        </div>
      </div>
    );
  }
}