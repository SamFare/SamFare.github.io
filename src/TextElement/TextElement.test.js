import React from "react";
import TextElement from "./TextElement.js";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let context = {};

describe("A text element", () => {
  beforeEach(() => {
    context.textElement = renderer.create(
      <TextElement text="text" img="test.png"/>
    );
  });

  it("it has the image that was passed in", () => {
    expect(context.textElement).toMatchSnapshot();
  });
});