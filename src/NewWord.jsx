import React from "react";
import { connect } from "react-redux";

export const UnconnectedNewWord = ({ success }) => {
    const content = success ? (
        <div data-test="component-new-word">
            <button
                data-test="new-word-button"
                type="button"
                className="btn btn-primary"
            >
                New Word
            </button>
        </div>
    ) : (
        <></>
    );

    return content;
};

const mapStateToProps = ({ success }) => ({
    success
});

export default connect(mapStateToProps)(UnconnectedNewWord);
