import React from "react";
import ListOfTextElement from "./ListOfTextElement.js";
import renderer from "react-test-renderer";

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

  test("every other item is oriented left", () => { 
    expect(context.listOfTextElement.getInstance().listItems[0].props.orientation)
      .toEqual("left");
    expect(context.listOfTextElement.getInstance().listItems[2].props.orientation)
      .toEqual("left");
  });

  test("the secound item is oriented right", () => { 
    expect(context.listOfTextElement.getInstance().listItems[1].props.orientation)
      .toEqual("right");
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
