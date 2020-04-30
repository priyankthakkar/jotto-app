import React from "react";
import { shallow, mount } from "enzyme";
import guessedWordsContext from "./guessedWordsContext";

// Functional component that calls useGuessedWords() for our tests
function FunctionalComponent() {
  guessedWordsContext.useGuessedWords();
  return <div />;
}

test("throws an error when called out side of `GuessedWordsProvider`", () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow("useGuessedWords must be used within GuessedWordsProvider");
});

test("does not throw an error when called within `GuessedWordsProvider`", () => {
  expect(() => {
    mount(
      <guessedWordsContext.GuessedWordsProvider>
        <FunctionalComponent />
      </guessedWordsContext.GuessedWordsProvider>
    );
  }).not.toThrow();
});
