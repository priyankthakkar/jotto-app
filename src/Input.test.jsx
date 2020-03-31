import { shallow } from "enzyme";
import React from "react";
import { findByAttribute, checkProps } from "../test/testUtils";
import Input from "./Input";

/**
 * Factory function to setup Input component.
 * @function
 * @name setup
 * @return {ShallowWrapper}
 */
const setup = props => {
  const wrapper = shallow(<Input {...props} />);
  return wrapper;
};

describe("Input", () => {
  let wrapper;
  const defaultProps = {
    secretWord: "train"
  };

  beforeEach(() => {
    wrapper = setup(defaultProps);
  });

  test("renders without error", () => {
    const component = findByAttribute(wrapper, "component-input");
    expect(component.length).toBe(1);
  });

  test("renders without warning when right props are passed", () => {
    checkProps(wrapper, defaultProps);
  });
});

describe("state controlled input field", () => {
  let wrapper;
  let mockSetCurrentGuess;

  beforeEach(() => {
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const defaultProps = {
      secretWord: "train"
    };
    wrapper = setup(defaultProps);
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByAttribute(wrapper, "input-box");
    const mockEvent = {
      target: {
        value: "train"
      }
    };

    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("`setCurrentGuess` is called with emptry string when submit button is clicked", () => {
    const submitButton = findByAttribute(wrapper, "submit-button");
    const mockEvent = {
      preventDefault: () => {}
    };

    submitButton.simulate("click", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
