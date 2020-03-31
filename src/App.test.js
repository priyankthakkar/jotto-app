import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByAttribute } from "../test/testUtils";

const setup = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByAttribute(wrapper, "component-app");
  expect(component.length).toBe(1);
});
