import React from "react";
import { mount } from "enzyme";
import successContext from "./contexts/successContext";
import Input from "./Input";
import { findByAttribute } from "../test/testUtils";

/**
 * A factory function to set Input component with successContext.
 * @function
 * @name setup
 *
 * @param  {String} secretWord secretWord prop for the Input component.
 * @return {Array}                      [description]
 */
function setup(secretWord = "party") {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContext.SuccessProvider>
  );

  const inputBox = findByAttribute(wrapper, "input-box");
  const submitbutton = findByAttribute(wrapper, "submit-button");
  return [wrapper, inputBox, submitbutton];
}

describe("test word guesses", () => {
  let wrapper;
  let inputBox;
  let submitButton;

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup("party");
  });

  describe("correctGuess", () => {
    beforeEach(() => {
      const mockEvent = { target: { value: "party" } };

      inputBox.simulate("change", mockEvent);
      submitButton.simulate("click");
    });

    test("Input component contains no children", () => {
      const inputComponent = findByAttribute(wrapper, "component-input");
      expect(inputComponent.children().length).toBe(0);
    });
  });

  describe("incorrectGuess", () => {
    beforeEach(() => {
      const mockEvent = { target: { value: "train" } };
      inputBox.simulate("change", mockEvent);
      submitButton.simulate("click");
    });

    test("input box remains", () => {
      expect(inputBox.exists()).toBe(true);
    });
  });
});
