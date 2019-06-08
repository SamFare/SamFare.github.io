import React from "react";

import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import Subheading from "../Subheading/Subheading.js";
import Paragraph from "../Paragraph/Paragraph.js";

import ImageList from "../ImageList/image-list.js";

import aboutText from "../../data/about-data.json";

const images = [
  {url: "assets/bbc.png"},
  {url: "assets/ge.png"},
  {url: "assets/philips.png"},
  {url: "assets/ctm.png"}, 

];

export default class AboutPage extends React.Component{
  render(){
    return (
      <div >
        <PhotoHeader arrowImgUrl={"assets/down-arrow.png"} text={"Modern, Clean, High Quality Software Engineering For People First Organisations"} mobileImgUrl={"assets/photo-header-background-mobile.png"} imgUrl={"assets/photo-header-background.png"}/>  
        <div>
          <Subheading text="About Me" />
          <Paragraph text={aboutText.data} />
        </div>


        <div>
          <Subheading text="My Background"/>
          <ImageList images={images} />
        </div>
      </div>
    );
  }
}