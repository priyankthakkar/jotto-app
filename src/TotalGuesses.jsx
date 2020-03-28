import PropTypes from "prop-types";
import React from "react";

const TotalGuesses = ({ length }) => {
    return (
        <div data-test="component-total-guesses">
            <h5 data-test="total-guessed-words">Total Guesses: {length}</h5>
        </div>
    );
};

TotalGuesses.propTypes = {
    length: PropTypes.number.isRequired
};

export default TotalGuesses;
