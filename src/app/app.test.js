import React from "react";
import { mount } from "enzyme";

import App from "./app";

test("The about page contains a nav", () => { 
  const wrapper = mount(<App />);
  const Nav = wrapper.find("Nav");
  expect(Nav.length).toEqual(1);
});