import React from "react";
import { mount } from "enzyme";
import successContext from "./contexts/successContext";
import guessedWordsContext from "./contexts/guessedWordsContext";
import Input from "./Input";
import { findByAttribute } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

/**
 * A factory function to set Input component with successContext.
 * @function
 * @name setup
 *
 * @param  {String} secretWord secretWord prop for the Input component.
 * @return {Array}                      [description]
 */
function setup(guessedWordsStrings = [], secretWord = "party") {
  const wrapper = mount(
    <guessedWordsContext.GuessedWordsProvider>
      <successContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </successContext.SuccessProvider>
    </guessedWordsContext.GuessedWordsProvider>
  );

  const inputBox = findByAttribute(wrapper, "input-box");
  const submitbutton = findByAttribute(wrapper, "submit-button");

  guessedWordsStrings.map(word => {
    const mockEvent = { target: { value: word } };
    inputBox.simulate("change", mockEvent);
    submitbutton.simulate("click");
  });
  return [wrapper, inputBox, submitbutton];
}

describe("test word guesses", () => {
  let wrapper;
  let inputBox;
  let submitButton;
  describe("non-empty guessed words", () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup(["agile"], "party");
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

      test("GuessedWords table row count reflects updated guesses", () => {
        const guessedWordsTableRows = findByAttribute(wrapper, "guessed-word");
        expect(guessedWordsTableRows.length).toBe(2);
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

  describe("empty guessed words", () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup([], "party");
    });

    test("GuessedWords table row count reflects correct guesses after incorrect guess", () => {
      const mockEvent = { target: { value: "train" } };
      inputBox.simulate("change", mockEvent);
      submitButton.simulate("click");
      const guessedWordsTableRows = findByAttribute(wrapper, "guessed-word");
      expect(guessedWordsTableRows.length).toBe(1);
    });
  });
});
