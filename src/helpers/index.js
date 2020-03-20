/**
 * Function to calculate the count of common letters between the guessed word and secret word.
 *
 * @name getLetterMatchCount
 * @function
 * @param {string} guessedWord guessed word
 * @param {string} secretWord secret word.
 * @returns {number}
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
    const guessedWordSet = new Set(guessedWord.split(""));
    const secretWordSet = new Set(secretWord.split(""));
    return [...guessedWordSet].filter(letter => secretWordSet.has(letter)).length;
};
