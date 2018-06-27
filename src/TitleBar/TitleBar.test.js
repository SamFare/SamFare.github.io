import React from "react";
import TitleBar from "./TitleBar.js";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let context = {};

describe("a title bar", () => {
  beforeEach(() => {
    context.titeBar = renderer.create(
      <TitleBar />
    );
  });

  it("it has the image that was passed in", () => {
    expect(context.titleBar).toMatchSnapshot();
  });
});