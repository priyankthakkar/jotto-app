import React from "react";

/**
 * Function react component for congratulatory message.
 *
 * @name Congrats
 * @function
 * @returns {JSX.Element} Rendered component (or null if `success` props is false.
 */

const Congrats = ({ success }) => {
    if (success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You've guessed the correct word!
                </span>
            </div>
        );
    } else {
        return <div data-test="component-congrats" />;
    }
};

export default Congrats;
