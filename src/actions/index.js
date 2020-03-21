import { getLetterMatchCount } from "../helpers";

export const actionType = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD"
};

/**
 * Returns Redux Thunk function that dispatches `GUESS_WORD` action and (conditionally) `CORRECT_GUESS` action.
 *
 * @name guessWord
 * @function
 * @param {string} guessedWord Guessed word.
 * @returns {function} Redux Thunk function.
 */

export const guessWord = guessedWord => {
    return (dispatch, getState) => {
        const { secretWord } = getState();
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
        dispatch({
            type: actionType.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount
            }
        });

        if (guessedWord === secretWord) {
            dispatch({
                type: actionType.CORRECT_GUESS
            });
        }
    };
};
