import { actionType } from "../actions";

const INITIAL_STATE = [];
/**
 * guessWordReducer
 *
 * @name guessWordReducer
 * @function
 * @param {array} state current guessed words as array.
 * @param {object} action action to be reduced.
 * @returns {array} new guessedWords state.
 */

const guessWordReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case actionType.GUESS_WORD:
            return [...state, payload];
        default:
            return state;
    }
};

export default guessWordReducer;
