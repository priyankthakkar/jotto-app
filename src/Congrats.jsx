import PropTypes from "prop-types";
import React from "react";
import languageContext from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings";

/**
 * Function react component for congratulatory message.
 *
 * @name Congrats
 * @function
 * @returns {JSX.Element} Rendered component (or null if `success` props is false.
 */

const Congrats = ({ success }) => {
  const language = React.useContext(languageContext);

  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {getStringByLanguage(language, "congrats")}
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
