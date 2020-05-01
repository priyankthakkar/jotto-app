import PropTypes from "prop-types";
import React from "react";
import languageContext from "./contexts/languageContext";
import successContext from "./contexts/successContext";
import guessedWordsContext from "./contexts/guessedWordsContext";
import { getStringByLanguage } from "./helpers/strings";
import { getLetterMatchCount } from "./helpers/index";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();
  const [success, setSuccess] = successContext.useSuccess();
  const language = React.useContext(languageContext);

  if (success) {
    return null;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={getStringByLanguage(language, "guessInputPlaceholder")}
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary"
          type="submit"
          disabled={!currentGuess || !currentGuess.trim()}
          onClick={e => {
            e.preventDefault();
            const letterMatchCount = getLetterMatchCount(
              currentGuess,
              secretWord
            );
            const newGuessedWords = [
              ...guessedWords,
              { guessedWord: currentGuess, letterMatchCount }
            ];
            setGuessedWords(newGuessedWords);
            if (currentGuess === secretWord) {
              setSuccess(true);
            }
            setCurrentGuess("");
          }}
        >
          {getStringByLanguage(language, "submit")}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
