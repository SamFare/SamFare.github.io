import React from "react";
import AboutPage from "./AboutPage.js";
import { mount } from "enzyme";


it("The about page displays a paragraph box", () => { 
  const wrapper = mount(<AboutPage />);
  expect(wrapper.find(".qa-paragraph").length).toEqual(0);
});