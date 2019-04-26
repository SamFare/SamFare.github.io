import React from "react";
import { mount } from "enzyme";

import PhotoHeader from "./PhotoHeader.js";

test("The about page contains a photo background", () => { 
  const wrapper = mount(<PhotoHeader />);
  const photo = wrapper.find(".qa-photo");
  expect(photo.length).toEqual(1);
});

test.each`
fileUrl
${"./test.png"}
${"./test2.png"}
`("the page uses the image provided", ({fileUrl}) => { 
  const wrapper = mount(<PhotoHeader imgUrl={fileUrl}/>);
  expect(wrapper.find(".qa-photo").prop("style")).toHaveProperty("backgroundImage", fileUrl);
});

