import React from "react";
import { mount } from "enzyme";

import ImageList from "./image-list";


test("when no images are pased in the image box displays nothing ", () => { 
  const wrapper = mount(<ImageList images={[]} />);
  expect(wrapper.find("img").length).toEqual(0);
});

test("the number of images show is the same as the number of images requested", () => { 
  [1,2,3,4].map(numberOfUrl  => {   
    const images = new Array(numberOfUrl).fill({url: "test.png"});
    const wrapper = mount(<ImageList images={images} />);
    expect(wrapper.find("img").length).toEqual(numberOfUrl);
  });
});

test.each`
name
${"test.png"}
${"test2.png"}
`("the images have the url of the image object", ({name}) => { 
  const wrapper = mount(<ImageList images={[{url: name}]} />);
  expect(wrapper.find("img").prop("src")).toEqual(name);
});

test("the list elements fade in onto the screen", () => { 
  const wrapper = mount(<ImageList images={[{url: name}]} />);
  expect(wrapper.find("img").prop("style")).toHaveProperty("animation");
});
