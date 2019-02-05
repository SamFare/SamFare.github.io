import React from "react";
import { mount } from "enzyme";

import Nav from "./Nav";

test("After rendering the Nav is displaed", () => { 
  const wrapper = mount(<Nav options={[]} />);
  const nav = wrapper.find(".qa-nav");
  expect(nav.length).toBe(1);
});

test.each`
input                                                       | expectedResult
${[{key: 1, value: "about"}]}                               |    ${1}
${[{key: 1, value: "about"}, {key: 2, value: "experence"}]} |    ${2}
`("The nav has an option for each of the options provided as props", ({input , expectedResult}) => {   
  const wrapper = mount(<Nav options={input} />);
  const options = wrapper.find(".qa-option");
  expect(options.length).toEqual(expectedResult);
});


test("the nav options have the text specified", () => { 
  const wrapper = mount(<Nav options={[{key: 1, value: "about"}]} />);
  const options = wrapper.find(".qa-option");
  expect(options.first().text()).toEqual("about");
});


