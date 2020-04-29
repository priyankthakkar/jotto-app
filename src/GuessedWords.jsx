import PropTypes from "prop-types";
import React from "react";
import languageContext from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings";
/**
 * Functional react component for displyaing guessed words, or show instructions when no words are guessed.
 *
 * @name GuessedWords
 * @function
 * @param {Array} {guessedWords} It is a collection words guessed along with number of matching letters.
 * @returns {JSX.Element} Displays guessed words and matching letters along with a title or instruction if no words are guessed.
 */

const GuessedWords = ({ guessedWords }) => {
  let content = <></>;
  const language = React.useContext(languageContext);

  if (guessedWords.length === 0) {
    content = (
      <span data-test="guess-instruction">
        {getStringByLanguage(language, "guessPrompt")}
      </span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => {
      return (
        <tr key={index} data-test="guessed-word">
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });

    content = (
      <div data-test="guessed-words">
        <h3>getStringByLanguage(language, 'guessColumnHeader')</h3>
        <table className="table table-sm">
          <thead className="table-dark">
            <tr>
              <th>getStringByLanguage(language, 'guessedWords')</th>
              <th>getStringByLanguage(language, 'matchingLettersColumnHeader')</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
