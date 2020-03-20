export const actionType = {
  CORRECT_GUESS: "CORRECT_GUESS"
};

/**
 * correctGuess
 *
 * @name correctGuess
 * @function
 * @returns {object} Action object with type `CORRECT_GUESS`.
 */

export const correctGuess = () => {
  return { type: actionType.CORRECT_GUESS };
};
