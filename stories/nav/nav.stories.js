import React from "react";

import { storiesOf } from "@storybook/react";
import Nav from "../../src/Nav/Nav";

storiesOf("Nav")
  .add("render with options", () => <Nav logo={"./samfareme-logo.png"} options={[{key: 1, value: "about"}, {key: 2, value: "experence"}]} /> );