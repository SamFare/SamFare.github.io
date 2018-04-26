import React from "react";
import ListOfTextElement from "./ListOfTextElement.js";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let context = {};

describe("there are three elements ",  () => {
  beforeEach(() => {
    context.elementArray =  [
      {img: "test.png", text: "this is text" },
      {img: "test2.png", text: "this is text" },
      {img: "test3.png", text: "this is text" }
    ];
  
    context.listOfTextElement = renderer.create(
      <ListOfTextElement elements={context.elementArray} />
    ); 
  });

  test("has the number of elemebts that is requested",() => {
    expect(context.listOfTextElement.getInstance().listItems.length).toEqual(3);
  });

  test("the elements have the correct text passed to them",() => {
    expect(context.listOfTextElement.getInstance().listItems[0].props.text).toEqual("this is text");
  });

  test("the elements have the correct image passed to them",() => {
    expect(context.listOfTextElement.getInstance().listItems[0].props.img).toEqual("test.png");
  });

  test("matches the snapshot",() => {
    expect(context.listOfTextElement).toMatchSnapshot();
  });
});

describe("there are no elements ",  () => {
  beforeEach(() => {
    context.listOfTextElement = renderer.create(
      <ListOfTextElement elements={[]} />
    );
  });

  test("has the number of elements that is requested",() => {
    expect(context.listOfTextElement.getInstance().listItems.length).toEqual(0);
  });
});
