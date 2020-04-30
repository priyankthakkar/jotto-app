import { shallow } from "enzyme";
import React from "react";
import { findByAttribute } from "../test/testUtils";
import GuessedWords from "./GuessedWords";
import guessedWordsContext from "./contexts/guessedWordsContext";
/**
 * Factory function to create ShallowWrapper for the GuessedWords component.
 *
 * @name setup
 * @function
 * @param {array} guessedWords guessedWords array specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (guessedWords = []) => {
  const mockUseGuessedWords = jest
    .fn()
    .mockReturnValue([guessedWords, jest.fn()]);
  guessedWordsContext.useGuessedWords = mockUseGuessedWords;
  return shallow(<GuessedWords />);
};

describe("if there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup([]);
  });

  test("renders without error", () => {
    const component = findByAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instruction to guess the word", () => {
    const instruction = findByAttribute(wrapper, "guess-instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 3
    },
    {
      guessedWord: "agile",
      letterMatchCount: 1
    },
    {
      guessedWord: "party",
      letterMatchCount: 5
    }
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = setup(guessedWords);
  });

  test("renders without error", () => {
    const component = findByAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders `guessed words` section", () => {
    const guessedWordNode = findByAttribute(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWords = findByAttribute(wrapper, "guessed-word");
    expect(guessedWords.length).toBe(3);
  });
});

describe("languagePicker", () => {
  test("correctly renders guess instructions string in `english`", () => {
    const wrapper = setup([]);
    const guessInstructions = findByAttribute(wrapper, "guess-instruction");
    expect(guessInstructions.text()).toBe("Try to guess the secret word!");
  });

  test("correct renders guess instructions string in `emoji`", () => {
    const mockUseContext = jest.fn().mockReturnValue("emoji");
    React.useContext = mockUseContext;
    const wrapper = setup([]);
    const guessInstructions = findByAttribute(wrapper, "guess-instruction");
    expect(guessInstructions.text()).toBe("🤔🤫🔤");
  });
});
