import PropTypes from "prop-types";
import React from "react";
import languageContext from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings";

const handleSubmitButton = (event, setCurrentGuess) => {
    event.preventDefault();
    setCurrentGuess("");
};

const Input = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = React.useState("");

    const language = React.useContext(languageContext);
    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder={getStringByLanguage(language, 'guessInputPlaceholder')}
                    value={currentGuess}
                    onChange={event => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary"
                    type="submit"
                    onClick={e => handleSubmitButton(e, setCurrentGuess)}
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
