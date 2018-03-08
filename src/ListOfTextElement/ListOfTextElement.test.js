import React from 'react';
import {shallow} from 'enzyme';
import ListOfTextElement from "./ListOfTextElement.js";
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let context = {};

beforeEach(() => {
  context.elementArray =  [
    {img: "test.png", text: "this is text" },
    {img: "test2.png", text: "this is text" },
    {img: "test3.png", text: "this is text" },
  ]

  context.listOfTextElement = renderer.create(
    <ListOfTextElement elements={context.lementArray} />,
  );
})

test("has the number of elemebts that is requested",() => {
  expect(context.listOfTextElement.getInstance().numberOfElements).toEqual(3);
})