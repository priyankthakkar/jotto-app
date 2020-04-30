import { mount } from "enzyme";
import React from "react";
import { checkProps, findByAttribute } from "../test/testUtils";
import languageContext from "./contexts/languageContext";
import successContext from "./contexts/successContext";
import Input from "./Input";

/**
 * Factory function to setup Input component.
 * @function
 * @name setup
 * @params {object} - testValues - context values and props for the component
 * @return {ReactWrapper}
 */
const setup = ({ secretWord, success, language }) => {
  secretWord = secretWord || "train";
  language = language || "en";
  success = success || false;

  const wrapper = mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Input secretWord={secretWord} />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
  return wrapper;
};

describe("languageContext", () => {
  test("correctly renders submit string in english", () => {
    const wrapper = setup({ language: "en" });
    const submitButton = findByAttribute(wrapper, "submit-button");
    expect(submitButton.text()).toBe("Submit");
  });

  test("correctly renders submit string in emoji", () => {
    const wrapper = setup({ language: "emoji" });
    const submitButton = findByAttribute(wrapper, "submit-button");
    expect(submitButton.text()).toBe("🚀");
  });
});

describe("Input", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({});
  });

  const defaultProps = {
    secretWord: "train"
  };

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
    wrapper = setup({});
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
      preventDefault: () => { }
    };

    submitButton.simulate("click", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});

test("Input component does not render when success is true", () => {
  const wrapper = setup({ secretWord: "party", success: true });
  expect(wrapper.isEmptyRender()).toBe(true);
});
