import React from "react";
import TextElement from "./TextElement.js";
import { mount } from "enzyme";


test("When no orientation is selected, the image displays on the left", () => { 
  const wrapper = mount(<TextElement />);
  const img = wrapper.find(".qa-img");
  expect(img.prop("style"))
    .toHaveProperty("float", "left");
});

test("When left orientation is selected, the header text is left aligned", () => { 
  const wrapper = mount(<TextElement />);
  const headerText = wrapper.find(".qa-header-text");
  expect(headerText.prop("className")).toEqual(expect.stringContaining("leftAlign"));
});

test("When no orientation is selected, the header text is left aligned", () => { 
  const wrapper = mount(<TextElement orientation="left"/>);
  const headerText = wrapper.find(".qa-header-text");
  expect(headerText.prop("className")).toEqual(expect.stringContaining("leftAlign"));
});
  
test("When right orientation is selected, the image displays on the right", () => { 
  const wrapper = mount(<TextElement orientation="right"/>);
  const img = wrapper.find(".qa-img");
  expect(img.prop("style"))
    .toHaveProperty("float", "right");
});

test("When right orientation is selected, the header text is right aligned", () => { 
  const wrapper = mount(<TextElement orientation="right"/>);
  const headerText = wrapper.find(".qa-header-text");
  expect(headerText.prop("className")).toEqual(expect.stringContaining("rightAlign"));
});

test("When left is selected, the image displays on the left", () => { 
  const wrapper = mount(<TextElement orientation="left" />);
  const img = wrapper.find(".qa-img");
  expect(img.prop("style"))
    .toHaveProperty("float", "left");
});

test("When garbage is selected, the image displays on the left", () => { 
  const wrapper = mount(<TextElement orientation="meh" />);
  const img = wrapper.find(".qa-img");
  expect(img.prop("style"))
    .toHaveProperty("float", "left");
});

test("When no garbage is selected, the header text is left aligned", () => { 
  const wrapper = mount(<TextElement orientation="meh"/>);
  const headerText = wrapper.find(".qa-header-text");
  expect(headerText.prop("className")).toEqual(expect.stringContaining("leftAlign"));
});
  
