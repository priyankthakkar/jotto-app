import React from "react";
import hookActions from "./actions/hookActions";
import Input from "./Input";

/**
 * reducer to update the state. Called automatically by dispatch
 * @function
 * @name reducer
 * @param {object} state - exisiting state
 * @param {object} action - container `type` and `payload` properties for the
 *                 state update for examples: { type: 'setSecretWord',
 *                 payload: party}
 * @returns {object} - update state
 */
const reducer = (state, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case "setSecretWord":
      return { ...state, secretWord: payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="component-spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div data-test="component-app" className="container">
      <Input secretWord={state.secretWord} />
    </div>
  );
};

export default App;
