import { actionType } from "../actions";

/**
 *
 * @name secretWordReducer
 * @function
 * @param {string} state=null currentState of secretWord (null initially)
 * @param {object} action action to be reduced.(contains type and payload)
 * @returns {string} New state (secret word received as payload with action)
 */

const secretWordReducer = (state = null, action) => {
    const { type, payload } = action || {};

    switch (type) {
        case actionType.SET_SECRET_WORD:
            return payload;
        default:
            return state;
    }
};

export default secretWordReducer;
