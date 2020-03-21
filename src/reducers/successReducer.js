import { actionType } from "../actions";

const INITIAL_STATE = false;

/**
 * successReducer
 *
 * @name successReducer
 * @function
 * @param {boolean} state=INITIAL_STATE contains the current state of success.
 * @param {object} action action to be reduced.
 * @returns {boolean} new success state
 */

const successReducer = (state = INITIAL_STATE, action) => {
    const { type } = action || {};

    switch (type) {
        case actionType.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
};

export default successReducer;
