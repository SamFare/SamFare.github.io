import React from "react";

import { storiesOf } from "@storybook/react";
import PhotoHeader from "../../src/PhotoHeader/PhotoHeader";

storiesOf("photoHeader")
  .add("render without text", () => <PhotoHeader mobileImgUrl={"./photoHeader/photoHeaderBackgroundMobile.jpg"} imgUrl={"./photoHeader/photoHeaderBackground.jpg"}/> )
  .add("render with text", () => <PhotoHeader text={"this is some really interesting text, seriously it is really interesting, really really"} mobileImgUrl={"./photoHeader/photoHeaderBackgroundMobile.jpg"} imgUrl={"./photoHeader/photoHeaderBackground.jpg"}/> )
  .add("render with text and arrow", () => <PhotoHeader arrowImgUrl={"photoHeader/down-arrow.png"} text={"this is some really interesting text, seriously it is really interesting, really really"} mobileImgUrl={"./photoHeader/photoHeaderBackgroundMobile.jpg"} imgUrl={"./photoHeader/photoHeaderBackground.jpg"}/>);
  