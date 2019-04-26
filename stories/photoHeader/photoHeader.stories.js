import React from "react";

import { storiesOf } from "@storybook/react";
import PhotoHeader from "../../src/PhotoHeader/PhotoHeader";

storiesOf("photoHeader")
  .add("render without text", () => <PhotoHeader imgUrl={"./photoHeader/photoHeaderBackground.jpg"}/> );
  