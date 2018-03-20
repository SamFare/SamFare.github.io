import React from "react";
import AboutPage from "./AboutPage.js";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let context = {};

describe("an about page=", () => {
  beforeEach(() => {
    context.aboutPage = renderer.create(
      <AboutPage />
    );
  });

  it("it has the image that was passed in", () => {
    expect(context.aboutPage).toMatchSnapshot();
  });
});