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

test("When text is not added it is not over the image", () => {
  const wrapper = mount(<PhotoHeader imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>); 
  expect(wrapper.find(".qa-text").length).toEqual(0);
});

test("When text is added it is displayed over the image", () => {
  const wrapper = mount(<PhotoHeader text={"some text"} imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>);
  const textElementWrapper = wrapper.find(".qa-text"); 
  expect(textElementWrapper.length).toEqual(1);
  expect(textElementWrapper.text()).toEqual("some text");
});

test("it has the image that was passed in", () => {
  const aboutPage = renderer.create(<PhotoHeader imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/> );
  expect(aboutPage).toMatchSnapshot();
});

test("it adds a down button to the photo header", () => { 
  const wrapper = mount(<PhotoHeader arrowImgUrl={"test.png"} text={"some text"} imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>);
  const downArrowWrapper = wrapper.find(".qa-down-arrow"); 
  expect(downArrowWrapper.length).toEqual(1);
});

test.each`
fileUrl
${"./test.png"}
${"./test2.png"}
`("The down button displays an image", ({fileUrl}) => { 
  const wrapper = mount(<PhotoHeader arrowImgUrl={fileUrl} text={"some text"} imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>);
  const downArrowWrapper = wrapper.find(".qa-down-arrow"); 
  expect(downArrowWrapper.prop("src")).toEqual(fileUrl);
});

test("when there is no down arrow added, it is not displayed", () => { 
  const wrapper = mount(<PhotoHeader text={"some text"} imgUrl={"test.png"} mobileImgUrl={"testMob.png"}/>);
  const downArrowWrapper = wrapper.find(".qa-down-arrow"); 
  expect(downArrowWrapper.length).toEqual(0);
});
