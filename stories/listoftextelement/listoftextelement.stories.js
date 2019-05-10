import React from "react";

import { storiesOf } from "@storybook/react";
import ListOfTextElement from "../../src/ListOfTextElement/ListOfTextElement";

const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id consequat libero. Donec auctor ullamcorper diam, tincidunt sagittis ex varius nec. Integer eleifend eleifend rhoncus. Mauris vitae leo molestie, semper velit ac, commodo ligula. Donec nec nunc est. Proin sit amet urna nec tortor euismod facilisis. Vivamus ultrices orci et efficitur porttitor. Maecenas maximus lacus rhoncus, efficitur neque vitae, suscipit velit. Phasellus facilisis justo metus, et ornare neque tempor eu. Phasellus scelerisque lectus tellus, at imperdiet elit tincidunt quis. Fusce vehicula dui elementum elit euismod, nec pharetra lorem semper. Donec sit amet diam in lectus sollicitudin placerat.";

const elementArrayWithMuchText =  [
  {img: "./listoftextelement/bbc.png", text: loremipsum },
  {img: "./listoftextelement/ctm.png", text: loremipsum },
  {img: "./listoftextelement/ge.png", text: loremipsum }
];

const elementArrayWithSomeText =  [
  {img: "./listoftextelement/bbc.png", text: "hello world" },
  {img: "./listoftextelement/ctm.png", text: "hello world" },
  {img: "./listoftextelement/ge.png", text: "hello world" }
];
storiesOf("listOfTextElement")
  .add("render with 3 items", () => <ListOfTextElement elements={elementArrayWithMuchText} /> )
  .add("render with 3 items and limited text", () => <ListOfTextElement elements={elementArrayWithSomeText} /> );