import React from "react";

import { storiesOf } from "@storybook/react";
import TextElement from "../../src/TextElement/TextElement";

const largeParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id consequat libero. Donec auctor ullamcorper diam, tincidunt sagittis ex varius nec. Integer eleifend eleifend rhoncus. Mauris vitae leo molestie, semper velit ac, commodo ligula. Donec nec nunc est. Proin sit amet urna nec tortor euismod facilisis. Vivamus ultrices orci et efficitur porttitor. Maecenas maximus lacus rhoncus, efficitur neque vitae, suscipit velit. Phasellus facilisis justo metus, et ornare neque tempor eu. Phasellus scelerisque lectus tellus, at imperdiet elit tincidunt quis. Fusce vehicula dui elementum elit euismod, nec pharetra lorem semper. Donec sit amet diam in lectus sollicitudin placerat.";

storiesOf("textElement")
  .add("render with text", () => <TextElement title="really interesting title" text="this is some really interesting text. it's really really important" img="./textElement/down-arrow.png"/> )
  .add("render with large paragraph of text", () => <TextElement title="really interesting title" text={largeParagraph} img="./textElement/down-arrow.png"/> )
  .add("render with large paragraph of text", () => <TextElement title="really square image" text={largeParagraph} img="./textElement/square.png"/> )
  .add("render with right orientation", () => <TextElement orientation='right' title="really square image" text={largeParagraph} img="./textElement/square.png"/> );
  