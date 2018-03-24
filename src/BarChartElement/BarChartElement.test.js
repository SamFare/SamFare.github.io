import React from "react";
import BarChartElement from "./BarChartElement.js";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let context = {};
 
const data = [
  {skill: "ES6", skillIQ: 137},
  {skill: "c#", skillIQ: 95},
  {skill: "React", skillIQ: 200},
  {skill: "CSS", skillIQ: 150}
];

describe("a bar chart element", () => {
  beforeEach(() => {
    context.barChartElement = renderer.create(
      <BarChartElement data={data}/>
    );
  });

  it("it has the image that was passed in", () => {
    expect(context.barChartElement).toMatchSnapshot();
  });
});