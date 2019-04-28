import React from "react";

import { storiesOf } from "@storybook/react";
import ImageList from "../../src/ImageList/image-list";

const images = [
  {url: "ImageList/bbc.png"},
  {url: "ImageList/ge.png"},
  {url: "ImageList/philips.png"},
  {url: "ImageList/ctm.png"}, 

];

storiesOf("ImageList")
  .add("render with 1 image", () => <ImageList images={[{url: "ImageList/ctm.png"}]} /> )  
  .add("render with 4 images", () => <ImageList images={images} /> )
  .add("render with 8 images", () => <ImageList images={[...images, ...images]} /> );
  