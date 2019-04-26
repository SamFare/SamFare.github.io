import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import PhotoHeader from "./PhotoHeader.js";

test("The about page contains a photo background", () => { 
  const wrapper = mount(<PhotoHeader mobileImgUrl={"testMob.png"} imgUrl={"test.png"}/>);
  const photo = wrapper.find(".qa-photo");
  expect(photo.length).toEqual(1);
});

test.each`
fileUrl
${"./test.png"}
${"./test2.png"}
`("The page uses the image provided", ({fileUrl}) => { 
  const wrapper = mount(<PhotoHeader mobileImgUrl={"testMob.png"} imgUrl={fileUrl}/>);
  expect(wrapper.find(".qa-photo").prop("style")).toHaveProperty("backgroundImage", `url(${fileUrl})`);
});

test("the wrapper uses an alternative image when in mobile view", () => { 
  window.innerWidth = 200;
  const wrapper = mount(<PhotoHeader imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>);
  window.dispatchEvent(new Event("resize"));
  expect(wrapper.find(".qa-photo").prop("style")).toHaveProperty("backgroundImage", "url(testMob.png)");
});

test("the wrapper changes the image when changed to mobile view", () => {
  const wrapper = mount(<PhotoHeader imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>); 
  window.innerWidth = 200;
  window.dispatchEvent(new Event("resize"));
  expect(wrapper.find(".qa-photo").prop("style")).toHaveProperty("backgroundImage", "url(testMob.png)");
});

describe("an about page=", () => {
  beforeEach(() => {
    
  });

  it("it has the image that was passed in", () => {
    const aboutPage = renderer.create(<PhotoHeader imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/> );
    expect(aboutPage).toMatchSnapshot();
  });
});
