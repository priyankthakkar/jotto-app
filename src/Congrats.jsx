import React from "react";
import languageContext from "./contexts/languageContext";
import successContext from "./contexts/successContext";
import { getStringByLanguage } from "./helpers/strings";

/**
 * Function react component for congratulatory message.
 *
 * @name Congrats
 * @function
 * @returns {JSX.Element} Rendered component (or null if `success` props is false.
 */

const Congrats = () => {
  const language = React.useContext(languageContext);
  const [success] = successContext.useSuccess();

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

export default Congrats;
