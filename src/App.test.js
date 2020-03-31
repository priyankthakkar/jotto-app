import { mount } from "enzyme";
import React from "react";
import { findByAttribute } from "../test/testUtils";
import hookActions from "./actions/hookActions";
import App from "./App";

const mockGetSecretWord = jest.fn();

/**
 * Factory function to setup and mount App component.
 * @function
 * @name setup
 * @param {string} - desired secretWord state value for test.
 * @returns {ReactWrapper}
 */
const setup = (secretWord = "party") => {
  hookActions.getSecretWord = mockGetSecretWord;
  mockGetSecretWord.mockClear();

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);
  React.useReducer = mockUseReducer;
  // use mount becnause useEffect not called on `shallow`
  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByAttribute(wrapper, "component-app");
  expect(component.length).toBe(1);
});

describe("`getSecretWord`", () => {
  test("is called on mount", () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // wraper.update() doesn't trigger update
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secretWord is not null", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup("party");
  });

  test("renders app when secretWord is not null", () => {
    const appComponent = findByAttribute(wrapper, "component-app");
    expect(appComponent.exists()).toBe(true);
  });

  test("does not render spinner when secretWord is not null", () => {
    const spinnerComponent = findByAttribute(wrapper, "component-spinner");
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe("secretWord is null", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(null);
  });

  test("renders spinner when secretWord is null", () => {
    const spinnerComponent = findByAttribute(wrapper, "component-spinner");
    expect(spinnerComponent.exists()).toBe(true);
  });

  test("does not render app component when secretWord is null", () => {
    const appComponent = findByAttribute(wrapper, "component-app");
    expect(appComponent.exists()).toBe(false);
  });
});
