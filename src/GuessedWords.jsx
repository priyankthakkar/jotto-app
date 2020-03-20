import PropTypes from "prop-types";
import React from "react";

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

    if (guessedWords.length === 0) {
        content = (
            <span data-test="guess-instruction">
                Try to guess the secret word!!
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
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
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
